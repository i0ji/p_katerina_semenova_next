'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Slides.module.scss';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

function Arrow(props: {
  disabled?: boolean;
  left?: boolean;
  onClick: (e: React.MouseEvent<SVGSVGElement>) => void;
}) {
  const disabled = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={`${styles.arrow} ${
        props.left ? styles.arrowLeft : styles.arrowRight
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default function Slides(props: SlideModelNamespace.SlidesDataModel) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true
  });
  return (
    <section className={styles.slides}>
      <div className={styles.slidesWrapper}>
        <div ref={sliderRef} className="keen-slider">
          {props.slides.map((slide) => (
            <div key={slide.id} className={styles.slide}>
              <Image
                src={slide.img}
                alt={props.description}
                className={`${styles.slide__image} ${'keen-slider__slide'}`}
                width={1600}
                height={900}
                priority
              />
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: React.MouseEvent<SVGSVGElement>) => {
                e.stopPropagation();
                instanceRef.current?.prev();
              }}
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: React.MouseEvent<SVGSVGElement>) => {
                e.stopPropagation();
                instanceRef.current?.next();
              }}
            />
          </>
        )}
      </div>
      <p>{props.description}</p>
    </section>
  );
}

// {props.slides.map((slide) => (
//   <div key={slide.id} className={styles.slide}>
//     <Image
//       src={slide.img}
//       alt={props.description}
//       className={styles.slide__image}
//       width={1600}
//       height={900}
//       priority
//     />
//   </div>

// {loaded && instanceRef.current && (
//   <div className="dots">
//     {[
//       ...Array(instanceRef.current.track.details.slides.length).keys()
//     ].map((idx) => {
//       return (
//         <button
//           key={idx}
//           onClick={() => {
//             instanceRef.current?.moveToIdx(idx);
//           }}
//           className={
//             `${styles.dot}` + (currentSlide === idx ? ' active' : '')
//           }
//         ></button>
//       );
//     })}
//   </div>
// )}
