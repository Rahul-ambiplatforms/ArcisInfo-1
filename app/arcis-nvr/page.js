import MainProduct from '@/src/pages/Series/MainProduct';

export const metadata = {
  title: 'ArcisAI NVR | AI-Powered Network Video Recorder',
  description:
    'ArcisAI NVR delivers intelligent video recording with edge AI capabilities, multi-camera support, and cloud backup for enterprise and SMB surveillance deployments.',
  keywords: [
    'ArcisAI NVR', 'network video recorder', 'AI NVR',
    'multi-camera recorder', 'enterprise NVR',
  ],
  alternates: { canonical: 'https://arcisai.io/arcis-nvr' },
  openGraph: {
    title: 'ArcisAI NVR | AI-Powered Network Video Recorder',
    description: 'Intelligent NVR with edge AI, multi-camera support, and cloud backup.',
    url: 'https://arcisai.io/arcis-nvr',
    images: [{ url: '/og/nvr.jpg', width: 1200, height: 630 }],
  },
};

export default function NVRPage() {
  return <MainProduct seriesId="arcis-nvr" />;
}
