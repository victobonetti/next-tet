'use client';

import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export default function AnimatedButton({ children, href = '#', className = '' }: AnimatedButtonProps) {
  return (
    <motion.a
      href={href}
      className={`relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-emerald-950 bg-emerald-300 rounded-lg overflow-hidden group transition-colors duration-300 hover:bg-emerald-400 shadow-sm hover:shadow-md ${className}`}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <span className="relative z-10 flex items-center gap-3">
        {children}
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          →
        </motion.span>
      </span>
    </motion.a>
  );
} 