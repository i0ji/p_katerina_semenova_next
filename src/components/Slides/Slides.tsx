'use client';

import {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
} from 'react';

import Skeleton from 'react-loading-skeleton';
import Image from 'next/image';
import Slider from 'react-slick';
import { nanoid } from 'nanoid';

import { NextButton, PrevButton } from '@/components/index';

import './Slider.scss';
import styles from './Slides.module.scss';

export default function Slides(
  props: SlideModelNamespace.SlidesDataModel
) {
  //CURRENT
  const sliderRef = useRef<Slider>(null);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const [loadedImagesCount, setLoadedImagesCount] = useState(0);

  const handleImageLoad = () => {
    setLoadedImagesCount((prev) => prev + 1);
  };

  // Проверяем, все ли изображения загрузились
  if (
    loadedImagesCount === props.slides.length &&
    !allImagesLoaded
  ) {
    setAllImagesLoaded(true);
  }

  //CURRENT

  //   const sliderRef = useRef<Slider>(null);

  //   const [imagesLoaded, setImagesLoaded] = useState(false);

  //   useEffect(() => {
  //     const imageElements = document.querySelectorAll(
  //       `.${styles.slide__image}`
  //     );
  //     let loadedCount = 0;

  //     const handleImageLoad = () => {
  //       loadedCount++;
  //       if (loadedCount === imageElements.length) {
  //         setImagesLoaded(true);
  //       }
  //     };

  //     imageElements.forEach((img) => {
  //       const image = img as HTMLImageElement;

  //       if (image.complete) {
  //         handleImageLoad();
  //       } else {
  //         image.addEventListener('load', handleImageLoad);
  //       }
  //     });

  //     if (imageElements.length === 0) {
  //       setImagesLoaded(true);
  //     }

  //     return () => {
  //       imageElements.forEach((img) => {
  //         const image = img as HTMLImageElement;
  //         image.removeEventListener('load', handleImageLoad);
  //       });
  //     };
  //   }, [props.slides]);

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
      const activeElement =
        document.activeElement as HTMLElement;
      if (activeElement) {
        activeElement.blur();
      }
    },
  };

  return (
    <section className={styles.slides}>
      {!allImagesLoaded && (
        <div className={styles.skeletonContainer}>
          <Skeleton height={900} width="100%" />
        </div>
      )}

      <Slider ref={sliderRef} {...settings}>
        {props.slides.map((slide, index) => (
          <div inert={true} key={nanoid()}>
            <Image
              src={slide.img}
              alt={props.description}
              className={styles.slide__image}
              width={160}
              height={900}
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
              onLoad={handleImageLoad}
              aria-hidden={false}
            />
          </div>
        ))}
              <div className={styles.navigation}>
        <PrevButton
          onClick={() => sliderRef.current?.slickPrev()}
        />
        <NextButton
          onClick={() => sliderRef.current?.slickNext()}
        />
      </div>
      </Slider>


      <p>{props.description}</p>
    </section>
  );
}
