import { FC } from 'react';

import { Description, PageHeading } from '@uikit';
import * as styles from './PricesPage.css';
import { formatPriceWithSign } from '@utils';
import {
	PROZHIVANIE_PRICES,
	ADDITIONAL_PRICES,
	TRAKTIR_MENU,
	GASTRO_TRAKTIR_FESTIVAL,
	GASTRO_TRAKTIR_QUIET,
	BAR_MENU,
	TRIKSTER_MENU,
	HEAT_LAB,
	TOUR_GROUPS,
	TOUR_HIKINGS,
	TOUR_INDIVIDUAL,
	TOUR_PARTNERS,
	AUTO_RENT,
	CORPORATIVE_PRICE,
	CLOSED_TOURS,
	PRICE_SERVICES,
	TO_MARS,
	ADDITIONAL_SERVICES,
	GASTRO_TRAKTIR_FESTIVAL_FOR_NON_GUESTS,
	GASTRO_TRAKTIR_QUIET_FOR_NON_GUESTS,
} from './PricesPage.constants';

const Prozhivanie: FC = () => {
	return (
		<div className={styles.priceTable}>
			<div className={styles.priceRow}>
				<div className={styles.tableHeaderCol}></div>
				<div className={styles.tableHeaderCol}>
					кол-во <br />
					человек
				</div>
				<div className={styles.tableHeaderCol}>
					цена,
					<br />
					руб/сутки
				</div>
			</div>

			{PROZHIVANIE_PRICES.map((item, index) => (
				<div className={styles.priceRow} key={index}>
					<p className={styles.priceTitle}>{item.title}</p>
					<p className={styles.twoCol}>{item.twoCol}</p>
					<div>
						<p className={styles.priceNum}>{formatPriceWithSign(item.price)}</p>
						{item.note && <p className={styles.priceNote}>{item.note}</p>}
					</div>
				</div>
			))}
		</div>
	);
};
interface ProzhivanieSideProps {
	showExtraPerson?: boolean; // Флаг для отображения информации о дополнительном человеке
}

export const ProzhivanieSide: FC<ProzhivanieSideProps> = ({ showExtraPerson = true }) => (
	<div>
		{showExtraPerson && (
			<>
				<p className={styles.sideTitle}>Дополнительный человек:</p>
				<p className={styles.sideText}>
					взрослый 7&nbsp;777&nbsp;₽/СУТКИ
					<br />
					ребёнок (от&nbsp;5&nbsp;до&nbsp;14&nbsp;лет) 4&nbsp;000&nbsp;₽/СУТКИ
				</p>
			</>
		)}
		<p className={styles.sideTitle}>Съедобное бревно (завтрак, обед и ужин):</p>
		<p className={styles.sideText}>
			взрослый 8&nbsp;000&nbsp;₽/ДЕНЬ
			<br />
			ребёнок (от&nbsp;5&nbsp;до&nbsp;14&nbsp;лет) 5&nbsp;600&nbsp;₽/ДЕНЬ
		</p>
	</div>
);

const AdditionalServices: FC = () => {
	return (
		<div className={styles.priceTable}>
			<div className={styles.priceRow}>
				<div className={styles.tableHeaderCol}></div>
				<div className={styles.tableHeaderCol}></div>
				<div className={styles.tableHeaderCol}>цена,&nbsp;руб</div>
			</div>

			{ADDITIONAL_PRICES.map((item, index) => (
				<div className={styles.priceRow} key={index}>
					{item.subtitle ? (
						<p className={styles.priceTitle}>
							{item.title} <br />
							<span className={styles.priceSubtitle}>{item.subtitle}</span>
						</p>
					) : (
						<p className={styles.priceTitle}>{item.title}</p>
					)}

					<p className={styles.twoCol}>{item.twoCol}</p>

					<div>
						<p className={styles.priceNum}>{item.priceChild ? `${formatPriceWithSign(item.price)} / ${formatPriceWithSign(item.priceChild)}` : formatPriceWithSign(item.price)}</p>

						{item.note && <p className={styles.priceNote}>{item.note}</p>}
					</div>
				</div>
			))}
		</div>
	);
};
export const AdditionalServicesSide: FC = () => (
	<div>
		<p className={styles.sideTitle}>
			Сезонные заезды
			<br />
			в&nbsp;Молодости 2025 год:
		</p>
		<p className={styles.sideText}>
			25&nbsp;декабря&nbsp;&mdash; 10&nbsp;января <br />
			25&nbsp;апреля&nbsp;&mdash; 10&nbsp;мая <br />
			июль&nbsp;&mdash; август
		</p>
		{/* <p className={styles.sideTitle}>
      В&nbsp;СЕЗОННЫЕ ЗАЕЗДЫ Съедобное бревно (завтрак, обед и ужин):
    </p>
    <p className={styles.sideText}>
      взрослый 6&nbsp;000&nbsp;₽/ДЕНЬ <br />
      ребёнок (от&nbsp;5&nbsp;до&nbsp;14&nbsp;лет) 4&nbsp;000&nbsp;₽/ДЕНЬ
    </p> */}
		<p className={styles.sideTitle}>
			дополнительно мы&nbsp;включаем в&nbsp;счёт <br />
			стоимость сезонного билета:
		</p>
		<p className={styles.sideText}>
			взрослый 7&nbsp;000&nbsp;₽/ДЕНЬ <br />
			ребёнок (от&nbsp;5&nbsp;до&nbsp;14&nbsp;лет) 4&nbsp;900&nbsp;₽/ДЕНЬ
		</p>
	</div>
);

const TraktirMeals: FC = () => (
	<div className={styles.priceTable}>
		<div className={styles.priceRow}>
			<div className={styles.tableHeaderCol}>Сезонные заезды</div>
			<div className={styles.tableHeaderCol}></div>
			<div className={styles.tableHeaderCol}>цена,&nbsp;руб</div>
		</div>
		{GASTRO_TRAKTIR_FESTIVAL.map((item) => (
			<div className={styles.priceRow}>
				{!!item.subtitle ? (
					<p className={styles.twoCol}>
						{item.title} <br />
						<span className={styles.priceSubtitle}>{item.subtitle}</span>
					</p>
				) : (
					<p className={styles.priceTitle}>{item.title}</p>
				)}
				{!!item.twoColChild ? (
					<div>
						<p className={styles.twoCol}>{item.twoCol}</p>
						<p className={styles.twoCol}>{item.twoColChild}</p>
					</div>
				) : (
					<p className={styles.twoCol}>{item.twoCol}</p>
				)}
				<div>
					{!!item.priceChild ? (
						<div className={styles.priceNum}>
							<p>{formatPriceWithSign(item.price)}</p>
							<p>{formatPriceWithSign(item.priceChild)}</p>
						</div>
					) : (
						<p className={styles.priceNum}>{formatPriceWithSign(item.price)}</p>
					)}
					{!!item.note ? <p className={styles.priceNote}>{item.note}</p> : ''}
				</div>
			</div>
		))}
		<div className={styles.priceRow}>
			<div className={styles.tableHeaderCol}>Тихий сезон</div>
			{/* <div className={styles.tableHeaderCol}></div>
      <div className={styles.tableHeaderCol}>цена,&nbsp;руб</div> */}
		</div>
		{GASTRO_TRAKTIR_QUIET.map((item) => (
			<div className={styles.priceRow}>
				{!!item.subtitle ? (
					<p className={styles.priceTitle}>
						{item.title}
						<br />
						<span className={styles.priceSubtitle}>{item.subtitle}</span>
					</p>
				) : (
					<p className={styles.priceTitle}>{item.title}</p>
				)}
				{!!item.twoColChild ? (
					<div>
						<p className={styles.twoCol}>{item.twoCol}</p>
						<p className={styles.twoCol}>{item.twoColChild}</p>
					</div>
				) : (
					<p className={styles.twoCol}>{item.twoCol}</p>
				)}
				<div>
					{!!item.priceChild ? (
						<div className={styles.priceNum}>
							<p>{formatPriceWithSign(item.price)}</p>
							<p>{formatPriceWithSign(item.priceChild)}</p>
						</div>
					) : (
						<p className={styles.priceNum}>{formatPriceWithSign(item.price)}</p>
					)}
					{!!item.note ? <p className={styles.priceNote}>{item.note}</p> : ''}
				</div>
			</div>
		))}
	</div>
);
export const TraktirMealsForNonGuests: FC = () => (
	<div className={styles.priceTable}>
		<div className={styles.priceRow}>
			<div className={styles.tableHeaderCol}>Сезонные заезды</div>
			<div className={styles.tableHeaderCol}></div>
			<div className={styles.tableHeaderCol}>цена,&nbsp;руб</div>
		</div>
		{GASTRO_TRAKTIR_FESTIVAL_FOR_NON_GUESTS.map((item) => (
			<div className={styles.priceRow}>
				{!!item.subtitle ? (
					<p className={styles.twoCol}>
						{item.title} <br />
						<span className={styles.priceSubtitle}>{item.subtitle}</span>
					</p>
				) : (
					<p className={styles.priceTitle}>{item.title}</p>
				)}
				{!!item.twoColChild ? (
					<div>
						<p className={styles.twoCol}>{item.twoCol}</p>
						<p className={styles.twoCol}>{item.twoColChild}</p>
					</div>
				) : (
					<p className={styles.twoCol}>{item.twoCol}</p>
				)}
				<div>
					{!!item.priceChild ? (
						<div className={styles.priceNum}>
							<p>{formatPriceWithSign(item.price)}</p>
							<p>{formatPriceWithSign(item.priceChild)}</p>
						</div>
					) : (
						<p className={styles.priceNum}>{formatPriceWithSign(item.price)}</p>
					)}
					{!!item.note ? <p className={styles.priceNote}>{item.note}</p> : ''}
				</div>
			</div>
		))}
		<div className={styles.priceRow}>
			<div className={styles.tableHeaderCol}>Тихий сезон</div>
			{/* <div className={styles.tableHeaderCol}></div>
      <div className={styles.tableHeaderCol}>цена,&nbsp;руб</div> */}
		</div>
		{GASTRO_TRAKTIR_QUIET_FOR_NON_GUESTS.map((item) => (
			<div className={styles.priceRow}>
				{!!item.subtitle ? (
					<p className={styles.priceTitle}>
						{item.title}
						<br />
						<span className={styles.priceSubtitle}>{item.subtitle}</span>
					</p>
				) : (
					<p className={styles.priceTitle}>{item.title}</p>
				)}
				{!!item.twoColChild ? (
					<div>
						<p className={styles.twoCol}>{item.twoCol}</p>
						<p className={styles.twoCol}>{item.twoColChild}</p>
					</div>
				) : (
					<p className={styles.twoCol}>{item.twoCol}</p>
				)}
				<div>
					{!!item.priceChild ? (
						<div className={styles.priceNum}>
							<p>{formatPriceWithSign(item.price)}</p>
							<p>{formatPriceWithSign(item.priceChild)}</p>
						</div>
					) : (
						<p className={styles.priceNum}>{formatPriceWithSign(item.price)}</p>
					)}
					{!!item.note ? <p className={styles.priceNote}>{item.note}</p> : ''}
				</div>
			</div>
		))}
	</div>
);
const TraktirSide: FC = () => (
	<div>
		<p className={styles.sideTitle}>Режим работы</p>
		<p className={styles.sideText}>с&nbsp;9:00 до&nbsp;24:00</p>
		<p className={styles.sideTitle}>Завтрак</p>
		<p className={styles.sideText}>9:00–12:00</p>
		<p className={styles.sideTitle}>Обед</p>
		<p className={styles.sideText}>14:00–17:00</p>
		<p className={styles.sideTitle}>Ужин</p>
		<p className={styles.sideText}>20:00–22:30</p>
	</div>
);
const TraktirMenu: FC = () => (
	<div className={styles.priceTable}>
		<div className={styles.priceRow}>
			<div className={styles.tableHeaderCol}>Блюдо</div>
			<div className={styles.tableHeaderCol}></div>
			<div className={styles.tableHeaderCol}>цена,&nbsp;руб</div>
		</div>
		{TRAKTIR_MENU.map((item) => (
			<div className={styles.priceRow}>
				{!!item.subtitle ? (
					<p className={styles.priceTitle}>
						{item.title} <br />
						<span className={styles.priceSubtitle}>{item.subtitle}</span>
					</p>
				) : (
					<p className={styles.priceTitle}>{item.title}</p>
				)}
				{!!item.twoColChild ? (
					<div>
						<p className={styles.twoCol}>{item.twoCol}</p>
						<p className={styles.twoCol}>{item.twoColChild}</p>
					</div>
				) : (
					<p className={styles.twoCol}>{item.twoCol}</p>
				)}
				<div>
					{!!item.priceChild ? (
						<div className={styles.priceNum}>
							<p>{formatPriceWithSign(item.price)}</p>
							<p>{formatPriceWithSign(item.priceChild)}</p>
						</div>
					) : (
						<p className={styles.priceNum}>{formatPriceWithSign(item.price)}</p>
					)}
					{!!item.note ? <p className={styles.priceNote}>{item.note}</p> : ''}
				</div>
			</div>
		))}
		<div className={styles.priceRow}>
			<p className={styles.priceTitle}>
				Пельмени
				<br />
				<span className={styles.priceSubtitle}>С МЯСОМ / С РЫБОЙ</span>
			</p>
			<p className={styles.twoCol}></p>
			<p className={styles.priceNum}>комплиментарно</p>
		</div>
		<div className={styles.priceRow}>
			<p className={styles.priceTitle}>Десерт «Таёжный»</p>
			<p className={styles.twoCol}></p>
			<p className={styles.priceNum}>комплиментарно</p>
		</div>
	</div>
);

const BarMenu: FC = () => (
	<div className={styles.priceTable}>
		<div className={styles.priceRow}>
			<div className={styles.tableHeaderCol}>НАПИТОК</div>
			<div className={styles.tableHeaderCol}></div>
			<div className={styles.tableHeaderCol}>цена,&nbsp;руб</div>
		</div>
		{BAR_MENU.map((item) => (
			<div className={styles.priceRow}>
				{!!item.subtitle ? (
					<p className={styles.priceTitle}>
						{item.title} <br />
						<span className={styles.priceSubtitle}>{item.subtitle}</span>
					</p>
				) : (
					<p className={styles.priceTitle}>{item.title}</p>
				)}
				{!!item.twoColChild ? (
					<div>
						<p className={styles.twoCol}>{item.twoCol}</p>
						<p className={styles.twoCol}>{item.twoColChild}</p>
					</div>
				) : (
					<p className={styles.twoCol}>{item.twoCol}</p>
				)}
				<div>
					{!!item.pricePrefix ? (
						<p className={styles.priceNum}>
							{item.pricePrefix}
							{formatPriceWithSign(item.price)}
						</p>
					) : (
						<p className={styles.priceNum}>{formatPriceWithSign(item.price)}</p>
					)}
					{!!item.note ? <p className={styles.priceNote}>{item.note}</p> : ''}
				</div>
			</div>
		))}
	</div>
);
const BarSide: FC = () => (
	<div>
		<p className={styles.sideTitle}>Режим работы</p>
		<p className={styles.sideText}>с&nbsp;11:30 до&nbsp;02:00 ночи</p>
		<p className={styles.sideLightText}>
			Мы&nbsp;рекомендуем минимизировать употребление алкоголя во&nbsp;время пребывания на&nbsp;Алтае. Местный воздух пьянит сам собой, а&nbsp;ландшафтотерапия успокаивает лучше, чем любой бокал пива к&nbsp;обеду или коньяк перед сном. Поэтому мы&nbsp;сознательно повышаем цены на&nbsp;алкоголь
			с&nbsp;01:00&nbsp;на 50%, а&nbsp;02:00 прекращает работу бар.
		</p>
	</div>
);

const TriksterMenu: FC = () => (
	<div className={styles.priceTable}>
		<div className={styles.priceRow}>
			<div className={styles.tableHeaderCol}>НАПИТОК</div>
			<div className={styles.tableHeaderCol}></div>
			<div className={styles.tableHeaderCol}>цена,&nbsp;руб</div>
		</div>
		{TRIKSTER_MENU.map((item) => (
			<div className={styles.priceRow}>
				{!!item.subtitle ? (
					<p className={styles.priceTitle}>
						{item.title} <br />
						<span className={styles.priceSubtitle}>{item.subtitle}</span>
					</p>
				) : (
					<p className={styles.priceTitle}>{item.title}</p>
				)}
				{!!item.twoColChild ? (
					<div>
						<p className={styles.twoCol}>{item.twoCol}</p>
						<p className={styles.twoCol}>{item.twoColChild}</p>
					</div>
				) : (
					<p className={styles.twoCol}>{item.twoCol}</p>
				)}
				<div>
					{!!item.pricePrefix ? (
						<p className={styles.priceNum}>
							{item.pricePrefix}
							{formatPriceWithSign(item.price)}
						</p>
					) : (
						<p className={styles.priceNum}>{formatPriceWithSign(item.price)}</p>
					)}
					{!!item.note ? <p className={styles.priceNote}>{item.note}</p> : ''}
				</div>
			</div>
		))}
	</div>
);
const TriksterSide: FC = () => (
	<div>
		<p className={styles.sideTitle}>Режим работы</p>
		<p className={styles.sideText}>с&nbsp;08:00 до&nbsp;24:00 ночи</p>
		<p className={styles.sideLightText}>
			Мы&nbsp;считаем, что вода и&nbsp;воздух на&nbsp;Алтае должны быть бесплатными и&nbsp;не&nbsp;хотим ничего считать.
			<br />
			<br />
			На&nbsp;закупку воды Petroglyph и&nbsp;переработку пластика, который мы&nbsp;возим в&nbsp;Новосибирск, мы&nbsp;тратим миллионы рублей. Поэтому посчитали справедливым включать в&nbsp;ваш счёт водяной сбор 350&nbsp;рублей/день с человека, который идёт на&nbsp;реализацию образовательных
			и&nbsp;экологических проектов на&nbsp;Алтае. А&nbsp;если вы&nbsp;не&nbsp;согласны, то&nbsp;мы&nbsp;не&nbsp;будем включать это в&nbsp;ваш счёт.
		</p>
	</div>
);

const HeatLab: FC = () => {
	return (
		<>
			<div>
				<p className={styles.groupTitle}>Режим работы</p>
				<p className={styles.sideText}>с&nbsp;11:00 до&nbsp;24:00 ночи</p>
			</div>

			<br />
			<br />

			<div className={styles.priceTable}>
				{/* Заголовок таблицы */}
				<div className={styles.priceRowWide}>
					<div className={styles.tableHeaderColWide}>услуга</div>
					<div className={styles.tableHeaderColWide}>дли&shy;тель&shy;ность</div>
					<div className={styles.tableHeaderColWide}>кол-во, чел.</div>
					<div className={styles.tableHeaderColWide}>цена, руб</div>
				</div>

				{/* Данные из HEAT_LAB */}
				{HEAT_LAB.map((item, itemIndex) => (
					<div key={itemIndex} className={styles.priceRowWide}>
						<div>
							<p className={styles.priceTitle}>{item.title}</p>
							{!!item.subtitle && (
								<>
									<p className={styles.priceSubtitle}>{item.subtitle}</p>
									<p className={styles.priceListTitle}>{item.listTitle}</p>
									{!!item.list && (
										<ul className={styles.priceList}>
											{item.list.map((listItem, listIndex) => (
												<li key={listIndex}>{listItem}</li>
											))}
										</ul>
									)}
								</>
							)}
						</div>
						<p className={styles.priceNumList}>{item.duration}</p>
						<p className={styles.priceNumList}>{item.clients}</p>
						<p className={styles.priceNumList}>
							{formatPriceWithSign(item.price)}
							{!!item.note && (
								<>
									<br />
									<span className={styles.priceNote}>{item.note}</span>
								</>
							)}
						</p>
					</div>
				))}
			</div>
		</>
	);
};

const TourBureau: FC = () => {
	return (
		<>
			{/* ГРУППОВЫЕ ПОЕЗДКИ */}
			<div>
				<br />
				<br />
				<p className={styles.groupTitle}>ГРУППОВЫЕ ПОЕЗДКИ</p>
				<br />
				<p className={styles.sideText}>Заявленные нами поездки проводятся даже&nbsp;если пришёл один человек.</p>
				<br />
				<br />
			</div>
			<div className={styles.priceTable}>
				<div className={styles.priceRow}>
					<div className={styles.tableHeaderCol}>услуга</div>
					<div className={styles.tableHeaderCol}>про&shy;дол&shy;жи&shy;тель&shy;ность</div>
					<div className={styles.tableHeaderCol}>цена, руб</div>
				</div>

				{TOUR_GROUPS.map((item, index) => (
					<div className={styles.priceRow} key={index}>
						{item.subtitle ? (
							<p className={styles.priceTitle}>
								{item.title} <br />
								<span className={styles.priceSubtitle}>{item.subtitle}</span>
							</p>
						) : (
							<p className={styles.priceTitle}>{item.title}</p>
						)}
						<p className={styles.twoCol}>{item.twoCol}</p>

						{item.priceText ? (
							<p className={styles.priceNum}>{item.priceText}</p>
						) : (
							<div>
								<p className={styles.priceNum}>
									<span className={styles.PriceNumBlack}>взрослый&nbsp;&mdash; </span>
									{formatPriceWithSign(item.price)}
								</p>
								<p className={styles.priceNum}>
									<span className={styles.PriceNumBlack}>ребёнок&nbsp;&mdash; </span>
									{formatPriceWithSign(item.priceChild)}
								</p>
							</div>
						)}
					</div>
				))}
			</div>

			{/* ГРУППОВЫЕ ХАЙКИНГИ */}
			<div>
				<br />
				<br />
				<br />
				<p className={styles.groupTitle}>ГРУППОВЫЕ ХАЙКИНГИ</p>
				<br />
			</div>
			<div className={styles.priceTable}>
				<div className={styles.priceRow}>
					<div className={styles.tableHeaderCol}>услуга</div>
					<div className={styles.tableHeaderCol}>про&shy;дол&shy;жи&shy;тель&shy;ность</div>
					<div className={styles.tableHeaderCol}>цена, руб</div>
				</div>

				{TOUR_HIKINGS.map((item, index) => (
					<div className={styles.priceRow} key={index}>
						{item.subtitle ? (
							<p className={styles.priceTitle}>
								{item.title} <br />
								<span className={styles.priceSubtitle}>{item.subtitle}</span>
							</p>
						) : (
							<p className={styles.priceTitle}>{item.title}</p>
						)}
						<p className={styles.twoCol}>{item.twoCol}</p>
						<p className={styles.priceNum}>{formatPriceWithSign(item.price)}</p>
					</div>
				))}
			</div>

			{/* ИНДИВИДУАЛЬНЫЕ АВТОРСКИЕ ПРИКЛЮЧЕНИЯ */}
			<div>
				<br />
				<br />
				<br />
				<p className={styles.groupTitle}>ИНДИВИДУАЛЬНЫЕ АВТОРСКИЕ ПРИКЛЮЧЕНИЯ</p>
				<br />
				<p className={styles.sideText}>Точная стоимость поездки рассчитывается с&nbsp;учётом ваших желаний и&nbsp;количества участников.</p>
				<br />
				<br />
			</div>
			<div className={styles.priceTable}>
				<div className={styles.priceRow}>
					<div className={styles.tableHeaderCol}>услуга</div>
					<div className={styles.tableHeaderCol}>про&shy;дол&shy;жи&shy;тель&shy;ность</div>
					<div className={styles.tableHeaderCol}>цена, руб</div>
				</div>

				{TOUR_INDIVIDUAL.map((item, index) => (
					<div className={styles.priceRowTop} key={index}>
						<div>
							<p className={styles.priceTitle}>{item.title}</p>
							{item.subtitle && <p className={styles.priceSubtitle}>{item.subtitle}</p>}
							{item.list && (
								<>
									<p className={styles.priceListTitle}>{item.listTitle}</p>
									<ul className={styles.priceList}>
										{item.list.map((listItem, listIndex) => (
											<li key={listIndex}>{listItem}</li>
										))}
									</ul>
								</>
							)}
						</div>

						<p className={styles.twoCol}>{item.duration}</p>
						{item.pricePrefix ? (
							<p className={styles.priceNum}>
								{item.pricePrefix}
								{formatPriceWithSign(item.price)}
								{item.note && <span className={styles.priceNote}>{item.note}</span>}
							</p>
						) : (
							<p className={styles.priceNum}>{formatPriceWithSign(item.price)}</p>
						)}
					</div>
				))}
			</div>

			{/* ПАРТНЁРСКИЕ АКТИВНОСТИ */}
			<div>
				<br />
				<br />
				<br />
				<div className={styles.grid}>
					<div className={styles.priceTable}>
						<p className={styles.groupTitle}>ПАРТНЁРСКИЕ АКТИВНОСТИ</p>
						<div className={styles.priceRowSmall}>
							<div className={styles.tableHeaderCol}>услуга</div>
							<div className={styles.tableHeaderCol}>цена,&nbsp;руб</div>
						</div>

						{TOUR_PARTNERS.map((item, index) => (
							<div className={styles.priceRowSmall} key={index}>
								{item.subtitle ? (
									<p className={styles.priceTitle}>
										{item.title} <br />
										<span className={styles.priceSubtitle}>{item.subtitle}</span>
									</p>
								) : (
									<p className={styles.priceTitle}>{item.title}</p>
								)}
								<div>
									{item.pricePrefix ? (
										<p className={styles.priceNum}>
											{item.pricePrefix}
											{formatPriceWithSign(item.price)}
										</p>
									) : (
										<p className={styles.priceNum}>{formatPriceWithSign(item.price)}</p>
									)}
									{item.note && <p className={styles.priceNote}>{item.note}</p>}
								</div>
							</div>
						))}
					</div>
					<div>
						<p className={styles.sideLightText}>
							Комиссия за&nbsp;индивидуальный расчёт партнёрского приключения&nbsp;20% от&nbsp;стоимости.
							<br />
							<br />
							Комиссия за&nbsp;организацию полёта на&nbsp;вертолёте 7%.
							<br />
							<br />
							Трансфер оплачивается отдельно.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

const AutoRent: FC = () => (
	<div>
		<div className={styles.grid}>
			<div className={styles.priceTable}>
				<p className={styles.groupTitle}>ПАРТНЁРСКИЕ АКТИВНОСТИ</p>
				<div className={styles.priceRowSmall}>
					<div className={styles.tableHeaderCol}>услуга</div>
					<div className={styles.tableHeaderCol}>цена,&nbsp;руб</div>
				</div>
				{AUTO_RENT.map((item) => (
					<div className={styles.priceRowSmall}>
						{!!item.subtitle ? (
							<p className={styles.priceTitle}>
								{item.title} <br />
								<span className={styles.priceSubtitle}>{item.subtitle}</span>
							</p>
						) : (
							<p className={styles.priceTitle}>{item.title}</p>
						)}
						<div>
							<p className={styles.priceNum}>{formatPriceWithSign(item.price)}</p>
							{!!item.note ? <p className={styles.priceNote}>{item.note}</p> : ''}
						</div>
					</div>
				))}
				<div className={styles.priceRowSmall}>
					<p className={styles.priceTitle}>ГСМ</p>
					<p className={styles.priceNum}>15&nbsp;₽/км</p>
				</div>
			</div>
			<div>
				<p className={styles.sideLightText}>
					При аренде автомобиля дополнительно оплачивается заправка 15&nbsp;руб./км по&nbsp;стоимости бензина.
					<br />
					<br />
					Мы&nbsp;не&nbsp;хотим чтобы вы&nbsp;торопились, поэтому считаем людей не&nbsp;больше 6&nbsp;часов.
					<br />
					<br />
					А&nbsp;все штрафы мы&nbsp;включим вам в&nbsp;счет или довыставим после того, как вы&nbsp;уедете.
				</p>
			</div>
		</div>
	</div>
);

const Corporative: FC = () => (
	<>
		<br />
		<br />
		<br />
		<div className={styles.priceTable}>
			<div className={styles.priceRow}>
				<div className={styles.tableHeaderCol}>услуга</div>
				<div className={styles.tableHeaderCol}>про&shy;дол&shy;жи&shy;тель&shy;ность</div>
				<div className={styles.tableHeaderCol}>цена, руб</div>
			</div>

			{CORPORATIVE_PRICE.map((item, index) => (
				<div className={styles.priceRowTop} key={index}>
					<div>
						<p className={styles.priceTitle}>{item.title}</p>
						{item.subtitle && <p className={styles.priceSubtitle}>{item.subtitle}</p>}

						{item.list && (
							<>
								<p className={styles.priceListTitle}>{item.listTitle}</p>
								<ul className={styles.priceList}>
									{item.list.map((listItem, listIndex) => (
										<li key={listIndex}>{listItem}</li>
									))}
								</ul>
							</>
						)}
					</div>

					<p className={styles.twoCol}>{item.duration}</p>
					<div>
						{item.priceText ? <p className={styles.priceNum}>{item.priceText}</p> : <p className={styles.priceNum}>{formatPriceWithSign(item.price)}</p>}
						{item.note && <p className={styles.priceNote}>{item.note}</p>}
					</div>
				</div>
			))}
		</div>
	</>
);

const ClosedTours: FC = () => {
	return (
		<>
			<br />
			<br />
			<br />
			<div className={styles.priceTable}>
				<div className={styles.priceRow}>
					<div className={styles.tableHeaderCol}>услуга</div>
					<div className={styles.tableHeaderCol}>про&shy;дол&shy;жи&shy;тель&shy;ность</div>
					<div className={styles.tableHeaderCol}>цена, руб</div>
				</div>

				{CLOSED_TOURS.map((item, index) => (
					<div className={styles.priceRowTop} key={index}>
						<div>
							<p className={styles.priceTitle}>{item.title}</p>

							{/* Заменяем !!item.subtitle ? ... : '' на логический оператор */}
							{item.subtitle && <p className={styles.priceSubtitle}>{item.subtitle}</p>}

							{item.subtitleTwo && <p className={styles.priceSubtitle}>{item.subtitleTwo}</p>}

							{item.list && (
								<ul className={styles.priceList}>
									{item.list.map((listItem, listIndex) => (
										<li key={listIndex}>{listItem}</li>
									))}
								</ul>
							)}
						</div>

						<p className={styles.twoCol}>{item.duration}</p>
						<div>
							<p className={styles.priceNum}>{formatPriceWithSign(item.price)}</p>

							{item.priceTwo && <p className={styles.priceNum}>{formatPriceWithSign(item.priceTwo)}</p>}

							{item.note && <p className={styles.priceNote}>{item.note}</p>}
						</div>
					</div>
				))}
			</div>
		</>
	);
};

const PriceServices: FC = () => (
	<div className={styles.priceTable}>
		<br />
		<br />
		<div className={styles.priceRow}>
			<div className={styles.tableHeaderCol}>услуга</div>
			<div className={styles.tableHeaderCol}>про&shy;дол&shy;жи&shy;тель&shy;ность</div>
			<div className={styles.tableHeaderCol}>цена, руб</div>
		</div>
		{PRICE_SERVICES.map((item) => (
			<div className={styles.priceRow}>
				{!!item.subtitle ? (
					<p className={styles.priceTitle}>
						{item.title} <br />
						<span className={styles.priceSubtitle}>{item.subtitle}</span>
					</p>
				) : (
					<p className={styles.priceTitle}>{item.title}</p>
				)}
				<p className={styles.twoCol}>{item.twoCol}</p>
				<p className={styles.priceNum}>{formatPriceWithSign(item.price)}</p>
			</div>
		))}
	</div>
);

const ToMars: FC = () => (
	<>
		<br />
		<br />
		<div className={styles.priceTable}>
			<div className={styles.priceRow}>
				<div className={styles.tableHeaderCol}></div>
				<div className={styles.tableHeaderCol}>кол-во человек</div>
				<div className={styles.tableHeaderCol}>цена, руб / сутки</div>
			</div>
			{TO_MARS.map((item) => (
				<div className={styles.priceRow}>
					{!!item.subtitle ? (
						<p className={styles.priceTitle}>
							{item.title} <br />
							<span className={styles.priceSubtitle}>{item.subtitle}</span>
						</p>
					) : (
						<p className={styles.priceTitle}>{item.title}</p>
					)}
					<p className={styles.twoCol}>{item.twoCol}</p>
					<p className={styles.priceNum}>{formatPriceWithSign(item.price)}</p>
				</div>
			))}
		</div>
		<br />
		<br />
		<br />
		<p className={styles.groupTitle}>дополнительные услуги</p>
		<br />
		<div className={styles.priceTable}>
			<div className={styles.priceRow}>
				<div className={styles.tableHeaderCol}></div>
				<div className={styles.tableHeaderCol}></div>
				<div className={styles.tableHeaderCol}>
					цена, руб / сутки <br />
					с&nbsp;завтраком
				</div>
			</div>
			{ADDITIONAL_SERVICES.map((item) => (
				<div className={styles.priceRow}>
					{!!item.subtitle ? (
						<p className={styles.priceTitle}>
							{item.title} <br />
							<span className={styles.priceSubtitle}>{item.subtitle}</span>
						</p>
					) : (
						<p className={styles.priceTitle}>{item.title}</p>
					)}
					<p className={styles.twoCol}>{item.twoCol}</p>
					<p className={styles.priceNum}>{formatPriceWithSign(item.price)}</p>
				</div>
			))}
		</div>
	</>
);


export const PricesPage: FC = () => {
	return (
		<main className={styles.content} id="vsibirzasvoyschet">
			<PageHeading>ТАРИФ НА&nbsp;ПРОЖИВАНИЕ И&nbsp;УСЛУГИ НА&nbsp;БАЗЕ И&nbsp;В&nbsp;РАМКАХ ЭКОСИСТЕМЫ МОЛОДОСТЬ НА&nbsp;АЛТАЕ</PageHeading>
			<br />
			<Description>
				{/*Все цены указаны без учета налога, который&nbsp;мы, как компания
        на&nbsp;упрощенной системе, платим в&nbsp;размере&nbsp;6% со&nbsp;всех поступающих
        платежей. При оплате банковской картой комиссия за&nbsp;эквайринг составляет 2,3%.*/}
				<br />
				<br />
				Если по&nbsp;итогу отдыха вы&nbsp;захотите оставить чаевые, мы&nbsp;с&nbsp;благодарностью включим их&nbsp;в&nbsp;счет в&nbsp;размере 5-10%. В&nbsp;организации корпоративных заездов от&nbsp;10&nbsp;человек нам помогает наш постоянный партнер агентство &laquo;Маури&raquo;, которые
				берут сервисный сбор в&nbsp;10% от&nbsp;общей суммы тура без учета стоимости проживания.
			</Description>
			<p className={styles.attention}>
				Цены актуальны <span className={styles.attentionRed}>до 31 марта 2025 года</span>.
			</p>
			<h2 className={styles.subtitle}>
				ПРОЖИВАНИЕ
				<br />
				НА&nbsp;ТУРБАЗЕ &laquo;МОЛОДОСТЬ&raquo;
			</h2>
			<div className={styles.grid}>
				<Prozhivanie />
				<ProzhivanieSide showExtraPerson={true} />
			</div>
			<h2 className={styles.subtitle}>
				ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ
				<br />
				НА&nbsp;ТУРБАЗЕ &laquo;МОЛОДОСТЬ&raquo;
			</h2>
			<div className={styles.grid}>
				<AdditionalServices />
				<AdditionalServicesSide />
			</div>
			<h2 className={styles.subtitle}>
				&laquo;ДОВОЛЬНЫЙ ДРАКОН&raquo;
				<br />
				Гастро-трактир
			</h2>
			<br />
			<br />
			<Description>Для проживающих на базе</Description>
			<div className={styles.grid}>
				<TraktirMeals />
				<TraktirSide />
			</div>
			<br />
			<br />
			<Description>Для не проживающих на базе</Description>
			<div className={styles.grid}>
				<TraktirMealsForNonGuests />
			</div>
			<div className={styles.separator}></div>
			<div className={styles.grid}>
				<TraktirMenu />
				<div></div>
			</div>
			<h2 className={styles.subtitle}>
				&laquo;СЧАСТЛИВЫЙ ДРАКОН&raquo;
				<br />
				Бар-Буфет
			</h2>
			<div className={styles.grid}>
				<BarMenu />
				<BarSide />
			</div>
			<h2 className={styles.subtitle}>
				&laquo;ТРИКСТЕР&raquo;
				<br />
				Кафе и&nbsp;лавка
			</h2>
			<div className={styles.grid}>
				<TriksterMenu />
				<TriksterSide />
			</div>
			<h2 className={styles.subtitle}>
				&laquo;БлагодатЪ&raquo;
				<br />
				Спа-комплекс
			</h2>
			<br />
			<HeatLab />
			<h2 className={styles.subtitle}>
				ТУРБЮРО
				<br />
				&laquo;АЛТАЙСКИЙ ТРАКТАТ&raquo;
			</h2>
			<br />
			<TourBureau />
			<h2 className={styles.subtitle}>
				АВТОПРОКАТ
				<br />
				&laquo;БЫВАЛЫЙ РЕЙНДЖЕР&raquo;
			</h2>
			<AutoRent />
			<h2 className={styles.subtitle}>
				КОРПОРАТИВНЫЕ И&nbsp;ГРУППОВЫЕ ЗАЕЗДЫ <br />
				НА&nbsp;ТУРБАЗЕ &laquo;МОЛОДОСТЬ&raquo;
			</h2>
			<Corporative />
			<h2 className={styles.subtitle}>
				ОРГАНИЗАЦИЯ ИНДИВИДУАЛЬНЫХ ЗАКРЫТЫХ <br />
				МЕРОПРИЯТИЙ НА ТУРБАЗЕ &laquo;МОЛОДОСТЬ&raquo;
			</h2>
			<ClosedTours />
			{/* <h2 className={styles.subtitle}>
        ПРАЙС НА УСЛУГИ <br />
        В ГОРКЛУБЕ &laquo;МОЛОДОСТЬ&raquo;
      </h2>
      <PriceServices /> */}
			<h2 className={styles.subtitle}>
				ПРОЖИВАНИЕ <br />
				ПРИЮТ &laquo;НА МАРСЕ&raquo;
			</h2>
			<ToMars />
		</main>
	);
};
