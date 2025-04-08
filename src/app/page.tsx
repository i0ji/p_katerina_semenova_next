import { Header, Slides, Footer } from '@/components/index';
import { SlideData } from 'public';
import { nanoid } from 'nanoid';

export default function Home() {
  return (
    <>
      <Header />
      {SlideData.map(
        (slides: SlideModelNamespace.SlidesDataModel) => (
          <Slides
            key={nanoid()}
            slides={slides.slides}
            description={slides.description}
            lastSlide={slides.lastSlide}
          />
        )
      )}
      <Footer />
    </>
  );
}
