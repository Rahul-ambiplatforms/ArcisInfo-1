import axios from 'axios';
// process.env.REACT_APP_API_URL ||
const API_URL = 'https://vmukti.com/backend/api' ||  'http://localhost:5000/api';
// const API_URL = 'https://vmukti.com/backend/api';

// const API_URL = 'http://localhost:5000/api';

// The shared backend resolves the tenant from the request's Origin/Referer.
// On localhost neither contains "arcis", so without this header the backend
// would fall back to the vmukti tenant and look up the user in the wrong
// collection — yielding a misleading 401 on login.
const tenantHeaders = { 'x-tenant': 'arcis' };

export const login = async (data) => {
  const res = await axios.post(`${API_URL}/auth/login`, data, { headers: tenantHeaders });
  return res.data;
};

export const register = async (data) => {
  const res = await axios.post(`${API_URL}/auth/register`, data, { headers: tenantHeaders });
  return res.data;
};

export const forgotPassword = async (data) => {
  const res = await axios.post(`${API_URL}/auth/forgot-password`, data, { headers: tenantHeaders });
  return res.data;
};


export const verifyOtp = async (data) => {
  const res = await axios.post(`${API_URL}/auth/verify-otp`, data, { headers: tenantHeaders });
  return res.data;
};

export const resetPassword = async (data) => {
  const res = await axios.post(`${API_URL}/auth/reset-password`, data, { headers: tenantHeaders });
  return res.data;
};
