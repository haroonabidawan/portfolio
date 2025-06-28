'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function FadeUpStagger({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ staggerChildren: 0.1 }}
      variants={{
        hidden: {},
        visible: {},
      }}
      className="space-y-6"
    >
      {children}
    </motion.div>
  );
}

export const FadeItem = ({ children }: { children: ReactNode }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);
