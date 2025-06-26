// src/app/page.tsx
import Header from '@/components/Header';
import SocialLinks from "@/components/SocialsLinks";
import Skills from "@/components/Skills";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import React from "react";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <main className="max-w-3xl mx-auto px-4 py-12">
            <Header/>
            {/* Hero Section */}
            <section className="py-16 space-y-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <Avatar className="w-24 h-24 border-2">
                        <AvatarImage src="/images/home/brent-vervaet.JPG" alt="Brent Vervaet"/>
                        <AvatarFallback>BV</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-center md:items-start">
                        <h1 className="text-3xl font-bold font-mono">Hi, I&apos;m Brent 👋</h1>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                            A full-stack developer focused on creating beautiful and functional web and mobile
                            experiences.
                        </p>
                        <SocialLinks className="mt-2"/>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <Experience/>

            {/* Skills Section */}
            <Skills/>

            {/* Projects Section */}
            <Projects/>

            {/* About Section */}
            <About/>
        </main>
    );
}