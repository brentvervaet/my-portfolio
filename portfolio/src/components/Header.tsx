// src/components/Header.tsx
'use client';
import {useState, useEffect} from 'react';
import Link from 'next/link';

export default function Header() {
    const [activeSection, setActiveSection] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['projects', 'skills', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && scrollPosition >= element.offsetTop &&
                    scrollPosition < element.offsetTop + element.offsetHeight) {
                    setActiveSection(section);
                    return;
                }
            }

            setActiveSection('');
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu when clicking a link
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="relative flex items-center justify-between py-4">
            <Link href="/" className="text-2xl font-bold font-mono">Brent Vervaet</Link>

            {/* Hamburger button for mobile */}
            <button
                className="md:hidden z-20 focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <div className="w-6 flex flex-col gap-1">
                    <span
                        className={`block h-0.5 w-full bg-zinc-800 dark:bg-zinc-200 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span
                        className={`block h-0.5 w-full bg-zinc-800 dark:bg-zinc-200 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span
                        className={`block h-0.5 w-full bg-zinc-800 dark:bg-zinc-200 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </div>
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-6 text-sm font-mono">
                <Link
                    href="#projects"
                    className={`transition ${activeSection === 'projects' ? 'text-red-500' : 'text-zinc-600 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-500'}`}
                >
                    Projects
                </Link>
                <Link
                    href="#skills"
                    className={`transition ${activeSection === 'skills' ? 'text-red-500' : 'text-zinc-600 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-500'}`}
                >
                    Skills
                </Link>
                <Link
                    href="#contact"
                    className={`transition ${activeSection === 'contact' ? 'text-red-500' : 'text-zinc-600 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-500'}`}
                >
                    Contact
                </Link>
            </div>

            {/* Mobile navigation - full screen overlay */}
            <div
                className={`fixed inset-0 z-10 bg-white dark:bg-zinc-900 flex flex-col items-center justify-center transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col items-center space-y-8 text-lg font-mono">
                    <Link
                        href="#projects"
                        onClick={handleLinkClick}
                        className={`transition ${activeSection === 'projects' ? 'text-red-500' : 'text-zinc-800 dark:text-zinc-200 hover:text-red-500 dark:hover:text-red-500'}`}
                    >
                        Projects
                    </Link>
                    <Link
                        href="#skills"
                        onClick={handleLinkClick}
                        className={`transition ${activeSection === 'skills' ? 'text-red-500' : 'text-zinc-800 dark:text-zinc-200 hover:text-red-500 dark:hover:text-red-500'}`}
                    >
                        Skills
                    </Link>
                    <Link
                        href="#contact"
                        onClick={handleLinkClick}
                        className={`transition ${activeSection === 'contact' ? 'text-red-500' : 'text-zinc-800 dark:text-zinc-200 hover:text-red-500 dark:hover:text-red-500'}`}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}