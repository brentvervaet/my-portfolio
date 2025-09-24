'use client';

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <motion.div
      className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-300 via-cyan-300 to-green-300 opacity-60 dark:from-blue-800 dark:via-cyan-800 dark:to-green-800"
      animate={{
        backgroundPosition: ['0% 0%', '100% 100%'],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'linear',
      }}
      style={{ backgroundSize: '200% 200%' }}
    ></motion.div>
  );
}
