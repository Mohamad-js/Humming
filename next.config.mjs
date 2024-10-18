/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

// The Persian Fonts Directory Configuration
module.exports = {
   async rewrites() {
     return [
       {
         source: '/src/fonts/',
         destination: '/fonts/:path*',
       },
     ];
   },
   async headers() {
     return [
       {
         source: '/fonts/:path*',
         headers: [
           {
             key: 'Cache-Control',
             value: 'public, max-age=31536000',
           },
         ],
       },
     ];
   },
 };
 