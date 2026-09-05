import CountUp from '@/components/react-bits/count-up';
import { SectionIntro } from '@/components/home/section-intro';
import { StaggerChildren, StaggerItem } from '@/components/react-bits/stagger-children';

const metrics = [
  { value: 5, suffix: '', label: 'Finder questions', detail: 'To reach a relevant shortlist' },
  { value: 12, suffix: '+', label: 'Open schemes', detail: 'In this prototype catalogue' },
  { value: 28, suffix: '', label: 'States & UTs', detail: 'National and state routes' },
  { value: 4, suffix: '', label: 'Journey stages', detail: 'From apply to disbursement' },
] as const;

export function ImpactMetricsSection() {
  return (
    <section className="home-metrics section-tint" aria-labelledby="metrics-heading">
      <div className="container">
        <SectionIntro
          eyebrow="At a glance"
          title="Built for clarity at scale."
          lead="Prototype figures that reflect how a national scholarship service should communicate progress."
          align="center"
        />

        <StaggerChildren className="metrics-grid">
          {metrics.map(({ value, suffix, label, detail }) => (
            <StaggerItem key={label}>
              <article className="metric-card">
                <strong id={label === 'Finder questions' ? 'metrics-heading' : undefined}>
                  <CountUp to={value} duration={1.8} className="metric-count" />
                  {suffix}
                </strong>
                <span className="metric-label">{label}</span>
                <p>{detail}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
