'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

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
    id: 2,
    title: 'Interior design',
    organization: 'LUCA School of Arts',
    period: '2020 - 2021',
    description: 'Did one and a half years of interior design before switching to software development.',
    logo: '/images/home/experience/luca.png',
    website: 'https://www.luca-arts.be/nl/interieurvormgeving-campus-brussel-sint-lukas-bachelor',
  },
  {
    id: 3,
    title: 'Architecture',
    organization: 'KU Leuven',
    period: '2018 - 2020',
    description: 'Did one and a half years of architecture before switching to interior design.',
    logo: '/images/home/experience/ku-leuven.png',
    website: 'https://arch.kuleuven.be',
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
  {
    id: 1,
    title: 'Student Software Developer',
    organization: 'HOGENT',
    period: '2022 - Present',
    description: 'Software Development Internship',
    responsibilities: ['Still a student, but looking for internship opportunities.'],
    skills: ['React', 'JS', 'Java', 'Spring'],
    logo: '/images/home/hogent.png',
    website: 'https://www.hogent.be/en/',
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState('education');

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="border-0 py-4">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 font-mono text-2xl font-bold">Experience</h2>
        <Tabs defaultValue="education" className="mx-auto w-full max-w-4xl" onValueChange={handleTabChange}>
          {/* Education and Work Tabs */}
          <TabsList className="bg-transparant text-muted-foreground mb-2 grid h-9 w-full grid-cols-2 items-center justify-center rounded-lg p-1">
            {/*education*/}
            <TabsTrigger
              value="education"
              className="ring-offset-background focus-visible:ring-ring data-[state=active]:bg-background data-[state=active]:text-foreground inline-flex items-center justify-center rounded-md px-3 py-1 text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow focus-visible:dark:shadow-sm"
            >
              <span className={activeTab === 'education' ? 'font-bold' : ''}>Education</span>
            </TabsTrigger>

            {/*work*/}
            <TabsTrigger
              value="work"
              className="ring-offset-background focus-visible:ring-ring data-[state=active]:bg-background data-[state=active]:text-foreground inline-flex items-center justify-center rounded-md px-3 py-1 text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow focus-visible:dark:shadow-sm"
            >
              <span className={activeTab === 'work' ? 'font-bold' : ''}>Work</span>
            </TabsTrigger>
          </TabsList>

          <div className="relative" style={{ minHeight: '300px' }}>
            <TabsContent value="education" className="mt-2">
              <div className="bg-card text-card-foreground rounded-xl shadow-md dark:bg-zinc-800">
                <div className="p-0">
                  <ul className="ml-10 border-l">
                    {education.map(item => (
                      <li key={item.id} className="relative ml-10 py-4">
                        <a
                          target="_blank"
                          className="absolute top-4 -left-16 flex items-center justify-center rounded-full"
                          href={item.website}
                        >
                          <span className="relative flex size-12 shrink-0 overflow-hidden rounded-full border">
                            <Image
                              className="bg-background aspect-square h-full w-full object-contain"
                              alt={item.organization}
                              src={item.logo ?? '/placeholder-logo.png'}
                              width={1000}
                              height={1000}
                            />
                          </span>
                        </a>
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
                                className="bg-primary text-primary-foreground hover:bg-primary/80 items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold shadow transition-colors"
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
            </TabsContent>

            <TabsContent value="work" className="mt-2">
              <div className="bg-card text-card-foreground rounded-xl border shadow-md dark:border-0 dark:bg-zinc-800">
                <div className="p-0">
                  <ul className="ml-10 border-l">
                    {workExperience.map(item => (
                      <li key={item.id} className="relative ml-10 py-4">
                        <a
                          target="_blank"
                          className="absolute top-4 -left-16 flex items-center justify-center rounded-full"
                          href={item.website}
                        >
                          <span className="relative flex size-12 shrink-0 overflow-hidden rounded-full border">
                            <Image
                              className="bg-background aspect-square h-full w-full object-contain"
                              alt={item.organization}
                              src={item.logo ?? '/placeholder-logo.png'}
                              width={10}
                              height={10}
                            />
                          </span>
                        </a>
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
                                className="bg-primary text-primary-foreground hover:bg-primary/80 items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold shadow transition-colors"
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
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Experience;
