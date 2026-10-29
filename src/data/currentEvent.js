// The trade show currently promoted on the site: the homepage header banner
// (src/Components/Header/Event.js), the booking popup (src/views/Events/Event.js)
// and the "Upcoming" card on /event (src/views/EventPage/Event.js) all read
// from here. Swap these values when the next expo comes around.

export const EVENT_NAME = "IFSEC India 2026";
export const EVENT_DATES = ["3rd Dec 2026", "4th Dec 2026", "5th Dec 2026"];
export const EVENT_BOOTH = "Booth E-10";
export const EVENT_VENUE = "Bharat Mandapam, New Delhi";
export const EVENT_POSTER = "/images/event_popup_ifsec_2026.webp";
export const EVENT_POSTER_ALT =
  "ArcisAI at IFSEC India 2026, Bharat Mandapam, New Delhi, Booth E-10";

// End of the last show day, India time. After this the banner, the popup and
// the /event card switch themselves off, so nobody has to remember to.
export const EVENT_END = new Date("2026-12-05T23:59:59+05:30");

export const isEventLive = (now = new Date()) => now <= EVENT_END;
