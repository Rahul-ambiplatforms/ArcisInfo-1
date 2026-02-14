/**
 * Web Vitals Reporter
 *
 * Tracks Core Web Vitals (LCP, FID, CLS, FCP, TTFB) and reports to
 * Google Analytics 4 / GTM for monitoring in Search Console.
 *
 * Usage in index.js:
 *   import { reportWebVitals } from './components/SEO/WebVitals';
 *   reportWebVitals();
 */

const reportToAnalytics = ({ name, delta, value, id }) => {
  // Send to Google Analytics 4 via GTM dataLayer
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'web_vitals',
      web_vital_name: name,
      web_vital_value: Math.round(name === 'CLS' ? delta * 1000 : delta),
      web_vital_id: id,
      web_vital_rating: getRating(name, value),
    });
  }

  // Console log in development
  if (process.env.NODE_ENV === 'development') {
    const rating = getRating(name, value);
    const color =
      rating === 'good' ? '\x1b[32m' : rating === 'needs-improvement' ? '\x1b[33m' : '\x1b[31m';
    console.log(
      `${color}[Web Vital] ${name}: ${Math.round(value * 100) / 100} (${rating})\x1b[0m`
    );
  }
};

/**
 * Get rating based on Google's thresholds
 */
const getRating = (name, value) => {
  const thresholds = {
    LCP: [2500, 4000],
    FID: [100, 300],
    CLS: [0.1, 0.25],
    FCP: [1800, 3000],
    TTFB: [800, 1800],
    INP: [200, 500],
  };

  const [good, poor] = thresholds[name] || [0, 0];
  if (value <= good) return 'good';
  if (value <= poor) return 'needs-improvement';
  return 'poor';
};

/**
 * Initialize Web Vitals reporting
 */
export const reportWebVitals = (onPerfEntry = reportToAnalytics) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB, onINP }) => {
      onCLS(onPerfEntry);
      onFID && onFID(onPerfEntry);
      onINP && onINP(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
