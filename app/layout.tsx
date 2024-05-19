import Logo from '@/components/logo';
import { DocsLayout } from 'fumadocs-ui/layout';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import LocalFont from 'next/font/local';
import type { ReactNode } from 'react';
import './global.css';
import { pageTree } from './source';

const inter = Inter({
  subsets: ['latin'],
});
const calSans = LocalFont({
  src: '../assets/fonts/CalSans-SemiBold.ttf',
  variable: '--font-calsans',
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} ${calSans.variable}`}>
      <body>
        <RootProvider>
          <DocsLayout tree={pageTree} nav={{ title: <Logo /> }}>
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}
