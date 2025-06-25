
import React from 'react';
import {Tabs, TabsList, TabsTrigger, TabsContent} from '@/components/ui/tabs';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';

interface ExperienceItem {
    id: number;
    title: string;
    organization: string;
    period: string;
    description: string;
    skills?: string[];
}

const workExperience: ExperienceItem[] = [
    {
        id: 1,
        title: "Senior Frontend Developer",
        organization: "Tech Solutions Inc.",
        period: "2021 - Present",
        description: "Led development of multiple React applications. Improved performance by 40% through code optimization.",
        skills: ["React", "TypeScript", "Next.js", "Redux"]
    },
    {
        id: 2,
        title: "Frontend Developer",
        organization: "Digital Innovations",
        period: "2018 - 2021",
        description: "Built responsive web applications. Collaborated with design team to implement UI/UX improvements.",
        skills: ["JavaScript", "React", "CSS", "Git"]
    },
    {
        id: 3,
        title: "Junior Web Developer",
        organization: "StartUp Labs",
        period: "2016 - 2018",
        description: "Developed and maintained company website. Created interactive features to enhance user experience.",
        skills: ["HTML", "CSS", "JavaScript", "jQuery"]
    }
];

const education: ExperienceItem[] = [
    {
        id: 1,
        title: "Master of Computer Science",
        organization: "Tech University",
        period: "2014 - 2016",
        description: "Specialized in Web Technologies and User Interface Design."
    },
    {
        id: 2,
        title: "Bachelor of Science in Computer Science",
        organization: "State University",
        period: "2010 - 2014",
        description: "Dean's List. Graduated with honors."
    }
];

const TimelineItem = ({item}: { item: ExperienceItem }) => (
    <div
        className="mb-8 relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200 dark:before:bg-gray-800 after:absolute after:left-[-5px] after:top-2 after:w-3 after:h-3 after:bg-primary after:rounded-full">
        <Card>
            <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <span className="text-sm text-muted-foreground">{item.period}</span>
                </div>
                <CardDescription className="text-md font-medium">{item.organization}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="mb-2">{item.description}</p>
                {item.skills && (
                    <div className="flex flex-wrap gap-1 mt-2">
                        {item.skills.map(skill => (
                            <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    </div>
);

const Experience = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-mono font-bold mb-8">Experience</h2>

                <Tabs defaultValue="work" className="w-full max-w-3xl mx-auto">
                    <TabsList className="grid w-full grid-cols-2 mb-8">
                        <TabsTrigger value="work">Work Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                    </TabsList>

                    <TabsContent value="work" className="space-y-4">
                        <div className="timeline">
                            {workExperience.map(item => (
                                <TimelineItem key={item.id} item={item}/>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="education" className="space-y-4">
                        <div className="timeline">
                            {education.map(item => (
                                <TimelineItem key={item.id} item={item}/>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

export default Experience;