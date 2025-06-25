'use client';

import styles from './Slides.module.scss';

import React, { useState, useEffect } from 'react';

import { NextButton, PrevButton } from '../Button/Button';
import { useKeenSlider } from 'keen-slider/react';
import { nanoid } from 'nanoid';
import 'keen-slider/keen-slider.min.css';
import Skeleton from 'react-loading-skeleton';
import Image from 'next/image';

export default function Slides(props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(
    Array(props.slides.length).fill(false)
  );

  //CURRENT SKELETON

  const handleImageLoad = (idx: number) => {
    setImagesLoaded((prev) => {
      const next = [...prev];
      next[idx] = true;
      return next;
    });
  };

  const allLoaded = imagesLoaded.every(Boolean);

  //CURRENT SKELETON

  useEffect(() => {
    if (imagesLoaded.every(Boolean)) {
      setLoaded(true);
    }
  }, [imagesLoaded]);

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  useEffect(() => {
    if (!slider) return;
    const interval = setInterval(() => {
      slider.current!.next();
    }, 10000);

    return () => clearInterval(interval);
  }, [slider]);

  return (
    <section className={styles.slides}>
      {!loaded && (
        <Skeleton
          height={500}
          containerClassName={styles.skeletonContainer}
          style={{ width: '100%', marginBottom: '1rem' }}
          baseColor="#f0f0f0"
          highlightColor="#e0e0e0"
        />
      )}

      <div
        ref={sliderRef}
        className={`keen-slider ${styles.keenSlider}`}
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
      >
        {props.slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`keen-slider__slide ${styles.slide}`}
          >
            <Image
              src={slide.img}
              alt={props.description}
              width={2000}
              height={900}
              layout="responsive"
              priority
              className={styles.slide__image}
              onLoadingComplete={() => handleImageLoad(idx)}
            />
          </div>
        ))}
      </div>
      {/* 
      <div className={styles.controls}>
        <PrevButton onClick={() => slider?.current?.prev()} />
        <NextButton onClick={() => slider?.current?.next()} />
      </div> */}

      {/* <div className={styles.dots}>
        {props.slides.map((_, idx) => (
          <button
            key={nanoid()}
            onClick={() => slider?.current?.moveToIdx(idx)}
            className={`${styles.dot} ${currentSlide === idx ? styles.active : ''}`}
            aria-label={`Перейти к слайду ${idx + 1}`}
          />
        ))}
      </div> */}

      <p>{props.description}</p>
    </section>
  );
}
