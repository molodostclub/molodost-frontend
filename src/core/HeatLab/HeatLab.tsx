import { FC } from 'react';

import { formatPriceWithSign } from '@utils';
import { Description, PageHeading, PriceTableRow, priceTable } from '@uikit';
import { HEAT_LAB_TABLE } from './HeatLab.constants';
import cn from "classnames"
import { indent } from '@/styles';

import * as styles from './HeatLab.css';
import Image from 'next/image';

const HeatLabPricing: FC = () => (
  <div className={styles.tableContainer}>
    <div className={priceTable.table}>
      {HEAT_LAB_TABLE.map((item) => (
        <PriceTableRow key={item.id} title={item.name} note={item.note}>
          <div className={priceTable.cell}>{item.time || ''}</div>
          <div className={priceTable.cell}>
            {!!item.pricePrefix ? item.pricePrefix + ' ' : ''}
            <span className={priceTable.accent}>{formatPriceWithSign(item.price)}</span>
            {!!item.pricePostfix ? ' ' + item.pricePostfix : ''}
          </div>
        </PriceTableRow>
      ))}
    </div>
  </div>
);

export const HeatLab: FC = () => {
  return (
    <main className={styles.content}>
      <PageHeading>Банный комплекс «БлагодатЪ»</PageHeading>
      <div className={cn(indent.tablet_mt_15, indent.mt_6)}>
        <p className={styles.attention}>
          Цены актуальны{' '}
          <span className={styles.attentionRed}>до 31 марта 2025 года</span>.
        </p>
      </div>
      <div className={styles.grid}>
        <div className={styles.textContent}>
          <Description>
            На Алтае не хочется из-за чего-то париться, поэтому мы создали целую
            «Лабораторию тепла», где в кедровых банях с нефритовыми печами можно пройти
            авторскую процедуру медленного парения по методу нашего шеф-пармейстера.
            Парение проходит при не слишком высоких температурах, и даже начинающие
            банщики проводят в парной много времени.
          </Description>
          <br />
          <div className={styles.itemImageWrapper}>
            <Image
              fill
              src="/images/blagodat/blagodat-1.jpg"
              alt="Банный комплекс «БлагодатЪ»"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw"
              className={styles.image}
            />
          </div>
          <br />
          <div className={styles.itemImageWrapper}>
            <Image
              fill
              src="/images/blagodat/blagodat-2.jpg"
              alt="Банный комплекс в «Молодости»"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw"
              className={styles.image}
            />
          </div>
        </div>
        <HeatLabPricing />
      </div>
    </main>
  );
};
