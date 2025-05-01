import { FC } from 'react';

import { Description, PageHeading, PriceTableHeader, PriceTableRow, SectionHeading, priceTable } from '@uikit';
import { formatPriceWithSign } from '@utils';
import * as styles from './MovingPricing.css';
import * as stylesPrice from '../PricesPage/PricesPage.css';
import { pageContainer, pageSection } from '@/styles/uikit.css';
import { TOUR_HIKINGS, TOUR_PARTNERS } from '../PricesPage/PricesPage.constants';

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
										{item.price ? <p className={stylesPrice.priceNum}>{formatPriceWithSign(item.price)}</p> : <p className={stylesPrice.priceNum}>{item.priceText}</p>}
									</div>
								))}
			</div>
			{/* ПАРТНЁРСКИЕ АКТИВНОСТИ */}
			<div>
				<br />
				<br />
				<br />
				<div className={stylesPrice.grid}>
					<div className={stylesPrice.priceTable}>
						<p className={stylesPrice.groupTitle}>ПАРТНЁРСКИЕ АКТИВНОСТИ</p>
						<div className={stylesPrice.priceRowSmall}>
							<div className={stylesPrice.tableHeaderCol}>услуга</div>
							<div className={stylesPrice.tableHeaderCol}>цена,&nbsp;руб</div>
						</div>

						{TOUR_PARTNERS.map((item, index) => (
							<div className={stylesPrice.priceRowSmall} key={index}>
								{item.subtitle ? (
									<p className={stylesPrice.priceTitle}>
										{item.title} <br />
										<span className={stylesPrice.priceSubtitle}>{item.subtitle}</span>
									</p>
								) : (
									<p className={stylesPrice.priceTitle}>{item.title}</p>
								)}

								<div>
									{item.priceText ? (
										<p className={stylesPrice.priceNum}>{item.priceText}</p>
									) : item.pricePrefix ? (
										<p className={stylesPrice.priceNum}>
											{item.pricePrefix}
											{formatPriceWithSign(item.price)}
										</p>
									) : (
										<p className={stylesPrice.priceNum}>{formatPriceWithSign(item.price)}</p>
									)}

									{item.note && !item.priceText && <p className={stylesPrice.priceNote}>{item.note}</p>}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	</div>
);
