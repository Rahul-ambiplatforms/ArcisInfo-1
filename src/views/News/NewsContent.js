'use client';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  Spinner,
  Button,
} from '@chakra-ui/react';
import { useParams, useRouter } from 'next/navigation';
import { getNewsByUrlWords } from './news';

const IMAGE_BASE_URL =
  'https://res.cloudinary.com/dzs02ecai/image/upload/f_auto,q_auto,w_1920/v1761637680/upload_arcis';

function resolveImage(image) {
  if (!image) return '/images/ArcisAi.webp';
  if (/^https?:\/\//i.test(image) || image.startsWith('data:')) return image;
  return `${IMAGE_BASE_URL}/${image}`;
}

function formatDate(value) {
  if (!value) return '';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const NewsContent = ({ urlWords: urlWordsProp }) => {
  const routerParams = useParams();
  const router = useRouter();
  const urlWords = urlWordsProp ?? routerParams?.slug;
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await getNewsByUrlWords(urlWords);
        if (cancelled) return;
        if (res?.status === 'success') {
          setNews(res.data);
        } else {
          setError(res?.message || 'News not found');
        }
      } catch (e) {
        if (!cancelled) setError('Unable to load this news article.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    if (urlWords) load();
    return () => {
      cancelled = true;
    };
  }, [urlWords]);

  if (loading) {
    return (
      <Box p={10} display="flex" justifyContent="center">
        <Spinner size="xl" color="#9678E1" thickness="4px" />
      </Box>
    );
  }

  if (error || !news) {
    return (
      <Box p={10} textAlign="center" color="red.300">
        <Text mb={4}>{error || 'News not found'}</Text>
        <Button
          bg="#9678E1"
          color="white"
          _hover={{ bg: '#8266C9' }}
          onClick={() => router.push('/news')}
        >
          Back to all news
        </Button>
      </Box>
    );
  }

  const image = resolveImage(news.image);
  const displayDate = formatDate(news.publishedAt || news.createdAt);

  return (
    <Box mt={{ base: '6%', md: '4%' }} mb="6%" px={{ base: '4%', md: '2%' }}>
      {/* The <Helmet> block that used to sit here was inert: HelmetProvider is
          mounted in the client-only app/providers.js tree, so nothing Helmet
          renders reaches the server HTML. Its title/description/canonical are
          already emitted by the route's `metadata` export. */}

      <Box maxW="900px" mx="auto">
        <Button
          variant="ghost"
          color="#fff"
          mb={4}
          _hover={{ color: '#9678E1' }}
          onClick={() => router.push('/news')}
          leftIcon={
            <Box as="span" transform="rotate(180deg)" display="inline-block">
              <svg width="16" height="12" viewBox="0 0 22 23" fill="none">
                <path
                  d="M20.9612 12.9601C21.547 12.3743 21.547 11.4245 20.9612 10.8388L11.4153 1.29281C10.8295 0.707026 9.87974 0.707026 9.29395 1.29281C8.70816 1.8786 8.70816 2.82835 9.29395 3.41413L17.7792 11.8994L9.29395 20.3847C8.70816 20.9705 8.70816 21.9202 9.29395 22.506C9.87974 23.0918 10.8295 23.0918 11.4153 22.506L20.9612 12.9601ZM0.101562 13.3994L19.9006 13.3994V10.3994L0.101562 10.3994V13.3994Z"
                  fill="#fff"
                />
              </svg>
            </Box>
          }
        >
          Back to all news
        </Button>

        <Heading
          as="h1"
          fontSize={{ base: '28px', md: '40px' }}
          color="#fff"
          mb={4}
        >
          {news.title}
        </Heading>

        <Flex gap={3} mb={6} flexWrap="wrap">
          {displayDate && (
            <Box
              bg="white"
              borderRadius="15px"
              px={4}
              py={2}
              fontSize="14px"
              fontWeight="500"
              color="black"
            >
              {displayDate}
            </Box>
          )}
          {news.category && (
            <Box
              bg="#9678E1"
              borderRadius="15px"
              px={4}
              py={2}
              fontSize="14px"
              fontWeight="500"
              color="white"
            >
              {news.category}
            </Box>
          )}
        </Flex>

        <Box mb={6} borderRadius="24px" overflow="hidden">
          <Image
            loading="lazy"
            src={image}
            alt={news.title}
            w="100%"
            h="auto"
            objectFit="cover"
          />
        </Box>

        <Box
          bg="white"
          borderRadius="24px"
          p={{ base: 5, md: 8 }}
          color="#222"
        >
          {news.brief && (
            <Text fontSize="18px" fontWeight="600" mb={4} color="#333">
              {news.brief}
            </Text>
          )}
          {news.content && (
            <Box
              fontSize="16px"
              lineHeight="1.7"
              whiteSpace="pre-wrap"
              color="#444"
            >
              {news.content}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default NewsContent;
