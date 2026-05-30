'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Flex,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Tag,
  Wrap,
  WrapItem,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
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
  FiArrowLeft,
  FiMail,
  FiMessageCircle,
  FiChevronRight,
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

// Renders the FAQ answer: string → paragraph, array → bullet list.
const FaqAnswer = ({ value }) => {
  if (Array.isArray(value)) {
    return (
      <UnorderedList spacing={2} pl={5} styleType="disc">
        {value.map((line, i) => (
          <ListItem key={i}>{line}</ListItem>
        ))}
      </UnorderedList>
    );
  }
  return <Text>{value}</Text>;
};

// Parse a hash like "#st0-q3" into { sIdx, fIdx } — emitted by SupportHub.
const parseFaqHash = (hash) => {
  if (!hash) return null;
  const m = /^#?st(\d+)-q(\d+)$/.exec(hash);
  if (!m) return null;
  return { sIdx: Number(m[1]), fIdx: Number(m[2]) };
};

const SupportCategory = ({ category }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSubtopic, setActiveSubtopic] = useState('All');
  const [target, setTarget] = useState(null); // { sIdx, fIdx } from URL hash
  const targetItemRef = useRef(null);

  const IconComp = iconMap[category.iconName] || FiHelpCircle;
  const subtopics = useMemo(() => category.subtopics || [], [category]);

  // Read the FAQ hash on mount, force the "All" tab so the target is visible,
  // and re-react to subsequent hash changes (e.g. clicking another search
  // result while already on this page).
  useEffect(() => {
    const apply = () => {
      const parsed = parseFaqHash(window.location.hash);
      if (parsed) {
        setTarget(parsed);
        setActiveSubtopic('All');
        setSearchQuery('');
      } else {
        setTarget(null);
      }
    };
    apply();
    window.addEventListener('hashchange', apply);
    return () => window.removeEventListener('hashchange', apply);
  }, []);

  // After the target FAQ renders (and the accordion pre-opens it), scroll it
  // into view. Small delay lets the accordion animate before we jump.
  useEffect(() => {
    if (!target || !targetItemRef.current) return;
    const t = setTimeout(() => {
      targetItemRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }, 80);
    return () => clearTimeout(t);
  }, [target]);

  const subtopicTabs = ['All', ...subtopics.map((s) => s.title)];

  const filteredSubtopics = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    const toSearchText = (a) =>
      Array.isArray(a) ? a.join(' ') : a || '';

    const filterFaqs = (faqs) =>
      !q
        ? faqs
        : faqs.filter(
            (f) =>
              f.q.toLowerCase().includes(q) ||
              toSearchText(f.a).toLowerCase().includes(q)
          );

    // Preserve the original subtopic index in `sIdx` so accordion items can
    // still build correct deep-link anchors after filtering.
    const indexed = subtopics.map((s, sIdx) => ({ ...s, sIdx }));

    const list =
      activeSubtopic === 'All'
        ? indexed
        : indexed.filter((s) => s.title === activeSubtopic);

    return list
      .map((s) => ({ ...s, faqs: filterFaqs(s.faqs || []) }))
      .filter((s) => (q ? s.faqs.length > 0 : true));
  }, [subtopics, searchQuery, activeSubtopic]);

  const totalFaqs = subtopics.reduce(
    (acc, s) => acc + (s.faqs?.length || 0),
    0
  );

  return (
    <Box
      bg="#0a0a0a"
      minH="100vh"
      pt={{ base: '110px', md: '130px' }}
      pb="80px"
      position="relative"
      overflow="hidden"
    >
      {/* Ambient glow: category accent + faint brand green */}
      <Box
        position="absolute"
        top="60px"
        left="50%"
        transform="translateX(-50%)"
        w="700px"
        h="500px"
        borderRadius="full"
        bg={category.accentSoft}
        filter="blur(140px)"
        pointerEvents="none"
        zIndex={0}
        opacity={0.5}
      />
      <Box
        position="absolute"
        bottom="-100px"
        right="-100px"
        w="500px"
        h="500px"
        borderRadius="full"
        bg="rgba(164, 255, 121, 0.05)"
        filter="blur(140px)"
        pointerEvents="none"
        zIndex={0}
      />

      <Container maxW="1100px" px={{ base: 4, md: 8 }} position="relative" zIndex={1}>
        {/* Breadcrumb */}
        <HStack
          as={NextLink}
          href="/support"
          spacing={2}
          color="gray.500"
          fontSize="sm"
          mb={6}
          transition="color 0.2s ease"
          _hover={{ color: BRAND_GREEN }}
          display="inline-flex"
        >
          <Icon as={FiArrowLeft} boxSize={4} />
          <Text>Back to Support Center</Text>
        </HStack>

        {/* Header */}
        <Flex
          align={{ base: 'flex-start', md: 'center' }}
          gap={5}
          mb={10}
          direction={{ base: 'column', md: 'row' }}
        >
          <Flex
            w={{ base: '64px', md: '72px' }}
            h={{ base: '64px', md: '72px' }}
            borderRadius="2xl"
            bg={category.accentSoft}
            align="center"
            justify="center"
            flexShrink={0}
            border="1px solid"
            borderColor={`${category.accent}40`}
          >
            <Icon as={IconComp} boxSize={{ base: 7, md: 8 }} color={category.accent} />
          </Flex>

          <Box flex="1">
            <Heading
              as="h1"
              fontSize={{ base: '2xl', md: '4xl' }}
              color="white"
              fontFamily="WixMadeforDisplay"
              fontWeight="400"
              mb={2}
            >
              {category.title}
            </Heading>
            <Text color="gray.400" fontSize={{ base: 'md', md: 'lg' }}>
              {category.description}
            </Text>
            {totalFaqs > 0 && (
              <Text color={BRAND_GREEN} fontSize="sm" mt={2} fontWeight="500">
                {totalFaqs} article{totalFaqs === 1 ? '' : 's'} in this section
              </Text>
            )}
          </Box>
        </Flex>

        {/* Search */}
        <InputGroup maxW="100%" mb={6}>
          <InputLeftElement pointerEvents="none" h="full" pl={2}>
            <SearchIcon color="gray.500" />
          </InputLeftElement>
          <Input
            placeholder={`Search in ${category.title}…`}
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
          />
        </InputGroup>

        {/* Subtopic tabs */}
        {subtopics.length > 0 && (
          <Wrap spacing={2} mb={8}>
            {subtopicTabs.map((tab) => {
              const isActive = activeSubtopic === tab;
              return (
                <WrapItem key={tab}>
                  <Tag
                    size="md"
                    bg={isActive ? BRAND_GREEN : 'transparent'}
                    color={isActive ? 'black' : 'gray.300'}
                    border="1px solid"
                    borderColor={isActive ? BRAND_GREEN : 'whiteAlpha.200'}
                    cursor="pointer"
                    onClick={() => setActiveSubtopic(tab)}
                    _hover={{
                      bg: isActive ? BRAND_GREEN : 'whiteAlpha.100',
                      borderColor: isActive ? BRAND_GREEN : 'whiteAlpha.400',
                      color: isActive ? 'black' : 'white',
                    }}
                    borderRadius="full"
                    px={4}
                    py={2}
                    fontWeight="500"
                    fontSize="sm"
                    fontFamily="WixMadeforDisplay"
                    transition="all 0.2s ease"
                  >
                    {tab}
                  </Tag>
                </WrapItem>
              );
            })}
          </Wrap>
        )}

        {/* Content */}
        <VStack spacing={10} align="stretch">
          {filteredSubtopics.length === 0 && (
            <Box
              textAlign="center"
              py={16}
              border="1px dashed"
              borderColor="whiteAlpha.200"
              borderRadius="xl"
            >
              <Text color="gray.400" fontSize="md">
                {searchQuery
                  ? 'No articles match your search.'
                  : 'Articles for this topic are coming soon.'}
              </Text>
            </Box>
          )}

          {filteredSubtopics.map((subtopic) => {
            const sIdx = subtopic.sIdx;
            // Pre-open the FAQ pointed to by the URL hash. Re-key the Accordion
            // so a hash change re-applies defaultIndex on the same page.
            const targetFaqIdx =
              target && target.sIdx === sIdx ? target.fIdx : null;
            const accordionKey = `acc-${sIdx}-${targetFaqIdx ?? 'none'}`;
            return (
            <Box key={subtopic.title}>
              <HStack spacing={3} mb={4}>
                <Box w="3px" h="22px" bg={BRAND_GREEN} borderRadius="full" />
                <Heading
                  as="h2"
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color="white"
                  fontFamily="WixMadeforDisplay"
                  fontWeight="500"
                >
                  {subtopic.title}
                </Heading>
              </HStack>

              {subtopic.faqs && subtopic.faqs.length > 0 ? (
                <Accordion
                  key={accordionKey}
                  allowMultiple
                  defaultIndex={targetFaqIdx !== null ? [targetFaqIdx] : []}
                >
                  {subtopic.faqs.map((faq, idx) => {
                    const isTarget =
                      target && target.sIdx === sIdx && target.fIdx === idx;
                    return (
                    <AccordionItem
                      key={idx}
                      id={`st${sIdx}-q${idx}`}
                      ref={isTarget ? targetItemRef : undefined}
                      border="1px solid"
                      borderColor={
                        isTarget ? BRAND_GREEN : 'whiteAlpha.100'
                      }
                      bg={
                        isTarget
                          ? 'rgba(164, 255, 121, 0.06)'
                          : 'rgba(255, 255, 255, 0.02)'
                      }
                      mb={2.5}
                      borderRadius="lg"
                      overflow="hidden"
                      transition="border-color 0.2s ease, background 0.2s ease"
                      boxShadow={
                        isTarget
                          ? `0 0 0 1px ${BRAND_GREEN}55, 0 8px 24px -12px ${BRAND_GREEN}40`
                          : undefined
                      }
                      _hover={{ borderColor: 'rgba(164, 255, 121, 0.4)' }}
                      scrollMarginTop="120px"
                    >
                      <h3>
                        <AccordionButton
                          py={4}
                          px={5}
                          _hover={{ bg: 'whiteAlpha.50' }}
                          _expanded={{ bg: 'whiteAlpha.50' }}
                        >
                          <Box
                            flex="1"
                            textAlign="left"
                            color="white"
                            fontWeight="500"
                            fontSize={{ base: 'sm', md: 'md' }}
                            fontFamily="WixMadeforDisplay"
                          >
                            {faq.q}
                          </Box>
                          <AccordionIcon color={BRAND_GREEN} />
                        </AccordionButton>
                      </h3>
                      <AccordionPanel
                        pb={5}
                        px={5}
                        color="gray.300"
                        fontSize={{ base: 'sm', md: 'md' }}
                        lineHeight="1.75"
                      >
                        <FaqAnswer value={faq.a} />
                      </AccordionPanel>
                    </AccordionItem>
                    );
                  })}
                </Accordion>
              ) : (
                <Box
                  p={5}
                  bg="rgba(255, 255, 255, 0.02)"
                  border="1px dashed"
                  borderColor="whiteAlpha.200"
                  borderRadius="lg"
                >
                  <Text color="gray.500" fontSize="sm">
                    Articles for this subtopic are being prepared. Check back
                    soon.
                  </Text>
                </Box>
              )}
            </Box>
            );
          })}
        </VStack>

        {/* Related topics */}
        <Box mt={16}>
          <Heading
            as="h2"
            fontSize="lg"
            color="white"
            fontFamily="WixMadeforDisplay"
            fontWeight="500"
            mb={5}
          >
            Other Support Topics
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={3}>
            {supportCategories
              .filter((c) => c.slug !== category.slug)
              .slice(0, 6)
              .map((c) => {
                const RelIcon = iconMap[c.iconName] || FiHelpCircle;
                return (
                  <Flex
                    key={c.slug}
                    as={NextLink}
                    href={`/support/${c.slug}`}
                    align="center"
                    gap={3}
                    p={4}
                    bg="rgba(255, 255, 255, 0.02)"
                    border="1px solid"
                    borderColor="whiteAlpha.100"
                    borderRadius="xl"
                    transition="all 0.2s ease"
                    _hover={{
                      borderColor: c.accent,
                      bg: 'rgba(255, 255, 255, 0.04)',
                      transform: 'translateY(-2px)',
                    }}
                  >
                    <Flex
                      w="36px"
                      h="36px"
                      borderRadius="lg"
                      bg={c.accentSoft}
                      align="center"
                      justify="center"
                      flexShrink={0}
                    >
                      <Icon as={RelIcon} boxSize={4} color={c.accent} />
                    </Flex>
                    <Text
                      color="white"
                      fontSize="sm"
                      fontWeight="500"
                      flex="1"
                      noOfLines={1}
                    >
                      {c.title}
                    </Text>
                    <Icon as={FiChevronRight} boxSize={4} color="gray.500" />
                  </Flex>
                );
              })}
          </SimpleGrid>
        </Box>

        {/* Bottom CTA */}
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
                Still need help?
              </Heading>
              <Text color="gray.400" fontSize="md">
                Reach out to our support team and we&apos;ll get back to you
                within 24 hours.
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
                href="https://view.arcisai.io/"
                width="160px"
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
                  <Text as="span">Live Chat</Text>
                </HStack>
              </CustomButton>
            </HStack>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default SupportCategory;
