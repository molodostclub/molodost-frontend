import { FC } from 'react';
import { PageHeading } from '@uikit';
import * as styles from './Booking.css';

export const Booking: FC = () => {
	return (
		<>
			<div className={styles.content}>
				<PageHeading colorBrand>Забронировать проживание на турбазе «МОЛОДОСТЬ» на Алтае</PageHeading>
			</div>
			<div id="tl-booking-form" className={styles.content} />
		</>
	);
};
