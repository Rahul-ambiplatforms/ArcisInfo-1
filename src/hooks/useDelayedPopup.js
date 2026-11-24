"use client";

import { useEffect, useState, useCallback } from "react";

// Opens a popup only when the visitor has shown interest:
//  - after `delayMs` (default 10 s), OR
//  - when they scroll past `scrollRatio` of the page (default 50 %),
//  whichever comes first.
// Also: shows once per visitor then stays hidden for `snoozeDays` (default 7);
// never shows after `endDate`; safe when localStorage is blocked.
// SEO: nothing renders on first paint, so the popup does not cover content on
// page load (Google "intrusive interstitials" guideline) and does not affect
// LCP / CLS.
export function useDelayedPopup({
  storageKey,
  delayMs = 10000,
  scrollRatio = 0.5,
  snoozeDays = 7,
  endDate,
  enabled = true,
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    if (endDate && Date.now() > new Date(endDate).getTime()) return;

    try {
      const last = window.localStorage.getItem(storageKey);
      if (last && Date.now() - Number(last) < snoozeDays * 86400000) return;
    } catch {
      /* storage blocked — still allow one show this visit */
    }

    let done = false;

    const show = () => {
      if (done) return;
      done = true;
      setOpen(true);
      try {
        window.localStorage.setItem(storageKey, String(Date.now()));
      } catch {
        /* ignore */
      }
      cleanup();
    };

    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = (doc.scrollTop + window.innerHeight) / doc.scrollHeight;
      if (scrolled >= scrollRatio) show();
    };

    const timer = window.setTimeout(show, delayMs);
    window.addEventListener("scroll", onScroll, { passive: true });

    function cleanup() {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    }

    return cleanup;
  }, [storageKey, delayMs, scrollRatio, snoozeDays, endDate, enabled]);

  const close = useCallback(() => setOpen(false), []);

  return { open, close };
}
