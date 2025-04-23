import { FC } from 'react';

import { descriptionSpacing } from '@styles/uikit.css';
import { Description, SectionHeading } from '@uikit';
import * as styles from './OurContacts.css';

export const OurContacts: FC = () => {
	return (
		<div className={styles.content}>
			<SectionHeading>Наши контакты</SectionHeading>

			<div className={descriptionSpacing.short}>
				<Description>
					Чтобы стать членом турклуба &laquo;Молодость&raquo;, связывайтесь с&nbsp;нами по&nbsp;телефону
					<a href="tel:+79647002112" className={styles.link}>
						+ 7&nbsp;964&nbsp;700 21 12
					</a>
					<br />
					<br />
					Мы&nbsp;просим Вас писать на&nbsp;этот номер в&nbsp;телеграме или вотсапе даты приезда и количество гостей.
					<br />
					<br />
					С&nbsp;учетом разницы во&nbsp;времени, мы&nbsp;оставляем за&nbsp;собой право ответить на&nbsp;ваше сообщение в&nbsp;течение 24&nbsp;часов.
					<br />
					<br />
					И&nbsp;мы&nbsp;договоримся с&nbsp;Вами об&nbsp;удобном времени для звонка, чтобы обсудить все детали поездки и&nbsp;подтвердить бронирование.
				</Description>
			</div>
		</div>
	);
};
