/* eslint-disable @next/next/no-img-element */
import { MediaUploadModel } from '@/shared/types';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import * as styles from './Housing.css';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import { getMediaLinkFromModel } from '@/utils';
import Image from 'next/image';
import { useIsTablet } from '@/shared/hooks';

const DotButton: FC<{ selected: boolean; onClick(): void }> = ({ onClick, selected }) => (
  <div onClick={onClick} className={selected ? styles.dotSelected : styles.dot}></div>
);

const PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`;

const LazyImage: FC<{ src: string; inView: boolean }> = ({ inView, src }) => {
  return (
    <Image
      unoptimized
      priority
      src={inView ? src : PLACEHOLDER_SRC}
      className={styles.carousel.image}
      alt="Photo of a house"
      width={styles.ImageSize.width}
      height={styles.ImageSize.height}
    />
  );
};

type Props = {
  pictures: MediaUploadModel[]
  video: MediaUploadModel | null | undefined
  videoPreview: MediaUploadModel | null | undefined
}

export const HouseCarousel: FC<Props> = ({ pictures, video, videoPreview }) => {
  const isTablet = useIsTablet();
  const [preloadStep, setPreloadStep] = useState(1);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    dragFree: false,
    slidesToScroll: 1,
    containScroll: 'keepSnaps',
    skipSnaps: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [slidesInView, setSlidesInView] = useState<number[]>([]);
  const videoEl = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setPreloadStep(isTablet ? 1 : 2);
  }, [isTablet]);

  const updateSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {
    setSlidesInView((slidesInView) => {
      const totalSlides = emblaApi.slideNodes().length;
      const limits = totalSlides - 1;

      if (slidesInView.length === totalSlides) {
        emblaApi.off('select', updateSlidesInView);
      }

      let inView = emblaApi
        .slidesInView(true)
        .filter((index) => !slidesInView.includes(index));

      const maxNum = Math.max(...slidesInView, ...inView);
      const nextItemsRange = Array(preloadStep).fill(1).map((_, i) =>
        Math.min(!Number.isNaN(maxNum) ? maxNum + i + 1 : 1, limits)
      );

      inView.push(...nextItemsRange);
      inView = [...new Set(inView)];

      return slidesInView.concat(inView);
    });
  }, [preloadStep]);

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

  const onEmblaUpdate = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    updateSlidesInView(emblaApi);
    videoEl.current?.pause();
  }, [emblaApi, updateSlidesInView]);

  useEffect(() => {
    if (!emblaApi) return;

    onEmblaUpdate();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onEmblaUpdate);
    emblaApi.on('reInit', onEmblaUpdate);

    return () => {
      emblaApi.off('select', onEmblaUpdate);
      emblaApi.off('reInit', onEmblaUpdate);
    };
  }, [emblaApi, setScrollSnaps, onEmblaUpdate]);

  const getPosterUrl = () => videoPreview ? getMediaLinkFromModel(videoPreview.attributes) : undefined

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
              <div key={`${video.id}`} className={styles.carousel.item}>
                <div className={styles.carousel.videoContainer}>
                  <video
                    ref={videoEl}
                    src={getMediaLinkFromModel(video.attributes)}
                    poster={getPosterUrl()}
                    className={styles.carousel.video}
                    controls
                  ></video>
                </div>
              </div>
            )}

            {pictures.map((media, index) => {
              const src = getMediaLinkFromModel(media.attributes, 'medium');

              return (
                <div key={`${media.id}_${index}`} className={styles.carousel.item}>
                  <div className={styles.carousel.imageContainer}>
                    <LazyImage src={src} inView={slidesInView.indexOf(index) > -1} />
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
