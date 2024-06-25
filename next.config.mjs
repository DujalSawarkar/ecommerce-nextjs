/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "www.pinterest.com",
      "www.shutterstock.com",
      "example.com",
      "unsplash.com",
      "www.istockphoto.com",
      "www.alamy.com",
      "res.cloudinary.com",
      "shop.navi.gg",
    ], // Replace with your list of external domains
  },
};

export default nextConfig;
