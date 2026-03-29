import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import cn from 'classnames';

import { AccordionGraphic } from '@shared/components/AccordionSection';

import * as styles from './InfoCard.css';

export type InfoCardProps = {
  image: string;
  title: string | JSX.Element;
  text?: string;
  linkTo?: string;
  shade?: boolean;
  smallTitle?: boolean;
  smallHeight?: boolean;
  containerClassName?: string;
};

export const InfoCard: FC<InfoCardProps> = ({
  image,
  text,
  title,
  linkTo,
  shade = true,
  smallTitle = false,
  smallHeight = false,
  containerClassName,
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
            <AccordionGraphic
              layout="single"
              inline
              graphicClassName={styles.cardMoreGraphic}
              titleClassName={styles.cardMoreLabel}
            >
              Подробнее
            </AccordionGraphic>
          )}
        </div>
      </div>
    </>
  );

  const containerClass = cn(styles.container, smallHeight && styles.smallHeight, containerClassName);

  if (linkTo) {
    return (
      <Link href={linkTo} className={containerClass}>
        {content}
      </Link>
    );
  }

  return <div className={containerClass}>{content}</div>;
};
