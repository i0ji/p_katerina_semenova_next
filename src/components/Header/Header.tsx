'use client';

import React from 'react';
import styles from './Header.module.scss';
import scrollToSide from 'services/scroll';
import { useAppSelector } from 'store/hooks';

export default function Header() {
  const { loaded } = useAppSelector((state) => state.projects);

  return (
    <header className={styles.header}>
      {loaded && (
        <a onClick={() => scrollToSide('bottom')}>
          Катерина Семёнова
        </a>
      )}
    </header>
  );
}
