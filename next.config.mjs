// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'via.placeholder.com', // Add this line for the dummy images
      // If you have other external image sources (e.g., Cloudinary, Unsplash), add them here too:
      // 'res.cloudinary.com',
      // 'images.unsplash.com',
    ],
  },
};

export default nextConfig;