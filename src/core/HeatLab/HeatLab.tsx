import { FC } from 'react';

import { Description, PageHeading } from '@uikit';
import { BlagodatSaunaBlock } from '../PricesPage/PricesPage';

import * as styles from './HeatLab.css';
import Image from 'next/image';

export const HeatLab: FC = () => {
	return (
		<main className={styles.content}>
			<PageHeading>Банный комплекс «БлагодатЬ»</PageHeading>
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
						<Image fill src="/images/blagodat/blagodat-1.jpg" alt="Банный комплекс «БлагодатЪ»" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw" className={styles.image} unoptimized />
					</div>
					<div className={styles.itemImageWrapper}>
						<Image fill src="/images/blagodat/blagodat-2.jpg" alt="Банный комплекс в «Молодости»" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw" className={styles.image} unoptimized />
					</div>
				</div>
			</div>
			<br />
			<br />
			<BlagodatSaunaBlock />
		</main>
	);
};
