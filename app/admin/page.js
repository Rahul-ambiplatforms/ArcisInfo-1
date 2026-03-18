export const dynamic = 'force-dynamic';
import LoginDash from '@/src/ArcisAdmin/pages/LoginDash';

export const metadata = {
  title: 'Admin Login | ArcisAI',
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return <LoginDash />;
}
