'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { nanoid } from 'nanoid';

import styles from './Slides.module.scss';
import { NextButton, PrevButton } from '@/components/index';

//CURRENT
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export default function Slides(props: SlidesDataModel) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, sliderInstance] = useKeenSlider({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    mode: 'free-snap',
    slides: {
      perView: 1,
      spacing: 0,
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      sliderInstance.current && !props.isTested && sliderInstance.current.next();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [sliderInstance]);

  const goNext = () => sliderInstance.current?.next();
  const goPrev = () => sliderInstance.current?.prev();

  return (
    <section className={styles.slides}>
      <div className={styles.slides__wrapper}>
        <div className="keen-slider" ref={sliderRef}>
          {props.slides.map((slide, index) => (
            <div key={slide.id} className="keen-slider__slide">
              <div inert={true} key={nanoid()}>
                <Image
                  src={slide.img}
                  alt={props.description}
                  className={styles.slide__image}
                  width={2000}
                  height={900}
                  priority={index === 0}
                  loading={index <= 1 ? 'eager' : 'lazy'}
                  quality={85}
                />
              </div>
            </div>
          ))}
        </div>

        {loaded && sliderInstance.current && (
          <>
            <PrevButton onClick={goPrev} />
            <NextButton onClick={goNext} />
          </>
        )}
      </div>

      {loaded && sliderInstance.current && (
        <div className={styles.dots}>
          {[
            ...Array(
              sliderInstance.current.track.details.slides.length
            ).keys(),
          ].map((idx) => (
            <button
              key={idx}
              onClick={() =>
                sliderInstance.current?.moveToIdx(idx)
              }
              className={`${styles.dot} ${
                currentSlide === idx ? styles.active : ''
              }`}
            />
          ))}
        </div>
      )}

      <p>{props.description}</p>
    </section>
  );
}
