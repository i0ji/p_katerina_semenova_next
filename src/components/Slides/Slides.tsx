'use client';

import { useRef, useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Autoplay,
  Pagination,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';

import styles from './Slides.module.scss';

export default function Slides(props: SlidesDataModel) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const img = new globalThis.Image();
    img.src = props.slides[0].img;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [props.slides]);


  //CURRENT
  //PAGINATION
  const paginationStyle = styles.pagination;
  const paginationStyleBullet = styles.bullet;
  const paginationStyleBulletActive = styles.bulletActive;

  //OPTION
  // const sliderParams = {
  //   modules: [Navigation, Autoplay, Pagination],
  //   loop: true,
  //   spaceBetween: 0,
  //   slidesPerView: 1,
  //   autoplay: {
  //     delay: 4000,
  //     pauseOnMouseEnter: true,
  //   },
  //   pagination: {
  //     clickable: true,
  //   },
  //   navigation: {
  //     prevEl: navigationPrevRef.current,
  //     nextEl: navigationNextRef.current,
  //   },
  //   onBeforeInit: (swiper) => {
  //     if (typeof swiper.params.navigation !== 'boolean') {
  //       swiper.params.navigation!.prevEl =
  //         navigationPrevRef.current;
  //       swiper.params.navigation!.nextEl =
  //         navigationNextRef.current;
  //     }
  //   },
  // };

  return (
    <section className={styles.slides}>
      <div className={styles.slide}>
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== 'boolean') {
              swiper.params.navigation!.prevEl =
                navigationPrevRef.current;
              swiper.params.navigation!.nextEl =
                navigationNextRef.current;
            }
          }}
          pagination={{
            clickable: true,
            // el: paginationStyle,
            // bulletClass: paginationStyleBullet,
            // bulletActiveClass: paginationStyleBulletActive,
          }}
        >
          {props.slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              {isLoaded ? (
                <Image
                  ref={imageRef}
                  src={slide.img}
                  alt={props.description}
                  className={styles.slide__image}
                  width={1600}
                  height={900}
                  loading="lazy"
                />
              ) : (
                <Skeleton
                  height={900}
                  width={'100%'}
                  style={{ borderRadius: 5 }}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          ref={navigationPrevRef}
          className={styles.slide__leftArrow}
          aria-label="Previous slide"
        />
        <button
          ref={navigationNextRef}
          className={styles.slide__rightArrow}
          aria-label="Next slide"
        />
      </div>
      <p>{props.description}</p>
    </section>
  );
}
