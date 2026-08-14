import Solutions from '@/src/views/Solution/Solutions';
import { getSolutionSEO } from '@/src/views/Solution/Data/SEOContent';

const SOLUTION_META = {
  'edge-ai': {
    title: 'Edge AI Surveillance Solutions | ArcisAI',
    description: 'Enterprise edge AI surveillance solutions with on-device processing, face recognition, ANPR, and crowd analytics. Real-time insights without cloud dependency.',
  },
  'corporate': {
    title: 'Corporate Office Surveillance | ArcisAI Solutions',
    description: 'AI surveillance for corporate offices — access control, visitor management, perimeter security, and employee safety with edge AI cameras.',
  },
  'retail': {
    title: 'Retail Surveillance & Analytics | ArcisAI Solutions',
    description: 'AI-powered retail surveillance with footfall analytics, queue management, theft detection, and customer behavior insights.',
  },
  'banking': {
    title: 'Banking & Finance Surveillance | ArcisAI Solutions',
    description: 'Secure banking surveillance with ATM monitoring, vault security, ANPR, and AI-based fraud detection cameras.',
  },
  'smart-city': {
    title: 'Smart City Surveillance | ArcisAI Solutions',
    description: 'Smart city AI surveillance with crowd analytics, traffic monitoring, ANPR, and emergency response integration.',
  },
  'healthcare': {
    title: 'Healthcare Surveillance | ArcisAI Solutions',
    description: 'Healthcare facility surveillance with patient safety monitoring, PPE compliance, and restricted area access control.',
  },
  'manufacturing': {
    title: 'Manufacturing & Factory Surveillance | ArcisAI Solutions',
    description: 'Industrial AI surveillance for manufacturing — PPE compliance, equipment monitoring, fire detection, and worker safety analytics.',
  },
  'logistics': {
    title: 'Logistics & Warehouse Surveillance | ArcisAI Solutions',
    description: 'Logistics surveillance with inventory monitoring, dock security, vehicle tracking, and ANPR for warehouses and distribution centers.',
  },
};

// Prerender every solution page. Without this the route had no static output,
// so Next rendered it per-request and sent
// `Cache-Control: private, no-cache, no-store` — measured on the live
// deployment as a 1,334 ms TTFB with `cf-cache-status: BYPASS`, i.e. Cloudflare
// caching nothing. Prerendering makes the HTML cacheable at the edge.
// dynamicParams stays at its default (true), so any id not listed here still
// renders on demand exactly as before.
export const revalidate = 86400;

export function generateStaticParams() {
  return Object.keys(SOLUTION_META).map((solutionId) => ({ solutionId }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  const { solutionId } = params;

  // Prefer the keyword-optimized copy from SEOContent.js (this is what
  // react-helmet-async used to inject client-side). Fall back to the inline
  // SOLUTION_META map for solutions that don't have a SEOContent entry yet,
  // and finally to a generic computed title.
  const solutionSEO = getSolutionSEO(solutionId);
  const fallback = SOLUTION_META[solutionId] || {
    title: `${solutionId.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())} Surveillance Solutions | ArcisAI`,
    description: `AI surveillance solutions for ${solutionId.replace(/-/g, ' ')} — edge AI cameras, cloud VMS, and smart analytics from ArcisAI.`,
  };

  const title = solutionSEO?.metatitle ?? fallback.title;
  const description = solutionSEO?.metadescription ?? fallback.description;
  const canonical =
    solutionSEO?.canonical ?? `https://arcisai.io/solution/${solutionId}`;
  const ogImage = solutionSEO?.ogimage ?? '/og/solutions.jpg';

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@arcisai',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function SolutionPage(props) {
  const params = await props.params;
  return <Solutions solutionId={params.solutionId} />;
}
