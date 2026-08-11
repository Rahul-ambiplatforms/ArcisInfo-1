'use client';
import React, { useEffect, useMemo, useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
  Grid,
  GridItem,
  Flex,
  Select,
  Spinner,
  Button,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { getNews } from './news';

const IMAGE_BASE_URL =
  'https://res.cloudinary.com/dzs02ecai/image/upload/f_auto,q_auto,w_1200/v1761637680/upload_arcis';

const NEWS_PER_PAGE = 12;

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
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
}

function EmptyState() {
  return (
    <Box textAlign="center" py={10} px={6} mt={8} bg="white" borderRadius="24px">
      <Icon as={InfoIcon} boxSize="50px" color="#9678E1" />
      <Heading as="h2" size="lg" mt={6} mb={2} color="#000">
        No news yet
      </Heading>
      <Text color="gray.500">
        Check back soon for our latest announcements and press releases.
      </Text>
    </Box>
  );
}

export default function NewsGrid() {
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState({ years: [], categories: [] });
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [year, setYear] = useState('all');
  const [category, setCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    getNews({ page, limit: NEWS_PER_PAGE, year, category, status: 'published' })
      .then((res) => {
        if (cancelled) return;
        if (res?.status === 'success') {
          setItems(Array.isArray(res.data) ? res.data : []);
          setTotal(res.pagination?.total || 0);
          setTotalPages(res.pagination?.totalPages || 1);
          setFilters(res.filters || { years: [], categories: [] });
        }
      })
      .catch(() => {
        if (cancelled) return;
        setItems([]);
        setTotal(0);
        setTotalPages(1);
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [page, year, category]);

  const pageNumbers = useMemo(() => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else if (page <= 3) {
      pages.push(1, 2, 3, '...', totalPages);
    } else if (page >= totalPages - 2) {
      pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, '...', page - 1, page, page + 1, '...', totalPages);
    }
    return pages;
  }, [page, totalPages]);

  return (
    <Box m="1%" mt={{ base: '6%', md: '4%' }} mb="10%">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        align={{ base: 'flex-start', md: 'center' }}
        mb={6}
        gap={4}
      >
        <Heading
          as="h1"
          fontSize={{ base: '24px', md: '32px' }}
          fontWeight="600"
          color="#fff"
        >
          Showing{' '}
          <Box as="span" color="#9678E1">
            {total}
          </Box>{' '}
          News
        </Heading>

        <Flex gap={3} align="center" flexWrap="wrap">
          <Text color="#fff" fontWeight="500" fontSize="14px">
            Find By
          </Text>
          <Select
            value={year}
            onChange={(e) => {
              setPage(1);
              setYear(e.target.value);
            }}
            bg="white"
            borderRadius="8px"
            size="md"
            w={{ base: '140px', md: '160px' }}
            _focus={{ borderColor: '#9678E1', boxShadow: 'none' }}
          >
            <option value="all">All Years</option>
            {filters.years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </Select>
          <Select
            value={category}
            onChange={(e) => {
              setPage(1);
              setCategory(e.target.value);
            }}
            bg="white"
            borderRadius="8px"
            size="md"
            w={{ base: '140px', md: '160px' }}
            _focus={{ borderColor: '#9678E1', boxShadow: 'none' }}
          >
            <option value="all">All</option>
            {filters.categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </Select>
        </Flex>
      </Flex>

      {isLoading ? (
        <Flex justify="center" align="center" minH="240px">
          <Spinner size="xl" color="#9678E1" thickness="4px" />
        </Flex>
      ) : items.length > 0 ? (
        <Grid
          templateColumns={{
            base: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
          gap={6}
          mb="5%"
        >
          {items.map((post) => (
            <Link
              key={post.id}
              href={`/news/${post.urlWords}`}
              style={{ textDecoration: 'none' }}
            >
              <GridItem
                bg="white"
                borderRadius="24px"
                overflow="hidden"
                borderColor={borderColor}
                borderWidth="1px"
                display="flex"
                flexDirection="column"
                cursor="pointer"
                h="100%"
                transition="transform 0.2s ease, box-shadow 0.2s ease"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 24px rgba(150, 120, 225, 0.18)',
                }}
              >
                <Image
                  loading="lazy"
                  src={resolveImage(post.image)}
                  alt={post.title || 'News image'}
                  w="100%"
                  aspectRatio="16/9"
                  objectFit="cover"
                  borderTopRadius="24px"
                />
                <Box p={5} display="flex" flexDirection="column" flex="1">
                  <Text fontSize="14px" color="#696969" fontWeight="500" mb={2}>
                    {formatDate(post.publishedAt || post.createdAt)}
                  </Text>
                  <Heading
                    as="h2"
                    fontSize="18px"
                    fontWeight="700"
                    color="#000"
                    mb={3}
                    noOfLines={3}
                    minH="72px"
                  >
                    {post.title || 'Untitled news'}
                  </Heading>
                  <Box
                    width="18px"
                    height="2px"
                    bg="#9678E1"
                    borderRadius="2px"
                    mb={3}
                  />
                  {post.brief && (
                    <Text
                      fontSize="14px"
                      color="#696969"
                      fontWeight="500"
                      noOfLines={3}
                      mb={4}
                    >
                      {post.brief}
                    </Text>
                  )}
                  <Box flex="1" />
                  <Flex align="center" gap="2" mt={2}>
                    <Text fontSize="14px" fontWeight={600} color="#9678E1">
                      Read more
                    </Text>
                    <svg
                      width="18"
                      height="12"
                      viewBox="0 0 22 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.9612 12.9601C21.547 12.3743 21.547 11.4245 20.9612 10.8388L11.4153 1.29281C10.8295 0.707026 9.87974 0.707026 9.29395 1.29281C8.70816 1.8786 8.70816 2.82835 9.29395 3.41413L17.7792 11.8994L9.29395 20.3847C8.70816 20.9705 8.70816 21.9202 9.29395 22.506C9.87974 23.0918 10.8295 23.0918 11.4153 22.506L20.9612 12.9601ZM0.101562 13.3994L19.9006 13.3994V10.3994L0.101562 10.3994V13.3994Z"
                        fill="#9678E1"
                      />
                    </svg>
                  </Flex>
                </Box>
              </GridItem>
            </Link>
          ))}
        </Grid>
      ) : (
        <EmptyState />
      )}

      {!isLoading && items.length > 0 && totalPages > 1 && (
        <Flex justify="center" align="center" gap={2} mt={6}>
          <Button
            size="sm"
            variant="outline"
            borderColor="#9678E1"
            bg="white"
            color="#9678E1"
            _hover={{ bg: '#ded5f5ff' }}
            onClick={() =>
              setPage((p) => (p === 1 ? totalPages : p - 1))
            }
            minW={8}
            px={0}
          >
            <Box as="span" fontSize="20px">{'<'}</Box>
          </Button>
          {pageNumbers.map((p, idx) =>
            p === '...' ? (
              <Button
                key={`e-${idx}`}
                size="sm"
                variant="outline"
                borderColor="#9678E1"
                bg="white"
                color="#9678E1"
                isDisabled
                minW={8}
                px={0}
              >
                ...
              </Button>
            ) : (
              <Button
                key={p}
                size="sm"
                variant="outline"
                borderColor="#9678E1"
                bg={p === page ? '#9678E1' : 'white'}
                color={p === page ? 'white' : '#9678E1'}
                fontWeight={p === page ? 'bold' : 'normal'}
                _hover={p === page ? {} : { bg: '#ded5f5ff' }}
                onClick={() => setPage(p)}
                minW={8}
                px={0}
              >
                {p}
              </Button>
            ),
          )}
          <Button
            size="sm"
            variant="outline"
            borderColor="#9678E1"
            bg="white"
            color="#9678E1"
            _hover={{ bg: '#ded5f5ff' }}
            onClick={() =>
              setPage((p) => (p === totalPages ? 1 : p + 1))
            }
            minW={8}
            px={0}
          >
            <Box as="span" fontSize="20px">{'>'}</Box>
          </Button>
        </Flex>
      )}
    </Box>
  );
}
