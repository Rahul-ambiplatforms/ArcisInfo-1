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

// The backend's Cloudinary upload routes (file controller) pick the folder
// based on req.tenant — arcis uploads go to upload_arcis. Send the header
// explicitly so dev (localhost) lands in the same folder as prod.
const TENANT_HEADER = { 'x-tenant': 'arcis' };

export const uploadFile = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const token = localStorage.getItem("jwtToken");
    const response = await axios.post(`${API_URL}/files/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        ...TENANT_HEADER,
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
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
      headers: { ...TENANT_HEADER, ...(token ? { Authorization: `Bearer ${token}` } : {}) },
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
