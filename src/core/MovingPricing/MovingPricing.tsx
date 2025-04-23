import { FC } from 'react';

import { Description, PageHeading, PriceTableHeader, PriceTableRow, SectionHeading, priceTable } from '@uikit';
import { formatPriceWithSign } from '@utils';
import * as styles from './MovingPricing.css';
import * as stylesPrice from '../PricesPage/PricesPage.css';
import { pageContainer, pageSection } from '@/styles/uikit.css';
import { TOUR_HIKINGS } from '../PricesPage/PricesPage.constants';

export const MovingPricing: FC = () => (
	<div className={pageSection}>
		<div className={pageContainer}>
			<div className={styles.movementTitle}>
				<SectionHeading accented>Групповые хайкинги</SectionHeading>
			</div>
			{/* ГРУППОВЫЕ ХАЙКИНГИ */}
			<div>
				<br />
				<br />
				<br />
				<p className={stylesPrice.groupTitle}>ГРУППОВЫЕ ХАЙКИНГИ</p>
				<br />
			</div>
			<div className={stylesPrice.priceTable}>
				<div className={stylesPrice.priceRow}>
					<div className={stylesPrice.tableHeaderCol}>услуга</div>
					<div className={stylesPrice.tableHeaderCol}>про&shy;дол&shy;жи&shy;тель&shy;ность</div>
					<div className={stylesPrice.tableHeaderCol}>цена, руб</div>
				</div>

				{TOUR_HIKINGS.map((item, index) => (
					<div className={stylesPrice.priceRow} key={index}>
						{item.subtitle ? (
							<p className={stylesPrice.priceTitle}>
								{item.title} <br />
								<span className={stylesPrice.priceSubtitle}>{item.subtitle}</span>
							</p>
						) : (
							<p className={stylesPrice.priceTitle}>{item.title}</p>
						)}
						<p className={stylesPrice.twoCol}>{item.twoCol}</p>
						<p className={stylesPrice.priceNum}>{formatPriceWithSign(item.price)}</p>
					</div>
				))}
			</div>
		</div>
	</div>
);
