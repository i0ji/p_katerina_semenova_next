'use client';

import { useRef, useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

import styles from './Slides.module.scss';
import { v4 as uuidv } from 'uuid';
//CURRENT
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section className={styles.slides}>
      <div className={styles.slide}>
        <div className="embla__container">
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            ssr={true}
            infinite={true}
            autoPlay={false}
            responsive={responsive}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={['tablet', 'mobile']}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {props.slides.map((slide) =>
              isLoaded ? (
                <img
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
              )
            )}
          </Carousel>
          ;
        </div>

        {/* <button
          ref={navigationPrevRef}
          className={styles.slide__leftArrow}
          aria-label="Previous slide"
        />
        <button
          ref={navigationNextRef}
          className={styles.slide__rightArrow}
          aria-label="Next slide"
        /> */}
      </div>
      <p>{props.description}</p>
    </section>
  );
}
