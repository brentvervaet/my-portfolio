'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ExperienceItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  responsibilities?: string[];
  skills?: string[];
  logo?: string;
  website?: string;
  projectLink?: {
    url: string;
    name: string;
  };
}

//EDUCATION
const education: ExperienceItem[] = [
  // Your existing education data
  {
    id: 1,
    title: 'Bachelor of Science in Applied Informatics',
    organization: 'HOGENT University',
    period: '2022 - Present',
    description: 'Focus on web and mobile enterprise development.',
    logo: '/images/home/experience/hogent.png',
    website: 'https://www.hogent.be/opleidingen/bachelors/toegepaste-informatica/',
  },
  {
    id: 4,
    title: 'ASO modern languages and sciences',
    organization: 'Sint-Lodewijkscollege',
    period: '2012 - 2018',
    description: 'Diploma in modern languages and sciences with four hours of mathematics per week.',
    logo: '/images/home/experience/stlod.png',
    website: 'https://www.sintlodewijkscollege.be/',
  },
];

//WORK
const workExperience: ExperienceItem[] = [
  // Your existing work experience data
  {
    id: 1,
    title: 'Student Software Developer',
    organization: 'HOGENT',
    period: '2022 - Present',
    description: 'Software Development Internship',
    responsibilities: ['Still a student, but looking for internship opportunities.'],
    skills: ['React', 'JS', 'Java', 'Spring'],
    logo: '/images/home/experience/hogent.png',
    website: 'https://www.hogent.be/en/',
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState('education');

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="relative px-4 py-6">
      {/* Decorative blurred gradient orbs in background */}
      {/*TODO*/}
      {/*<motion.div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"></motion.div>*/}
      {/*<motion.div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-purple-400/20 blur-2xl"></motion.div>*/}

      <div className="relative container mx-auto">
        <h2 className="mb-8 font-mono text-2xl font-bold">Experience</h2>
        <Tabs defaultValue="education" className="mx-auto w-full max-w-4xl" onValueChange={handleTabChange}>
          {/* Glass-style TabsList */}
          <TabsList className="mb-2 grid h-12 w-full grid-cols-2 items-center justify-center rounded-2xl border border-white/20 bg-white/10 p-1 shadow-md backdrop-blur-xl dark:border-white/10 dark:bg-black/10">
            {/*education*/}
            <TabsTrigger
              value="education"
              className="ring-offset-background data-[state=active]:text-foreground inline-flex items-center justify-center rounded-xl px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white/20 data-[state=active]:shadow data-[state=active]:backdrop-blur-lg dark:data-[state=active]:bg-white/10"
            >
              <span className={activeTab === 'education' ? 'font-bold' : ''}>Education</span>
            </TabsTrigger>

            {/*work*/}
            <TabsTrigger
              value="work"
              className="ring-offset-background data-[state=active]:text-foreground inline-flex items-center justify-center rounded-xl px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white/20 data-[state=active]:shadow data-[state=active]:backdrop-blur-lg dark:data-[state=active]:bg-white/10"
            >
              <span className={activeTab === 'work' ? 'font-bold' : ''}>Work</span>
            </TabsTrigger>
          </TabsList>

          <div className="relative">
            <TabsContent value="education" asChild>
              <div key="education" className="mt-2">
                <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-md backdrop-blur-xl dark:border-white/10 dark:bg-black/20">
                  <div className="p-0">
                    <ul className="ml-10 border-l border-white/20 dark:border-white/10">
                      {education.map(item => (
                        <li key={item.id} className="relative ml-10 py-4 transition-all">
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            target="_blank"
                            className="absolute top-4 -left-16 flex items-center justify-center rounded-full"
                            href={item.website}
                          >
                            <span className="relative flex size-12 shrink-0 overflow-hidden rounded-full border border-white/30 shadow-sm transition-all hover:shadow-md">
                              <Image
                                className="bg-background aspect-square h-full w-full object-contain"
                                alt={item.organization}
                                src={item.logo ?? '/placeholder-logo.png'}
                                width={1000}
                                height={1000}
                              />
                            </span>
                          </motion.a>
                          <div className="flex flex-1 flex-col justify-start gap-1">
                            <time className="text-muted-foreground text-xs">
                              <span>{item.period.split(' - ')[0]}</span>
                              <span> - </span>
                              <span>{item.period.split(' - ')[1]}</span>
                            </time>
                            <h2 className="leading-none font-semibold">{item.organization}</h2>
                            <p className="text-muted-foreground text-sm">{item.title}</p>
                            <p className="prose dark:prose-invert pr-8 text-sm">{item.description}</p>
                          </div>

                          {item.skills && item.skills.length > 0 && (
                            <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
                              {item.skills.map(skill => (
                                <Badge
                                  key={skill}
                                  className="bg-primary/80 text-primary-foreground hover:bg-primary/70 items-center rounded-full border border-white/20 px-3 py-0.5 text-xs font-semibold shadow-sm backdrop-blur-md transition-colors"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="work" asChild>
              <div key="work" className="mt-2">
                <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-md backdrop-blur-xl dark:border-white/10 dark:bg-black/20">
                  <div className="p-0">
                    <ul className="ml-10 border-l border-white/20 dark:border-white/10">
                      {workExperience.map(item => (
                        <li key={item.id} className="relative ml-10 py-4 transition-all">
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            target="_blank"
                            className="absolute top-4 -left-16 flex items-center justify-center rounded-full"
                            href={item.website}
                          >
                            <span className="relative flex size-12 shrink-0 overflow-hidden rounded-full border border-white/30 shadow-sm transition-all hover:shadow-md">
                              <Image
                                className="bg-background aspect-square h-full w-full object-contain"
                                alt={item.organization}
                                src={item.logo ?? '/placeholder-logo.png'}
                                width={1000}
                                height={1000}
                              />
                            </span>
                          </motion.a>
                          <div className="flex flex-1 flex-col justify-start gap-1">
                            <time className="text-muted-foreground text-xs">
                              <span>{item.period.split(' - ')[0]}</span>
                              <span> - </span>
                              <span>{item.period.split(' - ')[1]}</span>
                            </time>
                            <h2 className="leading-none font-semibold">{item.organization}</h2>
                            <p className="text-muted-foreground text-sm">{item.title}</p>
                            <ul className="ml-4 list-outside list-disc">
                              {item.responsibilities?.map((responsibility, idx) => (
                                <li key={`${item.id}-resp-${idx}`} className="prose dark:prose-invert pr-8 text-sm">
                                  {responsibility}
                                </li>
                              ))}
                            </ul>
                          </div>
                          {item.skills && item.skills.length > 0 && (
                            <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
                              {item.skills.map(skill => (
                                <Badge
                                  key={skill}
                                  className="bg-primary/80 text-primary-foreground hover:bg-primary/70 items-center rounded-full border border-white/20 px-3 py-0.5 text-xs font-semibold shadow-sm backdrop-blur-md transition-colors"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Experience;
