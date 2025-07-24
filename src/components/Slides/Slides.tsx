'use client';

import styles from './Slides.module.scss';

import { useState, useEffect } from 'react';

import { NextButton, PrevButton, SlideImage } from 'components/index';
import Skeleton from 'react-loading-skeleton';
import Tooltip from '../Tooltip/Tooltip';

import { useKeenSlider } from 'keen-slider/react';
import { nanoid } from 'nanoid';
import 'react-loading-skeleton/dist/skeleton.css';
import 'keen-slider/keen-slider.min.css';

export default function Slides(props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [hover, setHover] = useState<number | null>(null);
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    created() {
      setIsMounted(true);
    },
  });

  const [loadedCount, setLoadedCount] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    if (loadedCount === props.slides.length) {
      setAllLoaded(true);
    }
  }, [loadedCount]);

  const handleSlideLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  return (
    <section className={styles.slides}>
      {!allLoaded ? (
        <Skeleton height={500} />
      ) : (
        <div className={styles.slide__wrapper}>
          <div ref={sliderRef} className="keen-slider">
            {props.slides.map((slide: SlideModel) => (
              <div
                key={slide.id}
                className={`keen-slider__slide ${styles.slide}`}
              >
                <SlideImage
                  src={slide.img}
                  alt={props.description}
                  width={1900}
                  height={900}
                  className={styles.slide__image}
                  onLoad={handleSlideLoad}
                />
              </div>
            ))}
          </div>
          {isMounted && (
            <>
              <div className={styles.controls}>
                <PrevButton onClick={() => slider?.current?.prev()} />
                <NextButton onClick={() => slider?.current?.next()} />
              </div>
              <div className={styles.dots}>
                {props.slides.map((_, idx) => (
                  <div
                    key={nanoid()}
                    className={styles.dots_wrapper}
                    onMouseEnter={() => setHover(idx)}
                    onMouseLeave={() => setHover(null)}
                  >
                    <button
                      onClick={() => slider?.current?.moveToIdx(idx)}
                      className={`${styles.dot} ${
                        currentSlide === idx ? styles.active : ''
                      }`}
                    />
                    {hover === idx && (
                      <Tooltip description={`К слайду ${idx + 1}`} />
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
      <p>{props.description}</p>
    </section>
  );
}
