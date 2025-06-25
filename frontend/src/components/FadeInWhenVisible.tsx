// components/FadeInWhenVisible.jsx or .tsx
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FadeInWhenVisibleProps {
  children: ReactNode;
  duration?: number;
  yOffset?: number;
  amount?: number;
}

const FadeInWhenVisible = ({
  children,
  duration = 0.5,
  yOffset = 20,
  amount = 0.6,
}: FadeInWhenVisibleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration }}
      viewport={{ amount }}
      className='w-full '
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
