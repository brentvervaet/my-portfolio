import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from 'next-themes';
import { Fira_Code, Inter } from 'next/font/google';
import React from 'react';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
});

export const metadata: Metadata = {
  title: {
    default: 'Brent Vervaet | Full-Stack Developer',
    template: '%s | Brent Vervaet',
  },
  description:
    'Full-stack developer specializing in React, Next.js, Swift, and Java. Explore my portfolio featuring web applications, mobile apps, and innovative projects.',
  keywords: [
    'Brent Vervaet',
    'Full-Stack Developer',
    'React',
    'Next.js',
    'Swift',
    'Java',
    'Portfolio',
    'Web Development',
    'Mobile Development',
  ],
  authors: [{ name: 'Brent Vervaet' }],
  creator: 'Brent Vervaet',
  metadataBase: new URL('https://brentvervaet-dev.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brentvervaet-dev.vercel.app',
    title: 'Brent Vervaet | Full-Stack Developer Portfolio',
    description:
      'Full-stack developer specializing in React, Next.js, Swift, and Java. Explore my portfolio featuring web applications, mobile apps, and innovative projects.',
    siteName: 'Brent Vervaet Portfolio',
    images: [
      {
        url: '/images/optimized/home/brent-vervaet.webp',
        width: 1200,
        height: 630,
        alt: 'Brent Vervaet - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brent Vervaet | Full-Stack Developer Portfolio',
    description:
      'Full-stack developer specializing in React, Next.js, Swift, and Java. Explore my portfolio featuring web applications, mobile apps, and innovative projects.',
    images: ['/images/optimized/home/brent-vervaet.webp'],
    creator: '@brentvervaet',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${firaCode.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Brent Vervaet',
              url: 'https://brentvervaet-dev.vercel.app',
              image: 'https://brentvervaet-dev.vercel.app/images/optimized/home/brent-vervaet.webp',
              jobTitle: 'Full-Stack Developer',
              description: 'Full-stack developer specializing in React, Next.js, Swift, and Java',
              alumniOf: 'HOGENT University',
              knowsAbout: ['React', 'Next.js', 'Swift', 'Java', 'TypeScript', 'Tailwind CSS', 'Node.js'],
              sameAs: ['https://github.com/brentvervaet', 'https://linkedin.com/in/brent-vervaet'],
            }),
          }}
        />
        <title>Portfolio</title>
      </head>
      <body
        className={`flex min-h-screen flex-col bg-zinc-100 font-sans text-zinc-900 antialiased dark:bg-zinc-900 dark:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AnimatedBackground />
          <div className="mx-auto max-w-7xl flex-grow px-4 sm:px-6 lg:px-8">
            <Header />
            <PageTransition>{children}</PageTransition>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
