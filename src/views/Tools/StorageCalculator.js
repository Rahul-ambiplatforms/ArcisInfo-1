'use client';
import React, { useMemo, useState } from 'react';
import {
  Box, Container, Heading, Text, SimpleGrid, Stack, HStack, VStack,
  Select, NumberInput, NumberInputField, Button, Divider, Badge,
  Slider, SliderTrack, SliderFilledTrack, SliderThumb, Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';

// Brand dark theme (body #171717, accents #9678E1 / #8266C9)
const ACCENT = '#9678E1';
const ACCENT_DEEP = '#8266C9';
const CARD_BG = 'rgba(255,255,255,0.04)';
const CARD_BORDER = 'rgba(255,255,255,0.12)';

// Typical H.265 / H.264 bitrates (Mbps) by resolution — editable defaults.
const BITRATE = {
  '2MP (1080p)': { 'H.265': 2, 'H.264': 4 },
  '4MP': { 'H.265': 4, 'H.264': 8 },
  '5MP': { 'H.265': 5, 'H.264': 10 },
  '8MP (4K)': { 'H.265': 8, 'H.264': 16 },
};
const HDD_SIZES = [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24];

const fieldStyle = {
  bg: 'rgba(255,255,255,0.06)',
  borderColor: CARD_BORDER,
  color: 'white',
  _hover: { borderColor: ACCENT },
  _focus: { borderColor: ACCENT, boxShadow: `0 0 0 1px ${ACCENT}` },
};

function recommendHDD(tb) {
  const need = Math.ceil(tb);
  for (const s of HDD_SIZES) {
    if (s >= need) return `1 × ${s} TB drive`;
  }
  const big = HDD_SIZES[HDD_SIZES.length - 1];
  const n = Math.ceil(need / big);
  return `${n} × ${big} TB drives`;
}

const StorageCalculator = () => {
  const [cameras, setCameras] = useState(8);
  const [resolution, setResolution] = useState('4MP');
  const [codec, setCodec] = useState('H.265');
  const [customBitrate, setCustomBitrate] = useState(''); // optional override
  const [hoursPerDay, setHoursPerDay] = useState(24);
  const [retentionDays, setRetentionDays] = useState(30);
  const [dutyCycle, setDutyCycle] = useState(100); // % of recording window actually recorded

  const calc = useMemo(() => {
    const defBitrate = BITRATE[resolution][codec];
    const bitrate = customBitrate && Number(customBitrate) > 0 ? Number(customBitrate) : defBitrate;
    // 1 Mbps continuous = 0.45 GB/hour (1,000,000 ÷ 8 × 3600 ÷ 1e9)
    const perCamHourGB = bitrate * 0.45;
    const perCamDayGB = perCamHourGB * hoursPerDay * (dutyCycle / 100);
    const rawGB = perCamDayGB * cameras * retentionDays;
    const withOverheadGB = rawGB * 1.1; // +10% filesystem/overhead headroom
    const tb = withOverheadGB / 1000;
    return {
      bitrate,
      perCamDayGB,
      rawGB,
      tb,
      hdd: recommendHDD(tb),
    };
  }, [cameras, resolution, codec, customBitrate, hoursPerDay, retentionDays, dutyCycle]);

  const fmt = (n, d = 1) => Number(n).toLocaleString('en-IN', { maximumFractionDigits: d });

  return (
    <Container maxW="1100px" py={{ base: 10, md: 16 }} color="white">
      <Badge bg="whiteAlpha.200" color="white" px={3} py={1} borderRadius="full" mb={4}
        fontSize="xs" textTransform="uppercase" letterSpacing="wider">
        Free Tool
      </Badge>
      <Heading as="h1" fontSize={{ base: '30px', md: '44px' }} fontWeight="700" mb={3}>
        CCTV Storage Calculator
      </Heading>
      <Text color="whiteAlpha.800" maxW="3xl" mb={10} fontSize={{ base: 'md', md: 'lg' }}>
        Estimate how much recording storage your CCTV / NVR setup needs. Enter your camera count,
        resolution and retention period — the calculator uses the industry-standard bitrate model
        (1&nbsp;Mbps ≈ 0.45&nbsp;GB/hour) and adds 10% headroom.
      </Text>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
        {/* INPUTS */}
        <Box p={{ base: 5, md: 7 }} bg={CARD_BG} border="1px solid" borderColor={CARD_BORDER} borderRadius="xl">
          <Heading as="h2" fontSize="xl" fontWeight="600" mb={6}>Your setup</Heading>
          <Stack spacing={5}>
            <Box>
              <Text mb={2} fontSize="sm" color="whiteAlpha.800">Number of cameras</Text>
              <NumberInput min={1} max={1024} value={cameras}
                onChange={(_, v) => setCameras(Number.isNaN(v) ? 1 : v)}>
                <NumberInputField {...fieldStyle} />
              </NumberInput>
            </Box>

            <SimpleGrid columns={2} spacing={4}>
              <Box>
                <Text mb={2} fontSize="sm" color="whiteAlpha.800">Resolution</Text>
                <Select value={resolution} onChange={(e) => setResolution(e.target.value)} {...fieldStyle} sx={{ option: { color: 'black' } }}>
                  {Object.keys(BITRATE).map((r) => <option key={r} value={r}>{r}</option>)}
                </Select>
              </Box>
              <Box>
                <Text mb={2} fontSize="sm" color="whiteAlpha.800">Codec</Text>
                <Select value={codec} onChange={(e) => setCodec(e.target.value)} {...fieldStyle} sx={{ option: { color: 'black' } }}>
                  <option value="H.265">H.265 (HEVC)</option>
                  <option value="H.264">H.264 (AVC)</option>
                </Select>
              </Box>
            </SimpleGrid>

            <Box>
              <Text mb={2} fontSize="sm" color="whiteAlpha.800">
                Bitrate override (Mbps) — optional, most accurate
              </Text>
              <NumberInput min={0} value={customBitrate}
                onChange={(v) => setCustomBitrate(v)}>
                <NumberInputField placeholder={`default ${BITRATE[resolution][codec]} Mbps`} {...fieldStyle} _placeholder={{ color: 'whiteAlpha.500' }} />
              </NumberInput>
            </Box>

            <SimpleGrid columns={2} spacing={4}>
              <Box>
                <Text mb={2} fontSize="sm" color="whiteAlpha.800">Recording hours/day</Text>
                <NumberInput min={1} max={24} value={hoursPerDay}
                  onChange={(_, v) => setHoursPerDay(Number.isNaN(v) ? 1 : v)}>
                  <NumberInputField {...fieldStyle} />
                </NumberInput>
              </Box>
              <Box>
                <Text mb={2} fontSize="sm" color="whiteAlpha.800">Retention (days)</Text>
                <NumberInput min={1} max={365} value={retentionDays}
                  onChange={(_, v) => setRetentionDays(Number.isNaN(v) ? 1 : v)}>
                  <NumberInputField {...fieldStyle} />
                </NumberInput>
              </Box>
            </SimpleGrid>

            <Box>
              <HStack justify="space-between" mb={2}>
                <Text fontSize="sm" color="whiteAlpha.800">Recording density (motion vs continuous)</Text>
                <Text fontSize="sm" color={ACCENT} fontWeight="600">{dutyCycle}%</Text>
              </HStack>
              <Slider min={10} max={100} step={5} value={dutyCycle} onChange={setDutyCycle}>
                <SliderTrack bg="whiteAlpha.200"><SliderFilledTrack bg={ACCENT} /></SliderTrack>
                <SliderThumb bg={ACCENT} />
              </Slider>
              <Text fontSize="xs" color="whiteAlpha.500" mt={1}>
                100% = continuous recording · ~40% = typical motion-triggered recording.
              </Text>
            </Box>
          </Stack>
        </Box>

        {/* RESULTS */}
        <Box p={{ base: 5, md: 7 }} bgGradient={`linear(160deg, ${ACCENT_DEEP}, #2a2342)`} borderRadius="xl"
          border="1px solid" borderColor={CARD_BORDER}>
          <Heading as="h2" fontSize="xl" fontWeight="600" mb={6}>Estimated storage</Heading>
          <VStack align="stretch" spacing={5}>
            <Box>
              <Text fontSize="sm" color="whiteAlpha.800">Total storage required (incl. 10% headroom)</Text>
              <Text fontSize={{ base: '40px', md: '52px' }} fontWeight="800" lineHeight="1.1">
                {fmt(calc.tb, 1)} <Text as="span" fontSize="2xl">TB</Text>
              </Text>
              <Text fontSize="sm" color="whiteAlpha.700">≈ {fmt(calc.rawGB, 0)} GB raw</Text>
            </Box>
            <Divider borderColor="whiteAlpha.300" />
            <SimpleGrid columns={2} spacing={4}>
              <Box>
                <Text fontSize="xs" color="whiteAlpha.700" textTransform="uppercase">Bitrate used</Text>
                <Text fontSize="lg" fontWeight="700">{fmt(calc.bitrate, 1)} Mbps</Text>
              </Box>
              <Box>
                <Text fontSize="xs" color="whiteAlpha.700" textTransform="uppercase">Per camera / day</Text>
                <Text fontSize="lg" fontWeight="700">{fmt(calc.perCamDayGB, 1)} GB</Text>
              </Box>
              <Box>
                <Text fontSize="xs" color="whiteAlpha.700" textTransform="uppercase">Cameras</Text>
                <Text fontSize="lg" fontWeight="700">{cameras}</Text>
              </Box>
              <Box>
                <Text fontSize="xs" color="whiteAlpha.700" textTransform="uppercase">Suggested disk</Text>
                <Text fontSize="lg" fontWeight="700">{calc.hdd}</Text>
              </Box>
            </SimpleGrid>
            <Divider borderColor="whiteAlpha.300" />
            <Box>
              <Text fontSize="sm" color="whiteAlpha.900" mb={3}>
                Skip the on-prem disks — ArcisAI Cloud VMS scales storage automatically with
                STQC-certified, India-hosted recording.
              </Text>
              <HStack spacing={3}>
                <Button as={NextLink} type={undefined} href="/cloud-vms" bg="white" color={ACCENT_DEEP} fontWeight="700"
                  _hover={{ bg: 'gray.100' }} size="sm">Explore Cloud VMS</Button>
                <Button as={NextLink} type={undefined} href="/arcis-nvr" variant="outline" color="white"
                  borderColor="whiteAlpha.500" _hover={{ bg: 'whiteAlpha.200' }} size="sm">View NVRs</Button>
              </HStack>
            </Box>
          </VStack>
        </Box>
      </SimpleGrid>

      <Text fontSize="xs" color="whiteAlpha.500" mt={6} maxW="3xl">
        Estimates only. Actual storage varies with scene complexity, frame rate, GOP and VBR/CBR
        settings. For the most accurate figure, enter your camera's actual configured bitrate in the
        override field. Calculation: cameras × bitrate(Mbps) × 0.45 × hours/day × retention days ×
        density, +10% headroom; 1&nbsp;TB = 1000&nbsp;GB (decimal).
      </Text>
    </Container>
  );
};

export default StorageCalculator;
