import { FC } from 'react';
import Image from 'next/image';

import { descriptionSpacing } from '@styles/uikit.css';
import { Description, SectionHeading } from '@uikit';
import * as styles from './OurContacts.css';

export const OurContacts: FC = () => {
	return (
		<div className={styles.content}>
			<SectionHeading>Наши контакты</SectionHeading>

			<div className={descriptionSpacing.short}>
				<Description>
					Чтобы стать участником клуба и&nbsp;выбрать понравившуюся локацию от&nbsp;Алтая до&nbsp;Байкала,
					пожалуйста, напишите нам в&nbsp;
					<a href="https://t.me/molodostturclub" target="_blank" rel="noopener noreferrer" className={styles.link}>
						Telegram
					</a>
					{' '}или{' '}
					<a href="https://max.ru/molodostturclub" target="_blank" rel="noopener noreferrer" className={styles.link}>
						МАХ
					</a>
					{' '}по&nbsp;номеру{' '}
					<a href="tel:+79647002112" className={styles.link}>
						+7&nbsp;964&nbsp;700&nbsp;21&nbsp;12
					</a>
					, указав дату приезда и&nbsp;количество гостей.
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
					Написать в&nbsp;Telegram
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
					Написать в&nbsp;МАХ
				</a>
				<a href="tel:+79647002112" className={styles.phoneButton}>
					<span className={styles.iconCircle}>
						<Image src="/icons/phone-brand.svg" alt="" width={36} height={26} className={styles.iconImage} />
					</span>
					8&nbsp;964&nbsp;700&nbsp;21&nbsp;12
				</a>
			</div>

			<div className={descriptionSpacing.short}>
				<Description>
					Обратите внимание, что из-за разницы во&nbsp;времени мы&nbsp;можем ответить в&nbsp;течение
					24&nbsp;часов. После этого мы&nbsp;свяжемся с&nbsp;вами для согласования удобного времени для
					звонка, чтобы обсудить все детали поездки и&nbsp;подтвердить бронирование.
					<br />
					<br />
					Ждём вашего сообщения.
				</Description>
			</div>
		</div>
	);
};
