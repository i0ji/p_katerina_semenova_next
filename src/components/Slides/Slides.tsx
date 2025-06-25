'use client';

import styles from './Slides.module.scss';

import { useRef, useState, useEffect } from 'react';

import { NextButton, PrevButton } from '../Button/Button';
import { useKeenSlider } from 'keen-slider/react';
import { nanoid } from 'nanoid';
import 'react-loading-skeleton/dist/skeleton.css';
import 'keen-slider/keen-slider.min.css';
import Skeleton from 'react-loading-skeleton';
import Image from 'next/image';

const aspectRatio = 1300 / 2000;

export default function Slides(props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(
    Array(props.slides.length).fill(false)
  );
  const handleImageLoad = (idx: number) => {
    setImagesLoaded((prev) => {
      const next = [...prev];
      next[idx] = true;
      return next;
    });
  };

  const allLoaded = imagesLoaded.every(Boolean);
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

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
    function updateWidth() {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      } else {
        setWidth(window.innerWidth);
      }
    }

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () =>
      window.removeEventListener('resize', updateWidth);
  }, []);

  const height = width * aspectRatio;

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
          height={height}
          width="100%"
          borderRadius={8}
          baseColor="#ddd"
          highlightColor="#eee"
          style={{ marginBottom: 16 }}
        />
      )}

      <div className={styles.slide__wrapper}>
        <div
          ref={sliderRef}
          className={`keen-slider`}
          style={{
            opacity: allLoaded ? 1 : 0,
            transition: 'opacity 0.3s',
          }}
        >
          {props.slides.map((slide: SlideModel, idx: number) => (
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
                onLoad={() => handleImageLoad(idx)}
              />
            </div>
          ))}
        </div>

        <div className={styles.controls}>
          <PrevButton onClick={() => slider?.current?.prev()} />
          <NextButton onClick={() => slider?.current?.next()} />
        </div>

        <div className={styles.dots}>
          {props.slides.map((_, idx) => (
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
