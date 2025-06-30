'use client';
import React from 'react';
import { Card } from '@/components/ui/card';
import { FaJs, FaReact, FaNodeJs, FaGitAlt, FaSwift, FaJava, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql, SiSpring } from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ReactNode;
  url: string;
}

interface SkillsProps {
  skills?: Skill[];
}

const defaultSkills: Skill[] = [
  { name: 'JavaScript', icon: <FaJs />, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'React', icon: <FaReact />, url: 'https://reactjs.org/' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, url: 'https://tailwindcss.com/' },
  { name: 'Next.js', icon: <SiNextdotjs />, url: 'https://nextjs.org/' },
  { name: 'Node.js', icon: <FaNodeJs />, url: 'https://nodejs.org/' },
  { name: 'Java', icon: <FaJava />, url: 'https://www.java.com/' },
  { name: 'Spring', icon: <SiSpring />, url: 'https://spring.io/' },
  { name: 'Swift', icon: <FaSwift />, url: 'https://developer.apple.com/swift/' },
  { name: 'Python', icon: <FaPython />, url: 'https://www.python.org/' },
  { name: 'Git', icon: <FaGitAlt />, url: 'https://git-scm.com/' },
  { name: 'MySQL', icon: <SiMysql />, url: 'https://www.mysql.com/' },
  { name: 'MongoDB', icon: <SiMongodb />, url: 'https://www.mongodb.com/' },
];

const Skills: React.FC<SkillsProps> = ({ skills = defaultSkills }) => {
  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="pb-4 font-mono text-2xl font-bold">Skills</h2>

          <Card className="dark:bg-zinc-800">
            <div className="grid grid-cols-3 gap-8 sm:grid-cols-4 md:grid-cols-6">
              {skills.map(skill => (
                <a
                  key={skill.name}
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center transition-all hover:scale-110 hover:text-red-500"
                  title={`Learn more about ${skill.name}`}
                >
                  <div className="text-3xl transition-colors md:text-4xl">{skill.icon}</div>
                </a>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;
