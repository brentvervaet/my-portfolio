'use client';
import SocialLinks from '@/components/SocialsLinks';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

interface HeroSectionProps {
  wave: boolean;
  setWave: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ wave, setWave }) => (
  <section className="relative space-y-8 py-16">
    {/* Decorative blurred gradient orbs */}

    <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row">
      <motion.div
        whileHover={{ rotate: -10, scale: 1.1 }}
        whileTap={{ rotate: 10, scale: 0.9 }}
        className="rounded-full border border-white/20 bg-white/10 p-1 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-black/20"
      >
        <Link 
          href={'https://www.instagram.com/brentiedebentley/'} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visit Brent Vervaet's Instagram profile"
        >
          <Avatar className="h-24 w-24 border-2 border-white/30 shadow-inner dark:border-white/20">
            <AvatarImage 
              src="/images/home/brent-vervaet.JPG" 
              alt="Brent Vervaet - Full-stack developer portrait" 
            />
            <AvatarFallback className="bg-gradient-to-br from-blue-400/30 to-purple-400/30 backdrop-blur-xl">
              BV
            </AvatarFallback>
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
            aria-label="Animated waving hand emoji"
            role="img"
          >
            👋
          </motion.span>
        </h1>
        <p className="mb-4 text-center md:text-left dark:text-zinc-400">
          A full-stack developer focused on creating beautiful and functional web and mobile experiences.
        </p>
        <SocialLinks className="mt-2" />
      </div>
    </div>
  </section>
);

export default HeroSection;
