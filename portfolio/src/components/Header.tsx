'use client';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import SocialLinks from '@/components/SocialsLinks';
import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative z-100 flex items-center justify-between px-4 pt-6">
      <motion.div whileTap={{ scale: 0.9 }}>
        <Link href="/" className="font-mono text-2xl font-bold">
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="hidden sm:inline">Brent Vervaet</span>
            <span className="inline sm:hidden">BV</span>
          </motion.div>
        </Link>
      </motion.div>

      {/* Mobile menu with Sheet component */}
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        {!isMenuOpen && (
          <SheetTrigger asChild>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="md:hidden">
              <Menu className="size-lg h-6 w-6" />
            </motion.button>
          </SheetTrigger>
        )}

        <SheetContent
          side="right"
          className="border-l border-white/20 bg-white/10 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-black/20"
        >
          <div className="absolute right-4 bottom-4">
            <ThemeToggle />
          </div>

          <SheetTitle />

          <div className="mt-12 flex flex-col items-center space-y-8 font-mono text-lg">
            <motion.div whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }}>
              <Link href="/#projects" onClick={handleLinkClick} className="px-4 py-2">
                Projects
              </Link>
            </motion.div>
            <motion.div whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }}>
              <Link href="/about" onClick={handleLinkClick} className="px-4 py-2">
                About
              </Link>
            </motion.div>

            {/* Social links */}
            <SocialLinks showResumeButton={false} />
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop navigation */}
      <div className="hidden items-center space-x-6 font-mono text-sm md:flex">
        <motion.div initial={{ opacity: 0, x: 300 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link href="#projects" className="text-zinc-600 dark:text-zinc-400">
              Projects
            </Link>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 210 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link href="/about" className="text-zinc-600 dark:text-zinc-400">
              About
            </Link>
          </motion.div>
        </motion.div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
