'use client';

import styles from './Bullets.module.scss';

export default function Bullets({
  slides,
  activeIndex,
  onBulletClick,
}: {
  slides: SlideModel[];
  activeIndex: number;
  onBulletClick: (index: number) => void;
}) {
  return (
    <div className={styles.bullets}>
      {slides.map((_, index) => (
        <button
          key={`bullet-${index}`}
          className={`${styles.bullet} ${
            index === activeIndex ? styles.active : ''
          }`}
          onClick={() => onBulletClick(index)}
          aria-label={`Slide ${index + 1}`}
          aria-current={index === activeIndex}
        />
      ))}
    </div>
  );
}
