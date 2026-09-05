import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

import { images } from '@/assets/images';
import { PartnerLogo } from '@/components/app-image';
import { HeroBannerCarousel } from '@/components/hero-banner-carousel';

const heroSteps = [
  {
    step: '1',
    title: 'Find a shortlist',
    detail: 'Answer five questions about your study level and needs.',
  },
  {
    step: '2',
    title: 'Check requirements',
    detail: 'Review eligibility and documents before you apply.',
  },
  {
    step: '3',
    title: 'Track your application',
    detail: 'See the next step after submission and institute review.',
  },
] as const;

export function HeroSection() {
  return (
    <section className="hero hero--gov" aria-labelledby="hero-heading">
      <div className="hero-tricolor" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-main">
          <div className="hero-official">
            <PartnerLogo
              src={images.partners.digitalIndia}
              name="Digital India"
              className="hero-official-logo"
            />
            <p className="hero-kicker">
              Ministry of Electronics &amp; Information Technology · Government of India
            </p>
          </div>

          <p className="hero-eyebrow">National Scholarship Portal · Prototype</p>

          <h1 id="hero-heading" className="hero-title serif">
            Start with the right scholarship.
          </h1>

          <p className="hero-lead">
            Discover schemes you may qualify for, understand what each requires, and
            follow your application through verification and disbursement.
          </p>

          <div className="hero-actions">
            <Link
              href="/scholarships/find"
              className="btn btn-primary hero-cta"
              data-testid="button-find-scholarships"
            >
              Find my scholarships <ArrowRight size={16} aria-hidden />
            </Link>
            <Link
              href="/scholarships"
              className="btn btn-outline hero-cta-secondary"
              data-testid="button-browse-scholarships"
            >
              View directory
            </Link>
          </div>

          <p className="hero-disclaimer" role="note">
            This is a demonstration interface. It does not submit applications or store
            personal information.
          </p>
        </div>

        <aside className="hero-aside" aria-label="Portal overview">
          <div className="hero-service-card">
            <h2 className="hero-service-title">How the portal helps</h2>

            <ol className="hero-steps">
              {heroSteps.map(({ step, title, detail }) => (
                <li key={step} className="hero-step">
                  <span className="hero-step-index">{step}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{detail}</p>
                  </div>
                </li>
              ))}
            </ol>

            <HeroBannerCarousel />
          </div>
        </aside>
      </div>
    </section>
  );
}
