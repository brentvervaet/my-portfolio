'use client';
import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-8">
            <div className="container mx-auto px-4">
                <div className="w-full max-w-4xl mx-auto  ">
                    <div>
                        <h2 className="text-2xl font-bold font-mono">About</h2>
                    </div>
                    <div className="dark:text-zinc-400">
                        <p>
                            I’m a full-stack development student with a passion for modern web technologies. I focus on
                            writing clean, efficient code and crafting thoughtful designs to deliver seamless and
                            engaging user experiences.
                        </p>

                        <p>
                            When I&apos;m not coding, I love to play music with my band, <a
                            href="https://linktr.ee/pinkonred"
                            target="_blank" rel="noopener noreferrer"
                            className="text-red-500 font-bold hover:underline">Pink
                            on Red</a> whether it&apos;s jamming with friends or
                            performing live
                            or cracking a cold one with the boys.
                            If I need to unwind, you can find me playing video
                            games
                            or reading a good book.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;