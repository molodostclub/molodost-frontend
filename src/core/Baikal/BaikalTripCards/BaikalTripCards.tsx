import { FC } from 'react';
import cn from 'classnames';

import type { TripModel } from '@/shared/types';

import { BaikalTripCard } from './BaikalTripCard';
import * as styles from './BaikalTripCards.css';

type Props = {
	trips: TripModel[];
	listClassName?: string;
	carouselClassName?: string;
};

/**
 * Ряд карточек на всю ширину контейнера (~⅓ на десктопе, gap 15px).
 * Слайдер фото только внутри каждой карточки (Swiper в BaikalTripCard).
 */
export const BaikalTripCards: FC<Props> = ({ trips, listClassName, carouselClassName }) => {
	return (
		<div className={cn(styles.gridOuter, carouselClassName)}>
			<div className={cn(styles.grid, listClassName)}>
				{trips.map((trip) => (
					<div key={trip.id} className={styles.cardWrap}>
						<BaikalTripCard trip={trip} />
					</div>
				))}
			</div>
		</div>
	);
};
