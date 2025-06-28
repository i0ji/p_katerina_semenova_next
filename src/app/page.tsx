'use client';

import { useEffect, useState } from 'react';
import { Header, Slides, Footer } from '@/components/index';
import { nanoid } from 'nanoid';

interface SlideModel {
  id: number;
  img: string;
}

interface SlidesDataModel {
  description: string;
  slides: SlideModel[];
}

export default function Home() {
  const [projects, setProjects] = useState<SlidesDataModel[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/fetchData.php')
      .then((res) => {
        if (!res.ok) throw new Error(`Ошибка: ${res.status}`);
        return res.json();
      })
      .then((data: SlidesDataModel[]) => setProjects(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Загрузка проектов...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <>
      <Header />

      {projects.map((project, index) => (
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
