'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { FaJava } from 'react-icons/fa';
import { SiCss3, SiGit, SiHtml5, SiJavascript, SiJira, SiMongodb, SiMysql, SiNeo4J, SiNextdotjs, SiNodedotjs, SiPython, SiReact, SiSpring, SiSwift, SiTailwindcss, SiTypescript, SiVuedotjs } from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ReactNode;
  url: string;
}

interface SkillsProps {
  skills?: Skill[];
}

const defaultSkills: Skill[] = [
  // Frontend Web Technologies
  { name: 'HTML', icon: <SiHtml5 />, url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS', icon: <SiCss3 />, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'JavaScript', icon: <SiJavascript />, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'TypeScript', icon: <SiTypescript />, url: 'https://www.typescriptlang.org/' },
  { name: 'React', icon: <SiReact />, url: 'https://reactjs.org/' },
  { name: 'Next.js', icon: <SiNextdotjs />, url: 'https://nextjs.org/' },
  { name: 'Vue', icon: <SiVuedotjs />, url: 'https://vuejs.org/' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, url: 'https://tailwindcss.com/' },
  
  // TODO:
  // { name: 'C#', icon: <SiSharp />, url: 'https://docs.microsoft.com/en-us/dotnet/csharp/' },
  // { name: '.NET', icon: <SiDotnet />, url: 'https://dotnet.microsoft.com/' },
  // { name: 'Blazor', icon: <SiBlazor />, url: 'https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor' },
  
  // Backend/Server Technologies
  { name: 'Node.js', icon: <SiNodedotjs />, url: 'https://nodejs.org/' },
  { name: 'Java', icon: <FaJava />, url: 'https://www.java.com/' },
  { name: 'Spring', icon: <SiSpring />, url: 'https://spring.io/' },
  { name: 'Python', icon: <SiPython />, url: 'https://www.python.org/' },
  
  // Databases
  { name: 'MySQL', icon: <SiMysql />, url: 'https://www.mysql.com/' },
  { name: 'MongoDB', icon: <SiMongodb />, url: 'https://www.mongodb.com/' },
  { name: 'Neo4j', icon: <SiNeo4J />, url: 'https://neo4j.com/' },
  
  // Mobile Development
  { name: 'Swift', icon: <SiSwift />, url: 'https://developer.apple.com/swift/' },
  
  // Development Tools
  { name: 'Git', icon: <SiGit />, url: 'https://git-scm.com/' },
  { name: 'Jira', icon: <SiJira />, url: 'https://www.atlassian.com/software/jira' },
];

const Skills: React.FC<SkillsProps> = ({ skills = defaultSkills }) => {
  return (
    <div className="relative px-4 py-6">
      {/*TODO*/}
      {/* Decorative blurred gradient orbs in background */}
      {/*<div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-green-400/20 blur-3xl"></div>*/}
      {/*<div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"></div>*/}

      <div className="relative z-10 container mx-auto">
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="pb-4 font-mono text-2xl font-bold" id="skills-section">Skills</h2>

          <div 
            className="overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-md backdrop-blur-xl dark:border-white/10 dark:bg-black/20"
            role="region"
            aria-labelledby="skills-section"
          >
            <div className="grid grid-cols-3 gap-8 p-6 sm:grid-cols-4 md:grid-cols-6">
              {skills.map(skill => (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  key={skill.name}
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent rounded-full"
                  title={`Learn more about ${skill.name}`}
                  aria-label={`Learn more about ${skill.name} - opens in new tab`}
                >
                  <div className="rounded-full border border-white/10 bg-white/5 p-3 text-3xl shadow-sm backdrop-blur-sm transition-all hover:bg-white/10 hover:shadow-md md:text-4xl">
                    <span aria-hidden="true">{skill.icon}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
