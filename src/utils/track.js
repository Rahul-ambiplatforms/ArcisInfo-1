// Conversion tracking helper.
//
// Context (2026-09-16): the site loads GTM (GTM-T5CXTDPH) sitewide from
// app/layout.js, and GTM is the only thing connected to GA4 (G-FGCHHSNZ7D).
// Nobody on this project has access to that GTM container, so no tag has been
// configured to relay dataLayer pushes into GA4 — a bare dataLayer.push()
// therefore reaches nothing measurable.
//
// The FSIE and Jalandhar Warriors pages already worked around this by loading
// gtag.js themselves and calling window.gtag directly, bypassing GTM. This file
// is that same workaround extracted so every page can use it, rather than each
// one reimplementing it. Pair it with <GA4Direct /> on the route, which is what
// puts window.gtag on the page.
//
// Both paths fire deliberately: the dataLayer push keeps working if and when
// someone does gain GTM access and configures a relay, and the direct gtag call
// makes the event measurable today. GA4 de-duplicates by event, so a future
// relay would not double-count these.

/**
 * Fire a conversion event.
 * @param {string} event - GA4 event name, e.g. 'generate_lead' or 'cta_click'.
 * @param {Record<string, unknown>} [params] - Event parameters.
 */
export function track(event, params = {}) {
  if (typeof window === 'undefined') return;

  const payload = { event, ...params };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  // Safe no-op until gtag.js has loaded; <GA4Direct /> loads it afterInteractive.
  if (typeof window.gtag === 'function') {
    window.gtag('event', event, params);
  }
}

/**
 * A completed enquiry — the event that actually represents a lead.
 * @param {string} source - Which form or page produced it, e.g. 'contact-us'.
 * @param {Record<string, unknown>} [params]
 */
export function trackLead(source, params = {}) {
  track('generate_lead', { lead_source: source, ...params });
}

/**
 * A click on a conversion path that leaves the site (WhatsApp, mailto, tel).
 * These never reach a thank-you page, so without this they are invisible —
 * which on the partner and distributor pages means every enquiry route is
 * currently unmeasured, since those pages have no on-page form at all.
 * @param {string} channel - 'whatsapp' | 'email' | 'phone'
 * @param {string} location - Which page the click happened on.
 * @param {Record<string, unknown>} [params]
 */
export function trackCtaClick(channel, location, params = {}) {
  track('cta_click', { cta_channel: channel, cta_location: location, ...params });
}
