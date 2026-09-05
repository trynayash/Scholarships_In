import { ArrowRight, Banknote, ClipboardCheck, FileText, Search } from 'lucide-react';
import { Link } from 'wouter';

import { SectionIntro } from '@/components/home/section-intro';
import { StaggerChildren, StaggerItem } from '@/components/react-bits/stagger-children';

const journeySteps = [
  {
    icon: Search,
    title: 'Discover schemes',
    detail: 'Use the finder or directory to shortlist scholarships that match your profile.',
    href: '/scholarships/find',
  },
  {
    icon: FileText,
    title: 'Prepare documents',
    detail: 'Upload income proof, marksheets and bank details in one document centre.',
    href: '/documents',
  },
  {
    icon: ClipboardCheck,
    title: 'Apply once',
    detail: 'Submit through a guided flow with clear eligibility checks at each step.',
    href: '/scholarships',
  },
  {
    icon: Banknote,
    title: 'Track disbursement',
    detail: 'Follow institute verification, sanction and payment status in your dashboard.',
    href: '/applications',
  },
] as const;

export function ApplicationJourneySection() {
  return (
    <section className="home-journey" aria-labelledby="journey-heading">
      <div className="container">
        <SectionIntro
          eyebrow="Your application journey"
          title="Four clear stages, one calm path."
          lead="The portal is organised around what students need to do next — not around backend processes."
        />

        <StaggerChildren className="journey-rail">
          {journeySteps.map(({ icon: Icon, title, detail, href }, index) => (
            <StaggerItem key={title}>
              <article className="journey-step-card">
                <div className="journey-step-head">
                  <span className="journey-step-num">{index + 1}</span>
                  <span className="journey-step-icon" aria-hidden="true">
                    <Icon size={18} />
                  </span>
                </div>
                <h3 id={index === 0 ? 'journey-heading' : undefined}>{title}</h3>
                <p>{detail}</p>
                <Link href={href} className="journey-step-link">
                  Open <ArrowRight size={14} aria-hidden />
                </Link>
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
