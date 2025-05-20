'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { nanoid } from 'nanoid';

import styles from './Slides.module.scss';
import { NextButton, PrevButton } from '@/components/index';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
//CURRENT
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Slides(props: SlidesDataModel) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  //CURRENT
  const [sliderReady, setSliderReady] = useState(false);
  const [sliderHeight, setSliderHeight] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
        setSliderReady(true);
      },
      loop: true,
    }
  );

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef!.current!.next();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [instanceRef, props.isTested]);

  const goNext = () => instanceRef.current?.next();
  const goPrev = () => instanceRef.current?.prev();

  return (
    <section className={styles.slides}>
      <div className={styles.slides__wrapper}>
        {!sliderReady && (
          <Skeleton
            //OPTION
            height={sliderHeight > 0 ? sliderHeight : 300}
            containerClassName={styles.skeletonContainer}
            style={{
              display: 'block',
              width: '100%',
            }}
            baseColor="#f0f0f0"
            highlightColor="#e0e0e0"
          />
        )}
        <div
          className="keen-slider"
          ref={sliderRef}
          style={{
            visibility: sliderReady ? 'visible' : 'hidden',
          }}
        >
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

        {loaded && instanceRef.current && (
          <>
            <PrevButton onClick={goPrev} />
            <NextButton onClick={goNext} />
          </>
        )}
        {loaded && instanceRef.current && (
          <div className={styles.dots}>
            {[
              ...Array(
                instanceRef.current.track.details.slides.length
              ).keys(),
            ].map((idx) => (
              <button
                key={idx}
                onClick={() =>
                  instanceRef.current?.moveToIdx(idx)
                }
                className={`${styles.dot} ${
                  currentSlide === idx ? styles.active : ''
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <p>{props.description}</p>
    </section>
  );
}
