// src/components/AnimatedSection.tsx
'use client';
import React from 'react';
import {motion} from 'motion/react';

interface AnimatedSectionProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    once?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
                                                             children,
                                                             delay = 0.1,
                                                             className = '',
                                                             once = true
                                                         }) => {
    return (
        <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once, margin: "-50px"}}
            transition={{duration: 0.6, delay}}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;