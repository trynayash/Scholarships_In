import { motion, type Transition } from 'framer-motion';

import { cn } from '@/lib/utils';

interface BorderBeamProps {
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  className?: string;
  borderWidth?: number;
  transition?: Transition;
}

export function BorderBeam({
  className,
  delay = 0,
  duration = 6,
  colorFrom = 'hsl(var(--accent))',
  colorTo = 'hsl(var(--primary))',
  borderWidth = 1,
  transition,
}: BorderBeamProps) {
  return (
    <div
      className={cn('border-beam-wrap', className)}
      style={{ '--beam-width': `${borderWidth}px` } as React.CSSProperties}
      aria-hidden="true"
    >
      <motion.div
        className="border-beam-spinner"
        style={{
          background: `conic-gradient(from 0deg, transparent 0deg, ${colorFrom} 70deg, ${colorTo} 140deg, transparent 220deg)`,
        }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration,
          delay,
          ...transition,
        }}
      />
    </div>
  );
}
