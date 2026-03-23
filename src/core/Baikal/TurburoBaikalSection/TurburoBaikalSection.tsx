import { FC } from 'react';
import Image from 'next/image';
import { formatPriceWithSign } from '@utils';
import { PUTESHESTVIYA_BAIKAL } from '@/core/PricesPageBaikal/PricesPageBaikal.constants';
import * as styles from './TurburoBaikalSection.css';

const INTRO_TEXT =
	'Наши следопыты и водители — одержимые путешественники, они покажут вам Бурятию такой, какой видят и любят сами. Мы можем организовать для Вас любую поездку, в любом направлении и в любой день. Мы не хотим, чтобы Вы торопились, поэтому услуги наших сопровождающих считаются не более 6 часов за поездку.';

const MIDDLE_TEXT =
	'Почти все наши поездки можно сделать самостоятельно, воспользовавшись автопрокатом. Карту маршрутов и описание местности вы можете получить в нашем турбюро.';

/** Цены по макету — 3 строки, подписи «+ заправка 15 руб/км» и «в одну сторону» */
const PRICE_ROWS = [
	{
		title: 'TANK 300',
		hour: 3_000,
		day: 20_000,
		note: '+ заправка 15 руб/км',
	},
	{
		title: 'ТРАНСФЕР ИЗ/В АЭРОПОРТ',
		price: 18_000,
		priceNote: 'в одну сторону',
	},
	{
		title: 'Индивидуальный трансфер',
		price: 5_000,
		priceSuffix: '/час',
		priceNote: '+ заправка 15 руб/км',
	},
] as const;

export const TurburoBaikalSection: FC = () => {
	const { guides } = PUTESHESTVIYA_BAIKAL;

	return (
		<section className={styles.section}>
			<h2 className={styles.heading}>ТУРБЮРО И АВТОПРОКАТ «БЫВАЛЫЙ РЕЙНДЖЕР»</h2>

			<div className={styles.topRow}>
				<div className={styles.topColLeft}>
					<p className={styles.introText}>{INTRO_TEXT}</p>
				</div>
				<div className={styles.topColRight}>
					<h4 className={styles.subheading}>{guides.subheading}</h4>
					{guides.items.map((item, i) => (
						<div key={i} className={styles.guideItem}>
							<p className={styles.guideItemTitle}>{item.title}</p>
							<span className={styles.guideItemPrice}>
								{formatPriceWithSign(item.pricePerHour)} / ЧАС
							</span>
							{item.description && (
								<p className={styles.guideItemDesc}>{item.description}</p>
							)}
						</div>
					))}
				</div>
			</div>

			<Image
				src="/images/baikal/turburo-wide.png"
				alt="Автопрокат на берегу Байкала"
				width={1200}
				height={600}
				className={styles.wideImage}
			/>

			<p className={styles.middleText}>{MIDDLE_TEXT}</p>

			<div className={styles.bottomRow}>
				<div className={styles.bottomColLeft}>
					<table className={styles.priceTable}>
						<thead>
							<tr>
								<th className={styles.priceTableHeader} />
								<th className={styles.priceTableHeader}>ЧАС</th>
								<th className={styles.priceTableHeader}>СУТКИ</th>
							</tr>
						</thead>
						<tbody>
							{PRICE_ROWS.map((row, i) => (
								<tr key={i} className={styles.priceTableRow}>
									<td className={styles.priceTableCellTitle}>{row.title}</td>
									{'hour' in row ? (
										<>
											<td className={styles.priceTableCellAccent}>
												{formatPriceWithSign(row.hour)} ₽
												{row.note && (
													<span className={styles.priceNote}>{row.note}</span>
												)}
											</td>
											<td className={styles.priceTableCellAccent}>
												{formatPriceWithSign(row.day)} ₽
												{row.note && (
													<span className={styles.priceNote}>{row.note}</span>
												)}
											</td>
										</>
									) : (
										<>
											<td className={styles.priceTableCell} />
											<td className={styles.priceTableCellAccent}>
												{formatPriceWithSign(row.price)} ₽{'priceSuffix' in row ? row.priceSuffix ?? '' : ''}
												{'priceNote' in row && row.priceNote && (
													<span className={styles.priceNote}>{row.priceNote}</span>
												)}
											</td>
										</>
									)}
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className={styles.bottomColRight}>
					<Image
						src="/images/baikal/turburo-short.jpg"
						alt="Поездка на внедорожнике"
						width={400}
						height={500}
						className={styles.narrowImage}
					/>
				</div>
			</div>
		</section>
	);
};
