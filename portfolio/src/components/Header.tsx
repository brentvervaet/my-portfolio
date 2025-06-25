// src/components/Header.tsx
'use client';
import {useState, useEffect} from 'react';
import Link from 'next/link';
import SocialLinks from "@/components/SocialsLinks";
import ThemeToggle from "@/components/ThemeToggle";
import {Button} from "@/components/ui/button";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";

export default function Header() {
    const [activeSection, setActiveSection] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['projects', 'about', 'skills'];
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

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="relative flex items-center justify-between py-4">
            <Link href="/" className="text-2xl font-bold font-mono">
                <span className="sm:inline hidden">Brent Vervaet</span>
                <span className="sm:hidden inline">BV</span>
            </Link>

            {/* Mobile menu with Sheet component */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <div className="w-6 flex flex-col gap-1">
                            <span className="block h-0.5 w-full bg-zinc-800 dark:bg-zinc-200"></span>
                            <span className="block h-0.5 w-full bg-zinc-800 dark:bg-zinc-200"></span>
                            <span className="block h-0.5 w-full bg-zinc-800 dark:bg-zinc-200"></span>
                        </div>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <div className="flex flex-col items-center space-y-8 text-lg font-mono mt-12">
                        <Link
                            href="#projects"
                            onClick={handleLinkClick}
                            className={`transition ${activeSection === 'projects' ? 'text-red-500' : 'text-zinc-800 dark:text-zinc-200 hover:text-red-500 dark:hover:text-red-500'}`}
                        >
                            Projects
                        </Link>
                        <Link
                            href="#about"
                            onClick={handleLinkClick}
                            className={`transition ${activeSection === 'about' ? 'text-red-500' : 'text-zinc-800 dark:text-zinc-200 hover:text-red-500 dark:hover:text-red-500'}`}
                        >
                            About
                        </Link>
                        {/* Theme toggle */}
                        <ThemeToggle/>
                        {/* Social links */}
                        <SocialLinks/>
                    </div>
                </SheetContent>
            </Sheet>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-6 text-sm font-mono">
                <Link
                    href="#projects"
                    className={`transition ${activeSection === 'projects' ? 'text-red-500' : 'text-zinc-600 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-500'}`}
                >
                    Projects
                </Link>
                <Link
                    href="#about"
                    className={`transition ${activeSection === 'about' ? 'text-red-500' : 'text-zinc-600 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-500'}`}
                >
                    About
                </Link>
                <ThemeToggle/>
            </div>
        </nav>
    );
}