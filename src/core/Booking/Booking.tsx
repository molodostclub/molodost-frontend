import { FC, useEffect, useState } from 'react';
import Image from 'next/image';

import { descriptionSpacing } from '@styles/uikit.css';
import { Description, PageHeading } from '@uikit';
import { BOOKING_FORM_CONTAINER_ID, mountTravellineBookingForm } from '@/utils/travelline';
import { FillAnketaCard } from '@core/Home/HowToGetHome';
import * as contactStyles from '../OurContacts/OurContacts.css';
import * as styles from './Booking.css';

export const Booking: FC = () => {
	// Host is created after hydration. The TravelLine loader writes into this
	// node as soon as it exists; if that happens on the server HTML, React
	// reports an unexpected <div> and client-renders the widget away.
	const [formHostReady, setFormHostReady] = useState(false);

	useEffect(() => {
		setFormHostReady(true);
	}, []);

	useEffect(() => {
		if (!formHostReady) return undefined;
		return mountTravellineBookingForm(BOOKING_FORM_CONTAINER_ID);
	}, [formHostReady]);

	return (
		<div className={styles.pageRoot}>
			<div className={styles.content}>
				<div className={styles.heading}>
					<PageHeading colorBrand>Забронировать</PageHeading>
					<div className={descriptionSpacing.short}>
						<Description>
							Чтобы стать участником клуба и&nbsp;выбрать понравившуюся локацию от&nbsp;Алтая до&nbsp;Байкала,
							пожалуйста, напишите нам в&nbsp;
							<a href="https://t.me/molodostturclub" target="_blank" rel="noopener noreferrer" className={contactStyles.link}>
								Telegram
							</a>
							{' '}или{' '}
							<a href="https://max.ru/molodostturclub" target="_blank" rel="noopener noreferrer" className={contactStyles.link}>
								МАХ
							</a>
							{' '}по&nbsp;номеру{' '}
							<a href="tel:+79647002112" className={contactStyles.link}>
								+7&nbsp;964&nbsp;700&nbsp;21&nbsp;12
							</a>
							, указав дату приезда и&nbsp;количество гостей.
						</Description>
					</div>
					<div className={contactStyles.buttonsRow}>
						<a
							href="https://t.me/molodostturclub"
							target="_blank"
							rel="noopener noreferrer"
							className={contactStyles.contactButton}
						>
							<span className={contactStyles.iconCircle}>
								<Image src="/icons/Telegram.png" alt="" width={36} height={26} className={contactStyles.iconImage} />
							</span>
							Написать в&nbsp;Telegram
						</a>
						<a
							href="https://max.ru/molodostturclub"
							target="_blank"
							rel="noopener noreferrer"
							className={contactStyles.contactButton}
						>
							<span className={contactStyles.iconCircle}>
								<Image src="/icons/Max.png" alt="" width={24} height={24} />
							</span>
							Написать в&nbsp;МАХ
						</a>
						<a href="tel:+79647002112" className={contactStyles.phoneButton}>
							<span className={contactStyles.iconCircle}>
								<Image src="/icons/phone-brand.svg" alt="" width={36} height={26} className={contactStyles.iconImage} />
							</span>
							8&nbsp;964&nbsp;700&nbsp;21&nbsp;12
						</a>
					</div>
				</div>
				<FillAnketaCard />
				<div className={styles.widget}>
					{formHostReady ? <div id={BOOKING_FORM_CONTAINER_ID} /> : null}
				</div>
			</div>
		</div>
	);
};
