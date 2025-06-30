'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Page = () => {
  return (
    <main className="mx-auto max-w-3xl p-10">
      <div className="container mx-auto">
        <div className="mx-auto w-full max-w-4xl">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-mono text-3xl font-bold">About Me</h1>
              <p className="dark:text-zinc-400">
                I&apos;m a full-stack development student with a passion for modern web technologies. I focus on writing
                clean, efficient code and crafting thoughtful designs to deliver seamless and engaging user experiences.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-mono text-xl font-bold">Background</h3>
              <p className="dark:text-zinc-400">
                My journey into web development began with a curiosity about how digital experiences are built.
                I&apos;ve since developed a strong foundation in both frontend and backend technologies, with a
                particular interest in React, JS, Java & Spring.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-mono text-xl font-bold text-zinc-900 dark:text-white">Outside of Coding</h3>
              <p className="dark:text-zinc-400">
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
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="dark:text-zinc-400"
            >
              I also enjoy playing video games or reading a good book to unwind. These activities help me maintain a
              balanced lifestyle and often inspire fresh perspectives that I bring back to my work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="pb-4"
            >
              <h3 className="font-mono text-xl font-bold text-zinc-900 dark:text-white">My Approach</h3>
              <p className="dark:text-zinc-400">
                I believe in creating solutions that are not only technically sound but also user-focused and
                accessible. Every project is an opportunity to learn something new and push my skills further.
              </p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="pt-4 text-center text-sm font-light dark:text-zinc-400"
            >
              Don&apos;t hesitate to reach out if you want to collaborate on a project or discuss ideas. I&apos;m always
              open to new opportunities and connections!
            </motion.p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
