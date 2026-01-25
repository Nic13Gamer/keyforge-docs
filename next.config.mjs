import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/stripe-integration',
        destination: '/addons/payment/setup/one-time',
        permanent: true,
      },
      {
        source: '/stripe-integration/one-time',
        destination: '/addons/payment/setup/one-time',
        permanent: true,
      },
      {
        source: '/stripe-integration/subscription',
        destination: '/addons/payment/setup/subscription',
        permanent: true,
      },
      {
        source: '/addons/payments-one-time',
        destination: '/addons/payment/setup/one-time',
        permanent: true,
      },
      {
        source: '/addons/payments-subscription',
        destination: '/addons/payment/setup/subscription',
        permanent: true,
      },
    ];
  },
};

export default withMDX(config);
