import MainProduct from '@/src/pages/Series/MainProduct';

export const metadata = {
  title: 'ArcisGPT | Gen AI Visual Intelligence & Smart Video Search',
  description:
    'ArcisGPT is a GenAI-powered video analytics platform enabling natural language search across surveillance footage. Ask questions in plain English to find incidents, track objects, and retrieve evidence instantly.',
  keywords: [
    'ArcisGPT', 'generative AI video analytics', 'visual intelligence',
    'natural language video search', 'AI video search', 'GenAI surveillance',
    'video evidence retrieval', 'LLM video analytics',
  ],
  alternates: { canonical: 'https://arcisai.io/arcisgpt' },
  openGraph: {
    title: 'ArcisGPT | Gen AI Visual Intelligence & Smart Video Search',
    description: 'Natural language video search across your surveillance footage with ArcisGPT.',
    url: 'https://arcisai.io/arcisgpt',
    images: [{ url: '/og/arcisgpt.jpg', width: 1200, height: 630 }],
  },
};

export default function ArcisGPTPage() {
  return <MainProduct seriesId="arcisgpt" />;
}
