import { FC } from 'react';

import * as styles from './WhatWeEatBaikal.css';

const MEALS = [
	{ label: 'Завтрак', time: '9:00 – 12:00' },
	{ label: 'Обед', time: '14:00 – 17:00' },
	{ label: 'Ужин', time: '20:00 – 22:30' },
] as const;

export const WhatWeEatBaikal: FC = () => {
	return (
		<section className={styles.root} aria-labelledby="baikal-what-we-eat-title">
			<p className={styles.sectionLabel}>Что мы едим</p>
			<h2 id="baikal-what-we-eat-title" className={styles.mainTitle}>
				Дом приемов
			</h2>

			<div className={styles.body}>
				<p className={styles.paragraph}>
					В&nbsp;&laquo;Молодости&raquo; еда&nbsp;&mdash; это не&nbsp;просто калории, это способ заземлиться и&nbsp;почувствовать
					Байкал на&nbsp;вкус. Мы&nbsp;отказались от&nbsp;классического меню в&nbsp;пользу формата общего стола. Мы&nbsp;собираемся
					вместе в&nbsp;&laquo;Доме приемов&raquo;, делимся историями и&nbsp;едим то, что приготовил сегодня наш Шеф из самых свежих
					продуктов.
				</p>
				<p className={styles.paragraph}>
					Если каша&nbsp;&mdash; то&nbsp;с&nbsp;кедровыми орехами и&nbsp;таежным медом. Если чай&nbsp;&mdash; то&nbsp;на&nbsp;байкальских
					травах, собранных вручную. Мы&nbsp;не&nbsp;перегружаем рыбу специями&nbsp;&mdash; только соль, огонь и&nbsp;немного лимона,
					чтобы вы&nbsp;почувствовали тот самый &laquo;вкус большой воды&raquo;. Настоящие домашние буузы с&nbsp;тонким тестом
					и&nbsp;горячим ароматным бульоном внутри едим только руками&nbsp;&mdash; так вкуснее, мы&nbsp;проверяли. Никакой суеты.
					Мы&nbsp;не&nbsp;торопим вас. Завтрак плавно перетекает в&nbsp;обед, а&nbsp;ужин заканчивается долгими разговорами
					и&nbsp;настольными играми.
				</p>
				<p className={styles.paragraph}>
					Приходите в&nbsp;&laquo;Дом приемов&raquo;. Мы&nbsp;уже поставили чайник и&nbsp;приготовили ваш любимый таежный десерт.
				</p>
			</div>

			<div className={styles.schedule}>
				{MEALS.map(({ label, time }) => (
					<div key={label} className={styles.scheduleItem}>
						<span className={styles.mealLabel}>{label}</span>
						<span className={styles.mealTime}>{time}</span>
					</div>
				))}
			</div>
		</section>
	);
};
