import { Header, Slides, Footer } from '@/components/index';
import { SlideData } from 'public';
import { nanoid } from 'nanoid';

export default function Home() {
  //CONSOLE
  console.log('v: 0.3.4 /08.04.25');

  //OPTION
  const isTested = 1;

  return (
    <>
      <Header />

      {isTested ? (
        <Slides
          key={nanoid()}
          slides={SlideData[0].slides}
          description={SlideData[0].description}
        />
      ) : (
        SlideData.map((slides: SlidesDataModel) => (
          <Slides
            key={nanoid()}
            slides={slides.slides}
            description={slides.description}
          />
        ))
      )}

      {/* OPTION */}
      {/* <Slides
        key={nanoid()}
        slides={SlideData[1].slides}
        description={SlideData[1].description}
      /> */}
      <Footer />
    </>
  );
}
