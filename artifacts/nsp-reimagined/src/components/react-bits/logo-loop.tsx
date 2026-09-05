import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export type LogoItem =
  | { node: React.ReactNode; href?: string; title?: string; ariaLabel?: string }
  | {
      src: string;
      alt?: string;
      href?: string;
      title?: string;
      width?: number;
      height?: number;
    };

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: 'left' | 'right';
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
  className?: string;
}

const cx = (...parts: Array<string | false | undefined>) =>
  parts.filter(Boolean).join(' ');

export default function LogoLoop({
  logos,
  speed = 90,
  direction = 'left',
  logoHeight = 32,
  gap = 36,
  pauseOnHover = true,
  fadeOut = true,
  fadeOutColor,
  ariaLabel = 'Partner logos',
  className,
}: LogoLoopProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const seqRef = useRef<HTMLUListElement>(null);
  const [seqWidth, setSeqWidth] = useState(0);
  const [copyCount, setCopyCount] = useState(2);
  const [isHovered, setIsHovered] = useState(false);
  const offsetRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);

  const targetVelocity = useMemo(() => {
    const magnitude = Math.abs(speed);
    const dir = direction === 'left' ? 1 : -1;
    return magnitude * dir * (speed < 0 ? -1 : 1);
  }, [speed, direction]);

  const updateDimensions = useCallback(() => {
    const containerWidth = containerRef.current?.clientWidth ?? 0;
    const sequenceWidth = seqRef.current?.getBoundingClientRect().width ?? 0;
    if (sequenceWidth > 0) {
      setSeqWidth(Math.ceil(sequenceWidth));
      setCopyCount(
        Math.max(2, Math.ceil(containerWidth / sequenceWidth) + 2),
      );
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [updateDimensions, logos, gap, logoHeight]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || seqWidth <= 0) return;

    const animate = (ts: number) => {
      if (lastTsRef.current === null) lastTsRef.current = ts;
      const delta = Math.max(0, ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      const velocity = isHovered && pauseOnHover ? 0 : targetVelocity;
      offsetRef.current =
        (((offsetRef.current + velocity * delta) % seqWidth) + seqWidth) %
        seqWidth;
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
    };
  }, [isHovered, pauseOnHover, seqWidth, targetVelocity]);

  const renderLogo = (item: LogoItem, key: React.Key) => {
    const content =
      'node' in item ? (
        item.node
      ) : (
        <img
          src={item.src}
          alt={item.alt ?? ''}
          title={item.title}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="logo-loop-img"
        />
      );

    return (
      <li className="logo-loop-item" key={key} role="listitem">
        {content}
      </li>
    );
  };

  const lists = Array.from({ length: copyCount }, (_, copyIndex) => (
    <ul
      className="logo-loop-seq"
      key={`copy-${copyIndex}`}
      role="list"
      aria-hidden={copyIndex > 0}
      ref={copyIndex === 0 ? seqRef : undefined}
    >
      {logos.map((item, i) => renderLogo(item, `${copyIndex}-${i}`))}
    </ul>
  ));

  return (
    <div
      ref={containerRef}
      className={cx('logo-loop', fadeOut && 'logo-loop--fade', className)}
      style={
        {
          '--logo-loop-gap': `${gap}px`,
          '--logo-loop-height': `${logoHeight}px`,
          ...(fadeOutColor ? { '--logo-loop-fade': fadeOutColor } : {}),
        } as React.CSSProperties
      }
      aria-label={ariaLabel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="logo-loop-track" ref={trackRef}>
        {lists}
      </div>
    </div>
  );
}
