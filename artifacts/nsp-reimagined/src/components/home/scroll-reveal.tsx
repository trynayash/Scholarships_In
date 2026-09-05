import { motion, useInView } from 'framer-motion';
import { type ReactNode, useRef } from 'react';

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  y = 24,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
