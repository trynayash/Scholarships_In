import { images, partnerList } from '@/assets/images';
import { PartnerLogo } from '@/components/app-image';

export function PartnerEcosystemSection() {
  return (
    <section className="ecosystem" aria-labelledby="ecosystem-heading">
      <div className="container">
        <div className="ecosystem-head">
          <div>
            <div className="eyebrow">Government links</div>
            <h2 id="ecosystem-heading" className="serif">
              Related government services.
            </h2>
          </div>
          <p className="ecosystem-lead">
            Public government platforms that a scholarship portal connects to. This
            prototype is not affiliated with them.
          </p>
        </div>

        <div className="ecosystem-grid">
          {partnerList.map(({ key, name, description }) => (
            <article key={key} className="ecosystem-tile">
              <PartnerLogo
                src={images.partners[key]}
                name={name}
                className="ecosystem-logo"
              />
              <div className="ecosystem-copy">
                <strong>{name}</strong>
                <span>{description}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
