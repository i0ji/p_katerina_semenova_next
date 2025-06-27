'use client'

import { useEffect, useState } from 'react';
import { Header, Slides, Footer } from '@/components/index';
// import { SlideData } from 'public';
import { nanoid } from 'nanoid';
import { fetchAnniversarySlides } from '@/services';

export default function Home() {
  const [slides, setSlides] = useState<SlideModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAnniversarySlides()
      .then((data) => {
        setSlides(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Загрузка слайдов...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <>
      <Header />


        <Slides
          key={nanoid()}
          slides={slides}
          description={'тратата'}

        />
      
      <Footer />
    </>
  );
}
