import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

import { ScrollReveal } from '@/components/home/scroll-reveal';
import { SectionIntro } from '@/components/home/section-intro';
import { StaggerChildren, StaggerItem } from '@/components/react-bits/stagger-children';

const faqs = [
  {
    q: 'How do I find scholarships I may be eligible for?',
    a: 'Start with Find my scholarships. Answer five questions and we will create a local shortlist. You can always browse the full directory.',
  },
  {
    q: 'What is One-Time Registration?',
    a: 'OTR is a reusable identity profile intended to reduce repeated form filling across scholarship applications.',
  },
  {
    q: 'Why does my application need institute verification?',
    a: 'Your institution confirms enrolment and course details before an application can move to the next stage.',
  },
] as const;

export function FaqPreviewSection() {
  return (
    <section className="home-faq section-tint" aria-labelledby="faq-heading">
      <div className="container home-faq-grid">
        <div>
          <SectionIntro
            eyebrow="Help centre"
            title="Answers before you queue."
            lead="Common questions students ask when starting a scholarship application."
          />
          <StaggerChildren className="home-faq-list">
            {faqs.map(({ q, a }) => (
              <StaggerItem key={q}>
                <details className="faq home-faq-item">
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <Link href="/help" className="text-link home-faq-link">
            View full help centre <ArrowRight size={14} aria-hidden />
          </Link>
        </div>

        <ScrollReveal delay={0.1} className="home-faq-aside">
          <div className="home-faq-card">
            <div className="eyebrow">Need human support?</div>
            <h3 id="faq-heading">Contact routes in the live service</h3>
            <p>
              Technical help, grievance redressal and institute queries would be routed to the
              appropriate official channel — illustrated here for the prototype.
            </p>
            <div className="home-faq-actions">
              <button
                type="button"
                className="btn btn-soft btn-sm"
                onClick={() => alert('Support contact simulation')}
              >
                Contact support
              </button>
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => alert('Grievance form simulation')}
              >
                Raise a grievance
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
