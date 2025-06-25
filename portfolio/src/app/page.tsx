// src/app/page.tsx
import Header from '@/components/Header';
import SocialLinks from "@/components/SocialsLinks";
import Skills from "@/components/Skills";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import React from "react";
import Experience from "@/components/Experience";

export default function Home() {
    return (
        <main className="max-w-3xl mx-auto px-4 py-12">
            <Header/>
            {/* Hero Section */}
            <section className="py-16 space-y-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <Avatar className="w-24 h-24 border-2">
                        <AvatarImage src="/images/brent-vervaet.JPG" alt="Brent Vervaet"/>
                        <AvatarFallback>BV</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-center md:items-start">
                        <h1 className="text-3xl font-bold font-mono">Hi, I'm Brent 👋🏽</h1>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                            A full-stack developer focused on creating beautiful and functional web and mobile
                            experiences.
                        </p>
                        <SocialLinks className="mt-2"/>
                    </div>
                    {/*TODO*/}
                    {/*<Button size="sm" variant="outline" className="ml-2 font-mono text-xs" asChild>*/}
                    {/*    <a href="/resume.pdf" download>*/}
                    {/*        <Download className="mr-2 h-3 w-3"/>*/}
                    {/*        Resume*/}
                    {/*    </a>*/}
                    {/*</Button>*/}
                </div>

            </section>
            {/* Experience Section */}
            <Experience/>
            {/* Skills Section */}
            <Skills/>
            {/* Projects Section */}

            <section id="projects" className="py-8">
                <div className="container mx-auto px-4">
                    <div className="w-full max-w-4xl mx-auto">

                        <h2 className="text-2xl font-bold font-mono mb-6">Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
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
                            ].map((project, i) => (
                                <Card key={i}
                                      className="overflow-hidden group hover:shadow-md transition-all duration-300">
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

            {/* About Section */}
            <section id="about" className="py-8">
                <div className="container mx-auto px-4">
                    <div className="w-full max-w-4xl mx-auto">

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold font-mono">About</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-zinc-600 dark:text-zinc-400">
                                <p>
                                    I'm a student full-stack developer specializing in modern web technologies. My
                                    approach
                                    combines
                                    clean code with thoughtful design to create exceptional user experiences.
                                </p>
                                <p>
                                    When I'm not coding, I love to play music, whether it's jamming with friends or
                                    performing
                                    live
                                    or cracking a cold one with the boys. If I need to unwind, you can find me playing
                                    video
                                    games
                                    or reading a good book. I believe in the power of creativity and collaboration, both
                                    in
                                    music
                                    and software development.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
    );
}