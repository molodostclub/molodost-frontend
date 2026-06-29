/* eslint-disable @next/next/no-img-element */
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import * as styles from './Housing.css';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import { resolveCmsPath } from '@/utils';

const DotButton: FC<{ selected: boolean; onClick(): void }> = ({ onClick, selected }) => (
  <div onClick={onClick} className={selected ? styles.dotSelected : styles.dot}></div>
);

type Props = {
  pictures: string[]
  video?: string
  videoPreview?: string
}

export const HouseCarousel: FC<Props> = ({ pictures, video, videoPreview }) => {
  const pictureOffset = video ? 1 : 0;
  const totalSlides = pictureOffset + pictures.length;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    dragFree: false,
    slidesToScroll: 1,
    containScroll: 'keepSnaps',
    skipSnaps: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [loadedIndices, setLoadedIndices] = useState<number[]>([0]);
  const [videoActivated, setVideoActivated] = useState(false);
  const videoEl = useRef<HTMLVideoElement>(null);

  const markLoaded = useCallback((index: number) => {
    setLoadedIndices((prev) => {
      const next = new Set(prev);
      next.add(index);
      if (index + 1 < totalSlides) next.add(index + 1);
      return [...next];
    });
  }, [totalSlides]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    setSelectedIndex(index);
    markLoaded(index);
    videoEl.current?.pause();
  }, [emblaApi, markLoaded]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const posterUrl = videoPreview ? resolveCmsPath(videoPreview) : undefined;
  const isLoaded = (index: number) => loadedIndices.includes(index);

  return (
    <>
      <div className={styles.content}>
        <button type="button" onClick={scrollPrev} className={styles.arrowButton.left}>
          <div className={styles.arrow.left} />
        </button>
        <button type="button" onClick={scrollNext} className={styles.arrowButton.right}>
          <div className={styles.arrow.right} />
        </button>
        <div className={styles.carousel.wrapper} ref={emblaRef}>
          <div className={styles.carousel.container}>

            {video && (
              <div key={video} className={styles.carousel.item}>
                <div className={styles.carousel.videoContainer}>
                  {videoActivated && selectedIndex === 0 ? (
                    <video
                      ref={videoEl}
                      src={resolveCmsPath(video)}
                      poster={posterUrl}
                      className={styles.carousel.video}
                      controls
                      preload="none"
                    />
                  ) : posterUrl ? (
                    <button
                      type="button"
                      className={styles.videoPosterButton}
                      aria-label="Воспроизвести видео"
                      onClick={() => setVideoActivated(true)}
                    >
                      <img
                        src={posterUrl}
                        alt="Превью видео"
                        className={styles.carousel.image}
                        loading="lazy"
                        decoding="async"
                      />
                    </button>
                  ) : (
                    <div className={styles.carouselPlaceholder} aria-hidden />
                  )}
                </div>
              </div>
            )}

            {pictures.map((picture, index) => {
              const slideIndex = pictureOffset + index;
              const src = resolveCmsPath(picture);
              const shouldLoad = isLoaded(slideIndex);

              return (
                <div key={`${picture}_${index}`} className={styles.carousel.item}>
                  <div className={styles.carousel.imageContainer}>
                    {shouldLoad ? (
                      <img
                        src={src}
                        alt="Photo of a house"
                        className={styles.carousel.image}
                        width={styles.ImageSize.width}
                        height={styles.ImageSize.height}
                        loading={slideIndex === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                      />
                    ) : (
                      <div className={styles.carouselPlaceholder} aria-hidden />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.carousel.dots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  );
};
