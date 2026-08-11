import axios from 'axios';

// Override with NEXT_PUBLIC_API_BASE_URL in .env.local while testing against
// a local backend (e.g. http://localhost:5000/api). Falls back to production.
const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'https://vmukti.com/backend/api';
const API_URL = `${API_BASE}/news`;

// The vmukti backend resolves the tenant from the request's Origin/Referer
// (it falls back to "vmukti" when neither contains "arcis"). On the public
// website those headers naturally include arcisai.io, but we send the
// explicit header too so server-side renders and curl tests still resolve
// to the arcis tenant and read from arcis-news rather than the vmukti
// news collection.
const tenantHeaders = { 'x-tenant': 'arcis' };

export const getNews = async ({
  page = 1,
  limit = 12,
  year = 'all',
  category = 'all',
  search = '',
  status = 'published',
} = {}) => {
  const params = { page, limit, year, category, status };
  if (search) params.search = search;
  const response = await axios.get(API_URL, { params, headers: tenantHeaders });
  return response.data;
};

export const getNewsByUrlWords = async (slug) => {
  const response = await axios.get(`${API_URL}/urlWords/${slug}`, {
    headers: tenantHeaders,
  });
  return response.data;
};
