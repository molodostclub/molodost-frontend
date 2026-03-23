import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { telegramHref, telHref, trimTel } from '@/utils';

import * as styles from './BaikalBookingCta.css';

const PHONE_DISPLAY = '+7 964 700 21 12';
const PHONE_RAW = '+7 964 700 21 12';
const MAX_HREF = 'https://max.ru/molodostturclub';

export const BaikalBookingCta: FC = () => {
	const tel = telHref(trimTel(PHONE_RAW));

	return (
		<div className={styles.root}>
			<p className={styles.title}>
				<span className={styles.titleLine}>Чтобы забронировать проживание в</span>
				<span className={styles.titleLine}>
					Молодости перейдите{' '}
					<Link href="/booking" className={styles.bookingLink} prefetch={false}>
						по ссылке
					</Link>{' '}
					или
				</span>
				<span className={styles.titleLine}>свяжитесь с нами по телефону</span>
			</p>

			<div className={styles.pill}>
				<div className={styles.messengers}>
					<a
						href={telegramHref}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.iconLink}
						aria-label="Написать в Telegram"
					>
						<Image src="/icons/Telegram.png" alt="" width={40} height={40} />
					</a>
					<a
						href={MAX_HREF}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.iconLink}
						aria-label="Написать в MAX"
					>
						<Image src="/icons/Max.png" alt="" width={40} height={40} />
					</a>
				</div>
				<a href={tel} className={styles.phoneLink}>
					{PHONE_DISPLAY}
				</a>
			</div>
		</div>
	);
};
