import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    devIndicators: false,
    allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev', '127.0.0.1'],
};

export default nextConfig;
