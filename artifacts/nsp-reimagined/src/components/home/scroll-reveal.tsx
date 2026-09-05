import { motion, useInView, useReducedMotion } from 'framer-motion';
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
  y = 12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-48px' });
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : y }}
      animate={
        inView || reduceMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y }
      }
      transition={{ duration: reduceMotion ? 0 : 0.4, delay, ease: [0.25, 1, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}
