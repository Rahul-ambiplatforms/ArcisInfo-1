import axios from 'axios';

// process.env.REACT_APP_API_URL ||
const API_URL = 'http://localhost:5000/api';

const authHeader = () => {
  const token = localStorage.getItem('jwtToken');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const createJob = async (data) => {
  const headers = { 'Content-Type': 'application/json', ...authHeader() };
  const res = await axios.post(`${API_URL}/jobs`, data, { headers });
  return res.data;
};

export const uploadJobJD = async (file) => {
  const formData = new FormData();
  formData.append('jd', file);
  const headers = { ...(authHeader()), 'Content-Type': 'multipart/form-data' };
  const res = await axios.post(`${API_URL}/files/upload-jd`, formData, { headers });
  return res.data;
};

export const deleteJobJD = async (filename) => {
  const headers = { ...(authHeader()) };
  const res = await axios.delete(`${API_URL}/files/jd/${filename}`, { headers });
  return res.data;
};

export const getJobs = async (page = 1, limit = 10, status) => {
  const res = await axios.get(`${API_URL}/jobs`, { params: { page, limit, ...(status ? { status } : {}) } });
  return res.data;
};

export const getJob = async (id) => {
  const res = await axios.get(`${API_URL}/jobs/${id}`);
  return res.data;
};

export const updateJob = async (id, data) => {
  const headers = { 'Content-Type': 'application/json', ...authHeader() };
  const res = await axios.put(`${API_URL}/jobs/${id}`, data, { headers });
  return res.data;
};

export const deleteJob = async (id) => {
  const res = await axios.delete(`${API_URL}/jobs/${id}`, { headers: authHeader() });
  return res.data;
};

export const closeJob = async (id) => {
  const res = await axios.patch(`${API_URL}/jobs/${id}/close`, {}, { headers: authHeader() });
  return res.data;
};

export const updateJobStatus = async (id, status) => {
  const res = await axios.patch(`${API_URL}/jobs/${id}/status`, { status }, { headers: authHeader() });
  return res.data;
};

export const updateJobOrder = async (jobOrders) => {
  const res = await axios.patch(`${API_URL}/jobs/order`, { jobOrders }, { headers: authHeader() });
  return res.data;
};


