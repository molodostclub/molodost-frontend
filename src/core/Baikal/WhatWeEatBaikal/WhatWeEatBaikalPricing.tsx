import { FC } from 'react';
import Image from 'next/image';

import { formatPriceWithSign } from '@/utils';
import { NA_BAZE_BAIKAL } from '@/core/PricesPageBaikal/PricesPageBaikal.constants';

import * as styles from './WhatWeEatBaikalPricing.css';

const PHOTO = '/images/baikal/chto-edim5.jpg';

export const WhatWeEatBaikalPricing: FC = () => {
	const { guestsStaying, guestsNotStaying } = NA_BAZE_BAIKAL;
	const bundle = guestsStaying.items[0];

	const priceAdult =
		bundle && 'priceAdult' in bundle && typeof bundle.priceAdult === 'number' ? bundle.priceAdult : null;
	const priceChild =
		bundle && 'priceChild' in bundle && typeof bundle.priceChild === 'number' ? bundle.priceChild : null;

	return (
		<section className={styles.row} aria-label="Питание для гостей и цены">
			<div className={styles.left}>
				<div>
					<h3 className={styles.blockTitle}>{guestsStaying.title}</h3>
					{bundle && 'title' in bundle && (
						<p className={styles.serviceName}>{bundle.title}</p>
					)}
					{priceAdult !== null && priceChild !== null && (
						<div className={styles.priceLines}>
							<p className={styles.priceLine}>
								Взрослый {formatPriceWithSign(priceAdult)} /день
							</p>
							<p className={styles.priceLine}>
								Ребенок (от 5 до 12 лет) {formatPriceWithSign(priceChild)} /день
							</p>
						</div>
					)}
				</div>

				<div className={styles.divider} />

				<div>
					<h3 className={styles.notStayingTitle}>{guestsNotStaying.title}</h3>
					{guestsNotStaying.items.map((item) => (
						<div key={item.title} className={styles.mealRow}>
							<p className={styles.mealName}>{item.title}</p>
							<div className={styles.mealPrices}>
								<p className={styles.mealPriceLine}>
									<span className={styles.categoryLabel}>взрослый</span>
									<span className={styles.priceValue}>{formatPriceWithSign(item.priceAdult)}</span>
								</p>
								<p className={styles.mealPriceLine}>
									<span className={styles.categoryLabel}>ребенок (до 12 лет)</span>
									<span className={styles.priceValue}>{formatPriceWithSign(item.priceChild)}</span>
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className={styles.right}>
				<Image
					src={PHOTO}
					alt="Гастротрактир и общее пространство для приёма пищи"
					fill
					sizes="(max-width: 768px) 100vw, 50vw"
					className={styles.image}
					priority={false}
				/>
			</div>
		</section>
	);
};
