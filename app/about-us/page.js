import AboutUs from '@/src/views/AboutUs/AboutUs';
import { buildHreflang } from '@/src/data/hreflang';

export const metadata = {
  // SEO fix (2026-11-14, ARC-006): 927 impressions / 2 clicks at pos 3.4 in 28d,
  // mostly brand + "Adiance Technologies" searches. `absolute` avoids the
  // root "%s | ArcisAI" template doubling the brand.
  title: { absolute: 'About ArcisAI | AI CCTV Brand of Adiance Technologies' },
  description:
    'ArcisAI is the AI CCTV brand of Adiance Technologies. Learn what we build – AI cameras, video management and ArcisGPT – and how to contact our team.',
  // SEO fix (2026-09-30, SEO-018): removed obsolete meta-keywords tag.
  alternates: { canonical: 'https://arcisai.io/about-us', languages: buildHreflang('https://arcisai.io/about-us') },
  openGraph: {
    title: 'About ArcisAI | Adiance Technologies',
    description: 'Learn what ArcisAI builds, how its AI CCTV cameras and video-management software fit together, and how to contact the team.',
    url: 'https://arcisai.io/about-us',
    images: [{ url: '/og/about.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About ArcisAI | Adiance Technologies',
    description: 'Learn what ArcisAI builds, how its AI CCTV cameras and video-management software fit together, and how to contact the team.',
    images: ['/og/about.jpg'],
  },
};

export default function AboutUsPage() {
  return <AboutUs />;
}
