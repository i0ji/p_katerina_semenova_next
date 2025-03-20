import {Header, Slides, Footer} from '@/components/index';
import {SlideData} from 'public';
import {v4 as uuidv4} from 'uuid';

export default function Home() {
    //CONSOLE
    console.log('v: 0.3.3.13a/20.02.25');

    //OPTION
    const isTested = 1;

    return (
        <>
            <Header/>

            {isTested ? (
                <Slides
                    key={uuidv4()}
                    slides={SlideData[0].slides}
                    description={SlideData[0].description}
                />
            ) : (
                SlideData.map((slides: SlidesDataModel) => (
                    <Slides
                        key={uuidv4()}
                        slides={slides.slides}
                        description={slides.description}
                    />
                ))
            )}

            {/* OPTION */}
            {/* <Slides
        key={uuidv4()}
        slides={SlideData[1].slides}
        description={SlideData[1].description}
      /> */}
            <Footer/>
        </>
    );
}
