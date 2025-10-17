const config = {
  // Change this URL based on your deployment environment

  BACKEND_URL: "https://res.cloudinary.com/dzs02ecai/image/upload/v1760695912/upload_arcis", 
};

export const getImageUrl = (imagePath) => {
  if (!imagePath) return "/placeholder.svg";
  // console.log("imagePath : ", imagePath);
  // If the image path is already a full URL, return it as is
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }

  // Remove any leading slash from the image path
  const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;

  // If the path already includes 'uploads/', don't add it again
  if (cleanPath.startsWith("uploads/")) {
    return `${config.BACKEND_URL}/${cleanPath}`;
  }

  // Add uploads/ prefix if not present
  // console.log("configured : ", `${config.BACKEND_URL}/uploads/${cleanPath}`);
  return `${config.BACKEND_URL}/uploads/${cleanPath}`;
};

export default config;
