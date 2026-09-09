import NewsContent from '@/src/views/News/NewsContent';
import { humanizeSlug } from '@/src/data/buildSeoPageSchemas';
import { buildHreflang } from '@/src/data/hreflang';

export async function generateMetadata(props) {
  const params = await props.params;
  const { slug } = params;
  const title = humanizeSlug(slug);
  const ogTitle = `${title} | ArcisAI News`;
  const ogDescription = `ArcisAI news: ${title}`;

  return {
    title: `${title}`,
    description: `Read the ArcisAI news article: ${title}.`,
    alternates: { canonical: `https://arcisai.io/news/${slug}`, languages: buildHreflang(`https://arcisai.io/news/${slug}`) },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: `https://arcisai.io/news/${slug}`,
      type: 'article',
      images: [{ url: '/og/home.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      images: ['/og/home.jpg'],
    },
  };
}

export default async function NewsArticlePage(props) {
  const params = await props.params;
  return <NewsContent urlWords={params.slug} />;
}
