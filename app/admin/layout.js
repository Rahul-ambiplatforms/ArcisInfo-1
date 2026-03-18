/**
 * Admin layout — no public Header/Footer.
 * All admin pages are noindex/nofollow.
 */
export const metadata = {
  title: { default: 'Admin | ArcisAI', template: '%s | ArcisAI Admin' },
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }) {
  return <>{children}</>;
}
