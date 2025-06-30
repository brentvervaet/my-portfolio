'use client';
import React from 'react';

const Page = () => {
  return (
    <main className="mx-auto max-w-3xl px-4 py-4">
      <section id="about" className="py-8">
        <div className="container mx-auto">
          <div className="mx-auto w-full max-w-4xl">
            <h1 className="mb-8 font-mono text-3xl font-bold">About Me</h1>
            <div className="space-y-6 dark:text-zinc-400">
              <p className="text-lg">
                I&apos;m a full-stack development student with a passion for modern web technologies. I focus on writing
                clean, efficient code and crafting thoughtful designs to deliver seamless and engaging user experiences.
              </p>

              <h3 className="font-mono text-xl font-bold text-zinc-900 dark:text-white">Background</h3>
              <p>
                My journey into web development began with a curiosity about how digital experiences are built.
                I&apos;ve since developed a strong foundation in both frontend and backend technologies, with a
                particular interest in React, JS, Java & Spring.
              </p>

              <h3 className="font-mono text-xl font-bold text-zinc-900 dark:text-white">Outside of Coding</h3>
              <p>
                When I&apos;m not coding, I love to play music with my band,{' '}
                <a
                  href="https://linktr.ee/pinkonred"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-red-500 hover:underline"
                >
                  Pink on Red
                </a>{' '}
                whether it&apos;s jamming with friends or performing live. Music has always been a creative outlet that
                complements my technical work.
              </p>

              <p>
                I also enjoy cracking a cold one with the boys, playing video games, and reading a good book to unwind.
                These activities help me maintain a balanced lifestyle and often inspire fresh perspectives that I bring
                back to my work.
              </p>

              <h3 className="font-mono text-xl font-bold text-zinc-900 dark:text-white">My Approach</h3>
              <p>
                I believe in creating solutions that are not only technically sound but also user-focused and
                accessible. Every project is an opportunity to learn something new and push my skills further.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
