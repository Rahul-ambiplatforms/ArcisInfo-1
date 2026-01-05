import axios from "axios";

// process.env.REACT_APP_API_URL ||
const API_URL = 'https://vmukti.com/backend/api' || "http://localhost:5000/api";
// const API_URL = 'https://vmukti.com/backend/api';
// const API_URL = "http://localhost:5000/api";

// // Upload a single file
// export const uploadFile = async (file) => {
//   try {
//     const formData = new FormData();
//     formData.append('file', file);

//     const response = await axios.post(`${API_URL}/files/upload`, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     return response.data;
//   } catch (error) {
//     throw error.response?.data || error.message;
//   }
// };

// // Delete a file
// export const deleteFile = async (filename) => {
//   try {
//     const response = await axios.delete(`${API_URL}/files/${filename}`);
//     return response.data;
//   } catch (error) {
//     throw error.response?.data || error.message;
//   }
// };

export const uploadFile = async (file) => {
  // console.log("UPLOAD API FROM THE FRONTEND", file);
  try {
    const formData = new FormData();
    formData.append("file", file);
    // console.log("UPLOAD API FROM THE FRONTEND ---------INSIDE---------", file);
    const token = localStorage.getItem("jwtToken");
    const response = await axios.post(`${API_URL}/files/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
    // console.log("UPLOAD API FROM THE FRONTEND ---------INSIDE BELOW---------", response);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Delete a file from Cloudinary
export const deleteFile = async (publicId) => {
  try {
    const token = localStorage.getItem("jwtToken");
    const response = await axios.delete(`${API_URL}/files/${publicId}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
