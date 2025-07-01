'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ProjectImageCarousel from '@/components/projects/ProjectImageCarousel';
import Link from 'next/link';
import { defaultProjects, Project } from '@/data/projects/projects';

interface ProjectsProps {
  projects?: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects = defaultProjects }) => {
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  const sortedProjects = [...projects].sort((a, b) => {
    if (sortOrder === 'newest') {
      return b.date.getTime() - a.date.getTime();
    } else {
      return a.date.getTime() - b.date.getTime();
    }
  });

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest');
  };

  return (
    <section id="projects" className="relative px-4 py-6">
      {/* Decorative blurred gradient orbs in background */}
      <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl"></div>
      <div className="absolute right-1/4 -bottom-20 h-72 w-72 rounded-full bg-pink-400/20 blur-3xl"></div>

      <div className="relative z-10 container mx-auto">
        <div className="mx-auto w-full max-w-4xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-mono text-2xl font-bold">Projects</h2>
            <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.1 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleSortOrder}
                className="flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-4 text-xs shadow-md backdrop-blur-md transition-all dark:border-white/10 dark:bg-black/20"
                title={sortOrder === 'newest' ? 'Sort by oldest first' : 'Sort by latest first'}
              >
                {sortOrder === 'newest' ? (
                  <>
                    Latest
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-down"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <polyline points="19 12 12 19 5 12"></polyline>
                    </svg>
                  </>
                ) : (
                  <>
                    Oldest
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-up"
                    >
                      <line x1="12" y1="19" x2="12" y2="5"></line>
                      <polyline points="5 12 12 5 19 12"></polyline>
                    </svg>
                  </>
                )}
              </Button>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {sortedProjects.map(project => (
              <motion.div
                whileHover={{ scale: 1.02 }}
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-2 shadow-md backdrop-blur-md transition-all hover:shadow-lg dark:border-white/10 dark:bg-black/20"
              >
                {/*Images*/}
                <div className="border-b border-white/10 py-1">
                  <ProjectImageCarousel images={project.images} />
                </div>

                {/*Content*/}
                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <Link
                      href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="group-hover:text-primary"
                    >
                      <h3 className="font-mono text-lg font-semibold transition">{project.title}</h3>
                    </Link>
                    <span className="text-xs text-zinc-500">
                      {project.date.toLocaleDateString('en-UK', {
                        year: 'numeric',
                        month: 'short',
                      })}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-zinc-400 dark:text-zinc-300">{project.description}</p>
                </div>

                {/*Tags*/}
                <div className="flex-grow px-4 pb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-0.5 text-xs font-normal text-zinc-800 shadow-sm backdrop-blur-sm transition-colors dark:border-white/10 dark:bg-black/5 dark:text-zinc-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/*Links*/}
                <div className="mt-auto flex gap-4 border-t border-white/10 p-4">
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
                          Visit Project
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
