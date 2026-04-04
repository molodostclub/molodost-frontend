import { FC } from 'react';

import { SectionHeading } from '@uikit';
import { FestivalCard } from './FestivalCard';
import { FESTIVAL_CARDS } from './FestivalCards.constants';
import * as styles from './Festival.css';

const INTRO_LIST = [
	'Жжем алтайского «Горячего Человека» и огромные пионерские костры',
	'Пляшем как чертяки по Dj-сеты',
	'Жарим фермерского барана на вертеле и едим его на берегу Катуни или Байкала',
	'Слушаем настоящее горловое пение, концерты этно- и бардовской песни',
	'Проводим практики йоги, поющих чаш и стояния на гвоздях.',
];

export const Festival: FC = () => (
	<div className={styles.content}>
		<div className={styles.headingWrapper}>
			<SectionHeading>Наш фестиваль</SectionHeading>
		</div>

		<p className={styles.paragraph}>
			Турбаза на Алтае работает практически круглогодично, а на Байкале с июня по октябрь.
			<br /><br />
			<b>Фестиваль</b> — это особое время в нашем Турклубе, когда мы:
			<br /><br />
		</p>

		<ul className={styles.list}>
			{INTRO_LIST.map((item, i) => (
				<li key={i} className={styles.listItem}>
					{item}
				</li>
			))}
		</ul>

		<p className={styles.paragraph}>
			Мы работаем в формате <span className={styles.accent}>«для своих»</span> и принимаем бронирование только у
			тех, кто является членом нашего сообщества, которое формируется по принципу взаимных рекомендаций.
		</p>

		<p className={styles.paragraph}>
			Если вы узнали о нас не от друзей —{' '}
			<a href="tel:+79647002112" className={styles.accentLink}>
				давайте созвонимся и обсудим
			</a>
			, подойдет ли Вам наш формат приключений.
			Мы хотим, чтобы все сюрпризы в Молодости были только приятными.
		</p>

		<div className={styles.cardsGrid}>
			{FESTIVAL_CARDS.map((card, i) => (
				<FestivalCard key={i} {...card} />
			))}
		</div>
	</div>
);
