import { FC } from 'react';
import Image from 'next/image';

import { uikit } from '@styles';
import { formatPriceWithSign } from '@utils';
import { Description, PriceTableRow, SectionHeading, priceTable } from '@uikit';
import * as styles from './WhatWeEat.css';
import { indent } from '@styles';
import cn from 'classnames';
import { TraktirMealsForNonGuests, AdditionalServicesSide, ProzhivanieSide, TraktirMeals, BarMenu, TriksterMenu } from '../PricesPage/PricesPage';

//const FoodPricing: FC = () => (
// 	<div className={styles.tableContainer}>
// 		<div className={styles.table}>
// 			<div className={styles.firstCol}>
// 				{/* <PriceTableRow title="Завтрак (взр/реб до 14 лет)" titleCell="titleCellLarge" notePosition="underCell">
// 					<div className={priceTable.cell}>
// 						<div className={priceTable.accent}>
// 							{formatPriceWithSign(3_000)}/{formatPriceWithSign(2_100)}
// 							<span className={priceTable.accentNo}> / чел.</span>
// 						</div>
// 					</div>
// 				</PriceTableRow>
// 				<PriceTableRow title="Обед (взр/реб до 14 лет)" titleCell="titleCellLarge">
// 					<div className={priceTable.cell}>
// 						<div className={priceTable.accent}>
// 							{formatPriceWithSign(2_000)}/{formatPriceWithSign(1_400)}
// 							<span className={priceTable.accentNo}> / чел.</span>
// 						</div>
// 					</div>
// 				</PriceTableRow>
// 				<PriceTableRow title="Ужин (взр/реб до 14 лет)" titleCell="titleCellLarge">
// 					<div className={priceTable.cell}>
// 						<div className={priceTable.accent}>
// 							{formatPriceWithSign(4_000)}/{formatPriceWithSign(2_000)}
// 							<span className={priceTable.accentNo}> / чел.</span>
// 						</div>
// 					</div>
// 				</PriceTableRow> */}

// 			</div>
//       <TraktirMealsForNonGuests />
// 			<div>
// 				<PriceTableRow title="Услуга «Съедобное бревно» (завтрак, обед и&nbsp;ужин)" titleCell="titleCellLarge">
// 					<div className={priceTable.cell}>
// 						<span className={priceTable.accent}>{formatPriceWithSign(6_000)}</span> /&nbsp;взрослый
// 						<br />
// 						<span className={priceTable.accent}>{formatPriceWithSign(4_000)}</span> /&nbsp;ребенок до 14 лет
// 						<br />
// 					</div>
// 				</PriceTableRow>
// 				<PriceTableRow title="Услуга «Съедобное бревно» (завтрак, обед и&nbsp;ужин) в сезон" titleCell="titleCellLarge">
// 					<div className={priceTable.cell}>
// 						<span className={priceTable.accent}>{formatPriceWithSign(6_000)}</span> /&nbsp;взрослый в&nbsp;день
// 						<br />
// 						<span className={priceTable.accent}>{formatPriceWithSign(4_000)}</span> /&nbsp;ребенок в&nbsp;день
// 						<br />
// 					</div>
// 				</PriceTableRow>
// 				<PriceTableRow title="Выездной пикник" titleCell="titleCellLarge" note="Рассчитывается индивидуально" notePosition="underCell">
// 					<div className={priceTable.cell}>-</div>
// 				</PriceTableRow>
// 			</div>
// 		</div>
// 	</div>
//);

export const WhatWeEat = () => (
	<div className={styles.content}>
		<SectionHeading accented>Что мы едим</SectionHeading>
		<div className={uikit.headingWrapper}>
			<SectionHeading>ГАСТРОТРАКТИР «ДОВОЛЬНЫЙ ДРАКОН»</SectionHeading>
		</div>

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
		<SectionHeading>Питание для гостей проживающих на&nbsp;базе</SectionHeading>
		<div className={styles.grid}>
			<TraktirMeals />
			<ProzhivanieSide showExtraPerson={false} />
		</div>
		<br />
		<br />
		<SectionHeading>Питание для гостей не&nbsp;проживающих на&nbsp;базе</SectionHeading>
		<div className={styles.grid}>
			<TraktirMealsForNonGuests />
			<div></div>
		</div>

		{/* <div className={styles.grid}>
      <div></div>
      <AdditionalServicesSide />
    </div> */}
		<div className={styles.imageContainer}>
			<Image fill src="/images/chto-edim/coffe.jpg" alt="бар «я догоню»" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw" className={styles.image} />
		</div>
		<h2 className={uikit.titleVaryingSize}>бар &laquo;я догоню&raquo;</h2>
		<div className={styles.textContent.bottom}>
			<Description>
				У&nbsp;нас приличная винная карта и&nbsp;большой выбор крепкого алкоголя. Мы&nbsp;верим, что воздух Алтая пьянит и&nbsp;дурманит сам по&nbsp;себе, поэтому цены в&nbsp;нашем баре специально высокие: коктейли от&nbsp;1500&nbsp;₽&nbsp;/ шт; вина от&nbsp;1&nbsp;500&nbsp;₽&nbsp;/ бокал;
				и&nbsp;любой крепкий алкоголь на&nbsp;выбор по&nbsp;1000&nbsp;₽ за&nbsp;70&nbsp;грамм.
				<br />
				<br />
				Если вы&nbsp;приносите алкоголь с&nbsp;собой, наш пробковый сбор составляет 2&nbsp;000&nbsp;₽ с&nbsp;бутылки слабого алкоголя и&nbsp;5&nbsp;000&nbsp;₽ за&nbsp;крепкий.
				<br />
				<br />
			</Description>
		</div>
		<br />
		<BarMenu />
		<div className={styles.imageContainer}>
			<Image fill src="/images/chto-my-edim-coffe.jpg" alt="бар «я догоню»" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw" className={styles.image} />
		</div>
		<h2 className={styles.titleCoffe}>Кофейня «Трикстер»</h2>
		<div className={styles.textContent.bottom}>
			<Description>По нашему собственному мнению у нас самый крепкий эспрессо и самый вкусный каппучино в Сибири.</Description>
		</div>
		<TriksterMenu />
	</div>
);
