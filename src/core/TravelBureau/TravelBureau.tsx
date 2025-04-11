import { FC } from 'react';

import { Description, PageHeading } from '@uikit';
import * as styles from './TravelBureau.css';
import { uikit, indent } from '@styles';
import { formatPriceWithSign } from '@utils';
import { ACCOMPANIES } from './TravelBureau.constants';
import Image from 'next/image';
import cn from "classnames"

const Accompany: FC<{
  title: string;
  description?: string;
  price: number;
}> = ({ description, price, title }) => (
  <div className={styles.accompanyItem}>
    <div className={styles.accompanyInfo}>
      <h3 className={uikit.featureText}>{title}</h3>
      {!!description && <p className={styles.accompanyDescription}>{description}</p>}
    </div>
    <div className={styles.accompanyPrice}>
      <div className={uikit.featureAccentText}>{formatPriceWithSign(price)}<span className={uikit.featureText}> / час</span></div>
    </div>
  </div>
);

export const TravelBureau: FC = () => {
  return (
    <main className={styles.content} id="turbjuro">
      <PageHeading>турбюро &laquo;алтайский трактат&raquo;</PageHeading>
      <div className={cn(indent.tablet_mt_15, indent.mt_6)}>
        <p className={styles.attention}>
          Цены актуальны{' '}
          <span className={styles.attentionRed}>до 31 марта 2025 года</span>.
        </p>
      </div>
      <div className={styles.grid}>
        <div className={styles.textContent.top}>
          <Description>
            Наши гиды-следопыты и водители — хорошо знают Алтай и покажут его таким, каким
            мы его сами любим. Мы можем организовать для Вас любую поездку, в любое
            направление и в любой день.
          </Description>
        </div>
        <div className={styles.acccompaniesContainer}>
          <h2 className={styles.subtitle}>сопровождающие</h2>
          {ACCOMPANIES.map((accompany, i) => (
            <Accompany key={i} {...accompany} />
          ))}
          <br />
          <br />
          <div className={styles.itemImageWrapper}>
            <Image
              fill
              src="/images/Altay-travel.jpeg"
              alt="турбюро"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw"
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.textContent.bottom}>
          <Description>
            <br />
            Мы не хотим, чтобы Вы торопились, поэтому услуги наших сопровождающих
            считаются не более 6 часов за поездку.
            <br />
            <br />
            Мы соблюдаем правила безопасности в наших поездках и напоминаем, что Вы сами
            несете ответственность за свою жизнь.
            <br />
            <br />
            Все наши поездки очень зависят от погоды и природы, и мы оставляем за собой
            право все менять в последний момент.
          </Description>
        </div>
      </div>
    </main>
  );
};
