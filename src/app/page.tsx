'use client';

import { useEffect, useState } from 'react';
import { Header, Slides, Footer } from '@/components/index';
import { nanoid } from 'nanoid';
import { fetchProjects } from '@/services';

export default function Home() {
  const [projects, setProjects] = useState<SlidesDataModel[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Загрузка проектов...</div>;
  if (error) return <div>Ошибка: {error}</div>;

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
