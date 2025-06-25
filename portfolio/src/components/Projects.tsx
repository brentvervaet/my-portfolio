// src/components/Projects.tsx
import React from 'react';
import {Card, CardHeader, CardTitle, CardDescription, CardFooter} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

interface Project {
    title: string;
    description: string;
    tags: string[];
    image: string;
}

interface ProjectsProps {
    projects?: Project[];
}

const defaultProjects: Project[] = [
    {
        title: "Project 1",
        description: "A brief description of this amazing project and the technologies used.",
        tags: ["React", "TypeScript", "Tailwind"],
        image: "/placeholder.jpg"
    },
    {
        title: "Project 2",
        description: "Another amazing project with different technologies and approaches.",
        tags: ["Next.js", "Node.js", "MongoDB"],
        image: "/placeholder.jpg"
    },
    {
        title: "Project 3",
        description: "A third project showcasing my diverse skill set and problem-solving abilities.",
        tags: ["React Native", "Firebase", "Redux"],
        image: "/placeholder.jpg"
    }
];

const Projects: React.FC<ProjectsProps> = ({projects = defaultProjects}) => {
    return (
        <section id="projects" className="py-8">
            <div className="container mx-auto px-4">
                <div className="w-full max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold font-mono mb-6">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project, i) => (
                            <Card key={i} className="overflow-hidden group hover:shadow-md transition-all duration-300">
                                <div className="aspect-video bg-zinc-100 dark:bg-zinc-800 overflow-hidden border-b">
                                    {/* Project image */}
                                    <div
                                        className="h-full w-full flex items-center justify-center text-sm text-zinc-500">
                                        Project Image
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle
                                        className="font-mono group-hover:text-red-500 transition">{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                                        ))}
                                    </div>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;