'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { fetchProjects } from 'store/projectAction';
import { Header, Slides, Footer } from '@/components/index';
import { nanoid } from 'nanoid';

export default function Home() {
  const dispatch = useAppDispatch();
  const { projects, pending, error } = useAppSelector(
    (state) => state.projects
  );

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (pending) return <div>Загрузка проектов...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  console.log('0.4.2');

  return (
    <>
      <Header />
      {projects.map((project) => (
        <Slides
          key={nanoid()}
          slides={project.slides}
          description={project.description}
        />
      ))}
      <Footer />
    </>
  );
}
