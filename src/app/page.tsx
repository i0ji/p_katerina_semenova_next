import { Header, Slides, Footer } from '@/components/index';
import { SlideData } from '@/assets';
import { SlidesDataModel } from '@/services/declarations';

export default function Home() {
  console.log('v: 0.1.0 a');

  return (
    <>
      <Header />

      {SlideData.map((slides: SlidesDataModel) => (
        <section key={slides.id}>
          <Slides
            slides={slides.slides}
            description={slides.description}
            lastSlide={slides.lastSlide}
          />
        </section>
      ))}

      <Footer />
    </>
  );
}