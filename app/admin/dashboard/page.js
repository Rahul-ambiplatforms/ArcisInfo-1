export const dynamic = 'force-dynamic';
import Dashboard from '@/src/ArcisAdmin/pages/Dashboard/Dashboard';

export const metadata = {
  title: 'Dashboard | ArcisAI Admin',
  robots: { index: false, follow: false },
};

export default function AdminDashboardPage() {
  return <Dashboard />;
}
