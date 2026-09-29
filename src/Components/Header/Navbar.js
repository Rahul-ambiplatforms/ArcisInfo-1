'use client';
import React, {
  memo,
  useCallback,
  useEffect,
  useRef,
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
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import CustomButton from '../CustomButton';
import NavbarDownIcon from '../Icons/Navbar_down_icon.svg';
import NextLink from 'next/link';
import { dropdownData, directNavLinks, actionLinks, loginButton } from './navbarData';

// Drawer + Accordion subtree only loaded on first burger tap. Keeps initial
// Navbar JS small and the hamburger tap → next-paint under the INP budget.
const MobileDrawer = dynamic(() => import('./MobileDrawer'), { ssr: false });
// Search modal (+ fuse.js + the search index it fetches) only loaded the
// first time the search icon is tapped — same lazy-chunk pattern as the
// mobile drawer above, so it never adds weight to the initial Navbar JS.
const SearchModal = dynamic(() => import('./SearchModal'), { ssr: false });

// The desktop bar needs ~1309px to lay out at full size (logo 150 + nav 737 +
// actions 302 + search 40 + padding 64). It was being shown from Chakra's `lg`
// (992px), ~317px short, so between 992px and ~1125px the logo was squeezed to
// zero width and LOGIN + Search were pushed outside the viewport — invisible
// and unclickable, and invisible to overflow checks too because <nav> is
// position:fixed.
//
// Chakra's tokens have no stop between lg (992) and xl (1280), so these are raw
// media queries. The desktop bar now appears at 1280px, and a small amount of
// spacing is tightened between 1280px and 1439px to buy the ~30px that makes
// 1280 fit comfortably. At 1440px and above nothing changes at all.
const DESKTOP_NAV = '@media (min-width: 1280px)';
const BELOW_DESKTOP = '@media (max-width: 1279px)';
const TIGHT = '@media (min-width: 1280px) and (max-width: 1439px)';

/* --- Dropdown Component with Hover and Click Support --- */
const NavDropdown = memo(function NavDropdown({ title, data }) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  // How the menu was opened. Chakra's useMenu always restores focus to the
  // MenuButton on close — `shouldFocus: true` is hard-coded in its
  // useFocusOnHide call and is not exposed as a Menu prop. That is correct for
  // click/keyboard, but after a pointer-only hover it left :focus-visible on
  // the button, so the item kept painting Chakra's blue focus ring with the
  // pointer nowhere near it. We only undo that focus for pointer-driven
  // closes; keyboard opens keep the ring, which is what keyboard users need.
  const openedByKeyboard = useRef(false);
  // Armed for a moment after a pointer-driven close, to reject the focus
  // Chakra hands back to the button. See handleMouseLeave / handleFocus.
  const suppressRefocus = useRef(false);
  const suppressTimer = useRef(null);

  useEffect(() => () => clearTimeout(suppressTimer.current), []);

  const isMegaMenu = title === 'PRODUCTS';

  // Separate items into groups and standalone items for Mega Menu
  const groups = data.items?.filter((item) => item.group) || [];
  const standaloneItems = data.items?.filter((item) => !item.group) || [];

  // Which product row the pointer is ACTUALLY over. Starts null and is reset
  // to null whenever the menu closes: seeding it (it used to default to
  // 'Eco Series') painted a hover highlight on a row nobody was pointing at,
  // and never clearing it meant the last-hovered row stayed highlighted the
  // next time the menu opened.
  const [hoveredProduct, setHoveredProduct] = useState(null);
  // The right column still needs something to show before the pointer reaches
  // a row, so it falls back to the first group. This drives CONTENT ONLY — the
  // left-hand highlight is driven by hoveredProduct alone, so the fallback can
  // never render as a fake hover.
  const activeProduct = hoveredProduct ?? groups[0]?.group ?? null;

  // Hover-to-open only where the pointer can actually hover. On touch,
  // mouseenter is synthesised from a tap and races the click handler, so those
  // devices fall through to plain tap-to-toggle.
  const canHover = useCallback(
    () =>
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches,
    [],
  );

  const close = useCallback(() => {
    setIsOpen(false);
    setHoveredProduct(null);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!canHover()) return;
    openedByKeyboard.current = false;
    setIsOpen(true);
  }, [canHover]);

  const handleMouseLeave = useCallback(() => {
    if (!canHover()) return;
    if (!openedByKeyboard.current) {
      // Chakra restores focus to the button roughly one frame after the menu
      // hides (measured at ~17ms). requestAnimationFrame races that and loses,
      // so instead arm a short one-shot window and reject the focus in the
      // focus handler itself, whenever it actually arrives.
      suppressRefocus.current = true;
      clearTimeout(suppressTimer.current);
      suppressTimer.current = setTimeout(() => {
        suppressRefocus.current = false;
      }, 300);
    }
    close();
  }, [canHover, close]);

  const handleFocus = useCallback((event) => {
    if (!suppressRefocus.current) return;
    // One-shot: disarm immediately so a later Tab to this button is never
    // affected, and so only Chakra's own restore is ever rejected.
    suppressRefocus.current = false;
    clearTimeout(suppressTimer.current);
    // If the pointer came back onto the button, the focus is legitimate.
    if (!event.currentTarget.matches(':hover')) {
      event.currentTarget.blur();
    }
  }, []);

  const handleKeyDown = useCallback((event) => {
    if (['Enter', ' ', 'ArrowDown', 'ArrowUp'].includes(event.key)) {
      openedByKeyboard.current = true;
    }
  }, []);

  const handleClick = useCallback(
    (event) => {
      // Keyboard-generated clicks report detail === 0. Leave those entirely to
      // Chakra's own toggle so Enter/Space behave natively.
      if (event.detail === 0) {
        openedByKeyboard.current = true;
        return;
      }
      openedByKeyboard.current = false;
      if (canHover()) {
        // Hover already opened this menu. Chakra's MenuButton merges our
        // onClick ahead of its internal onToggle via callAllHandlers, which
        // stops on defaultPrevented — so preventing default here keeps the
        // click from closing the menu the pointer just opened.
        event.preventDefault();
        setIsOpen(true);
        return;
      }
      // Touch / no-hover pointers: tap toggles.
      setIsOpen((v) => {
        if (v) setHoveredProduct(null);
        return !v;
      });
    },
    [canHover],
  );

  const closeMenu = close;

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
      onClose={close}
      gutter={0}
      autoSelect={false}
      // Without isLazy every MenuList — including the PRODUCTS mega menu — is
      // mounted and re-rendered on the initial page render even while closed.
      isLazy
    >
      <MenuButton
        ref={buttonRef}
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
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
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
                      // hoveredProduct, NOT activeProduct: the right column's
                      // fallback must never render as a highlight on a row the
                      // pointer is not on.
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
              {activeProduct && (
                <Stack spacing={1}>
                  {groups
                    .find((item) => item.group === activeProduct)
                    ?.items?.map((subItem, subIndex) => (
                      <MenuItem
                        key={subIndex}
                        as={NextLink}
                        type={undefined}
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
                      type={undefined}
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
                type={undefined}
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

  const {
    isOpen: isSearchOpen,
    onOpen: onSearchOpen,
    onClose: onSearchClose,
  } = useDisclosure();
  const [searchEverOpened, setSearchEverOpened] = useState(false);

  const handleBurgerTap = useCallback(() => {
    // Let the tap's :active feedback paint first, then mount + open the drawer
    // off the input → next-paint critical path.
    if (!drawerEverOpened) setDrawerEverOpened(true);
    startBurgerTransition(() => {
      onOpen();
    });
  }, [drawerEverOpened, onOpen]);

  const handleSearchTap = useCallback(() => {
    if (!searchEverOpened) setSearchEverOpened(true);
    onSearchOpen();
  }, [searchEverOpened, onSearchOpen]);

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
        sx={{ [TIGHT]: { paddingInline: '24px' } }}
      >
        <Flex
          gap="4"
          align="center"
          justify="center"
          minW={0}
          sx={{ [TIGHT]: { gap: '12px' } }}
        >
          {/* LOGO — wrapped in Box as={NextLink} purely so it can carry a
              _focusVisible rule; a bare NextLink takes no style props and the
              logo was the one header stop with no visible keyboard focus
              indicator. Mouse users see no change: _focusVisible never matches
              on pointer interaction. */}
          <Box
            as={NextLink}
            href="/"
            display="inline-flex"
            borderRadius="md"
            _focusVisible={{
              outline: '2px solid #A4FF79',
              outlineOffset: '3px',
            }}
          >
            {/* flexShrink=0: as a flex item the logo had no shrink guard, so
                when the bar ran out of room it absorbed all of the shrink and
                collapsed to 0px wide — the brand mark and the home link simply
                vanished. Verified by isolation: forcing flex-shrink:0 restored
                it to 150px. */}
            <Image
              loading="lazy"
              src="/images/ArcisAi_logo.webp" htmlWidth="601" htmlHeight="120"
              alt="ArcisAI Logo"
              w="150px"
              h="30px"
              flexShrink={0}
              cursor="pointer"
              _hover={{ opacity: 0.8 }}
            />
          </Box>

          {/* DESKTOP NAV - Center */}
          <HStack
            spacing={2}
            display="none"
            sx={{
              [DESKTOP_NAV]: { display: 'flex' },
              [TIGHT]: { gap: '4px' },
            }}
          >
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
            {directNavLinks.map((item) => (
              <Link
                key={item.link}
                as={NextLink}
                href={item.link}
                px={4}
                py={2}
                fontSize="16px"
                fontWeight="400"
                color="white"
                whiteSpace="nowrap"
                textTransform="uppercase"
                letterSpacing="0.5px"
                _hover={{
                  color: 'white',
                  textDecoration: 'none',
                  bg: 'whiteAlpha.100',
                }}
                borderRadius="md"
              >
                {item.label}
              </Link>
            ))}
          </HStack>
        </Flex>

        {/* RIGHT ACTIONS */}
        <HStack
          spacing={6}
          display="none"
          sx={{
            [DESKTOP_NAV]: { display: 'flex' },
            [TIGHT]: { gap: '16px' },
          }}
          alignItems="center"
          flexShrink={0}
        >
          <Link
            as={NextLink}
            href={actionLinks[1].link}
            fontSize="16px"
            fontWeight="400"
            color="white"
            whiteSpace="nowrap"
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

        {/* SEARCH */}
        <IconButton
          icon={<SearchIcon boxSize={4} />}
          variant="ghost"
          color="white"
          onClick={handleSearchTap}
          aria-label="Search the site"
          _hover={{ bg: 'whiteAlpha.200', color: '#A4FF79' }}
          flexShrink={0}
          // Keeps a gap from the burger wherever the burger is shown, which is
          // now everything below DESKTOP_NAV rather than below lg.
          sx={{ [BELOW_DESKTOP]: { marginRight: '4px' } }}
        />

        {/* MOBILE BURGER */}
        <IconButton
          display="flex"
          sx={{ [DESKTOP_NAV]: { display: 'none' } }}
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

      {/* Search modal is dynamically imported and only mounted after the
          search icon is tapped at least once. */}
      {searchEverOpened && (
        <SearchModal isOpen={isSearchOpen} onClose={onSearchClose} />
      )}
    </Box>
  );
};

export default Navbar;
