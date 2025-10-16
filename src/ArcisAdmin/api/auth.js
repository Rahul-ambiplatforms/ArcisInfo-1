import axios from 'axios';
// process.env.REACT_APP_API_URL || 
const API_URL = 'https://vmukti.com/backend/api' ||  'http://localhost:5000/api';
// const API_URL = 'https://vmukti.com/backend/api';

// const API_URL = 'http://localhost:5000/api';

export const login = async (data) => {
  // console.log("RESPONSE",data)
  const res = await axios.post(`${API_URL}/auth/login`, data);
  // console.log("RESULT",res)
  return res.data;
};

export const register = async (data) => {
  const res = await axios.post(`${API_URL}/auth/register`, data);
  return res.data;
};

export const forgotPassword = async (data) => {
  const res = await axios.post(`${API_URL}/auth/forgot-password`, data);
  return res.data;
};


export const verifyOtp = async (data) => {
  const res = await axios.post(`${API_URL}/auth/verify-otp`, data);
  return res.data;
};

export const resetPassword = async (data) => {
  const res = await axios.post(`${API_URL}/auth/reset-password`, data);
  return res.data;
};
