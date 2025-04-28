import { FC } from 'react';

import { formatPriceWithSign } from '@utils';
import { Description, PageHeading, PriceTableRow, priceTable } from '@uikit';
import * as stylesPrice from '../PricesPage/PricesPage.css';
import { HeatLabSibir } from '../PricesPage/PricesPage';
import cn from 'classnames';
import { indent } from '@/styles';

import * as styles from './HeatLab.css';
import Image from 'next/image';

export const HeatLab: FC = () => {
	return (
		<main className={styles.content}>
			<PageHeading>Банный комплекс «БлагодатЪ»</PageHeading>
			<br />
			<br />
			<div className={styles.textContent}>
				<Description>
					На Алтае не хочется из-за чего-то париться, поэтому мы создали целую «Лабораторию тепла», где в кедровых банях с нефритовыми печами можно пройти авторскую процедуру медленного парения по методу нашего шеф-пармейстера. Парение проходит при не слишком высоких температурах, и даже
					начинающие банщики проводят в парной много времени.
				</Description>
				<br />
				<div className={styles.grid}>
					<div className={styles.itemImageWrapper}>
						<Image fill src="/images/blagodat/blagodat-1.jpg" alt="Банный комплекс «БлагодатЪ»" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw" className={styles.image} />
					</div>
					<div className={styles.itemImageWrapper}>
						<Image fill src="/images/blagodat/blagodat-2.jpg" alt="Банный комплекс в «Молодости»" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw" className={styles.image} />
					</div>
				</div>
			</div>
			<br />
			<br />
			<HeatLabSibir />
		</main>
	);
};
