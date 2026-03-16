import { FC } from 'react';

import { SectionHeading } from '@/uikit';
import { TripsSplit } from '@/utils';
import { TripsItems } from './TripsItems';
import * as styles from './HowWeTrip.css';
import { pageContainer, pageSection } from '@/styles/uikit.css';
import cn from 'classnames';

type Props = {
	trips: TripsSplit;
	variant?: 'manjerok';
};

export const HowWeTrip: FC<Props> = ({ trips: { allDay, notAllDay }, variant }) => {
	const isManjerok = variant === 'manjerok';
	const containerClass = isManjerok ? styles.headingsBlockManjerok : pageContainer;
	const carouselClass = cn(styles.carouselWrapper, isManjerok && styles.carouselWrapperManjerok);

	return (
		<>
			<div className={pageSection}>
				{isManjerok ? (
					<div className={styles.tripsBlockManjerok}>
						<div className={containerClass}>
							<div className={styles.contentWrapperManjerok}>
								<SectionHeading accented>ПОЕЗДКИ НА ЦЕЛЫЙ ДЕНЬ</SectionHeading>
							</div>
						</div>
						<div className={carouselClass}>
							<TripsItems trips={allDay} listClassName={isManjerok ? styles.carouselListNoPadding : undefined} carouselClassName={isManjerok ? styles.carouselNoMargin : undefined} />
						</div>
					</div>
				) : (
					<>
						<div className={containerClass}>
							<div className={styles.contentWrapper}>
								<SectionHeading>Как мы путешествуем</SectionHeading>
							</div>
							<div className={styles.contentWrapper}>
								<SectionHeading accented>ПОЕЗДКИ НА ЦЕЛЫЙ ДЕНЬ</SectionHeading>
							</div>
						</div>
						<div className={carouselClass}>
							<TripsItems trips={allDay} listClassName={isManjerok ? styles.carouselListNoPadding : undefined} carouselClassName={isManjerok ? styles.carouselNoMargin : undefined} />
						</div>
					</>
				)}
			</div>

			<div className={pageSection}>
				{isManjerok ? (
					<div className={styles.tripsBlockManjerok}>
						<div className={containerClass}>
							<div className={styles.contentWrapperManjerok}>
								<SectionHeading accented>ПОЕЗДКИ на полдня</SectionHeading>
							</div>
						</div>
						<div className={carouselClass}>
							<TripsItems trips={notAllDay} listClassName={isManjerok ? styles.carouselListNoPadding : undefined} carouselClassName={isManjerok ? styles.carouselNoMargin : undefined} />
						</div>
					</div>
				) : (
					<>
						<div className={containerClass}>
							<div className={styles.contentWrapper}>
								<SectionHeading accented>ПОЕЗДКИ на полдня</SectionHeading>
							</div>
						</div>
						<div className={carouselClass}>
							<TripsItems trips={notAllDay} listClassName={isManjerok ? styles.carouselListNoPadding : undefined} carouselClassName={isManjerok ? styles.carouselNoMargin : undefined} />
						</div>
					</>
				)}
			</div>
		</>
	);
};
