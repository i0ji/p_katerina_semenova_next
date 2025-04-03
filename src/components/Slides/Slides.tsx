'use client';

import { useState, useEffect, useRef } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import styles from './Slides.module.scss';
import Image from 'next/image';
import { NextButton, PrevButton, Bullets } from '@/components/index';

export default function Slides(props: SlidesDataModel) {
  const glideRef = useRef<HTMLDivElement>(null);
  const glideInstance = useRef<Glide.Properties | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!glideRef.current) return;

    const initGlide = async () => {
      const GlideModule = await import('@glidejs/glide');
      glideInstance.current = new GlideModule.default(
        glideRef.current!,
        {
          type: 'carousel',
          perView: 1,
          gap: 0,
          autoplay: 4000,
          hoverpause: true,
          animationDuration: 500,
          afterInit: () => setActiveIndex(0),
          afterChange: ({ index }) => setActiveIndex(index),
        }
      ).mount();
    };

    initGlide();

    return () => {
      glideInstance.current?.destroy();
    };
  }, []);

  const handleNext = () => {
    glideInstance.current?.go('>');
  };

  const handlePrev = () => {
    glideInstance.current?.go('<');
  };

  const goToSlide = (index: number) =>
    glideInstance.current?.go(`=${index}`);

  return (
    <section className={styles.slides}>
      <div className="glide" ref={glideRef}>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {props.slides.map((slide) => (
              <li
                key={slide.id}
                className={`glide__slide ${styles.slide}`}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={slide.img}
                    alt={props.description}
                    width={1840}
                    height={900}
                    className={styles.slideImage}
                    sizes="(max-width: 768px) 100vw, 80vw"
                    loading="lazy"
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

      <Bullets 

      />

  
      <p className={styles.description}>{props.description}</p>
    </section>
  );
}
