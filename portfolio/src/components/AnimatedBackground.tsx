'use client';

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <motion.div
      className="fixed inset-0 -z-10 bg-zinc-100 dark:bg-zinc-900"
      initial={{ opacity: 0.3 }}
      animate={{ opacity: [0.3, 0.5, 0.3] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <motion.div
        className="absolute h-full w-full bg-gradient-to-tr from-blue-300 to-purple-300 blur-3xl dark:from-blue-800 dark:to-purple-800"
        animate={{ rotate: 360 }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ transformOrigin: 'center center' }}
      />
    </motion.div>
  );
}
