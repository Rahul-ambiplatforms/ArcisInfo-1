import axios from 'axios';

// process.env.REACT_APP_API_URL || 
const API_URL = 'http://localhost:5000/api';
// const API_URL = 'https://vmukti.com/backend/api';


// Helper function to check if data contains files
const hasFiles = (data) => {
  // Check main image
  if (data.content?.mainImage instanceof File) return true;

  // Check headingsAndImages for files
  if (data.content?.headingsAndImages) {
    return data.content.headingsAndImages.some(
      item => item.type === 'imageVideo' && item.content.file instanceof File
    );
  }

  return false;
};

// Helper function to prepare form data with files
const prepareFormData = (data) => {
  const formData = new FormData();

  if (data.content?.mainImage instanceof File) {
    formData.append('mainImage', data.content.mainImage);
    data.content.mainImage = null; 
  }

  if (Array.isArray(data.content?.imageVideos)) {
    data.content.imageVideos = [];
    
    // Add new files to FormData
    data.content.headingsAndImages.forEach((item, index) => {
      if (item.type === 'imageVideo' && item.content.file instanceof File) {
        formData.append('imageVideo', item.content.file);
        data.content.headingsAndImages[index].content.imageIndex = data.content.imageVideos.length;
        data.content.imageVideos.push(item.content.file);
      }
    });
  }

  // Add the rest of the data as formatted JSON
  formData.append('formattedData', JSON.stringify(data));

  return formData;
};

// Create a new blog
export const createBlog = async (data) => {
  try {
    // console.log("Creating blog with data:", data);
    const hasFileUploads = hasFiles(data);
    const requestData = hasFileUploads ? prepareFormData(data) : data;
    
    const token = localStorage.getItem('jwtToken');
    const response = await axios.post(`${API_URL}/blogs`, requestData, {
      headers: {
        'Content-Type': hasFileUploads ? 'multipart/form-data' : 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get all blogs with pagination
export const getBlogs = async (page = 1, limit = 10, status, search) => {
  try {
    const response = await axios.get(`${API_URL}/blogs`, {
      params: { page, limit, ...(status ? { status } : {}), ...(search ? { search } : {}) },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get a single blog by ID
export const getBlogById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/blogs/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Update a blog
export const updateBlog = async (id, data) => {
  try {
    const hasFileUploads = hasFiles(data);
    const requestData = hasFileUploads ? prepareFormData(data) : data;

    const token = localStorage.getItem('jwtToken');
    const response = await axios.put(`${API_URL}/blogs/${id}`, requestData, {
      headers: {
        'Content-Type': hasFileUploads ? 'multipart/form-data' : 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Delete a blog
export const deleteBlog = async (id) => {
  try {
    const token = localStorage.getItem('jwtToken');
    const response = await axios.delete(`${API_URL}/blogs/${id}`, { headers: token ? { Authorization: `Bearer ${token}` } : {} });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Update blog status
export const updateBlogStatus = async (id, status) => {
  try {
    const token = localStorage.getItem('jwtToken');
    const response = await axios.patch(`${API_URL}/blogs/${id}/status`, { status }, { headers: token ? { Authorization: `Bearer ${token}` } : {} });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
