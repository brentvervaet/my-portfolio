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
    <div className="py-4 border-0">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-mono font-bold mb-8">Experience</h2>
        <Tabs defaultValue="education" className="w-full max-w-4xl mx-auto" onValueChange={handleTabChange}>
          {/* Education and Work Tabs */}
          <TabsList className="h-9 items-center justify-center rounded-lg bg-transparant p-1 text-muted-foreground mb-2 grid w-full grid-cols-2">
            {/*education*/}
            <TabsTrigger
              value="education"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:dark:shadow-sm disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
            >
              <span className={activeTab === 'education' ? 'font-bold' : ''}>Education</span>
            </TabsTrigger>

            {/*work*/}
            <TabsTrigger
              value="work"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:dark:shadow-sm disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
            >
              <span className={activeTab === 'work' ? 'font-bold' : ''}>Work</span>
            </TabsTrigger>
          </TabsList>

          <div className="relative" style={{ minHeight: '300px' }}>
            <TabsContent value="education" className="mt-2">
              <div className="rounded-xl bg-card text-card-foreground shadow-md dark:bg-zinc-800">
                <div className="p-0">
                  <ul className="ml-10 border-l">
                    {education.map(item => (
                      <li key={item.id} className="relative ml-10 py-4">
                        <a
                          target="_blank"
                          className="absolute -left-16 top-4 flex items-center justify-center rounded-full"
                          href={item.website}
                        >
                          <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                            <Image
                              className="aspect-square h-full w-full bg-background object-contain"
                              alt={item.organization}
                              src={item.logo ?? '/placeholder-logo.png'}
                              width={1000}
                              height={1000}
                            />
                          </span>
                        </a>
                        <div className="flex flex-1 flex-col justify-start gap-1">
                          <time className="text-xs text-muted-foreground">
                            <span>{item.period.split(' - ')[0]}</span>
                            <span> - </span>
                            <span>{item.period.split(' - ')[1]}</span>
                          </time>
                          <h2 className="font-semibold leading-none">{item.organization}</h2>
                          <p className="text-sm text-muted-foreground">{item.title}</p>
                          <p className="prose pr-8 text-sm dark:prose-invert">{item.description}</p>
                        </div>
                        {item.skills && item.skills.length > 0 && (
                          <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
                            {item.skills.map(skill => (
                              <Badge
                                key={skill}
                                className="items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80"
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
              <div className="rounded-xl border dark:border-0 bg-card text-card-foreground shadow-md dark:bg-zinc-800">
                <div className="p-0">
                  <ul className="ml-10 border-l">
                    {workExperience.map(item => (
                      <li key={item.id} className="relative ml-10 py-4">
                        <a
                          target="_blank"
                          className="absolute -left-16 top-4 flex items-center justify-center rounded-full"
                          href={item.website}
                        >
                          <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                            <Image
                              className="aspect-square h-full w-full bg-background object-contain"
                              alt={item.organization}
                              src={item.logo ?? '/placeholder-logo.png'}
                              width={10}
                              height={10}
                            />
                          </span>
                        </a>
                        <div className="flex flex-1 flex-col justify-start gap-1">
                          <time className="text-xs text-muted-foreground">
                            <span>{item.period.split(' - ')[0]}</span>
                            <span> - </span>
                            <span>{item.period.split(' - ')[1]}</span>
                          </time>
                          <h2 className="font-semibold leading-none">{item.organization}</h2>
                          <p className="text-sm text-muted-foreground">{item.title}</p>
                          <ul className="ml-4 list-outside list-disc">
                            {item.responsibilities?.map((responsibility, idx) => (
                              <li key={`${item.id}-resp-${idx}`} className="prose pr-8 text-sm dark:prose-invert">
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
                                className="items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80"
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
