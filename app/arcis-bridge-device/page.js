import MainProduct from '@/src/views/Series/MainProduct';
import { buildHreflang } from '@/src/data/hreflang';

export const metadata = {
  title: 'ArcisAI Bridge Device (ABD) | Legacy Camera Converter to AI',
  description:
    'Convert any ONVIF camera to a smart AI surveillance device with the ArcisAI Bridge Device (ABD).',
  // SEO fix (2026-09-30, SEO-018): removed obsolete meta-keywords tag.
  alternates: { canonical: 'https://arcisai.io/arcis-bridge-device', languages: buildHreflang('https://arcisai.io/arcis-bridge-device') },
  openGraph: {
    title: 'ArcisAI Bridge Device (ABD) | Legacy Camera Converter to AI',
    description: 'Convert any ONVIF camera to smart AI with the ArcisAI Bridge Device. No replacement needed.',
    url: 'https://arcisai.io/arcis-bridge-device',
    images: [{ url: '/og/bridge-device.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ArcisAI Bridge Device (ABD) | Legacy Camera Converter to AI',
    description: 'Convert any ONVIF camera to smart AI with the ArcisAI Bridge Device. No replacement needed.',
    images: ['/og/bridge-device.jpg'],
  },
};

export default function BridgeDevicePage() {
  return <MainProduct seriesId="arcis-bridge-device" />;
}
