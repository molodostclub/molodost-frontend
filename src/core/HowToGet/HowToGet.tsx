import { FC, useState, useEffect } from 'react';

import { uikit } from '@styles';

import { Description, SectionHeading } from '@uikit';
import * as styles from './HowToGet.css';
import { ContactsBox } from '@/shared/components';
import { Modal } from '@/shared/components/Modal';
import Link from 'next/link';

export const HowToGet: FC = () => {
	// const [isOpenModal, setOpenModal] = useState<boolean>(false);

	// const openModal = () => setOpenModal(true);
	// const closeModal = () => setOpenModal(false);

	// // 💡 Удаляет предыдущий виджет перед открытием
	// useEffect(() => {
	// 	if (isOpenModal) {
	// 		const target = document.getElementById('tl-booking-form');
	// 		if (target) {
	// 			target.innerHTML = ''; // чтобы не дублировался
	// 		}
	// 		// Перезапускаем виджет если он уже был загружен
	// 		if (window.travelline?.integration?.__cq) {
	// 			window.travelline.integration.__cq.push([
	// 				'embed',
	// 				'booking-form',
	// 				{
	// 					container: 'tl-booking-form',
	// 				},
	// 			]);
	// 		}
	// 	}
	// }, [isOpenModal]);

	return (
		<>
			<div className={styles.content}>
				<div style={{ marginBottom: 60, maxWidth: 300 }}>
					<p className={styles.accentText} style={{ marginBottom: 30 }}>
						Чтобы забронировать проживание на Алтае или Байкале, свяжитесь с&nbsp;нами по&nbsp;номеру
					</p>

					<div className={styles.contacts}>
						<ContactsBox type="small" />
					</div>

					{/* <button onClick={openModal} className={styles.ctaBtn}>
						Вступить в клуб
					</button> */}

					<br />
					<br />
					<p className={styles.accentText} style={{ marginBottom: 30 }}>
						Или заполните анкету (только для желающих приехать на турбазу «МОЛОДОСТЬ» на Алтае)
					</p>
					<Link href="/anketa" className={styles.ctaBtn}>
						Анкета
					</Link>
				</div>
			</div>
		</>
	);
};
