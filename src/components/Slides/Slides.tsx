'use client';

import { useRef, useState, useEffect } from 'react';

import Skeleton from 'react-loading-skeleton';
import Image from 'next/image';
import Slider from 'react-slick';
import { nanoid } from 'nanoid';

import './Slick.scss';
import styles from './Slides.module.scss';
import { NextButton, PrevButton } from '../Button/Button';

export default function Slides(props: SlidesDataModel) {
  const sliderRef = useRef<Slider>(null);

  //CURRENT
  // const [isLoading, setIsLoading] = useState(true);
  // const [sliderHeight, setSliderHeight] = useState(0);
  // const containerRef = useRef<HTMLDivElement>(null);

  //CURRENT
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    autoplay: !props.isTested,
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
      <div className={styles.slides__wrapper}>
        <Slider ref={sliderRef} {...settings}>
          {props.slides.map((slide) => (
            <div key={slide.id} className={styles.slide}>
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
        </Slider>

        <PrevButton
          onClick={() => sliderRef.current?.slickPrev()}
        />
        <NextButton
          onClick={() => sliderRef.current?.slickNext()}
        />
      </div>
      <p>{props.description}</p>
    </section>
  );
}
