// src/components/About.tsx
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
                        <p>
                            I’m a full-stack development student with a passion for modern web technologies. I focus on
                            writing clean, efficient code and crafting thoughtful designs to deliver seamless and
                            engaging user experiences.

                        </p>

                        <p>
                            When I’m not coding, you’ll find me making music with my band, <a
                            href="https://linktr.ee/pinkonred"
                            target="_blank" rel="noopener noreferrer"
                            className="text-red-500 font-bold hover:underline">Pink on Red</a> — whether we’re jamming,
                            playing live shows, or just cracking a cold one with the crew. To unwind, I dive into video
                            games or get lost in a good book. I believe creativity and collaboration are at the heart of
                            both music and software, and I try to bring that energy into everything I do.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;