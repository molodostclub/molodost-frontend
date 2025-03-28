import { Icon } from '@/uikit/icons';
import { FC, PropsWithChildren, useCallback } from 'react';

import * as styles from './CardsCarousel.css';
import useEmblaCarousel from 'embla-carousel-react';

const Arrow: FC<{ dir: 'left' | 'right'; onClick(): void }> = ({ dir, onClick }) => {
  return (
    <div className={styles.arrowButton[dir]} onClick={onClick}>
      <Icon className={styles.arrowLine[dir]} name="carArrow" />
    </div>
  );
};

export const CardsCarousel: FC<PropsWithChildren<{ itemsCount: number }>> = ({ children, itemsCount }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    dragFree: false,
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
    skipSnaps: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={styles.carousel}>
      {itemsCount > 3 && <Arrow dir="left" onClick={scrollPrev} />}
      <div ref={emblaRef} className={styles.list}>
        <div className={styles.listContainer}>
          {children}
        </div>
      </div>
      {itemsCount > 3 && <Arrow dir="right" onClick={scrollNext} />}
    </div>
  )
}