import styles from './Bullets.module.scss';

export default function Bullets({
  slides,
  activeIndex,
  onBulletClick,
}: {
  slides: SlidesDataModel['slides'];
  activeIndex: number;
  onBulletClick: (index: number) => void;
}) {
  return (
    <div className={styles.customBullets}>
      {slides.map((slide, index) => (
        <button
          key={`bullet-${slide.id}`}
          className={`${styles.bullet} ${
            index === activeIndex ? styles.active : ''
          }`}
          onClick={() => onBulletClick(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
