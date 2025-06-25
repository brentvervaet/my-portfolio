import React from 'react';
import {Tabs, TabsList, TabsTrigger, TabsContent} from '@/components/ui/tabs';
import {Badge} from '@/components/ui/badge';

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
        skills: ["React", "TypeScript", "JavaScript"],
        logo: "/hogent-logo.png"
    }
];

const education: ExperienceItem[] = [
    {
        id: 1,
        title: "Bachelor of Science in Computer Science",
        organization: "HOGENT University",
        period: "2022 - Present",
        description: "Mobile Enterprise Development",
        logo: "/hogent-logo.png"
    },
    {
        id: 2,
        title: "Bachelor of Science in Applied Informatics",
        organization: "HOGENT University",
        period: "2019 - 2022",
        description: "Focus on web and mobile development.",
        skills: ["JavaScript", "React", "Node.js", "Java", "Spring"],
        logo: "/hogent-logo.png"
    }
];

const Experience = () => {
    return (
        <section className="py-4">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-mono font-bold mb-8">Experience</h2>

                <Tabs defaultValue="education" className="w-full max-w-4xl mx-auto">
                    <TabsList
                        className="h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground mb-2 grid w-full grid-cols-2">
                        <TabsTrigger
                            value="education"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                        >
                            Education
                        </TabsTrigger>
                        <TabsTrigger
                            value="work"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                        >
                            Work
                        </TabsTrigger>

                    </TabsList>

                    <TabsContent value="work" className="mt-2">
                        <div className="rounded-xl border bg-card text-card-foreground shadow">
                            <div className="p-0">
                                <ul className="ml-10 border-l">
                                    {workExperience.map(item => (
                                        <li key={item.id} className="relative ml-10 py-4">
                                            <a
                                                target="_blank"
                                                className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
                                                href={item.website}
                                            >
                                                        <span
                                                            className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                                                            <img
                                                                className="aspect-square h-full w-full bg-background object-contain"
                                                                alt={item.organization}
                                                                src={item.logo || "/placeholder-logo.png"}
                                                            />
                                                        </span>
                                            </a>
                                            <div className="flex flex-1 flex-col justify-start gap-1">
                                                <time className="text-xs text-muted-foreground">
                                                    <span>{item.period.split(" - ")[0]}</span>
                                                    <span> - </span>
                                                    <span>{item.period.split(" - ")[1]}</span>
                                                </time>
                                                <h2 className="font-semibold leading-none">{item.organization}</h2>
                                                <p className="text-sm text-muted-foreground">{item.title}</p>
                                                <ul className="ml-4 list-outside list-disc">
                                                    {item.responsibilities?.map((responsibility, index) => (
                                                        <li key={index}
                                                            className="prose pr-8 text-sm dark:prose-invert">
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

                    <TabsContent value="education" className="mt-2">
                        <div className="rounded-xl border bg-card text-card-foreground shadow">
                            <div className="p-0">
                                <ul className="ml-10 border-l">
                                    {education.map(item => (
                                        <li key={item.id} className="relative ml-10 py-4">
                                            <a
                                                target="_blank"
                                                className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
                                                href={item.website}
                                            >
                                                        <span
                                                            className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                                                            <img
                                                                className="aspect-square h-full w-full bg-background object-contain"
                                                                alt={item.organization}
                                                                src={item.logo || "/placeholder-logo.png"}
                                                            />
                                                        </span>
                                            </a>
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
                </Tabs>
            </div>
        </section>
    );
};

export default Experience;