import Solutions from '@/src/pages/Solution/Solutions';

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

export async function generateMetadata({ params }) {
  const { solutionId } = params;
  const meta = SOLUTION_META[solutionId] || {
    title: `${solutionId.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())} Surveillance Solutions | ArcisAI`,
    description: `AI surveillance solutions for ${solutionId.replace(/-/g, ' ')} — edge AI cameras, cloud VMS, and smart analytics from ArcisAI.`,
  };

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `https://arcisai.io/solution/${solutionId}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://arcisai.io/solution/${solutionId}`,
      images: [{ url: '/og/solutions.jpg', width: 1200, height: 630 }],
    },
  };
}

export default function SolutionPage({ params }) {
  return <Solutions solutionId={params.solutionId} />;
}
