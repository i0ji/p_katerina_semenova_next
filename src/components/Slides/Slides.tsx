'use client';

import { useRef, useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
//CURRENT
import useEmblaCarousel from 'embla-carousel-react';

import styles from './Slides.module.scss';

export default function Slides(props: SlidesDataModel) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const [emblaRef] = useEmblaCarousel();
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const img = new globalThis.Image();
    img.src = props.slides[0].img;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [props.slides]);

  return (
    <section className={styles.slides}>
      <div className={styles.slide}>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {props.slides.map((slide) => (
              <div className="embla__slide">
                {isLoaded ? (
                  <img
                    ref={imageRef}
                    src={slide.img}
                    alt={props.description}
                    className={styles.slide__image}
                    width={1600}
                    height={900}
                    loading="lazy"
                  />
                ) : (
                  <Skeleton
                    height={900}
                    width={'100%'}
                    style={{ borderRadius: 5 }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <button
          ref={navigationPrevRef}
          className={styles.slide__leftArrow}
          aria-label="Previous slide"
        />
        <button
          ref={navigationNextRef}
          className={styles.slide__rightArrow}
          aria-label="Next slide"
        />
      </div>
      <p>{props.description}</p>
    </section>
  );
}
