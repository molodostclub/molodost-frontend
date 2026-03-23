import { FC } from 'react';

import { OUR_BASE_CARDS } from './ourBase.constants';
import { OurBaseCard } from './OurBaseCard';
import * as styles from './OurBaseSection.css';

export const OurBaseSection: FC = () => (
	<section className={styles.section} aria-labelledby="our-base-heading">
		<h2 id="our-base-heading" className={styles.heading}>
			Наша база
		</h2>
		<p className={styles.intro}>
			Мы создали место для первооткрывателей, которые ценят «мальдивский» вайб на сибирских берегах. Для тех, кто готов
			ходить босиком по песку, собирать бруснику прямо у порога и жечь костры под самыми яркими звёздами в своей жизни. Наш
			пляжный курорт&nbsp;— это не просто турбаза, это экосистема для перезагрузки, где каждую ночь{' '}
			<span className={styles.accent}>вы засыпаете под шум байкальской волны</span>, оставаясь в зоне абсолютного бытового
			уюта. Наше главное правило:{' '}
			<span className={styles.accent}>план на завтра вы узнаете завтра.</span> Будет ли это прогулка на лодке до Ольхона,
			заезды на джипах по бездорожью или ленивый день на песчаных дюнах&nbsp;—{' '}
			<span className={styles.accent}>решать стихии и настроению.</span>
		</p>
		<div className={styles.grid}>
			{OUR_BASE_CARDS.map((item) => (
				<OurBaseCard key={item.title} {...item} />
			))}
		</div>
	</section>
);
