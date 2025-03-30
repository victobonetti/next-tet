'use client';

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-400 dark:bg-emerald-600 rounded-full mix-blend-multiply filter blur-2xl opacity-80 dark:opacity-60"
        animate={{
          x: [0, 150, 0],
          y: [0, 80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-500 dark:bg-emerald-700 rounded-full mix-blend-multiply filter blur-2xl opacity-80 dark:opacity-60"
        animate={{
          x: [0, -150, 0],
          y: [0, -80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-300 dark:bg-emerald-500 rounded-full mix-blend-multiply filter blur-2xl opacity-80 dark:opacity-60"
        animate={{
          x: [0, 80, 0],
          y: [0, -150, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
} 