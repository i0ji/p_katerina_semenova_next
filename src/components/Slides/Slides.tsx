'use client';
//COMMON
import {useState, useEffect, useRef} from 'react';
import Image from 'next/image';
import styles from './Slides.module.scss';
//CURRENT
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/lazy';
// SKELETON
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

export default function Slides(props: SlidesDataModel) {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    // SKELETON USE EFFECT CONDITION
    useEffect(() => {
        const imageElements = document.querySelectorAll(
            `.${styles.slide__image}`
        );
        let loadedCount = 0;

        const handleImageLoad = () => {
            loadedCount++;
            if (loadedCount === imageElements.length) {
                setImagesLoaded(true);
            }
        };

        imageElements.forEach((img) => {
            const image = img as HTMLImageElement;
            if (image.complete) {
                handleImageLoad();
            } else {
                image.addEventListener('load', handleImageLoad);
            }
        });

        if (imageElements.length === 0) {
            setImagesLoaded(true);
        }

        return () => {
            imageElements.forEach((img) => {
                const image = img as HTMLImageElement;
                image.removeEventListener('load', handleImageLoad);
            });
        };
    }, [props.slides]);

    return (
        <section className={styles.slides}>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 4000,
                    pauseOnMouseEnter: true,
                }}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    // Привязка кастомных кнопок навигации
                    if (swiper.params.navigation) {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    }
                }}
            >
                {props.slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className={styles.slide}>
                            {imagesLoaded ? (
                                <Image
                                    src={slide.img}
                                    alt={props.description}
                                    className={styles.slide__image}
                                    width={1600}
                                    height={900}
                                    loading="lazy" // Ленивая загрузка изображений
                                />
                            ) : (
                                <Skeleton
                                    height={900}
                                    width={'100%'}
                                    style={{borderRadius: 5}}
                                />
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


            <p>{props.description}</p>
        </section>
    );
}

// 5OKNNTN7YTB
