'use client';

// Custom emotion SSR-insertion hook for the Next.js App Router.
//
// Why this exists instead of using @chakra-ui/next-js's `CacheProvider` /
// `useEmotionCache`: that package's `CacheProvider` export is a no-op
// passthrough in the version pinned here (it stopped wiring up the cache it
// creates), and its `useEmotionCache` hook — while it does the right thing
// conceptually (collect emotion's inserted <style> rules and flush them into
// <head> via Next's `useServerInsertedHTML`, instead of leaving Chakra's
// runtime emotion styles scattered as raw <style> tags directly inside <div>/
// <button>/<a>/<nav>/<body>, which is invalid HTML and was flagged sitewide
// by the W3C Nu validator) — re-emits its ENTIRE accumulated cache on every
// flush rather than tracking what's already been sent. Next's app router can
// call the `useServerInsertedHTML` callback once per streamed chunk, so on a
// content-heavy page that turned into 16+ duplicate ~130KB blocks (one per
// flush), ballooning a ~260KB page into a ~2.4MB one.
//
// This hook keeps its own "already flushed" bookkeeping (`inserted` name
// list, reset on each flush) so every flush only ever emits the rules that
// are new since the last one — the standard pattern from Emotion's own
// Next.js App Router SSR recipe.

import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { useState } from 'react';

export function useNextEmotionCache(options) {
  const [cache] = useState(() => {
    const c = createCache({ key: 'css', prepend: true, ...options });
    c.compat = true;
    const prevInsert = c.insert;
    let pendingNames = [];
    c.insert = (...args) => {
      const serialized = args[1];
      if (c.inserted[serialized.name] === undefined) {
        pendingNames.push(serialized.name);
      }
      return prevInsert(...args);
    };
    c.__flushPending = () => {
      const names = pendingNames;
      pendingNames = [];
      return names;
    };
    return c;
  });

  useServerInsertedHTML(() => {
    const names = cache.__flushPending();
    if (names.length === 0) return null;
    let styles = '';
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return cache;
}
