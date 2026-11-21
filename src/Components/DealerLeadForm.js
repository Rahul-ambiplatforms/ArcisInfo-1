'use client';
// ARC-013 (2026-11-16): short on-page dealer / distributor enquiry form for
// /become-a-distributor. Before this, the page had no form – applicants had to
// leave for WhatsApp or /contact-us, and none of those routes were measured as
// a dealer lead.
//
// It sends the enquiry to the SAME three destinations as the main contact form
// (src/views/ContactUs/ContactUs.js): the ArcisAI sales agent, the Make.com
// automation webhook and the backend email endpoint – labelled as a dealer lead
// so the team can tell them apart. On success it fires `dealer_submit_success`
// (plus the shared `generate_lead`) – mark `dealer_submit_success` as a key
// event in GA4 so dealer leads are counted separately from contact leads.
import React, { useState, useEffect } from 'react';
import {
  Box, Heading, Text, SimpleGrid, FormControl, FormLabel, Input, Select, Textarea, Button, useToast,
} from '@chakra-ui/react';
import { track, trackLead, getAttribution } from '@/src/utils/track';

const ACCENT = '#9678E1';
const ACCENT_DEEP = '#8266C9';
const BACKEND_URL = 'https://vmukti.com/backend/api/send-email-arcis';
const SALES_AGENT_URL = 'https://arcisai-proxy.onrender.com/api/webhook';
const WEB_HOOK_AUTOMATION = 'https://hook.eu1.make.com/ong8i47uogn9j5vaofu8gzk82mej69d3';

const inputStyle = {
  bg: 'rgba(255,255,255,0.06)',
  borderColor: 'rgba(255,255,255,0.2)',
  color: 'white',
  _placeholder: { color: 'whiteAlpha.500' },
  _hover: { borderColor: ACCENT },
  _focus: { borderColor: ACCENT, boxShadow: `0 0 0 1px ${ACCENT}` },
};

const EMPTY = { name: '', email: '', phone: '', company: '', city: '', businessType: '', message: '' };

export default function DealerLeadForm() {
  const toast = useToast();
  const [form, setForm] = useState(EMPTY);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  // Pre-fill the city when the visitor arrives from a city page
  // (/become-a-distributor?city=Coimbatore). Only when the field is empty.
  useEffect(() => {
    try {
      const c = new URLSearchParams(window.location.search).get('city');
      if (c) setForm((p) => (p.city ? p : { ...p, city: c.slice(0, 60) }));
    } catch (e) { /* ignore */ }
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    // Same autofill-safe phone cleaning as the contact form (ARC-029).
    const cleanPhone = (v) => {
      let d = v.replace(/\D/g, '');
      if (d.length > 10) d = d.replace(/^(?:91|0)/, '');
      return d.slice(0, 10);
    };
    setForm((p) => ({ ...p, [name]: name === 'phone' ? cleanPhone(value) : value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.company || !form.city || !form.businessType) {
      toast({ title: 'Please fill in all required fields', status: 'error', duration: 5000, isClosable: true });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({ title: 'Please enter a valid email address', status: 'error', duration: 5000, isClosable: true });
      return;
    }
    if (!/^\d{10}$/.test(form.phone)) {
      toast({ title: 'Please enter a valid 10-digit phone number', status: 'error', duration: 5000, isClosable: true });
      return;
    }
    setSending(true);
    const attr = getAttribution();
    const source = 'Arcis Website Dealer Form' + (attr.utm_source ? ` (${attr.utm_source}${attr.utm_campaign ? '/' + attr.utm_campaign : ''})` : '');
    const phone = '+91' + form.phone;
    const notes = `Dealer/Distributor enquiry | Business type: ${form.businessType} | City/Region: ${form.city} | Message: ${form.message}`;

    fetch(SALES_AGENT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'api-key': 'default-api-key' },
      body: JSON.stringify({
        name: form.name, email: form.email, phone, company: form.company, source, notes,
        metadata: { location: form.city, customer_type: 'Distributor', business_type: form.businessType, page_url: window.location.href, attribution: attr },
      }),
    }).catch(() => {});

    fetch(WEB_HOOK_AUTOMATION, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name, email: form.email, phone, company: form.company, source, attribution: attr,
        customerType: 'Distributor', camerasFor: 'Dealer / distributor enquiry', businessType: form.businessType,
        message: form.message, location: form.city, pageUrl: window.location.href, date: new Date().toISOString(),
      }),
    }).catch(() => {});

    try {
      const res = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name, email: form.email, countryCode: '+91', phone: form.phone, company: form.company,
          location: form.city, customerType: 'Distributor', camerasFor: 'Dealer / distributor enquiry',
          customerQuantity: '', message: `[${form.businessType}] ${form.message}`,
          leadType: 'ArcisAI Website-(Dealer)', updates: false, formType: 'Contact',
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      // Fired only after the backend accepted the enquiry.
      track('dealer_submit_success', { lead_source: 'become-a-distributor', business_type: form.businessType });
      trackLead('become-a-distributor', { form: 'dealer' });
      setDone(true);
      setForm(EMPTY);
    } catch (err) {
      toast({
        title: 'Could not send your enquiry',
        description: 'Please try again, or message us on WhatsApp.',
        status: 'error', duration: 6000, isClosable: true,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <Box id="dealer-form" p={{ base: 6, md: 8 }} bg="rgba(255,255,255,0.04)" border="1px solid" borderColor="rgba(255,255,255,0.12)" borderRadius="xl" mb={16}>
      <Heading as="h2" fontSize={{ base: '22px', md: '28px' }} fontWeight="700" mb={2} color="white">
        Apply to become an ArcisAI dealer
      </Heading>
      <Text color="whiteAlpha.800" mb={6}>
        Share a few details and our channel team will contact you.
      </Text>
      {done ? (
        <Box p={6} borderRadius="lg" bg="rgba(150,120,225,0.15)" border="1px solid" borderColor={ACCENT}>
          <Text color="white" fontWeight="600">Thank you – your enquiry has been sent.</Text>
          <Text color="whiteAlpha.800" mt={1}>Our channel team will get in touch with you soon.</Text>
        </Box>
      ) : (
        <form onSubmit={onSubmit} noValidate>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <FormControl isRequired>
              <FormLabel color="whiteAlpha.900">Your name</FormLabel>
              <Input name="name" value={form.name} onChange={onChange} {...inputStyle} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="whiteAlpha.900">Company name</FormLabel>
              <Input name="company" value={form.company} onChange={onChange} {...inputStyle} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="whiteAlpha.900">Email</FormLabel>
              <Input name="email" type="email" value={form.email} onChange={onChange} {...inputStyle} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="whiteAlpha.900">Mobile number (10 digits)</FormLabel>
              <Input name="phone" type="tel" inputMode="numeric" value={form.phone} onChange={onChange} {...inputStyle} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="whiteAlpha.900">City / region you cover</FormLabel>
              <Input name="city" value={form.city} onChange={onChange} {...inputStyle} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="whiteAlpha.900">Your business</FormLabel>
              <Select name="businessType" value={form.businessType} onChange={onChange} placeholder="Select" {...inputStyle}>
                <option style={{ color: '#171717' }} value="Distributor">Distributor</option>
                <option style={{ color: '#171717' }} value="Dealer / reseller">Dealer / reseller</option>
                <option style={{ color: '#171717' }} value="System integrator">System integrator</option>
                <option style={{ color: '#171717' }} value="Installer">Installer</option>
                <option style={{ color: '#171717' }} value="Other">Other</option>
              </Select>
            </FormControl>
          </SimpleGrid>
          <FormControl mt={4}>
            <FormLabel color="whiteAlpha.900">Tell us about your business (optional)</FormLabel>
            <Textarea name="message" value={form.message} onChange={onChange} rows={3} {...inputStyle} />
          </FormControl>
          <Button type="submit" mt={6} size="lg" bg={ACCENT} color="white" _hover={{ bg: ACCENT_DEEP }} isLoading={sending} loadingText="Sending">
            Send dealer enquiry
          </Button>
        </form>
      )}
    </Box>
  );
}
