import Image from 'next/image';

import { uikit } from '@styles';
import { Description, SectionHeading } from '@uikit';
import { WhatWeDrinkBlock, WhatWeEatBlock } from '../PricesPage/PricesPage';

import * as styles from './WhatWeEat.css';

export const WhatWeEat = () => (
	<div className={styles.content}>
		<SectionHeading accented>Что мы едим</SectionHeading>
		<div className={styles.textContent.top}>
			<Description>
				Все основные продукты нам поставляют местные фермеры, в&nbsp;полях Кош-Агача пасутся наши собственные бараны, а&nbsp;в&nbsp;огороде, где в&nbsp;детстве гулял Василий Шукшин, мы&nbsp;выращиваем свой картофель.
				<br />
				<br />
				Наш шеф-повар Алексей Федин проходил обучение в&nbsp;институте Поля Бокюза и&nbsp;каждый день придумывает новое меню в&nbsp;зависимости от&nbsp;сезонности и&nbsp;фермерских поставок.
				<br />
				<br />
				Еда подается в&nbsp;формате общего стола.
				<br />
				<br />
				Для друзей &laquo;Молодости&raquo;, которые не&nbsp;живут на&nbsp;базе, но&nbsp;хотят заскочить в&nbsp;гости, мы&nbsp;предлагаем следующие опции:
			</Description>
		</div>
		<br />
		<br />
		<WhatWeEatBlock />
		<div className={styles.imageContainer}>
			<Image
				fill
				src="/images/chto-edim/coffe.jpg"
				alt="бар «я догоню»"
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw"
				className={styles.image}
				unoptimized
			/>
		</div>
		<h2 className={uikit.titleVaryingSize}>Что мы пьём</h2>
		<br />
		<WhatWeDrinkBlock />
		<div className={styles.imageContainer}>
			<Image
				fill
				src="/images/chto-my-edim-coffe.jpg"
				alt="кофейня «Трикстер»"
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw"
				className={styles.image}
				unoptimized
			/>
		</div>
	</div>
);
