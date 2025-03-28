import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import * as styles from './TripsItems.css';
import { TripModel } from '@/shared/types';
import { formatPriceWithSign, getMediaLinkFromModel } from '@/utils';
import { CardsCarousel } from '@/shared/components';

type Props = {
  trips: TripModel[];
};

export const TripsItems: FC<Props> = ({ trips }) => {
  return (
    <CardsCarousel itemsCount={trips.length}>
      {trips.map(
        ({
          id,
          attributes: {
            pictures,
            title,
            slug,
            isAllDay,
            durationText,
            priceAdult,
            subtitle,
          },
        }) => {
          const src = pictures.data
            ? getMediaLinkFromModel(pictures.data[0].attributes, 'medium')
            : null;

          return (
            <Link key={id} href={`/puteshestvia/${slug}`}>
              <div key={id} className={styles.item}>
                {!!src && (
                  <div className={styles.itemImageWrapper}>
                    <Image src={src} fill alt="" className={styles.itemImage} unoptimized />
                  </div>
                )}

                <div className={styles.shade} />
                <div className={styles.itemContent}>
                  <div className={styles.itemMainInfo.top}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.subtitle}>{subtitle}</div>
                    <span className={styles.mustardText}>подробнее →</span>
                  </div>
                  <div>
                    <div className={styles.line} />
                    <div className={styles.priceWrapper}>
                      <span className={styles.mustardText}>
                        {durationText}
                      </span>
                      {(Boolean(priceAdult && priceAdult !== 0)) && <span className={styles.mustardText}>
                        {formatPriceWithSign(priceAdult)}
                      </span>}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        },
      )}
    </CardsCarousel>
  );
};
