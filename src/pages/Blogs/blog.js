// frontend/src/api/blog.js

import axios from "axios";

const API_URL = "https://vmukti.com/backend/api" || "http://localhost:5000/api";
// const API_URL = "https://vmukti.com/backend/api";

// Get all blogs with pagination, sorting, and searching
export const getBlogs = async (
  page = 1,
  limit = 6,
  searchTerm = "",
  sortOrder = "latest",
  status = "published"
) => {
  try {
    // Construct the parameters object
    const params = { page, limit };

    if (searchTerm) {
      params.search = searchTerm;
    }
    if (sortOrder) {
      params.sort = sortOrder;
    }
    if (status) {
      params.status = status;
    }

    const response = await axios.get(`${API_URL}/blogs`, { params });
    console.log("response", response);
    console.log("response data", response.data);

    // console.log("OUTPUT---------------------")
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getBlogByUrlWords = async (urlWords) => {
  console.log("Initial Initial");
  const response = await fetch(`${API_URL}/blogs/urlWords/${urlWords}`);
  console.log("AFTER AAFTER", response);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
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
