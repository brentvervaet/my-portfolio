import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Brent Vervaet | Portfolio',
  description: 'Personal portfolio showcasing my projects and skills',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-zinc-100 text-zinc-900 antialiased dark:bg-zinc-900 dark:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
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
