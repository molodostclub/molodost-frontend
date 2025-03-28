import { FC } from 'react';
import Image from 'next/image';

import * as styles from './OurIdols.css';
import { Description, SectionHeading } from '@/uikit';
import { useIsTablet } from '@/shared/hooks';

export const OurIdols: FC = () => {
  const isTablet = useIsTablet();

  return (
    <>
      <div className={styles.container.top}>
        <SectionHeading>Наш символ</SectionHeading>
        <div className={styles.imageWrapper}>
          <Image
            fill
            alt="Наши кумиры"
            src={isTablet ? '/images/our-symbol.jpg' : '/images/our-symbol-mobile.jpg'}
            className={styles.image}
          />
        </div>
        <div className={styles.descriptionWrapper}>
          <Description>
            Этому петроглифу, как и египетским пирамидам, 5000 лет. На нем изображены
            «солнцеголовые» шаманы в состоянии трансцендентного камлания и божество
            «трикстер» с собачьей головой. Сейчас камень с этим изображением хранится в
            музее Новосибирска, а мы возим наших гостей на его родину в Каракольскую
            долину, всего в паре часов езды от «Молодости».
          </Description>
        </div>
      </div>
      <div className={styles.container.bottom}>
        <SectionHeading>Наши кумиры</SectionHeading>
        <div className={styles.imageWrapper}>
          <Image
            fill
            alt="Наши кумиры"
            src={isTablet ? '/images/our-idols.jpg' : '/images/our-idols-mobile.jpg'}
            className={styles.image}
          />
        </div>
        <div className={styles.descriptionWrapper}>
          <Description>
            Первопроходцы, первооткрыватели, покорители - это люди, чьим мужеством и
            любопытством мы восхищаемся и кому мы благодарны за то, что теперь можем
            наслаждаться жизнью в Сибири и тайге в комфорте и уюте.
            <br />
            <br />
            На фотографии жители Алтая начала 20 века (из архива Горно-Алтайского
            краеведческого музея).
          </Description>
        </div>
      </div>
    </>
  );
};
