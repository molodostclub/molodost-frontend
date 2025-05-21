import { FC } from 'react';

import { descriptionSpacing } from '@styles/uikit.css';
import { Description, SectionHeading } from '@uikit';
import * as styles from './OurContacts.css';
import Link from 'next/link';

export const OurContacts: FC = () => {
	return (
		<div className={styles.content}>
			<SectionHeading>Наши контакты</SectionHeading>

			<div className={descriptionSpacing.short}>
				<Description>
					Чтобы стать участником клуба и&nbsp;выбрать понравившуюся локацию от&nbsp;Алтая до&nbsp;Байкала, пожалуйста, напишите нам в&nbsp;Телеграм или WhatsApp по&nbsp;номеру{' '}
					<Link href="tel:+79647002112" className={styles.link}>
						+7&nbsp;964&nbsp;700&nbsp;21&nbsp;12
					</Link>{' '}
					указав дату приезда и&nbsp;количество гостей
					<br />
					<br />
					Обратите внимание, что из-за разницы во&nbsp;времени мы&nbsp;можем ответить в&nbsp;течение 24&nbsp;часов. После этого мы&nbsp;свяжемся с&nbsp;вами для согласования удобного времени для звонка, чтобы обсудить все детали поездки и&nbsp;подтвердить бронирование.
					<br />
					<br />
					Ждём вашего сообщения!
				</Description>
			</div>
		</div>
	);
};
