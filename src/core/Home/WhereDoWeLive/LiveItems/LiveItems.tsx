import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import * as styles from './LiveItems.css';
import { Icon } from '@/uikit/icons';
import { HouseModel } from '@/shared/types';
import { resolveCmsPath } from '@/utils';
import { CardsCarousel } from '@/shared/components';

type Props = {
  houses: HouseModel[];
};

export const LiveItems: FC<Props> = ({ houses }) => {
  return (
    <CardsCarousel itemsCount={houses.length}>
      {houses.map((house) => {
        const src = house.pictures[0] ? resolveCmsPath(house.pictures[0]) : null;

        return (
          <Link href="/rooms" key={house.id} className={styles.item}>
            <div className={styles.itemImageWrapper}>
              {!!src && (
                <Image
                  fill
                  src={src}
                  alt=""
                  unoptimized
                  className={styles.itemImage}
                />
              )}
            </div>
            <div className={styles.itemContent}>
              <div className={styles.itemMainInfo}>
                <span className={styles.itemTitle}>{house.title}</span>
                <span className={styles.itemDescription}>
                  {house.description}
                </span>
              </div>
              <div className={styles.itemPriceWrapper}>
                <div className={styles.itemCapacity}>
                  <span className={styles.itemPrice}>
                    {house.peopleMin < 2 ? (
                      <>
                        <p>
                          {house.peopleMin}-{house.peopleMax}
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          {house.peopleMax}-{house.peopleMin}
                        </p>
                      </>
                    )}
                  </span>
                  <Icon name="user" className={styles.itemCapacityIcon} />
                </div>
                <span className={styles.itemPrice}>
                  {house.area} м² / от {house.basePrice} ₽
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </CardsCarousel>
  );
};
