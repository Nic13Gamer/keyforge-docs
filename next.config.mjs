import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/stripe-integration',
        destination: '/addons/payments-one-time',
        permanent: true,
      },
      {
        source: '/stripe-integration/one-time',
        destination: '/addons/payments-one-time',
        permanent: true,
      },
      {
        source: '/stripe-integration/subscription',
        destination: '/addons/payments-subscription',
        permanent: true,
      },
    ];
  },
};

export default withMDX(config);
