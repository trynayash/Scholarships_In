import { useCallback, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { bannerSlides } from '@/assets/images';
import { AppImage } from '@/components/app-image';

const slides = bannerSlides;

export function HeroBannerCarousel() {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  const slide = slides[index];

  return (
    <figure className="hero-banner-block">
      <div className="hero-banner-media">
        <AppImage
          src={slide.src}
          alt={slide.alt}
          fit="cover"
          className="hero-banner-image"
          loading="eager"
        />
      </div>

      <figcaption className="hero-banner-caption">
        <span>{slide.caption}</span>
        <span className="hero-banner-count" aria-live="polite">
          {index + 1} / {slides.length}
        </span>
      </figcaption>

      <div className="hero-banner-nav">
        <button
          type="button"
          className="hero-banner-nav-btn"
          onClick={() => goTo(index - 1)}
          aria-label="Previous banner"
          data-testid="button-banner-prev"
        >
          <ChevronLeft size={16} aria-hidden />
        </button>

        <div className="hero-banner-dots" role="tablist" aria-label="Banner slides">
          {slides.map((item, i) => (
            <button
              key={item.src}
              type="button"
              role="tab"
              className={`hero-banner-dot ${i === index ? 'is-active' : ''}`}
              aria-label={`Show banner ${i + 1} of ${slides.length}`}
              aria-selected={i === index}
              onClick={() => goTo(i)}
              data-testid={`button-banner-dot-${i + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          className="hero-banner-nav-btn"
          onClick={() => goTo(index + 1)}
          aria-label="Next banner"
          data-testid="button-banner-next"
        >
          <ChevronRight size={16} aria-hidden />
        </button>
      </div>
    </figure>
  );
}
