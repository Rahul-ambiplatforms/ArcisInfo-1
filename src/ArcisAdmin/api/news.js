import axios from 'axios';

// Override with NEXT_PUBLIC_API_BASE_URL in .env.local while testing against
// a local backend (e.g. http://localhost:5000/api). Falls back to production.
const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'https://vmukti.com/backend/api';
const API_URL = `${API_BASE}/news`;

// See src/views/News/news.js for why we send x-tenant: arcis explicitly.
function tenantAuthHeaders() {
  const headers = { 'x-tenant': 'arcis' };
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('jwtToken');
    if (token) headers.Authorization = `Bearer ${token}`;
  }
  return headers;
}

export const getAdminNews = async ({
  page = 1,
  limit = 50,
  status = 'all',
  search = '',
} = {}) => {
  const params = { page, limit, status };
  if (search) params.search = search;
  const response = await axios.get(API_URL, {
    params,
    headers: tenantAuthHeaders(),
  });
  return response.data;
};

export const getNewsById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`, {
    headers: tenantAuthHeaders(),
  });
  return response.data;
};

export const createNews = async (data) => {
  const response = await axios.post(API_URL, data, {
    headers: { 'Content-Type': 'application/json', ...tenantAuthHeaders() },
  });
  return response.data;
};

export const updateNews = async (id, data) => {
  const response = await axios.put(`${API_URL}/${id}`, data, {
    headers: { 'Content-Type': 'application/json', ...tenantAuthHeaders() },
  });
  return response.data;
};

export const deleteNews = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`, {
    headers: tenantAuthHeaders(),
  });
  return response.data;
};
