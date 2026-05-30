'use client';
import React, { useMemo, useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
  Flex,
  Tag,
  IconButton,
} from '@chakra-ui/react';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import {
  FiVideoOff,
  FiCamera,
  FiFilm,
  FiCloud,
  FiWifi,
  FiSmartphone,
  FiBell,
  FiTool,
  FiDownloadCloud,
  FiShield,
  FiHelpCircle,
  FiArrowRight,
  FiMail,
  FiMessageCircle,
} from 'react-icons/fi';
import { supportCategories, BRAND_GREEN } from './supportData';
import CustomButton from '../../Components/CustomButton';

const iconMap = {
  FiVideoOff,
  FiCamera,
  FiFilm,
  FiCloud,
  FiWifi,
  FiSmartphone,
  FiBell,
  FiTool,
  FiDownloadCloud,
  FiShield,
  FiHelpCircle,
};

/* ---------- Search helpers ---------- */

const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const tokenize = (q) =>
  q
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

// Flat index of every FAQ across every category — built once per page load.
// Each entry carries enough context to render a result card and deep-link to
// the right accordion item on the category page.
const buildFaqIndex = () => {
  const index = [];
  supportCategories.forEach((category) => {
    (category.subtopics || []).forEach((subtopic, sIdx) => {
      (subtopic.faqs || []).forEach((faq, fIdx) => {
        const answerText = Array.isArray(faq.a)
          ? faq.a.join(' ')
          : faq.a || '';
        index.push({
          id: `${category.slug}-st${sIdx}-q${fIdx}`,
          anchor: `st${sIdx}-q${fIdx}`,
          category,
          subtopicTitle: subtopic.title,
          question: faq.q,
          answer: faq.a,
          answerText,
          searchText: `${faq.q} ${answerText} ${subtopic.title}`.toLowerCase(),
        });
      });
    });
  });
  return index;
};

// Build a short context snippet around the first matched token.
const buildSnippet = (text, tokens, maxLen = 160) => {
  if (!text) return '';
  if (!tokens.length) return text.slice(0, maxLen) + (text.length > maxLen ? '…' : '');

  const lower = text.toLowerCase();
  let firstHit = -1;
  for (const t of tokens) {
    const i = lower.indexOf(t);
    if (i !== -1 && (firstHit === -1 || i < firstHit)) firstHit = i;
  }
  if (firstHit === -1) return text.slice(0, maxLen) + (text.length > maxLen ? '…' : '');

  const start = Math.max(0, firstHit - 40);
  const end = Math.min(text.length, start + maxLen);
  return (start > 0 ? '… ' : '') + text.slice(start, end) + (end < text.length ? ' …' : '');
};

const Highlight = ({ text, tokens }) => {
  if (!tokens.length || !text) return text || null;
  const regex = new RegExp(`(${tokens.map(escapeRegex).join('|')})`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, i) => {
    const isHit = tokens.some((t) => part.toLowerCase() === t.toLowerCase());
    return isHit ? (
      <Box
        as="mark"
        key={i}
        bg={`${BRAND_GREEN}30`}
        color={BRAND_GREEN}
        px="2px"
        borderRadius="2px"
        fontWeight="600"
      >
        {part}
      </Box>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    );
  });
};

/* ---------- Cards ---------- */

const SupportCard = ({ category }) => {
  const IconComp = iconMap[category.iconName] || FiHelpCircle;
  return (
    <Box
      as={NextLink}
      href={`/support/${category.slug}`}
      role="group"
      position="relative"
      bg="rgba(255, 255, 255, 0.03)"
      border="1px solid"
      borderColor="whiteAlpha.100"
      borderRadius="2xl"
      p={6}
      transition="all 0.25s ease"
      overflow="hidden"
      _hover={{
        borderColor: category.accent,
        transform: 'translateY(-4px)',
        boxShadow: `0 12px 32px -12px ${category.accent}55`,
        bg: 'rgba(255, 255, 255, 0.05)',
      }}
    >
      <Box
        position="absolute"
        top="-30px"
        right="-30px"
        w="120px"
        h="120px"
        borderRadius="full"
        bg={category.accentSoft}
        filter="blur(30px)"
        opacity={0}
        transition="opacity 0.3s ease"
        _groupHover={{ opacity: 1 }}
        pointerEvents="none"
      />

      <VStack align="flex-start" spacing={4} position="relative">
        <Flex
          w="52px"
          h="52px"
          borderRadius="xl"
          bg={category.accentSoft}
          align="center"
          justify="center"
          transition="all 0.25s ease"
          border="1px solid"
          borderColor={`${category.accent}33`}
          _groupHover={{
            bg: category.accent,
            transform: 'scale(1.05)',
            borderColor: category.accent,
          }}
        >
          <Icon
            as={IconComp}
            boxSize={6}
            color={category.accent}
            transition="color 0.25s ease"
            _groupHover={{ color: 'black' }}
          />
        </Flex>

        <Box>
          <Heading
            as="h3"
            fontSize="lg"
            color="white"
            fontFamily="WixMadeforDisplay"
            mb={2}
            fontWeight="600"
          >
            {category.title}
          </Heading>
          <Text color="gray.400" fontSize="sm" lineHeight="1.6">
            {category.description}
          </Text>
        </Box>

        <HStack
          spacing={1}
          color={BRAND_GREEN}
          fontSize="sm"
          fontWeight="500"
          opacity={0.85}
          transition="all 0.25s ease"
          _groupHover={{ opacity: 1, transform: 'translateX(4px)' }}
        >
          <Text>Explore</Text>
          <Icon as={FiArrowRight} boxSize={3.5} />
        </HStack>
      </VStack>
    </Box>
  );
};

const FaqResult = ({ result, tokens }) => {
  const { category, subtopicTitle, question, answerText, anchor } = result;
  const CatIcon = iconMap[category.iconName] || FiHelpCircle;
  const snippet = buildSnippet(answerText, tokens);

  return (
    <Box
      as={NextLink}
      href={`/support/${category.slug}#${anchor}`}
      role="group"
      display="block"
      bg="rgba(255, 255, 255, 0.03)"
      border="1px solid"
      borderColor="whiteAlpha.100"
      borderRadius="xl"
      p={5}
      transition="all 0.2s ease"
      _hover={{
        borderColor: category.accent,
        bg: 'rgba(255, 255, 255, 0.05)',
        transform: 'translateY(-2px)',
      }}
    >
      <HStack spacing={2} mb={3} flexWrap="wrap">
        <Tag
          size="sm"
          bg={category.accentSoft}
          color={category.accent}
          border="1px solid"
          borderColor={`${category.accent}40`}
          borderRadius="full"
          px={3}
          py={1}
          fontWeight="500"
        >
          <Icon as={CatIcon} boxSize={3} mr={1.5} />
          {category.title}
        </Tag>
        <Text color="gray.500" fontSize="xs">
          ·
        </Text>
        <Text color="gray.500" fontSize="xs" fontWeight="500">
          {subtopicTitle}
        </Text>
      </HStack>

      <Heading
        as="h3"
        fontSize="md"
        color="white"
        fontFamily="WixMadeforDisplay"
        fontWeight="600"
        mb={2}
        lineHeight="1.4"
      >
        <Highlight text={question} tokens={tokens} />
      </Heading>

      {snippet && (
        <Text color="gray.400" fontSize="sm" lineHeight="1.6" noOfLines={2}>
          <Highlight text={snippet} tokens={tokens} />
        </Text>
      )}

      <HStack
        spacing={1}
        color={BRAND_GREEN}
        fontSize="xs"
        fontWeight="500"
        mt={3}
        opacity={0.85}
        transition="all 0.2s ease"
        _groupHover={{ opacity: 1, transform: 'translateX(4px)' }}
      >
        <Text>Read full answer</Text>
        <Icon as={FiArrowRight} boxSize={3} />
      </HStack>
    </Box>
  );
};

/* ---------- Page ---------- */

const SupportHub = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqIndex = useMemo(() => buildFaqIndex(), []);

  const { tokens, matchingFaqs, matchingCategories, isSearching } = useMemo(() => {
    const tokens = tokenize(searchQuery);
    if (!tokens.length) {
      return {
        tokens: [],
        matchingFaqs: [],
        matchingCategories: supportCategories,
        isSearching: false,
      };
    }

    // FAQ search: every token must appear somewhere in question + answer +
    // subtopic title. Rank by question hits first, then answer hits.
    const scored = faqIndex
      .map((entry) => {
        const ok = tokens.every((t) => entry.searchText.includes(t));
        if (!ok) return null;
        const qHits = tokens.reduce(
          (n, t) => n + (entry.question.toLowerCase().includes(t) ? 1 : 0),
          0
        );
        const aHits = tokens.reduce(
          (n, t) => n + (entry.answerText.toLowerCase().includes(t) ? 1 : 0),
          0
        );
        return { entry, score: qHits * 10 + aHits };
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score)
      .map((s) => s.entry);

    // Category search: title / description / subtopic title — same AND rule.
    const cats = supportCategories.filter((c) => {
      const blob = `${c.title} ${c.description} ${(c.subtopics || [])
        .map((s) => s.title)
        .join(' ')}`.toLowerCase();
      return tokens.every((t) => blob.includes(t));
    });

    // Always include categories that contain a matching FAQ, even if their
    // own metadata didn't match — feels more correct in practice.
    const catSlugsFromFaqs = new Set(scored.map((e) => e.category.slug));
    const augmented = [
      ...cats,
      ...supportCategories.filter(
        (c) => catSlugsFromFaqs.has(c.slug) && !cats.includes(c)
      ),
    ];

    return {
      tokens,
      matchingFaqs: scored,
      matchingCategories: augmented,
      isSearching: true,
    };
  }, [searchQuery, faqIndex]);

  return (
    <Box
      bg="#0a0a0a"
      minH="100vh"
      pt={{ base: '110px', md: '130px' }}
      pb="80px"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="80px"
        left="50%"
        transform="translateX(-50%)"
        w="700px"
        h="600px"
        borderRadius="full"
        bg="rgba(164, 255, 121, 0.06)"
        filter="blur(140px)"
        pointerEvents="none"
        zIndex={0}
      />

      <Container maxW="1280px" px={{ base: 4, md: 8 }} position="relative" zIndex={1}>
        {/* Hero */}
        <VStack spacing={5} mb={12} textAlign="center">
          <Box
            px={4}
            py={1.5}
            borderRadius="full"
            bg="rgba(164, 255, 121, 0.1)"
            border="1px solid"
            borderColor="rgba(164, 255, 121, 0.25)"
          >
            <Text
              color={BRAND_GREEN}
              fontSize="xs"
              fontWeight="600"
              letterSpacing="1.5px"
              textTransform="uppercase"
            >
              Support Center
            </Text>
          </Box>

          <Heading
            as="h1"
            fontSize={{ base: '3xl', md: '5xl' }}
            color="white"
            fontFamily="WixMadeforDisplay"
            fontWeight="400"
            lineHeight="1.1"
          >
            How can we help?
          </Heading>

          <Text color="gray.400" fontSize={{ base: 'md', md: 'lg' }} maxW="640px">
            Search any keyword across all FAQs, or browse the topics below.
          </Text>

          <InputGroup maxW="640px" mt={3}>
            <InputLeftElement pointerEvents="none" h="full" pl={2}>
              <SearchIcon color="gray.500" />
            </InputLeftElement>
            <Input
              placeholder="Try ‘wifi password’, ‘sd card’, ‘red light’, ‘ptz’…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              bg="rgba(255, 255, 255, 0.04)"
              border="1px solid"
              borderColor="whiteAlpha.200"
              color="white"
              _placeholder={{ color: 'gray.500' }}
              _hover={{ borderColor: 'whiteAlpha.300' }}
              _focus={{
                borderColor: BRAND_GREEN,
                boxShadow: `0 0 0 1px ${BRAND_GREEN}`,
                bg: 'rgba(255, 255, 255, 0.06)',
              }}
              borderRadius="full"
              size="lg"
              pl={12}
              pr={searchQuery ? 12 : 4}
            />
            {searchQuery && (
              <InputRightElement h="full" pr={2}>
                <IconButton
                  aria-label="Clear search"
                  icon={<CloseIcon boxSize={2.5} />}
                  size="sm"
                  variant="ghost"
                  color="gray.400"
                  _hover={{ color: 'white', bg: 'whiteAlpha.100' }}
                  borderRadius="full"
                  onClick={() => setSearchQuery('')}
                />
              </InputRightElement>
            )}
          </InputGroup>

          {isSearching && (
            <Text color="gray.500" fontSize="sm">
              {matchingFaqs.length} FAQ{matchingFaqs.length === 1 ? '' : 's'} ·{' '}
              {matchingCategories.length} topic
              {matchingCategories.length === 1 ? '' : 's'} match
              {tokens.length > 1 ? ` all of: ${tokens.join(', ')}` : ` “${tokens[0]}”`}
            </Text>
          )}
        </VStack>

        {/* Search results: FAQs */}
        {isSearching && matchingFaqs.length > 0 && (
          <Box mb={12}>
            <HStack spacing={3} mb={5}>
              <Box w="3px" h="22px" bg={BRAND_GREEN} borderRadius="full" />
              <Heading
                as="h2"
                fontSize={{ base: 'md', md: 'lg' }}
                color="white"
                fontFamily="WixMadeforDisplay"
                fontWeight="500"
              >
                Matching FAQs
              </Heading>
            </HStack>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
              {matchingFaqs.slice(0, 12).map((r) => (
                <FaqResult key={r.id} result={r} tokens={tokens} />
              ))}
            </SimpleGrid>
            {matchingFaqs.length > 12 && (
              <Text color="gray.500" fontSize="sm" mt={4} textAlign="center">
                Showing top 12 of {matchingFaqs.length}. Refine your search to
                narrow further.
              </Text>
            )}
          </Box>
        )}

        {/* Categories */}
        {matchingCategories.length > 0 ? (
          <Box>
            {isSearching && (
              <HStack spacing={3} mb={5}>
                <Box
                  w="3px"
                  h="22px"
                  bg="whiteAlpha.300"
                  borderRadius="full"
                />
                <Heading
                  as="h2"
                  fontSize={{ base: 'md', md: 'lg' }}
                  color="white"
                  fontFamily="WixMadeforDisplay"
                  fontWeight="500"
                >
                  Related Topics
                </Heading>
              </HStack>
            )}
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }} spacing={5}>
              {matchingCategories.map((category) => (
                <SupportCard key={category.slug} category={category} />
              ))}
            </SimpleGrid>
          </Box>
        ) : (
          isSearching && matchingFaqs.length === 0 && (
            <Box
              textAlign="center"
              py={16}
              border="1px dashed"
              borderColor="whiteAlpha.200"
              borderRadius="xl"
            >
              <Text color="gray.400" fontSize="md" mb={2}>
                No FAQs or topics match your search.
              </Text>
              <Text color="gray.500" fontSize="sm">
                Try fewer keywords, or contact our support team below.
              </Text>
            </Box>
          )
        )}

        {/* Contact CTA */}
        <Box
          mt={16}
          p={{ base: 6, md: 10 }}
          borderRadius="2xl"
          bg="linear-gradient(135deg, rgba(164, 255, 121, 0.08), rgba(255, 255, 255, 0.02))"
          border="1px solid"
          borderColor="rgba(164, 255, 121, 0.15)"
        >
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align={{ base: 'flex-start', md: 'center' }}
            justify="space-between"
            gap={6}
          >
            <Box>
              <Heading
                as="h2"
                fontSize={{ base: 'xl', md: '2xl' }}
                color="white"
                fontFamily="WixMadeforDisplay"
                fontWeight="400"
                mb={2}
              >
                Can&apos;t find what you&apos;re looking for?
              </Heading>
              <Text color="gray.400" fontSize="md">
                Our support team is here to help you 24×7.
              </Text>
            </Box>

            <HStack spacing={5} flexWrap="wrap">
              <CustomButton
                as="a"
                href="/contact-us"
                width="200px"
                height="48px"
                fontSize="14px"
                fontWeight="600"
                bgColor="rgba(164, 255, 121, 0.1)"
                hoverBgColor="rgba(164, 255, 121, 0.18)"
                borderColor={BRAND_GREEN}
                hoverBorderColor={BRAND_GREEN}
                textColor={BRAND_GREEN}
                hoverTextColor={BRAND_GREEN}
                showTicks={false}
                showGlow
                glowColor={BRAND_GREEN}
              >
                <HStack spacing={2}>
                  <Icon as={FiMail} boxSize={4} />
                  <Text as="span">Contact Support</Text>
                </HStack>
              </CustomButton>

              <CustomButton
                as="a"
                href="/faq"
                width="180px"
                height="48px"
                fontSize="14px"
                fontWeight="600"
                bgColor="rgba(255, 255, 255, 0.04)"
                hoverBgColor="rgba(255, 255, 255, 0.1)"
                borderColor="white"
                hoverBorderColor={BRAND_GREEN}
                textColor="white"
                hoverTextColor={BRAND_GREEN}
                showTicks={false}
              >
                <HStack spacing={2}>
                  <Icon as={FiMessageCircle} boxSize={4} />
                  <Text as="span">Browse FAQs</Text>
                </HStack>
              </CustomButton>
            </HStack>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default SupportHub;
