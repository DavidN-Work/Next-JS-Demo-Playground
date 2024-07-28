import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import MainHeader from './Components/Header/MainHeader';
import { Toaster } from 'react-hot-toast';
import { cn } from '@nextui-org/react';

const quicksand = Quicksand({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Next JS Demo App',
    default: 'Next JS Demo App',
  },
  description:
    'A demo of various features and technologies from Next JS, Tailwind and Next UI. | Made By David Ngo',
  generator: 'Next.js',
  applicationName: 'Next JS Demo App',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'Demo'],
  authors: [{ name: 'David Ngo', url: 'https://example.com' }],
  creator: 'David Ngo',
  publisher: 'David Ngo',
  openGraph: {
    title: 'Next JS Demo App',
    description:
      'A demo of various features and technologies from Next JS, Tailwind and Next UI. | Made By David Ngo',
    url: 'https://example.com',
    siteName: 'Next JS Demo App',
    images: [
      {
        url: 'https://example.com/og-image.png',
        width: 800,
        height: 600,
        alt: 'Next JS Demo App',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next JS Demo App',
    description:
      'A demo of various features and technologies from Next JS, Tailwind and Next UI. | Made By David Ngo',
    site: '@site_account',
    creator: '@creator_account',
    images: ['https://example.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://example.com',
    languages: {
      'en-US': 'https://example.com/en-US',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(quicksand.className, '')}>
        <Providers>
          <div className="flex h-screen flex-col">
            <MainHeader />
            <Toaster />
            <div className="flex flex-1 overflow-hidden">
              <main className="relative flex h-full flex-1">{children}</main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
