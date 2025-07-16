import styles from './Toggle.module.scss';

export default function Toggle(props) {
  return (
    <div className={styles.toggle}>
      <input type="checkbox" id="temp" onClick={props.handleToggle} />
      <label htmlFor="temp">тёмная тема</label>
    </div>
  );
}
