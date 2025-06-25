// src/components/Skills.tsx
import React from 'react';

interface SkillsProps {
    skills?: string[];
    className?: string;
}

const Skills: React.FC<SkillsProps> = ({
                                           skills = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js'],
                                           className = ''
                                       }) => {
    return (
        <section id="skills" className={`py-8 ${className}`}>
            <h2 className="text-2xl font-bold font-mono mb-6">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4">
                {skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <span className="font-mono text-sm">{skill}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;