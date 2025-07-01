'use client';

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <motion.div
      className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-200 via-pink-200 to-purple-200 opacity-30 dark:from-blue-900 dark:via-pink-900 dark:to-purple-900"
      animate={{
        backgroundPosition: ['0% 0%', '100% 100%'],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'linear',
      }}
      style={{ backgroundSize: '200% 200%' }}
    />
  );
}
