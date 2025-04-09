'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { nanoid } from 'nanoid';

import styles from './Slides.module.scss';

import { NextButton, PrevButton } from '../Button/Button';

export default function Slides(props: SlidesDataModel) {
  const swiperContainerRef = useRef<HTMLDivElement>(null);
  const swiperInstance = useRef<any>(null);

  const goNext = () => swiperInstance.current?.slideNext();
  const goPrev = () => swiperInstance.current?.slidePrev();

  return (
    <section className={styles.slides}>
      {props.slides.map((slide) => (
        <div key={slide.id} className="swiper-slide">
          <div inert={true} key={nanoid()}>
            <Image
              src={slide.img}
              alt={props.description}
              className={styles.slide__image}
              width={2000}
              height={900}
              priority
            />
          </div>
        </div>
      ))}

      <PrevButton onClick={goPrev} />
      <NextButton onClick={goNext} />

      <p>{props.description}</p>
    </section>
  );
}
