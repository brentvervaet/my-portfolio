'use client';
import React, {useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {Tabs, TabsList, TabsTrigger, TabsContent} from '@/components/ui/tabs';
import {Badge} from '@/components/ui/badge';
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

const workExperience: ExperienceItem[] = [
    {
        id: 1,
        title: "Student Software Developer",
        organization: "HOGENT University",
        period: "2022 - Present",
        description: "Software Development Internship",
        responsibilities: [
            "Still a student, but looking for internship opportunities."
        ],
        skills: ["React", "JavaScript", 'Java', "Spring"],
        logo: "/images/home/hogent.png",
        website: "https://www.hogent.be/en/"
    },
    // {
    //     id: 2,
    //     title: "Student Software Developer",
    //     organization: "HOGENT University",
    //     period: "2022 - Present",
    //     description: "Software Development Internship",
    //     responsibilities: [
    //         "Still a student, but looking for internship opportunities."
    //     ],
    //     skills: ["React", "JavaScript", 'Java', "Spring"],
    //     logo: "/images/home/hogent.png",
    //     website: "https://www.hogent.be/en/"
    // },
    // {
    //     id: 3,
    //     title: "Student Software Developer",
    //     organization: "HOGENT University",
    //     period: "2022 - Present",
    //     description: "Software Development Internship",
    //     responsibilities: [
    //         "Still a student, but looking for internship opportunities."
    //     ],
    //     skills: ["React", "JavaScript", 'Java', "Spring"],
    //     logo: "/images/home/hogent.png",
    //     website: "https://www.hogent.be/en/"
    // }
];

const education: ExperienceItem[] = [
    {
        id: 1,
        title: "Bachelor of Science in Applied Informatics",
        organization: "HOGENT University",
        period: "2022 - Present",
        description: "Focus on web and mobile development.",
        skills: [],
        logo: "/images/home/hogent.png",
        website: "https://www.hogent.be/en/"
    },
    {
        id: 2,
        title: "ASO modern languages and sciences",
        organization: "Sint-Lodewijkscollege",
        period: "2012 - 2018",
        description: "Graduated with a focus on science and language.",
        skills: [],
        logo: "/images/home/hogent.png",
        website: "https://www.sintlodewijkscollege.be/"
    }
];

const Experience = () => {
    const [activeTab, setActiveTab] = useState("education");

    const handleTabChange = (value: string) => {
        setActiveTab(value);
    };

    return (
        <div className="py-4 border-0">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-mono font-bold mb-8">Experience</h2>
                <Tabs
                    defaultValue="education"
                    className="w-full max-w-4xl mx-auto"
                    onValueChange={handleTabChange}
                >
                    {/* Education and Work Tabs */}
                    <TabsList
                        className="h-9 items-center justify-center rounded-lg bg-transparant p-1 text-muted-foreground mb-2 grid w-full grid-cols-2">
                        <TabsTrigger
                            value="education"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:dark:shadow-sm disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                        >
                            <motion.span
                                initial={{opacity: 1}}
                                whileHover={{scale: 1.05}}
                                animate={{
                                    fontWeight: activeTab === "education" ? 700 : 400,
                                }}
                            >
                                Education
                            </motion.span>
                        </TabsTrigger>
                        <TabsTrigger
                            value="work"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:dark:shadow-sm disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                        >
                            <motion.span
                                initial={{opacity: 1}}
                                whileHover={{scale: 1.05}}
                                animate={{
                                    fontWeight: activeTab === "work" ? 700 : 400,
                                }}
                            >
                                Work
                            </motion.span>
                        </TabsTrigger>
                    </TabsList>

                    <div className="relative overflow-hidden" style={{minHeight: '300px'}}>
                        <AnimatePresence mode="wait">
                            {activeTab === "education" && (
                                <TabsContent value="education" className="mt-2" asChild>
                                    <motion.div
                                        key="education"
                                        initial={{opacity: 0, x: -20}}
                                        animate={{opacity: 1, x: 0}}
                                        exit={{opacity: 0, x: 20}}
                                        transition={{duration: 0.3}}
                                        className="absolute w-full"
                                    >
                                        <div
                                            className="rounded-xl bg-card text-card-foreground shadow-md dark:bg-zinc-800">
                                            <div className="p-0">
                                                <ul className="ml-10 border-l">
                                                    {education.map(item => (
                                                        <motion.li
                                                            key={item.id}
                                                            className="relative ml-10 py-4"
                                                            initial={{opacity: 0, x: -20}}
                                                            whileInView={{opacity: 1, x: 0}}
                                                            viewport={{once: true}}
                                                            transition={{duration: 0.5, delay: item.id * 0.2}}
                                                        >
                                                            <motion.a
                                                                target="_blank"
                                                                className="absolute -left-16 top-4 flex items-center justify-center rounded-full"
                                                                href={item.website}
                                                                whileHover={{scale: 1.1, rotate: 5}}
                                                                transition={{type: "spring", stiffness: 300}}
                                                            >
                                                                <span
                                                                    className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                                                                    <Image
                                                                        className="aspect-square h-full w-full bg-background object-contain"
                                                                        alt={item.organization}
                                                                        src={item.logo ?? "/placeholder-logo.png"}
                                                                        width={10}
                                                                        height={10}
                                                                    />
                                                                </span>
                                                            </motion.a>
                                                            <div className="flex flex-1 flex-col justify-start gap-1">
                                                                <time className="text-xs text-muted-foreground">
                                                                    <span>{item.period.split(" - ")[0]}</span>
                                                                    <span> - </span>
                                                                    <span>{item.period.split(" - ")[1]}</span>
                                                                </time>
                                                                <h2 className="font-semibold leading-none">{item.organization}</h2>
                                                                <p className="text-sm text-muted-foreground">{item.title}</p>
                                                                <p className="prose pr-8 text-sm dark:prose-invert">{item.description}</p>
                                                            </div>
                                                            {item.skills && item.skills.length > 0 && (
                                                                <div
                                                                    className="mt-2 flex flex-row flex-wrap items-start gap-2">
                                                                    {item.skills.map((skill, idx) => (
                                                                        <motion.div
                                                                            key={skill}
                                                                            initial={{opacity: 0, scale: 0.8}}
                                                                            animate={{opacity: 1, scale: 1}}
                                                                            transition={{delay: 0.3 + (idx * 0.05)}}
                                                                            whileHover={{scale: 1.1, y: -2}}
                                                                        >
                                                                            <Badge
                                                                                className="items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80"
                                                                            >
                                                                                {skill}
                                                                            </Badge>
                                                                        </motion.div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </motion.div>
                                </TabsContent>
                            )}

                            {activeTab === "work" && (
                                <TabsContent value="work" className="mt-2" asChild>
                                    <motion.div
                                        key="work"
                                        initial={{opacity: 0, x: 20}}
                                        animate={{opacity: 1, x: 0}}
                                        exit={{opacity: 0, x: -20}}
                                        transition={{duration: 0.3}}
                                        className="absolute w-full"
                                    >
                                        <div
                                            className="rounded-xl border dark:border-0 bg-card text-card-foreground shadow-md dark:bg-zinc-800">
                                            <div className="p-0">
                                                <ul className="ml-10 border-l">
                                                    {workExperience.map((item, index) => (
                                                        <motion.li
                                                            key={item.id}
                                                            className="relative ml-10 py-4"
                                                            initial={{opacity: 0, x: 20}}
                                                            animate={{opacity: 1, x: 0}}
                                                            transition={{duration: 0.5, delay: index * 0.2}}
                                                        >
                                                            <motion.a
                                                                target="_blank"
                                                                className="absolute -left-16 top-4 flex items-center justify-center rounded-full"
                                                                href={item.website}
                                                                whileHover={{scale: 1.1, rotate: 5}}
                                                                transition={{type: "spring", stiffness: 300}}
                                                            >
                                                                <span
                                                                    className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                                                                    <Image
                                                                        className="aspect-square h-full w-full bg-background object-contain"
                                                                        alt={item.organization}
                                                                        src={item.logo ?? "/placeholder-logo.png"}
                                                                        width={10}
                                                                        height={10}
                                                                    />
                                                                </span>
                                                            </motion.a>
                                                            <div className="flex flex-1 flex-col justify-start gap-1">
                                                                <time className="text-xs text-muted-foreground">
                                                                    <span>{item.period.split(" - ")[0]}</span>
                                                                    <span> - </span>
                                                                    <span>{item.period.split(" - ")[1]}</span>
                                                                </time>
                                                                <h2 className="font-semibold leading-none">{item.organization}</h2>
                                                                <p className="text-sm text-muted-foreground">{item.title}</p>
                                                                <ul className="ml-4 list-outside list-disc">
                                                                    {item.responsibilities?.map((responsibility, idx) => (
                                                                        <motion.li
                                                                            key={idx}
                                                                            className="prose pr-8 text-sm dark:prose-invert"
                                                                            initial={{opacity: 0, x: 5}}
                                                                            animate={{opacity: 1, x: 0}}
                                                                            transition={{delay: 0.3 + (idx * 0.1)}}
                                                                        >
                                                                            {responsibility}
                                                                        </motion.li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                            {item.skills && item.skills.length > 0 && (
                                                                <div
                                                                    className="mt-2 flex flex-row flex-wrap items-start gap-2">
                                                                    {item.skills.map((skill, idx) => (
                                                                        <motion.div
                                                                            key={skill}
                                                                            initial={{opacity: 0, scale: 0.8}}
                                                                            animate={{opacity: 1, scale: 1}}
                                                                            transition={{delay: 0.5 + (idx * 0.05)}}
                                                                            whileHover={{scale: 1.1, y: -2}}
                                                                        >
                                                                            <Badge
                                                                                className="items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80"
                                                                            >
                                                                                {skill}
                                                                            </Badge>
                                                                        </motion.div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </motion.div>
                                </TabsContent>
                            )}
                        </AnimatePresence>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default Experience;