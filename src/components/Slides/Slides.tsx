'use client';

import { useRef, useState, useEffect } from 'react';

import Skeleton from 'react-loading-skeleton';
import Image from 'next/image';
import Slider from 'react-slick';

import './Slick.scss';
import styles from './Slides.module.scss';

export default function Slides(props: SlideModelNamespace.SlidesDataModel) {
  const sliderRef = useRef<Slider>(null);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof props.slides[0].img === 'string') {
      const img = new globalThis.Image();
      img.src = props.slides[0].img;
      img.onload = () => setIsLoaded(true);
    }
    return () => {};
  }, [props.slides]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    afterChange: () => {
      const activeElement = document.activeElement as HTMLElement;
      if (activeElement) {
        activeElement.blur();
      }
    }
  };

  return (
    <section className={styles.slides}>
      <Slider ref={sliderRef} {...settings}>
        {props.slides.map((slide) => (
          <div key={slide.id} className={styles.slide}>
            {isLoaded ? (
              <Image
                id="image"
                src={slide.img}
                alt={props.description}
                className={styles.slide__image}
                width={1600}
                height={900}
                priority
              />
            ) : (
              <Skeleton
                height={900}
                width={'100%'}
                style={{ borderRadius: 5 }}
              />
            )}
            {isLoaded && (
              <>
                <button
                  className={styles.slide__leftArrow}
                  onClick={() => sliderRef.current?.slickPrev()}
                />
                <button
                  className={styles.slide__rightArrow}
                  onClick={() => sliderRef.current?.slickNext()}
                />
              </>
            )}
          </div>
        ))}
      </Slider>
      <p>{props.description}</p>
    </section>
  );
}
