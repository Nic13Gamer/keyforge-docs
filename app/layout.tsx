import Logo from '@/components/logo';
import { DocsLayout } from 'fumadocs-ui/layout';
import { RootProvider } from 'fumadocs-ui/provider';
import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { pageTree } from './source';

import './global.css';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Keyforge Docs',
    template: `%s | Keyforge Docs`,
  },
  description:
    'Documentation & API Reference for Keyforge. Simple license management.',
  creator: 'Keyforge',
  authors: [{ name: 'Nicholas' }],
  keywords: [
    'Keyforge docs',
    'Keyforge documentation',
    'Keyforge API reference',
    'Keyforge Node.js',
    'keyforge-js',
    'License management',
    'Software licensing',
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body>
        <RootProvider>
          <DocsLayout
            tree={pageTree}
            nav={{
              title: <Logo />,
              transparentMode: 'top',
              githubUrl: 'https://github.com/Nic13Gamer/keyforge-node',
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
