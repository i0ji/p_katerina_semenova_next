'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { nanoid } from 'nanoid';
import Swiper, {
  SwiperPluginLazyload,
  SwiperPluginPagination,
} from 'tiny-swiper';
// import 'tiny-swiper/dist/tiny-swiper.css';

import styles from './Slides.module.scss';
import { NextButton, PrevButton } from '../Button/Button';


export default function Slides(props: SlidesDataModel) {
  const swiperContainerRef = useRef<HTMLDivElement>(null);
  const swiperInstance = useRef<any>(null);

  // Инициализация tiny-swiper
  useEffect(() => {
    if (swiperContainerRef.current && !swiperInstance.current) {
      swiperInstance.current = new Swiper(
        swiperContainerRef.current,
        {
          plugins: [
            SwiperPluginLazyload,
            SwiperPluginPagination,
          ],
          loop: true,
          speed: 500,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        }
      );
    }

    // Очистка при размонтировании
    return () => {
      if (swiperInstance.current) {
        swiperInstance.current.destroy();
      }
    };
  }, []);

  // Функции для кнопок навигации
  const goNext = () => swiperInstance.current?.slideNext();
  const goPrev = () => swiperInstance.current?.slidePrev();

  return (
    <section className={styles.slides}>
      <div className="swiper-container" ref={swiperContainerRef}>
        <div className="swiper-wrapper">
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
        </div>

        {/* Кастомные кнопки навигации */}
        <PrevButton onClick={goPrev} />
        <NextButton onClick={goNext} />

        {/* Пагинация (если нужно) */}
        <div className="swiper-pagination"></div>
      </div>
      <p>{props.description}</p>
    </section>
  );
}
