import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import * as styles from './InfoCard.css';
import { ArrowButton } from '@uikit/Button';
import cn from 'classnames';

export type InfoCardProps = {
  image: string;
  title: string | JSX.Element;
  text?: string;
  linkTo?: string;
  shade?: boolean;
  smallTitle?: boolean;
  smallHeight?: boolean;
};

export const InfoCard: FC<InfoCardProps> = ({
  image,
  text,
  title,
  linkTo,
  shade = true,
  smallTitle = false,
  smallHeight = false,
}) => {
  const content = (
    <>
      <Image
        fill
        src={image}
        alt=""
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw"
        className={styles.cardImage}
      />
      {shade && <div className={styles.shade} />}
      {shade && <div className={styles.shadeSecond} />}
      <div className={styles.cardContents}>
        <span className={cn(styles.title, smallTitle && styles.smallTitle)}>{title}</span>
        {!!text && <span className={styles.description}>{text}</span>}
        <div>
          {!!linkTo && (
            <ArrowButton direction="right" size="small">
              Подробнее
            </ArrowButton>
          )}
        </div>
      </div>
    </>
  );

  if (linkTo) {
    return (
      <Link
        href={linkTo}
        className={cn(styles.container, smallHeight && styles.smallHeight)}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className={cn(styles.container, smallHeight && styles.smallHeight)}>
      {content}
    </div>
  );
};
