import type { ImgHTMLAttributes } from 'react';

type AppImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fit?: 'contain' | 'cover';
};

export function AppImage({
  fit = 'contain',
  className = '',
  alt,
  ...props
}: AppImageProps) {
  return (
    <img
      {...props}
      alt={alt}
      loading={props.loading ?? 'lazy'}
      decoding={props.decoding ?? 'async'}
      className={`app-image app-image--${fit} ${className}`.trim()}
    />
  );
}

export function PartnerLogo({
  src,
  name,
  className = '',
}: {
  src: string;
  name: string;
  className?: string;
}) {
  return (
    <AppImage
      src={src}
      alt={`${name} logo`}
      fit="contain"
      className={`partner-logo ${className}`.trim()}
    />
  );
}

export function RoleIcon({
  src,
  label,
  className = '',
}: {
  src: string;
  label: string;
  className?: string;
}) {
  return (
    <AppImage
      src={src}
      alt=""
      aria-hidden
      fit="contain"
      className={`role-icon ${className}`.trim()}
    />
  );
}
