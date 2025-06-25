// src/components/About.tsx
import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

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
                                I'm a student full-stack developer specializing in modern web technologies. My approach
                                combines
                                clean code with thoughtful design to create exceptional user experiences.
                            </p>
                            <p>
                                When I'm not coding, I love to play music, whether it's jamming with friends or
                                performing live
                                or cracking a cold one with the boys. If I need to unwind, you can find me playing video
                                games
                                or reading a good book. I believe in the power of creativity and collaboration, both in
                                music
                                and software development.
                            </p>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default About;