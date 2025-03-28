import { FC } from 'react';
import Image from 'next/image';

import { Description, PageHeading, PriceTableHeader, PriceTableRow, priceTable } from '@uikit';
import { formatPriceWithSign } from '@utils';
import * as styles from './HealthLifestyle.css';
import { indent } from '@/styles';
import cn from 'classnames';

const FitnessPricing: FC = () => (
  <div className={styles.tableContainer}>
    <div className={priceTable.table}>
      <PriceTableHeader>
        <div className={priceTable.cell}>40 минут</div>
        <div className={priceTable.cell}>60 минут</div>
      </PriceTableHeader>
      <PriceTableRow title={<>Пер&shy;со&shy;наль&shy;ная тре&shy;ни&shy;ров&shy;ка</>}>
        <div className={priceTable.cellAccent}>{formatPriceWithSign(4_000)}</div>
        <div className={priceTable.cellAccent}>{formatPriceWithSign(5_000)}</div>
      </PriceTableRow>
      <PriceTableRow title="Персональное занятие йогой">
        <div className={priceTable.cellAccent}>{formatPriceWithSign(4_000)}</div>
        <div className={priceTable.cellAccent}>{formatPriceWithSign(5_000)}</div>
      </PriceTableRow>
    </div>
  </div>
);

export const HealthLifestyle = () => (
  <div className={styles.content}>
    <PageHeading>ЗОЖ и ЗОМ</PageHeading>

      <div className={cn(styles.textTop, indent.mt_6)}>
        <Description>
          Здоровый образ жизни и&nbsp;мыслей &mdash; это&nbsp;то, зачем на&nbsp;Алтай приезжают многие наши гости. Мы&nbsp;тоже верим, что местный воздух и&nbsp;востребованная нынче ландшафтотерапия &mdash;&nbsp;лучшие средства для того, чтобы выдохнуть и&nbsp;перезагрузиться.
          <br />
          <br />
          На&nbsp;Алтае не&nbsp;хочется из-за чего-то париться, поэтому мы&nbsp;создали целую &laquo;Лабораторию тепла&raquo;, где в&nbsp;кедровых банях с&nbsp;нефритовыми печами можно пройти авторскую процедуру медленного парения по&nbsp;методу нашего шеф-пармейстера. Парение проходит при не&nbsp;слишком высоких температурах, и&nbsp;даже начинающие банщики проводят в&nbsp;парной много времени.
          <br />
          <br />
          У&nbsp;нас есть все необходимое и&nbsp;для спортивных нагрузок: множество маршрутов для хайкинга разного уровня сложности, американские велосипеды Trek, тренажеры Life Fitness, оборудование TRX и&nbsp;workout-площадка на&nbsp;свежем воздухе. В&nbsp;сезон наши тренеры проводят групповые занятия йогой или зарядку на&nbsp;берегу.
          <br />
          <br />
          Помимо классических физических упражнений у&nbsp;нас на&nbsp;базе регулярно проходят сеансы медитации по&nbsp;различным методикам, в&nbsp;том числе с&nbsp;использованием тибетских чаш или разжиганием большого огня.
        </Description>
      </div>
      <div className={cn(styles.imagesGrid, indent.mt_6)}>
            <div className={styles.imageWrapper}>
              <Image fill src="/images/odissey-card.jpg" alt="спортивный зал «Одиссей»" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw" className={styles.image} />
            </div>
            <div className={styles.imageWrapper}>
              <Image fill src="/images/zom/zom2.jpg" alt="спортивный зал «Одиссей»" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw" className={styles.image} />
            </div>
            <div className={styles.imageWrapper}>
              <Image fill src="/images/zom/zom3.jpg" alt="спортивный зал «Одиссей»" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw" className={styles.image} />
            </div>
            <div className={styles.imageWrapper}>
              <Image fill src="/images/zom/zom4.jpg" alt="спортивный зал «Одиссей»" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw" className={styles.image} />
            </div>
          </div>
      <div>
        <div className={styles.card}>
          <div className={cn(indent.tablet_mt_15, indent.mt_6)}>
            <p className={styles.attention}>
              Цены актуальны <span className={styles.attentionRed}>до 31 марта 2025 года</span>.
            </p>
          </div>
          <h2 className={styles.cardSubtitle}>фитнес</h2>
          <h2 className={styles.cardTitle.withSubtitle}>спортивный зал &laquo;Одиссей&raquo;</h2>
        </div>
        <FitnessPricing />
      </div>
  </div>
);
