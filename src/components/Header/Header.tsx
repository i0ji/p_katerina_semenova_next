'use client';

import { useEffect } from 'react';
import styles from './Header.module.scss';
import scrollToSide from 'services/scroll';

import { toggleTheme } from 'store/themeSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { Toggle } from 'components/index';

export default function Header() {
  const { loaded } = useAppSelector((state) => state.projects);
  //CURRENT TESTING
  //TEST
  const themeMode = useAppSelector((state) => state.theme.mode);
  const dispatch = useAppDispatch();

  //CURRENT DARK THEME TOGGLER
  //TEST
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  //CURRENT TESTING
  //TEST
  useEffect(() => {
    document.documentElement.classList.remove('theme-light', 'theme-dark');
    document.documentElement.classList.add(`theme-${themeMode}`);
  }, [themeMode]);

  return (
    <header className={styles.header}>
      {loaded && (
        <a onClick={() => scrollToSide('bottom')}>Катерина Семёнова</a>
      )}
      <Toggle handleToggle={handleToggleTheme} />
    </header>
  );
}
