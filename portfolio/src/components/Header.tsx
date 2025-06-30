'use client';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import SocialLinks from '@/components/SocialsLinks';
import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import { motion } from 'framer-motion';

export default function Header() {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['projects', 'about', 'skills'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
          return;
        }
      }

      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative flex items-center justify-between px-4 pt-6">
      <motion.div whileTap={{ scale: 0.9 }}>
        <Link href="/" className="font-mono text-2xl font-bold">
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <span className="hidden sm:inline">Brent Vervaet</span>
            <span className="inline sm:hidden">BV</span>
          </motion.div>
        </Link>
      </motion.div>

      {/* Mobile menu with Sheet component */}
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <div className="flex w-6 flex-col gap-1">
                <span className="block h-0.5 w-full bg-zinc-800 dark:bg-zinc-200"></span>
                <span className="block h-0.5 w-full bg-zinc-800 dark:bg-zinc-200"></span>
                <span className="block h-0.5 w-full bg-zinc-800 dark:bg-zinc-200"></span>
              </div>
            </Button>
          </SheetTrigger>
        </motion.div>
        <SheetContent side="right">
          <div className="absolute right-4 bottom-4">
            <ThemeToggle />
          </div>

          <SheetTitle />

          <div className="mt-12 flex flex-col items-center space-y-8 font-mono text-lg">
            <motion.div whileTap={{ scale: 0.8 }}>
              <Link
                href="/app#projects"
                onClick={handleLinkClick}
                className={'text-zinc-800 hover:text-red-500 dark:text-zinc-200 dark:hover:text-red-500'}
              >
                Projects
              </Link>
            </motion.div>
            <motion.div whileTap={{ scale: 0.8 }}>
              <Link
                href="/about"
                onClick={handleLinkClick}
                className={`transition ${activeSection === 'about' ? 'text-red-500' : 'text-zinc-800 hover:text-red-500 dark:text-zinc-200 dark:hover:text-red-500'}`}
              >
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
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="#projects"
            className={`transition ${activeSection === 'projects' ? 'text-red-500' : 'text-zinc-600 hover:text-red-500 dark:text-zinc-400 dark:hover:text-red-500'}`}
          >
            Projects
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 210 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/about"
            className={`transition ${activeSection === 'about' ? 'text-red-500' : 'text-zinc-600 hover:text-red-500 dark:text-zinc-400 dark:hover:text-red-500'}`}
          >
            About
          </Link>
        </motion.div>

        <ThemeToggle />
      </div>
    </nav>
  );
}
