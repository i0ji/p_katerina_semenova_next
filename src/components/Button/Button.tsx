import styles from './Button.module.scss';

interface ButtonProps {
  onClick: () => void;
}

export function NextButton(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={styles.button__next}
      aria-label="Next slide"
    />
  );
}

export function PrevButton(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={styles.button__prev}
      aria-label="Previous slide"
    />
  );
}
