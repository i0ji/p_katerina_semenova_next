'use client';

import './Slider.scss';
import styles from './Slides.module.scss';
import Image from 'next/image';

export default function Slides(props: SlidesDataModel) {
  return (
    <section className={styles.slides}>
      {props.slides.map((slide) => (
        <Image
          src={slide.img}
          alt={props.description}
          className={styles.slide__image}
          width={1600}
          height={900}
          loading="lazy"
        />
      ))}

      <p>{props.description}</p>
    </section>
  );
}
