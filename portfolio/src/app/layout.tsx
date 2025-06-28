// src/app/layout.tsx
'use client'
import type {Metadata} from 'next';
import { motion, AnimatePresence } from 'motion/react';
import {Inter} from 'next/font/google';
import './globals.css';
import Footer from "@/components/Footer";
import ThemeProvider from '@/components/ThemeProvider';
import React from "react";

const inter = Inter({subsets: ['latin']});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="scroll-smooth">
        <body className={`${inter.className} bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-white antialiased`}>
        <ThemeProvider>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </div>
            <Footer/>
        </ThemeProvider>
        </body>
        </html>
    );
}