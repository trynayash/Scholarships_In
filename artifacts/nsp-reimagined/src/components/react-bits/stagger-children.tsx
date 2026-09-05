import { motion, useInView } from 'framer-motion';
import { type ReactNode, useRef } from 'react';

type StaggerChildrenProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
};

export function StaggerChildren({
  children,
  className = '',
  stagger = 0.08,
  delay = 0,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 8 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.35, ease: [0.25, 1, 0.35, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
