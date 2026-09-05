import { type PropsWithChildren, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

type SpotlightCardProps = PropsWithChildren<{
  className?: string;
  spotlightColor?: string;
}>;

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(15, 118, 110, 0.12)',
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      onFocus={() => setOpacity(1)}
      onBlur={() => setOpacity(0)}
      className={cn('spotlight-card', className)}
    >
      <div
        className="spotlight-card-glow"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 72%)`,
        }}
      />
      {children}
    </div>
  );
}
