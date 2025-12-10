import React, { useState, useEffect } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Input,
  Box,
  Text,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { countries } from "../Data/countries";

const CountrySelector = ({ value, onChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    // Find country by dial code or default to India (+91)
    const country =
      countries.find((c) => c.dial_code === value) ||
      countries.find((c) => c.dial_code === "+91");
    setSelectedCountry(country);
  }, [value]);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.dial_code.includes(searchTerm) ||
      country.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon color="white" />}
        bg="rgba(255,255,255,0.2)"
        border="none"
        h={{ base: "44px", md: "48px", lg: "52px" }}
        color="white"
        fontSize={{ base: "14px", md: "15px", lg: "16px" }}
        fontWeight="400"
        _hover={{ bg: "rgba(255,255,255,0.3)" }}
        _active={{ bg: "rgba(255,255,255,0.3)" }}
        _expanded={{ bg: "rgba(255,255,255,0.3)" }}
        minW={{ base: "80px", md: "90px", lg: "110px" }}
        textAlign="left"
        px={3}
      >
        {selectedCountry ? (
          <Box as="span" display="flex" alignItems="center">
            <Text as="span" mr={2}>
              {selectedCountry.flag}
            </Text>
            {selectedCountry.dial_code}
          </Box>
        ) : (
          "+91"
        )}
      </MenuButton>
      <MenuList
        bg="white"
        p={0}
        minW="300px"
        maxH="300px"
        overflowY="auto"
        zIndex={2}
      >
        <Box p={2} position="sticky" top="0" bg="white" zIndex={1}>
          <InputGroup size="sm">
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              placeholder="Search country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              variant="outline"
              bg="white"
              color="black"
              _placeholder={{ color: "gray.500" }}
              isRequired={false}
              autoComplete="off"
            />
          </InputGroup>
        </Box>
        {filteredCountries.map((country) => (
          <MenuItem
            key={`${country.code}-${country.dial_code}`}
            onClick={() => {
              onChange(country.dial_code);
              setSearchTerm("");
            }}
            _hover={{ bg: "gray.100" }}
            color="black"
          >
            <Box display="flex" alignItems="center" width="100%">
              <Text as="span" fontSize="lg" mr={3}>
                {country.flag}
              </Text>
              <Text as="span" flex="1">
                {country.name}
              </Text>
              <Text as="span" color="gray.500" fontSize="sm">
                ({country.code}) {country.dial_code}
              </Text>
            </Box>
          </MenuItem>
        ))}
        {filteredCountries.length === 0 && (
          <Box p={3} textAlign="center">
            <Text color="gray.500">No countries found</Text>
          </Box>
        )}
      </MenuList>
    </Menu>
  );
};

export default CountrySelector;
