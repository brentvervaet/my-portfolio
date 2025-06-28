// src/components/ProjectDetail.tsx
'use client';
import React from 'react';
import {useParams, useRouter} from 'next/navigation';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import Image from 'next/image';

interface Project {
    title: string;
    description: string;
    tags: string[];
    images: string[];
    link?: string;
    sourceCodeLink?: string;
    date: Date;
}

interface ProjectDetailProps {
    projects: Project[];
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({projects}) => {
    const params = useParams();
    const router = useRouter();

    // Access the id from params with proper typing
    const projectId = params?.id;

    console.log("ProjectID from URL:", projectId);
    console.log("Projects array:", projects);

    // Check if projects is available
    if (!projects || projects.length === 0) {
        return <div className="container mx-auto px-4 py-16">No projects available</div>;
    }

    // Check if projectId exists
    if (!projectId) {
        return <div className="container mx-auto px-4 py-16">No project ID provided</div>;
    }

    // Add error handling for parsing the ID
    const index = parseInt(projectId as string);
    if (isNaN(index)) {
        return <div className="container mx-auto px-4 py-16">Invalid project ID</div>;
    }

    // Find the project by index
    const project = projects[index];

    if (!project) {
        return <div className="container mx-auto px-4 py-16">Project not found</div>;
    }

    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <div className="w-full max-w-5xl mx-auto">
                    <Button
                        variant="ghost"
                        onClick={() => router.back()}
                        className="mb-6 flex items-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-arrow-left">
                            <path d="m12 19-7-7 7-7"/>
                            <path d="M19 12H5"/>
                        </svg>
                        Back to Projects
                    </Button>

                    <Card className="shadow-md dark:bg-zinc-800">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <CardTitle className="font-mono text-2xl">{project.title}</CardTitle>
                                <span className="text-sm text-zinc-500">
                                    {new Date(project.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                            </div>
                            <CardDescription className="text-lg mt-2">{project.description}</CardDescription>
                        </CardHeader>

                        <CardContent>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <Badge key={tag} variant="secondary"
                                           className="text-xs font-semibold transition-colors border-transparent bg-primary text-primary-foreground shadow">{tag}</Badge>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {project.images.map((image, index) => (
                                    <div key={index} className="rounded-lg overflow-hidden border shadow-sm">
                                        <Image
                                            src={image}
                                            alt={`${project.title} screenshot ${index + 1}`}
                                            width={800}
                                            height={600}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </CardContent>

                        <CardFooter className="flex gap-4 mt-4">
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm flex items-center gap-1 text-zinc-500 hover:text-red-500 transition"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="lucide lucide-external-link">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                        <polyline points="15 3 21 3 21 9"/>
                                        <line x1="10" y1="14" x2="21" y2="3"/>
                                    </svg>
                                    Visit Project
                                </a>
                            )}

                            {project.sourceCodeLink && (
                                <a
                                    href={project.sourceCodeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm flex items-center gap-1 text-zinc-500 hover:text-red-500 transition"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="lucide lucide-github">
                                        <path
                                            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                                        <path d="M9 18c-4.51 2-5-2-7-2"/>
                                    </svg>
                                    Source Code
                                </a>
                            )}
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetail;