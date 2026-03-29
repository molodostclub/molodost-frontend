import { FC, PropsWithChildren } from 'react';
import Link from 'next/link';

import cn from 'classnames';

import { AccordionGraphic } from '@shared/components/AccordionSection';

import * as styles from './SectionHeading.css';

type Props = {
  linkTo?: string;
  linkText?: string;
  accented?: boolean;
  bold?: boolean;
  size?: 'L' | 'M' | 'S';
  color?: 'black' | 'brand';
  align?: 'left' | 'center' | 'right' | 'justify';
};

export const SectionHeading: FC<PropsWithChildren<Props>> = ({
  children,
  linkText = 'Подробнее',
  linkTo,
  accented = false,
  align = 'left',
  size = 'L',
  color = 'black',
  bold = false,
}) => {
  const style = {
    textAlign: align,
  };

  return (
    <div className={styles.container}>
      {accented ? (
        <h3 className={styles.headingAccented} style={style}>
          {children}
        </h3>
      ) : (
        <h2 
          className={
            cn(
              styles.heading,
              size && styles.headingSize[size],
              color && styles.headingColor[color],
              bold ? styles.headingWeight.bold : styles.headingWeight.medium
            )
          }
          style={style}
        >
          {children}
        </h2>
      )}
      {!!linkTo && (
        <Link href={linkTo} className={styles.sectionMoreLink} prefetch={false}>
          <AccordionGraphic layout="single" inline titleClassName={styles.sectionMoreLabel}>
            {linkText}
          </AccordionGraphic>
        </Link>
      )}
    </div>
  );
};
