import MainProduct from '@/src/pages/Series/MainProduct';

export const metadata = {
  title: 'ArcisAI Bridge Device (ABD) | Legacy Camera Converter to AI',
  description:
    'Convert any ONVIF camera to a smart AI surveillance device with the ArcisAI Bridge Device (ABD). No camera replacement needed — connect legacy cameras to cloud and edge AI instantly.',
  keywords: [
    'bridge device', 'camera converter', 'ONVIF compatible',
    'legacy camera upgrade', 'retrofit surveillance', 'ABD ArcisAI',
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
