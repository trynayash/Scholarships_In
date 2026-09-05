import { ArrowRight, Check, FileText, Upload } from 'lucide-react';
import { Link } from 'wouter';

import { initialDocuments } from '@/data/mock';
import { ScrollReveal } from '@/components/home/scroll-reveal';
import { SectionIntro } from '@/components/home/section-intro';

const statusClass: Record<string, string> = {
  Verified: 'doc-status--verified',
  Uploaded: 'doc-status--verified',
  'Needs update': 'doc-status--warn',
  'Not uploaded': 'doc-status--pending',
};

export function DocumentReadinessSection() {
  const ready = initialDocuments.filter(
    (doc) => doc.status === 'Verified' || doc.status === 'Uploaded',
  ).length;

  return (
    <section className="home-documents" aria-labelledby="documents-heading">
      <div className="container home-documents-grid">
        <div>
          <SectionIntro
            eyebrow="Document centre"
            title="Keep your essentials ready before you apply."
            lead="A single place to review, upload and replace documents used across eligible applications."
          />

          <ScrollReveal delay={0.12}>
            <div className="doc-readiness-summary">
              <strong>
                {ready} of {initialDocuments.length}
              </strong>
              <span>core documents ready in this demo profile</span>
            </div>
            <Link href="/documents" className="btn btn-primary">
              Open document centre <ArrowRight size={15} aria-hidden />
            </Link>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.08} className="doc-readiness-panel">
          <div className="doc-readiness-panel-head">
            <FileText size={18} aria-hidden />
            <h3 id="documents-heading">Checklist preview</h3>
          </div>
          <ul className="doc-readiness-list">
            {initialDocuments.map((doc) => (
              <li key={doc.id} className="doc-readiness-row">
                <div>
                  <strong>{doc.name}</strong>
                  <span>{doc.required ? 'Required' : 'Optional'}</span>
                </div>
                <span className={`doc-status ${statusClass[doc.status] ?? ''}`}>
                  {doc.status === 'Verified' || doc.status === 'Uploaded' ? (
                    <Check size={12} aria-hidden />
                  ) : doc.status === 'Not uploaded' ? (
                    <Upload size={12} aria-hidden />
                  ) : null}
                  {doc.status}
                </span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
