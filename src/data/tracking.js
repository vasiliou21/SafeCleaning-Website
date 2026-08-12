// ── Conversion tracking — single source of truth ───────────────────────────
// Every tel:/mailto: link should carry data-track-location (and optionally
// data-track-phone). ConversionTracking.astro listens site-wide; fallbacks
// exist but explicit attrs are preferred so refactors don't break reporting.

/** @typedef {'mobile' | 'landline'} PhoneType */

/** Canonical GA4 link_location values — do not rename without updating GA4 reports. */
export const TRACK_LOC = {
  HEADER_DESKTOP: 'header_desktop',
  HEADER_MOBILE_MENU: 'header_mobile_menu',
  HERO_HOME: 'hero_home',
  HERO_SERVICE: 'hero_service',
  CTA_BAND: 'cta_band',
  CONTACT_PAGE: 'contact_page',
  FOOTER: 'footer',
  STICKY_BAR: 'sticky_bar',
  THANK_YOU: 'thank_you',
};

/**
 * Spread onto <a href="tel:…"> or <a href="mailto:…"> for durable analytics.
 * @param {string} location — one of TRACK_LOC.*
 * @param {{ phoneType?: PhoneType }} [options]
 */
export function trackContactAttrs(location, options = {}) {
  /** @type {Record<string, string>} */
  const attrs = { 'data-track-location': location };
  if (options.phoneType) attrs['data-track-phone'] = options.phoneType;
  return attrs;
}
