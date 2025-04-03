'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
// import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import styles from './Slides.module.scss';
import Image from 'next/image';
import {
  NextButton,
  PrevButton,
  Bullets,
} from '@/components/index';

export default function Slides(props: SlidesDataModel) {
  const glideRef = useRef<HTMLDivElement>(null);
  const glideInstance = useRef<GlideInstanceModel | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  //CURRENT
  const handleNext = useCallback(() => {
    glideInstance.current?.go('>');
  }, []);

  const handlePrev = useCallback(() => {
    glideInstance.current?.go('<');
  }, []);

  const goToSlide = useCallback((index: number) => {
    glideInstance.current?.go(`=${index}`);
  }, []);

  useEffect(() => {
    if (!glideRef.current) return;

    const initGlide = async () => {
      const GlideModule = await import('@glidejs/glide');
      glideInstance.current = new GlideModule.default(
        glideRef.current!,
        {
          type: 'carousel',
          startAt: 0,
          perView: 1,
          gap: 10,
          autoplay: false,
          hoverpause: true,
          animationDuration: 500,
        }
      );

      glideInstance.current!.on('run', () => {
        setActiveIndex(glideInstance.current!.index);
      });

      glideInstance.current!.mount();

      return () => glideInstance.current?.destroy();
    };

    initGlide();
  }, []);

  return (
    <section className={styles.slides}>
      <div className="glide" ref={glideRef}>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {props.slides.map((slide, index) => (
              <li
                key={slide.id}
                className={`glide__slide ${styles.slide}`}
              >
                <div className={styles.slide__image_wrapper}>
                  <Image
                    src={slide.img}
                    alt={props.description}
                    width={1600}
                    height={900}
                    className={styles.slide__image}
                    priority={index === 0}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.navigation}>
          <PrevButton onClick={handlePrev} />
          <NextButton onClick={handleNext} />
        </div>
      </div>

      <p className={styles.slide__description}>
        {props.description}
      </p>

      <Bullets
        slides={props.slides}
        activeIndex={activeIndex}
        onBulletClick={goToSlide}
      />
    </section>
  );
}
