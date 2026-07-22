import { FC, useEffect } from 'react';
import { PageHeading } from '@uikit';
import { BOOKING_FORM_CONTAINER_ID, mountTravellineBookingForm } from '@/utils/travelline';
import * as styles from './Booking.css';

export const Booking: FC = () => {
	useEffect(() => mountTravellineBookingForm(BOOKING_FORM_CONTAINER_ID), []);

	return (
		<div className={styles.pageRoot}>
			<div className={styles.content}>
				<div className={styles.heading}>
					<PageHeading colorBrand>Забронировать проживание на турбазе «МОЛОДОСТЬ» на Алтае</PageHeading>
				</div>
				<div className={styles.widget}>
					<div id={BOOKING_FORM_CONTAINER_ID} />
				</div>
			</div>
		</div>
	);
};
