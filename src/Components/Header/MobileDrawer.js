'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Link,
  Text,
  Button,
  InputGroup,
  InputLeftElement,
  Icon,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import CustomButton from '../CustomButton';
import { dropdownData, directNavLinks, actionLinks, loginButton } from './navbarData';

// Same lazy chunk as Navbar.js — only loaded once the visitor actually taps
// into search from inside the drawer.
const SearchModal = dynamic(() => import('./SearchModal'), { ssr: false });

/**
 * Mobile menu drawer extracted into its own chunk so the entire Chakra Drawer
 * + Accordion subtree (focus trap, scroll lock, portal, animation) is only
 * loaded when the user actually taps the hamburger. Keeps initial Navbar
 * hydration cheap and the hamburger tap → next-paint under the INP budget.
 */
export default function MobileDrawer({ isOpen, onClose }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openSearch = () => setIsSearchOpen(true);

  return (
    <>
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay backdropFilter="blur(5px)" />
      <DrawerContent bg="black" borderLeft="1px solid" borderColor="gray.800">
        <DrawerCloseButton color="white" mt={2} />
        <DrawerHeader
          color="white"
          borderBottom="1px solid"
          borderColor="gray.800"
        >
          <NextLink href="/" onClick={onClose}>
            <Image
              loading="lazy"
              src="/images/ArcisAi_logo.webp" htmlWidth="601" htmlHeight="120"
              alt="ArcisAI Logo"
              w="150px"
              h="30px"
              cursor="pointer"
              _hover={{ opacity: 0.8 }}
            />
          </NextLink>
        </DrawerHeader>
        <DrawerBody px={0}>
          <Box px={4} py={4} borderBottom="1px solid" borderColor="gray.900">
            <InputGroup size="md" onClick={openSearch} cursor="pointer">
              <InputLeftElement pointerEvents="none" h="100%">
                <Icon as={SearchIcon} color="whiteAlpha.500" boxSize={4} />
              </InputLeftElement>
              <Box
                as="button"
                type="button"
                w="full"
                h="40px"
                pl="40px"
                textAlign="left"
                borderRadius="md"
                bg="whiteAlpha.50"
                border="1px solid"
                borderColor="whiteAlpha.300"
                color="whiteAlpha.500"
                fontSize="14px"
                onClick={openSearch}
              >
                Search the site…
              </Box>
            </InputGroup>
          </Box>
          <Stack
            spacing={0}
            divider={<Box borderColor="gray.900" borderBottomWidth="1px" />}
          >
            {Object.values(dropdownData).map((dropdown, index) => (
              <Accordion key={index} allowToggle border="none">
                <AccordionItem border="none">
                  <h2>
                    <AccordionButton py={4} _hover={{ bg: 'gray.900' }}>
                      <Box
                        flex="1"
                        textAlign="left"
                        color="white"
                        fontWeight="400"
                        fontSize="16px"
                      >
                        {dropdown.title}
                      </Box>
                      <AccordionIcon color="white" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} bg="gray.900">
                    {dropdown.items?.map((item, itemIndex) => {
                      if (item.group) {
                        return (
                          <Box key={itemIndex} mb={4}>
                            {item.groupLink ? (
                              <Link
                                as={NextLink}
                                href={item.groupLink}
                                color="gray.500"
                                fontSize="16px"
                                mb={2}
                                textTransform="uppercase"
                                letterSpacing="1px"
                                display="block"
                                _hover={{
                                  color: 'white',
                                  textDecoration: 'none',
                                }}
                                onClick={onClose}
                              >
                                {item.group}
                              </Link>
                            ) : (
                              <Text
                                color="gray.500"
                                fontSize="xs"
                                mb={2}
                                textTransform="uppercase"
                                letterSpacing="1px"
                              >
                                {item.group}
                              </Text>
                            )}
                            <Stack spacing={3} pl={4}>
                              {item.items?.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  as={NextLink}
                                  href={subItem.link}
                                  color="white"
                                  fontSize="14px"
                                  onClick={onClose}
                                  _hover={{ color: 'gray.300' }}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </Stack>
                          </Box>
                        );
                      }
                      return (
                        <Link
                          key={itemIndex}
                          as={NextLink}
                          href={item.link}
                          color="white"
                          fontSize="14px"
                          display="block"
                          py={2}
                          onClick={onClose}
                          _hover={{ color: 'gray.300' }}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            ))}

            {directNavLinks.map((item) => (
              <Button
                key={item.link}
                as={NextLink}
                type={undefined}
                href={item.link}
                variant="ghost"
                color="white"
                w="full"
                h="60px"
                justifyContent="flex-start"
                borderRadius={0}
                fontSize="16px"
                fontWeight="400"
                textTransform="uppercase"
                _hover={{ bg: 'gray.900', color: 'white' }}
                onClick={onClose}
              >
                {item.label}
              </Button>
            ))}

            <Button
              as={NextLink}
              type={undefined}
              href={actionLinks[1].link}
              variant="ghost"
              color="white"
              w="full"
              h="60px"
              justifyContent="flex-start"
              borderRadius={0}
              fontSize="16px"
              fontWeight="400"
              textTransform="uppercase"
              _hover={{ bg: 'gray.900', color: 'white' }}
              onClick={onClose}
            >
              {actionLinks[1].label}
            </Button>

            <Box p={6} display="flex" justifyContent="center">
              <CustomButton
                onClick={() => (window.location.href = loginButton.link)}
              >
                {loginButton.label}
              </CustomButton>
            </Box>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
    {isSearchOpen && (
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    )}
    </>
  );
}
