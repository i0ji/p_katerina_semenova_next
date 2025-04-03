import styles from './Button.module.scss';

interface ButtonProps {
  onClick: () => void;
}

export function PrevButton({ onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={styles.button__prev}
      aria-label="Previous slide"
    />
  );
}

export function NextButton({ onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={styles.button__next}
      aria-label="Next slide"
    />
  );
}
