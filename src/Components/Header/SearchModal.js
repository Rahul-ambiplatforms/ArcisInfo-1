'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Link,
  Spinner,
  Icon,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

const MIN_QUERY_LENGTH = 2;
const DEBOUNCE_MS = 200;
const MAX_RESULTS = 8;

const CATEGORY_LABELS = {
  company: 'Company',
  product: 'Product',
  solution: 'Solution',
  support: 'Support',
  tool: 'Tool',
  event: 'Event',
  blog: 'Blog',
  legal: 'Legal',
  city: 'Location',
  state: 'Location',
  geo: 'Location',
  industry: 'Industry',
  compare: 'Comparison',
  resources: 'Resource',
  landing: 'Page',
};

// Search index (public/search-index.json) + fuse.js are both only loaded the
// first time a visitor opens search — never on initial page load — so
// on-site search adds zero weight to every other page view.
let indexPromise = null;
function loadSearchAssets() {
  if (!indexPromise) {
    indexPromise = Promise.all([
      fetch('/search-index.json').then((res) => {
        if (!res.ok) throw new Error(`search-index.json ${res.status}`);
        return res.json();
      }),
      import('fuse.js'),
    ]).then(([records, fuseModule]) => {
      const Fuse = fuseModule.default;
      const fuse = new Fuse(records, {
        keys: [
          { name: 'title', weight: 0.6 },
          { name: 'description', weight: 0.3 },
          { name: 'category', weight: 0.1 },
        ],
        threshold: 0.32,
        ignoreLocation: true,
        minMatchCharLength: 2,
      });
      return fuse;
    });
  }
  return indexPromise;
}

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState('idle'); // idle | loading | ready | error
  const fuseRef = useRef(null);
  const debounceRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    setStatus('loading');
    loadSearchAssets()
      .then((fuse) => {
        fuseRef.current = fuse;
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
    // Autofocus once the modal has finished mounting/animating in.
    const t = setTimeout(() => inputRef.current?.focus(), 80);
    return () => clearTimeout(t);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setResults([]);
      setStatus('idle');
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      if (!fuseRef.current || value.trim().length < MIN_QUERY_LENGTH) {
        setResults([]);
        return;
      }
      const hits = fuseRef.current.search(value.trim(), { limit: MAX_RESULTS });
      setResults(hits.map((h) => h.item));
    }, DEBOUNCE_MS);
  };

  const showEmptyState =
    status === 'ready' && query.trim().length >= MIN_QUERY_LENGTH && results.length === 0;
  const showHint = query.trim().length > 0 && query.trim().length < MIN_QUERY_LENGTH;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered scrollBehavior="inside">
      <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(4px)" />
      <ModalContent
        bg="black"
        border="1px solid"
        borderColor="whiteAlpha.200"
        borderRadius="md"
        mx={4}
        boxShadow="0 0 40px rgba(164, 255, 121, 0.08)"
      >
        <ModalCloseButton color="white" _hover={{ color: '#A4FF79' }} />
        <ModalBody px={{ base: 4, md: 6 }} pt={{ base: 5, md: 6 }} pb={6}>
          <InputGroup size="lg" mb={4}>
            <InputLeftElement pointerEvents="none" h="100%">
              <Icon as={SearchIcon} color="whiteAlpha.500" boxSize={4} />
            </InputLeftElement>
            <Input
              ref={inputRef}
              value={query}
              onChange={handleChange}
              placeholder="Search products, solutions, blog…"
              color="white"
              bg="whiteAlpha.50"
              border="1px solid"
              borderColor="whiteAlpha.300"
              _hover={{ borderColor: 'whiteAlpha.400' }}
              _focus={{ borderColor: '#A4FF79', boxShadow: '0 0 0 1px #A4FF79' }}
              _placeholder={{ color: 'whiteAlpha.500' }}
              fontSize="16px"
              autoComplete="off"
            />
          </InputGroup>

          <Box minH="80px" maxH="60vh" overflowY="auto">
            {status === 'loading' && query.trim().length >= MIN_QUERY_LENGTH && (
              <Stack align="center" py={8}>
                <Spinner color="#A4FF79" size="md" thickness="2px" />
              </Stack>
            )}

            {showHint && (
              <Text color="whiteAlpha.500" fontSize="14px" textAlign="center" py={8}>
                Keep typing to search…
              </Text>
            )}

            {showEmptyState && (
              <Stack align="center" py={10} spacing={2}>
                <Text color="white" fontSize="16px" fontWeight="500">
                  No results for &ldquo;{query.trim()}&rdquo;
                </Text>
                <Text color="whiteAlpha.500" fontSize="14px" textAlign="center">
                  Try a product name like &ldquo;NVR&rdquo; or &ldquo;camera&rdquo;, or browse{' '}
                  <Link as={NextLink} href="/products" color="#A4FF79" onClick={onClose}>
                    all products
                  </Link>
                  .
                </Text>
              </Stack>
            )}

            {results.length > 0 && (
              <Stack spacing={1}>
                {results.map((item) => (
                  <Link
                    key={item.path}
                    as={NextLink}
                    href={item.path}
                    onClick={onClose}
                    _hover={{ textDecoration: 'none', bg: 'whiteAlpha.100' }}
                    borderRadius="md"
                    px={3}
                    py={3}
                    display="block"
                  >
                    <Text
                      color="#A4FF79"
                      fontSize="11px"
                      fontWeight="600"
                      textTransform="uppercase"
                      letterSpacing="0.5px"
                      mb={1}
                    >
                      {CATEGORY_LABELS[item.category] || 'Page'}
                    </Text>
                    <Text color="white" fontSize="15px" fontWeight="500" noOfLines={1}>
                      {item.title}
                    </Text>
                    {item.description && (
                      <Text color="whiteAlpha.600" fontSize="13px" mt={1} noOfLines={2}>
                        {item.description}
                      </Text>
                    )}
                  </Link>
                ))}
              </Stack>
            )}

            {query.trim().length === 0 && status !== 'error' && (
              <Text color="whiteAlpha.500" fontSize="14px" textAlign="center" py={8}>
                Search across products, solutions, blog posts and more.
              </Text>
            )}

            {status === 'error' && (
              <Text color="whiteAlpha.600" fontSize="14px" textAlign="center" py={8}>
                Search is temporarily unavailable. Please try again in a moment.
              </Text>
            )}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
