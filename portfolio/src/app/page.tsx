'use client';
import Experience from '@/components/Experience';
import HeroSection from '@/components/HeroSection';
import Skills from '@/components/Skills';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useState } from 'react';

// Lazy load the Projects component since it contains many images
const Projects = dynamic(() => import('@/components/projects/Projects'), {
  loading: () => (
    <div className="flex items-center justify-center py-12">
      <div className="text-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 dark:border-gray-600 dark:border-t-blue-400 mx-auto mb-4"></div>
        <p className="text-gray-600 dark:text-gray-400">Loading projects...</p>
      </div>
    </div>
  ),
  ssr: false
});

export default function Home() {
  const [wave, setWave] = useState(false);
  return (
    <main className="mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <HeroSection wave={wave} setWave={setWave} />
      </motion.div>

      <motion.section
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Experience />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <Skills />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Projects />
      </motion.section>
    </main>
  );
}
