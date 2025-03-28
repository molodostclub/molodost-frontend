import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import * as styles from './LiveItems.css';
import { Icon } from '@/uikit/icons';
import { HouseModel } from '@/shared/types';
import { getMediaLinkFromModel } from '@/utils';
import { CardsCarousel } from '@/shared/components';

type Props = {
  houses: HouseModel[];
};

export const LiveItems: FC<Props> = ({ houses }) => {
  return (
    <CardsCarousel itemsCount={houses.length}>
      {houses.map((house) => {
        const { data } = house.attributes.pictures;

        const src = data ? getMediaLinkFromModel(data[0].attributes, 'medium') : null;

        return (
          <Link href="/rooms" key={house.id} className={styles.item}>
            <div className={styles.itemImageWrapper}>
              {!!src && (
                <Image
                  fill
                  src={src}
                  alt=""
                  unoptimized
                  // loader={({ src }) => src}
                  className={styles.itemImage}
                />
              )}
            </div>
            <div className={styles.itemContent}>
              <div className={styles.itemMainInfo}>
                <span className={styles.itemTitle}>{house.attributes.title}</span>
                <span className={styles.itemDescription}>
                  {house.attributes.description}
                </span>
              </div>
              <div className={styles.itemPriceWrapper}>
                <div className={styles.itemCapacity}>
                  <span className={styles.itemPrice}>
                    {house.attributes.peopleMin < 2 ? (
                      <>
                        <p>
                          {house.attributes.peopleMin}-{house.attributes.peopleMax}
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          {house.attributes.peopleMax}-{house.attributes.peopleMin}
                        </p>
                      </>
                    )}
                  </span>
                  <Icon name="user" className={styles.itemCapacityIcon} />
                </div>
                <span className={styles.itemPrice}>
                  {house.attributes.area} м² / от {house.attributes.basePrice} ₽
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </CardsCarousel>
  );
};
