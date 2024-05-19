import { DocsLayout } from 'fumadocs-ui/layout';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import './global.css';
import { pageTree } from './source';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <RootProvider>
          <DocsLayout tree={pageTree} nav={{ title: 'My App' }}>
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}
