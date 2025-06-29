// Update in src/components/About.tsx
'use client';
import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-8">
            <div className="container mx-auto px-4">
                <div className="w-full max-w-4xl mx-auto">
                    <div>
                        <h2 className="text-2xl font-mono font-bold mb-4">About</h2>
                    </div>
                    <div className="space-y-4 text-zinc-600 dark:text-zinc-400">

                        I&apos;m a full-stack development student with a passion for modern web technologies. I focus on
                        writing clean, efficient code and crafting thoughtful designs to deliver seamless and
                        engaging user experiences.

                        Outside of coding, I make music with my band <a href="https://linktr.ee/pinkonred"
                                                                        target="_blank" rel="noopener noreferrer"
                                                                        className="text-red-500 font-bold hover:underline">Pink
                        on Red</a> —whether we&apos;re jamming, performing
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;