// src/components/ThemeProvider.tsx
'use client';
import {useEffect} from 'react';

export default function ThemeProvider({children}: { children: React.ReactNode }) {
    useEffect(() => {
        // Initialize theme on first load
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    return <>{children}</>;
}