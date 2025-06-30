'use client';
import SocialLinks from '@/components/SocialsLinks';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React, { useState } from 'react';
import Experience from '@/components/Experience';
import Projects from '@/components/projects/Projects';
import Skills from '@/components/Skills';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const [wave, setWave] = useState(false);
  return (
    <main className="mx-auto max-w-3xl px-4 py-4">
      <section className="space-y-8 py-16">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <motion.div whileHover={{ rotate: -10, scale: 1.1 }} whileTap={{ rotate: 10, scale: 0.9 }}>
            <Link href={'https://www.instagram.com/brentiedebentley/'} target="_blank" rel="noopener noreferrer">
              <Avatar className="h-24 w-24 border-2">
                <AvatarImage src="/images/home/brent-vervaet.JPG" alt="Brent Vervaet" />
                <AvatarFallback>BV</AvatarFallback>
              </Avatar>
            </Link>
          </motion.div>
          <div className="flex flex-col items-center md:items-start">
            <h1 className="font-mono text-3xl font-bold">
              Hi, I&apos;m Brent{' '}
              <motion.span
                style={{ display: 'inline-block', originX: 0.7, originY: 0.7 }}
                animate={wave ? { rotate: [0, 20, -10, 20, 0] } : { rotate: 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                onHoverStart={() => setWave(true)}
                onAnimationComplete={() => setWave(false)}
                aria-label="waving hand"
              >
                👋
              </motion.span>
            </h1>
            <p className="mb-4 dark:text-zinc-400">
              A full-stack developer focused on creating beautiful and functional web and mobile experiences.
            </p>
            <SocialLinks className="mt-2" />
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Experience />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Skills />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Projects />
      </motion.section>
    </main>
  );
}
