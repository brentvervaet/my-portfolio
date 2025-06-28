// src/components/AnimatedSection.tsx
'use client';
import React from 'react';
import {motion} from 'motion/react';

interface AnimatedSectionProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
                                                             children,
                                                             delay = 0.1,
                                                             className = ''
                                                         }) => {
    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay}}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;