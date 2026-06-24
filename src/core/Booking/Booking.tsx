import { FC, useEffect, useRef } from 'react';
import { Container, PageHeading } from '@uikit';
import { BOOKING_FORM_CONTAINER_ID, mountTravellineBookingForm } from '@/utils/travelline';
import * as styles from './Booking.css';

export const Booking: FC = () => {
	const widgetHostRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = document.getElementById(BOOKING_FORM_CONTAINER_ID);
		const host = widgetHostRef.current;

		if (container && host && container.parentElement !== host) {
			host.appendChild(container);
		}

		container?.removeAttribute('hidden');

		return mountTravellineBookingForm(BOOKING_FORM_CONTAINER_ID);
	}, []);

	return (
		<Container className={styles.content}>
			<div className={styles.heading}>
				<PageHeading colorBrand>Забронировать проживание на турбазе «МОЛОДОСТЬ» на Алтае</PageHeading>
			</div>
			<div ref={widgetHostRef} className={styles.widget} />
		</Container>
	);
};
