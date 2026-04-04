import { FC } from 'react';
import Image from 'next/image';

import { descriptionSpacing } from '@styles/uikit.css';
import { Description, SectionHeading } from '@uikit';
import * as styles from './OurContacts.css';

export const OurContactsBaikal: FC = () => {
	return (
		<div className={styles.content}>
			<SectionHeading>Контакты — Молодость на Байкале</SectionHeading>

			<div className={descriptionSpacing.short}>
				<Description>
					По вопросам бронирования и отдыха на пляжном курорте «Молодость» на Байкале напишите нам в{' '}
					<a href="https://t.me/molodostturclub" target="_blank" rel="noopener noreferrer" className={styles.link}>
						Telegram
					</a>
					{' '}или{' '}
					<a href="https://max.ru/molodostturclub" target="_blank" rel="noopener noreferrer" className={styles.link}>
						МАХ
					</a>
					{' '}или позвоните по номеру{' '}
					<a href="tel:+79240142070" className={styles.link}>
						+7 924 014 20 70
					</a>
					, напишите на{' '}
					<a href="mailto:molodostbaikal@yandex.ru" className={styles.link}>
						molodostbaikal@yandex.ru
					</a>
					.
				</Description>
			</div>

			<div className={styles.buttonsRow}>
				<a
					href="https://t.me/molodostturclub"
					target="_blank"
					rel="noopener noreferrer"
					className={styles.contactButton}
				>
					<span className={styles.iconCircle}>
						<Image src="/icons/Telegram.png" alt="" width={36} height={26} className={styles.iconImage} />
					</span>
					Написать в Telegram
				</a>
				<a
					href="https://max.ru/molodostturclub"
					target="_blank"
					rel="noopener noreferrer"
					className={styles.contactButton}
				>
					<span className={styles.iconCircle}>
						<Image src="/icons/Max.png" alt="" width={24} height={24} />
					</span>
					Написать в МАХ
				</a>
				<a href="tel:+79240142070" className={styles.phoneButton}>
					<span className={styles.iconCircle}>
						<Image src="/icons/phone-brand.svg" alt="" width={36} height={26} className={styles.iconImage} />
					</span>
					8 924 014 20 70
				</a>
			</div>

			<div className={descriptionSpacing.short}>
				<Description>
					Ждём вашего сообщения.
				</Description>
			</div>
		</div>
	);
};
