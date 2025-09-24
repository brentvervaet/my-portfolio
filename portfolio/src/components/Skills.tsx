'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { FaGitAlt, FaJava, FaJs, FaNodeJs, FaPython, FaReact, FaSwift } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiNextdotjs, SiSpring, SiTailwindcss } from 'react-icons/si';

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
