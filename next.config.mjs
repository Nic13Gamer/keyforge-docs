import { remarkInstall } from 'fumadocs-docgen';
import createMDX from 'fumadocs-mdx/config';

const withMDX = createMDX({
  mdxOptions: {
    remarkPlugins: [remarkInstall],
  },
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: 'r2.keyforge.dev' }],
  },
};

export default withMDX(config);
