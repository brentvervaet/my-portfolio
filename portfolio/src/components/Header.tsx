// src/components/Header.tsx
'use client';
import {useState, useEffect} from 'react';
import Link from 'next/link';

export default function Header() {
    const [activeSection, setActiveSection] = useState('');

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

    return (
        <nav className="flex items-center justify-between py-4">
            <Link href="/" className="text-2xl font-bold font-mono">Brent Vervaet</Link>

            <div className="flex space-x-6  font-mono">
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
        </nav>
    );
}