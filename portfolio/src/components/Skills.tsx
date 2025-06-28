'use client'
import React from 'react';
import {motion} from 'motion/react';
import {Card} from "@/components/ui/card";
import {FaJs, FaReact, FaNodeJs, FaGitAlt, FaSwift, FaJava, FaPython} from "react-icons/fa";
import {SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql, SiSpring} from "react-icons/si";

interface Skill {
    name: string;
    icon: React.ReactNode;
    url: string;
}

interface SkillsProps {
    skills?: Skill[];
    className?: string;
}

const defaultSkills: Skill[] = [
    {name: 'JavaScript', icon: <FaJs/>, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
    {name: 'React', icon: <FaReact/>, url: 'https://reactjs.org/'},
    {name: 'Tailwind CSS', icon: <SiTailwindcss/>, url: 'https://tailwindcss.com/'},
    {name: 'Next.js', icon: <SiNextdotjs/>, url: 'https://nextjs.org/'},
    {name: 'Node.js', icon: <FaNodeJs/>, url: 'https://nodejs.org/'},
    {name: 'Java', icon: <FaJava/>, url: 'https://www.java.com/'},
    {name: 'Spring', icon: <SiSpring/>, url: 'https://spring.io/'},
    {name: 'Swift', icon: <FaSwift/>, url: 'https://developer.apple.com/swift/'},
    {name: 'Python', icon: <FaPython/>, url: 'https://www.python.org/'},
    {name: 'Git', icon: <FaGitAlt/>, url: 'https://git-scm.com/'},
    {name: 'MySQL', icon: <SiMysql/>, url: 'https://www.mysql.com/'},
    {name: 'MongoDB', icon: <SiMongodb/>, url: 'https://www.mongodb.com/'},
];

// Modified Skills.tsx
const Skills: React.FC<SkillsProps> = ({skills = defaultSkills}) => {
    return (
        <div className="py-8">
            <div className="container mx-auto px-4">
                <div className="w-full max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold font-mono pb-4">Skills</h2>

                    <Card className="dark:bg-zinc-800">
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
                            {skills.map((skill, index) => (
                                <motion.a
                                    key={skill.name}
                                    href={skill.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-center items-center"
                                    title={`Learn more about ${skill.name}`}
                                    initial={{opacity: 0, scale: 0.8}}
                                    animate={{opacity: 1, scale: 1}}
                                    transition={{duration: 0.3}}
                                    whileHover={{
                                        scale: 1.2,
                                        color: '#ef4444', // Red-500 color
                                        transition: {duration: 0.2}
                                    }}
                                >
                                    <div className="text-3xl md:text-4xl transition-colors">
                                        {skill.icon}
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Skills;