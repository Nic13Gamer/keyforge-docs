import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { RootProvider } from 'fumadocs-ui/provider';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import './global.css';

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

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          <DocsLayout
            tree={source.pageTree}
            {...baseOptions}
            nav={{ ...baseOptions.nav, mode: 'top' }}
            tabMode="navbar"
          >
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}
