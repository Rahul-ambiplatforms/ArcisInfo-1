import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
// const API_URL = 'https://vmukti.com/backend/api';



export const getBlogs = async (page = 1, limit = 10) => {
  try {
    const response = await axios.get(`${API_URL}/blogs?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return {
      status: 'error',
      message: error.message
    };
  }
};

export const getBlogById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/blogs/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blog:', error);
    return {
      status: 'error',
      message: error.message
    };
  }
}; 