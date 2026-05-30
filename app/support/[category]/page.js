import { notFound } from 'next/navigation';
import SupportCategory from '@/src/views/Support/SupportCategory';
import { supportCategories, getCategoryBySlug } from '@/src/views/Support/supportData';

export function generateStaticParams() {
  return supportCategories.map((c) => ({ category: c.slug }));
}

export function generateMetadata({ params }) {
  const cat = getCategoryBySlug(params.category);

  if (!cat) {
    return {
      title: 'Support Topic Not Found | ArcisAI',
      description: 'The requested support topic could not be found.',
    };
  }

  const title = `${cat.title} — ArcisAI Support`;
  const description = `${cat.description}. Browse troubleshooting articles and step-by-step guides for ${cat.title.toLowerCase()} in ArcisAI cameras and cloud VMS.`;
  const canonical = `https://arcisai.io/support/${cat.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [{ url: '/og/faq.jpg', width: 1200, height: 630 }],
    },
  };
}

export default function SupportCategoryPage({ params }) {
  const cat = getCategoryBySlug(params.category);
  if (!cat) notFound();
  return <SupportCategory category={cat} />;
}
