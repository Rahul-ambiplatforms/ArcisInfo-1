'use client';
import React, {
  memo,
  useCallback,
  useState,
  useTransition,
} from 'react';
import dynamic from 'next/dynamic';
import {
  Box,
  Flex,
  Text,
  HStack,
  Button,
  Link,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  IconButton,
  useDisclosure,
  Stack,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import CustomButton from '../CustomButton';
import NavbarDownIcon from '../Icons/Navbar_down_icon.svg';
import NextLink from 'next/link';
import { dropdownData, actionLinks, loginButton } from './navbarData';

// Drawer + Accordion subtree only loaded on first burger tap. Keeps initial
// Navbar JS small and the hamburger tap → next-paint under the INP budget.
const MobileDrawer = dynamic(() => import('./MobileDrawer'), { ssr: false });

/* --- Dropdown Component with Hover and Click Support --- */
const NavDropdown = memo(function NavDropdown({ title, data }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = useCallback(() => setIsOpen(true), []);
  const handleMouseLeave = useCallback(() => setIsOpen(false), []);
  const handleClick = useCallback(() => setIsOpen((v) => !v), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  const isMegaMenu = title === 'PRODUCTS';

  // Separate items into groups and standalone items for Mega Menu
  const groups = data.items?.filter((item) => item.group) || [];
  const standaloneItems = data.items?.filter((item) => !item.group) || [];

  // State for tracking which product is being hovered (for PRODUCTS menu)
  const [hoveredProduct, setHoveredProduct] = useState(
    isMegaMenu ? 'Eco Series' : null
  );
  // Re-rendering the mega-menu right column on every mousemove is overkill
  // and can spike INP if the user moves the pointer while interacting. Defer
  // the hover-state update so it commits off the input critical path.
  const [, startHoverTransition] = useTransition();
  const handleProductHover = useCallback((group) => {
    startHoverTransition(() => setHoveredProduct(group));
  }, []);

  return (
    <Menu
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      gutter={0}
      autoSelect={false}
    >
      <MenuButton
        as={Button}
        variant="ghost"
        rightIcon={<Icon as={NavbarDownIcon} boxSize={3} />}
        color="white"
        _hover={{ color: 'white', bg: 'whiteAlpha.100' }}
        _active={{ bg: 'transparent' }}
        fontWeight="400"
        fontSize="16px"
        textTransform="uppercase"
        letterSpacing="0.5px"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {title}
      </MenuButton>
      <MenuList
        bg="#0a0a0a"
        borderColor="gray.800"
        boxShadow="dark-lg"
        py={4}
        px={isMegaMenu ? 0 : 2}
        minW={isMegaMenu ? '500px' : data.items?.[0]?.group ? '250px' : '200px'}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isMegaMenu ? (
          <Flex>
            {/* Left Column: Main Product Names */}
            <Box
              w="50%"
              borderRight="1px solid"
              borderColor="gray.800"
              py={2}
              px={4}
            >
              <Stack spacing={0}>
                {/* Groups with subpages */}
                {groups.map((item, index) => (
                  <Box
                    key={index}
                    position="relative"
                    borderRadius="md"
                    onMouseEnter={() => handleProductHover(item.group)}
                  >
                    <Link
                      as={NextLink}
                      href={item.groupLink}
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      py={2}
                      px={3}
                      color="white"
                      fontSize="14px"
                      fontWeight="500"
                      bg={
                        hoveredProduct === item.group
                          ? 'gray.800'
                          : 'transparent'
                      }
                      _hover={{ bg: 'gray.800', textDecoration: 'none' }}
                      borderRadius="md"
                      onClick={closeMenu}
                    >
                      <Text>{item.group}</Text>
                      <Icon
                        as={NavbarDownIcon}
                        boxSize={3}
                        color="gray.400"
                        transform="rotate(-90deg)"
                      />
                    </Link>
                  </Box>
                ))}

                {/* Standalone items without subpages */}
                {standaloneItems.map((item, index) => (
                  <Box key={index} borderRadius="md">
                    <Link
                      as={NextLink}
                      href={item.link}
                      display="block"
                      py={2}
                      px={3}
                      color="white"
                      fontSize="14px"
                      fontWeight="500"
                      _hover={{ bg: 'gray.800', textDecoration: 'none' }}
                      borderRadius="md"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </Box>
                ))}
              </Stack>
            </Box>

            {/* Right Column: Subpages (shown on hover) */}
            <Box w="50%" py={2} px={4}>
              {hoveredProduct && (
                <Stack spacing={1}>
                  {groups
                    .find((item) => item.group === hoveredProduct)
                    ?.items?.map((subItem, subIndex) => (
                      <MenuItem
                        key={subIndex}
                        as={NextLink}
                        href={subItem.link}
                        bg="transparent"
                        _hover={{ bg: 'gray.800', color: 'white' }}
                        color="gray.300"
                        fontSize="14px"
                        px={3}
                        py={2}
                        borderRadius="md"
                        onClick={closeMenu}
                      >
                        {subItem.label}
                      </MenuItem>
                    ))}
                </Stack>
              )}
            </Box>
          </Flex>
        ) : (
          // Standard Vertical Menu
          data.items?.map((item, index) => {
            if (item.group) {
              return (
                <MenuGroup
                  key={index}
                  title={
                    item.groupLink ? (
                      <Link
                        as={NextLink}
                        href={item.groupLink}
                        _hover={{ color: 'white', textDecoration: 'none' }}
                        onClick={closeMenu}
                      >
                        {item.group}
                      </Link>
                    ) : (
                      item.group
                    )
                  }
                  color="gray.500"
                  fontSize="12px"
                  letterSpacing="1px"
                  ml={3}
                >
                  {item.items?.map((subItem, subIndex) => (
                    <MenuItem
                      key={subIndex}
                      as={NextLink}
                      href={subItem.link}
                      bg="transparent"
                      _hover={{ bg: 'gray.800' }}
                      color="white"
                      fontSize="14px"
                    >
                      {subItem.label}
                    </MenuItem>
                  ))}
                </MenuGroup>
              );
            }
            return (
              <MenuItem
                key={index}
                as={NextLink}
                href={item.link}
                bg="transparent"
                _hover={{ bg: 'gray.800' }}
                color="white"
                fontSize="14px"
              >
                {item.label}
              </MenuItem>
            );
          })
        )}
      </MenuList>
    </Menu>
  );
});

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Once the burger has been tapped once we keep the Drawer module loaded so
  // subsequent opens are instant. Until then the Drawer JSX never renders —
  // no Chakra portal/focus-trap/scroll-lock work runs.
  const [drawerEverOpened, setDrawerEverOpened] = useState(false);
  const [, startBurgerTransition] = useTransition();

  const handleBurgerTap = useCallback(() => {
    // Let the tap's :active feedback paint first, then mount + open the drawer
    // off the input → next-paint critical path.
    if (!drawerEverOpened) setDrawerEverOpened(true);
    startBurgerTransition(() => {
      onOpen();
    });
  }, [drawerEverOpened, onOpen]);

  return (
    <Box
      as="nav"
      w="100%"
      h="96px"
      bg="rgba(0, 0, 0, 0.95)"
      flexShrink={0}
      position="fixed"
      top={0}
      zIndex={1000}
      borderBottom="1px solid"
      borderColor="whiteAlpha.200"
    >
      <Flex
        h="100%"
        align="center"
        justify="space-between"
        w="100%"
        mx="auto"
        px={{ base: 2, lg: 8 }}
      >
        <Flex gap="4" align="center" justify="center">
          {/* LOGO */}
          <NextLink href="/">
            <Image
              loading="lazy"
              src="/images/ArcisAi_logo.webp"
              alt="ArcisAI Logo"
              w="150px"
              h="30px"
              cursor="pointer"
              _hover={{ opacity: 0.8 }}
            />
          </NextLink>

          {/* DESKTOP NAV - Center */}
          <HStack spacing={2} display={{ base: 'none', lg: 'flex' }}>
            <NavDropdown
              title={dropdownData.solutions.title}
              data={dropdownData.solutions}
            />
            <NavDropdown
              title={dropdownData.products.title}
              data={dropdownData.products}
            />
            <NavDropdown
              title={dropdownData.company.title}
              data={dropdownData.company}
            />
            <NavDropdown
              title={dropdownData.resources.title}
              data={dropdownData.resources}
            />
          </HStack>
        </Flex>

        {/* RIGHT ACTIONS */}
        <HStack
          spacing={6}
          display={{ base: 'none', lg: 'flex' }}
          alignItems="center"
        >
          <Link
            as={NextLink}
            href={actionLinks[1].link}
            fontSize="16px"
            fontWeight="400"
            color="white"
            _hover={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}
            textTransform="uppercase"
            letterSpacing="0.5px"
          >
            {actionLinks[1].label}
          </Link>

          {/* LOGIN BUTTON */}
          <CustomButton
            onClick={() => (window.location.href = loginButton.link)}
          >
            {loginButton.label}
          </CustomButton>
        </HStack>

        {/* MOBILE BURGER */}
        <IconButton
          display={{ base: 'flex', lg: 'none' }}
          icon={<HamburgerIcon boxSize={6} />}
          variant="ghost"
          color="white"
          onClick={handleBurgerTap}
          aria-label="Open Menu"
          _hover={{ bg: 'whiteAlpha.200' }}
        />
      </Flex>

      {/* Mobile drawer is dynamically imported and only mounted after the
          burger is tapped at least once. */}
      {drawerEverOpened && <MobileDrawer isOpen={isOpen} onClose={onClose} />}
    </Box>
  );
};

export default Navbar;
