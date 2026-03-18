import NotFound from '@/src/pages/NotFound';

export const metadata = {
  title: '404 - Page Not Found | ArcisAI',
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: false },
};

export default function NotFoundPage() {
  return <NotFound />;
}
