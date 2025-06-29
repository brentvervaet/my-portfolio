// src/app/page.tsx
import type { Metadata } from 'next';
import Header from '@/components/Header';
import SocialLinks from '@/components/SocialsLinks';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react';
import Experience from '@/components/Experience';
import About from '@/components/About';
import Projects from '@/components/projects/Projects';
import Skills from '@/components/Skills';

export const metadata: Metadata = {
  title: 'Brent Vervaet | Portfolio',
  description: 'Personal portfolio showcasing my projects and skills',
};

// Update in src/app/page.tsx
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <Header />
      <section className="space-y-8 py-16">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <Avatar className="h-24 w-24 border-2">
            <AvatarImage src="/images/home/brent-vervaet.JPG" alt="Brent Vervaet" />
            <AvatarFallback>BV</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center md:items-start">
            <h1 className="font-mono text-3xl font-bold">Hi, I&apos;m Brent 👋</h1>
            <p className="mb-4 dark:text-zinc-400">
              A full-stack developer focused on creating beautiful and functional web and mobile experiences.
            </p>
            <SocialLinks className="mt-2" />
          </div>
        </div>
      </section>

      <Experience />

      <Skills />

      <Projects />

      <About />
    </main>
  );
}
