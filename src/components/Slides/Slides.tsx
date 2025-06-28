'use client';

import styles from './Slides.module.scss';

import { useState } from 'react';

import { NextButton, PrevButton } from '../Button/Button';
import { useKeenSlider } from 'keen-slider/react';
import { nanoid } from 'nanoid';
import 'react-loading-skeleton/dist/skeleton.css';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

export default function Slides(props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  return (
    <section className={styles.slides}>
      <div className={styles.slide__wrapper}>
        <div ref={sliderRef} className={`keen-slider`}>
          {props.slides.map((slide: SlideModel) => (
            <div
              key={slide.id}
              className={`keen-slider__slide ${styles.slide}`}
            >
              <Image
                src={slide.img}
                alt={props.description}
                width={1800}
                height={900}
                priority
                className={styles.slide__image}
              />
            </div>
          ))}
        </div>

        <div className={styles.controls}>
          <PrevButton onClick={() => slider?.current?.prev()} />
          <NextButton onClick={() => slider?.current?.next()} />
        </div>

        <div className={styles.dots}>
          {props.slides.map((_, idx: number) => (
            <button
              key={nanoid()}
              onClick={() => slider?.current?.moveToIdx(idx)}
              className={`${styles.dot} ${
                currentSlide === idx ? styles.active : ''
              }`}
              aria-label={`Перейти к слайду ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <p>{props.description}</p>
    </section>
  );
}
