import { images, partnerList } from '@/assets/images';
import { PartnerLogo } from '@/components/app-image';
import LogoLoop from '@/components/react-bits/logo-loop';

export function PartnerLogoMarquee({ className = '' }: { className?: string }) {
  return (
    <LogoLoop
      className={className}
      logos={partnerList.map(({ key, name }) => ({
        node: (
          <PartnerLogo
            src={images.partners[key]}
            name={name}
            className="logo-loop-partner"
          />
        ),
        title: name,
        ariaLabel: `${name} logo`,
      }))}
      speed={75}
      logoHeight={34}
      gap={40}
      pauseOnHover
      fadeOut
      fadeOutColor="hsl(var(--background))"
      ariaLabel="Government and technology partners"
    />
  );
}
