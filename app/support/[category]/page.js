import { notFound } from 'next/navigation';
import SupportCategory from '@/src/views/Support/SupportCategory';
import SeoPageSchemaScripts from '@/src/Components/SEO/SeoPageSchemaScripts';
import { supportCategories, getCategoryBySlug } from '@/src/views/Support/supportData';
import { buildHreflang } from '@/src/data/hreflang';
import { SITE, ORGANIZATION_ID, WEBSITE_ID } from '@/src/data/buildSeoPageSchemas';

// SEO audit fix (2026-09-19, technical SEO pass): every one of these pages
// renders real, substantial FAQ content (supportData.js) but emitted zero
// structured data — neither this page nor the /support hub had any FAQPage
// markup, so none of it was visible to Google's rich-result parser or to
// AI/GEO crawlers reading JSON-LD. `a` is string OR string[] in the source
// data (SupportCategory.js renders arrays as a bullet list); joined into one
// answer string here the same way SupportHub.js already does for its search
// index, so the schema can't say something the visible page doesn't.
function buildFaqSchema(cat) {
  const canonical = `${SITE}/support/${cat.slug}`;
  const questions = [];
  cat.subtopics.forEach((subtopic) => {
    (subtopic.faqs || []).forEach((faq) => {
      const answer = Array.isArray(faq.a) ? faq.a.join(' ') : faq.a || '';
      if (faq.q && answer) {
        questions.push({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        });
      }
    });
  });

return [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${canonical}#faq`,
    url: canonical,
    name: `${cat.title} — ArcisAI Support`,
    inLanguage: 'en-IN',
    isPartOf: { '@id': WEBSITE_ID },
    publisher: { '@id': ORGANIZATION_ID },
    mainEntity: questions,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${canonical}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Support', item: `${SITE}/support` },
      { '@type': 'ListItem', position: 3, name: cat.title, item: canonical },
      ],
  },
  ];
}

export function generateStaticParams() {
  return supportCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  const cat = getCategoryBySlug(params.category);

if (!cat) {
  return {
    title: 'Support Topic Not Found',
    description: 'The requested support topic could not be found.',
  };
}

const title = `${cat.title} — ArcisAI Support`;
  const description = `${cat.description}. Browse troubleshooting articles and step-by-step guides for ${cat.title.toLowerCase()} in ArcisAI cameras and cloud VMS.`;
  const canonical = `https://arcisai.io/support/${cat.slug}`;

return {
  title,
  description,
  alternates: { canonical, languages: buildHreflang(canonical) },
  openGraph: {
    title,
    description,
    url: canonical,
    images: [{ url: '/og/faq.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og/faq.jpg'],
  },
};
}

export default async function SupportCategoryPage(props) {
  const params = await props.params;
  const cat = getCategoryBySlug(params.category);
  if (!cat) notFound();
  const schemas = buildFaqSchema(cat);
  return (
    <>
    <SeoPageSchemaScripts schemas={schemas} />
    <SupportCategory category={cat} />
    </>
  );
}
