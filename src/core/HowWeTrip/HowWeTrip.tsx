import { FC } from 'react';

import { SectionHeading } from '@/uikit';
import { TripsSplit } from '@/utils';
import { TripsItems } from './TripsItems';
import * as styles from './HowWeTrip.css';
import { pageContainer, pageSection } from '@/styles/uikit.css';
import { indent } from '@/styles';
import cn from 'classnames';

type Props = {
	trips: TripsSplit;
};

export const HowWeTrip: FC<Props> = ({ trips: { allDay, notAllDay } }) => {
	return (
		<>
			<div className={pageSection}>
				<div className={pageContainer}>
					<div className={styles.contentWrapper}>
						<SectionHeading>Как мы путешествуем</SectionHeading>
					</div>
					<div className={styles.contentWrapper}>
						<SectionHeading accented>ПОЕЗДКИ НА ЦЕЛЫЙ ДЕНЬ</SectionHeading>
					</div>
				</div>
				<div className={styles.carouselWrapper}>
					<TripsItems trips={allDay} />
				</div>
			</div>

			<div className={pageSection}>
				<div className={pageContainer}>
					<div className={styles.contentWrapper}>
						<SectionHeading accented>ПОЕЗДКИ на полдня</SectionHeading>
					</div>
				</div>
				<div className={styles.carouselWrapper}>
					<TripsItems trips={notAllDay} />
				</div>
			</div>
		</>
	);
};
