import MainProduct from '@/src/views/Series/MainProduct';

export const metadata = {
  title: 'ArcisAI Bridge Device (ABD) | Legacy Camera Converter to AI',
  description:
    'Convert any ONVIF camera to a smart AI surveillance device with the ArcisAI Bridge Device (ABD).',
  keywords: [
    'convert ONVIF camera to AI', 'add AI to existing CCTV India',
    'retrofit AI to existing CCTV', 'upgrade legacy CCTV to AI India',
    'AI gateway for CCTV', 'ONVIF to AI converter', 'bridge device',
    'camera converter', 'legacy camera upgrade', 'ABD ArcisAI',
  ],
  alternates: { canonical: 'https://arcisai.io/arcis-bridge-device' },
  openGraph: {
    title: 'ArcisAI Bridge Device (ABD) | Legacy Camera Converter to AI',
    description: 'Convert any ONVIF camera to smart AI with the ArcisAI Bridge Device. No replacement needed.',
    url: 'https://arcisai.io/arcis-bridge-device',
    images: [{ url: '/og/bridge-device.jpg', width: 1200, height: 630 }],
  },
};

export default function BridgeDevicePage() {
  return <MainProduct seriesId="arcis-bridge-device" />;
}
