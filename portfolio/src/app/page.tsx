'use client';
import React, { useState } from 'react';
import Experience from '@/components/Experience';
import Projects from '@/components/projects/Projects';
import Skills from '@/components/Skills';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  const [wave, setWave] = useState(false);
  return (
    <main className="mx-auto max-w-3xl">
      <motion.div
        layout
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <HeroSection wave={wave} setWave={setWave} />
      </motion.div>

      <motion.section
        layout
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Experience />
      </motion.section>

      <motion.section
        layout
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Skills />
      </motion.section>

      <motion.section
        layout
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Projects />
      </motion.section>
    </main>
  );
}
