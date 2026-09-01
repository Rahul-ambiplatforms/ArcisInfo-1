import MainProduct from '@/src/views/Series/MainProduct';

export const metadata = {
  title: 'ArcisGPT | Conversational AI for CCTV — Talk to Your Footage',
  description:
    'ArcisGPT is India’s conversational AI for surveillance — search your CCTV footage in plain language.',
  keywords: [
    'ArcisGPT', 'conversational AI CCTV', 'conversational AI for surveillance India',
    'talk to your CCTV footage', 'natural language video search India', 'AI video search India',
    'generative AI CCTV India', 'GenAI surveillance', 'AI footage search', 'video summarization AI',
    'visual intelligence', 'video evidence retrieval', 'LLM video analytics',
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
