import styles from './Button.module.scss';

export function NextButton() {
  return <button className={styles.button__next} />;
}

export function PrevButton() {
  return <button className={styles.button__prev} />;
}
