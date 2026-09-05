import { ScrollReveal } from '@/components/home/scroll-reveal';

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: 'left' | 'center';
};

export function SectionIntro({
  eyebrow,
  title,
  lead,
  align = 'left',
}: SectionIntroProps) {
  return (
    <ScrollReveal className={`section-intro section-intro--${align}`}>
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="serif section-intro-title">{title}</h2>
      {lead ? <p className="section-lead section-intro-lead">{lead}</p> : null}
    </ScrollReveal>
  );
}
