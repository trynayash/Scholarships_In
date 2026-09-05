import React, { type ComponentPropsWithoutRef, type CSSProperties } from 'react';

import { cn } from '@/lib/utils';

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<'button'> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = '#ffffff',
      shimmerSize = '0.05em',
      shimmerDuration = '3s',
      borderRadius = '4px',
      background = 'hsl(var(--accent))',
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        style={
          {
            '--spread': '90deg',
            '--shimmer-color': shimmerColor,
            '--radius': borderRadius,
            '--speed': shimmerDuration,
            '--cut': shimmerSize,
            '--bg': background,
          } as CSSProperties
        }
        className={cn('shimmer-button', className)}
        {...props}
      >
        <span className="shimmer-button-spark" aria-hidden="true">
          <span className="shimmer-button-spark-inner" />
        </span>
        <span className="shimmer-button-label">{children}</span>
        <span className="shimmer-button-highlight" aria-hidden="true" />
        <span className="shimmer-button-backdrop" aria-hidden="true" />
      </button>
    );
  },
);

ShimmerButton.displayName = 'ShimmerButton';
