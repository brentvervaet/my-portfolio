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
                        <motion.p
                            initial={{opacity: 0, x: -20}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5}}
                        >
                            I&aptos;m a full-stack development student with a passion for modern web technologies. I focus on
                            writing clean, efficient code and crafting thoughtful designs to deliver seamless and
                            engaging user experiences.
                        </motion.p>
                        <motion.p
                            initial={{opacity: 0, x: -20}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, delay: 0.2}}
                        >
                            Outside of coding, I make music with my band <a href="https://linktr.ee/pinkonred"
                                                                            target="_blank" rel="noopener noreferrer"
                                                                            className="text-red-500 font-bold hover:underline">Pink
                            on Red</a> —whether we&apos;re jamming, performing
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;