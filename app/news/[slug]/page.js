import NewsContent from '@/src/views/News/NewsContent';

export async function generateMetadata(props) {
  const params = await props.params;
  const { slug } = params;
  const title = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    title: `${title} | ArcisAI News`,
    description: `Read the ArcisAI news article: ${title}.`,
    alternates: { canonical: `https://arcisai.io/news/${slug}` },
    openGraph: {
      title: `${title} | ArcisAI News`,
      description: `ArcisAI news: ${title}`,
      url: `https://arcisai.io/news/${slug}`,
      type: 'article',
      images: [{ url: '/og/home.jpg', width: 1200, height: 630 }],
    },
  };
}

export default async function NewsArticlePage(props) {
  const params = await props.params;
  return <NewsContent urlWords={params.slug} />;
}
