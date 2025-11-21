import { RootProvider } from 'fumadocs-ui/provider/next';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
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
    'Documentation & API Reference for Keyforge, simple license management for software.',
  creator: 'Keyforge',
  authors: [{ name: 'Nicholas' }],
  keywords: [
    'keyforge docs',
    'keyforge documentation',
    'keyforge API reference',
    'keyforge Node.js',
    'licensing API',
    'keyforge offline licensing',
    'fumadocs',
  ],
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
