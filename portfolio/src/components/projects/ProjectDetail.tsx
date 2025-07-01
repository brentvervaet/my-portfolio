'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ProjectImageCarousel from '@/components/projects/ProjectImageCarousel';
import Link from 'next/link';

interface ProjectDetailProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    images: string[];
    link?: string;
    sourceCodeLink?: string;
    date: Date;
    longDescription?: string;
    features?: string[];
    challenges?: string[];
    technologies?: string[];
  };
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
    <main className="relative mx-auto max-w-3xl px-4 py-8">
      {/* Decorative blurred gradient orbs */}
      <div className="absolute -top-20 -left-20 z-0 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"></div>
      <div className="absolute -right-20 -bottom-20 z-0 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center"
        >
          <Link
            href="/#projects"
            className="mr-4 flex items-center text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Projects
          </Link>
        </motion.div>

        <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-black/20">
          {/* Project Images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border-b border-white/10 p-2"
          >
            <ProjectImageCarousel
              images={project.images}
              // className="h-[300px] overflow-hidden rounded-xl md:h-[400px]"
            />
          </motion.div>

          {/* Project Info */}
          <div className="p-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <div className="mb-2 flex items-start justify-between">
                <h1 className="font-mono text-2xl font-bold">{project.title}</h1>
                <span className="text-sm text-zinc-500">
                  {project.date.toLocaleDateString('en-UK', {
                    year: 'numeric',
                    month: 'long',
                  })}
                </span>
              </div>
              <p className="text-zinc-700 dark:text-zinc-300">{project.description}</p>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6"
            >
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <Badge
                    key={tag}
                    className="bg-primary/80 text-primary-foreground items-center rounded-full border border-white/20 px-3 py-0.5 text-xs font-semibold shadow-sm backdrop-blur-md transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* Long Description */}
            {project.longDescription && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-6 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm dark:bg-black/10"
              >
                <h2 className="mb-2 font-mono text-lg font-semibold">About This Project</h2>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">{project.longDescription}</p>
              </motion.div>
            )}

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-6 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm dark:bg-black/10"
              >
                <h2 className="mb-2 font-mono text-lg font-semibold">Key Features</h2>
                <ul className="ml-5 list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-6 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm dark:bg-black/10"
              >
                <h2 className="mb-2 font-mono text-lg font-semibold">Challenges & Solutions</h2>
                <ul className="ml-5 list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mb-6 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm dark:bg-black/10"
              >
                <h2 className="mb-2 font-mono text-lg font-semibold">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="rounded-full bg-white/10 px-3 py-0.5 text-xs backdrop-blur-sm dark:bg-black/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Project Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {project.link && (
                <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border border-white/20 bg-white/5 px-6 shadow-md backdrop-blur-xl transition-all hover:bg-white/10 dark:border-white/10 dark:bg-black/10 dark:hover:bg-black/20"
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Visit Live Project
                    </a>
                  </Button>
                </motion.div>
              )}

              {project.sourceCodeLink && (
                <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border border-white/20 bg-white/5 px-6 shadow-md backdrop-blur-xl transition-all hover:bg-white/10 dark:border-white/10 dark:bg-black/10 dark:hover:bg-black/20"
                  >
                    <a href={project.sourceCodeLink} target="_blank" rel="noopener noreferrer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      Source Code
                    </a>
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
