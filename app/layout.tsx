import Logo from '@/components/logo';
import { DocsLayout } from 'fumadocs-ui/layout';
import { RootProvider } from 'fumadocs-ui/provider';
import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import LocalFont from 'next/font/local';
import type { ReactNode } from 'react';
import { pageTree } from './source';

import './global.css';

const inter = Inter({
  subsets: ['latin'],
});
const calSans = LocalFont({
  src: '../assets/fonts/CalSans-SemiBold.ttf',
  variable: '--font-calsans',
});

export const metadata: Metadata = {
  title: {
    default: 'Keyforge Docs',
    template: `%s | Keyforge Docs`,
  },
  description: 'Documentation & API Reference for Keyforge',
  creator: 'Keyforge',
  authors: [{ name: 'Nicholas' }],
  keywords: [
    'Keyforge docs',
    'Keyforge documentation',
    'Keyforge API reference',
    'Keyforge Node.js',
    'keyforge-js',
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} ${calSans.variable}`}>
      <body>
        <RootProvider>
          <DocsLayout
            tree={pageTree}
            nav={{
              title: <Logo />,
              transparentMode: 'top',
            }}
            sidebar={{
              defaultOpenLevel: 0,
            }}
          >
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}
