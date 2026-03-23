import { FC } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import { Description, PageHeading } from '@uikit';
import { AccordionSection, PackageBlock } from '@shared/components';
import * as styles from './PricesPage.css';
import { formatPriceWithSign } from '@utils';
import {
	BLAGODAT_SAUNA,
	COMFORT,
	GROUP_HIKINGS,
	POEZDKI,
	PUTESHESTVIYA,
	DLYA_DETEY,
	CONCEPT_STORE,
	PROZHIVANIE_HOUSES,
	PROZHIVANIE_ROOMS,
	WHAT_WE_DRINK,
	WHAT_WE_EAT,
	ADDITIONAL_PRICES,
	TRAKTIR_MENU,
	GASTRO_TRAKTIR_FESTIVAL,
	GASTRO_TRAKTIR_QUIET,
	BAR_MENU,
	TRIKSTER_MENU,
	HEAT_LAB,
	TOUR_GROUPS,
	TOUR_INDIVIDUAL,
	TOUR_PARTNERS,
	AUTO_RENT,
	CORPORATIVE_PRICE,
	CORPORATIVE_PRICE_NON_GUESTS,
	CLOSED_TOURS,
	PRICE_SERVICES,
	TO_MARS,
	ADDITIONAL_SERVICES,
	GASTRO_TRAKTIR_FESTIVAL_FOR_NON_GUESTS,
	GASTRO_TRAKTIR_QUIET_FOR_NON_GUESTS,
	DRIVERS,
	TRANSFER,
	HEAT_LAB_SERVICE,
	ZOZH_ZOM,
} from './PricesPage.constants';
import type { PoezdkiCarItem, PoezdkiGuideItem, PoezdkiPartnerItem, PoezdkiTripItem } from './PricesPage.constants';

interface ProzhivanieGridProps {
	items: import('./PricesPage.constants').AccommodationItem[];
}

export const ProzhivanieGrid: FC<ProzhivanieGridProps> = ({ items }) => (
	<div className={styles.accommodationGrid}>
		{items.map((item, index) => (
			<div className={styles.accommodationCard} key={index}>
				<div className={styles.accommodationCardHeader}>
					<h4 className={styles.accommodationCardTitle}>{item.title}</h4>
					<span className={styles.accommodationCardPrice}>
						ОТ&nbsp;{formatPriceWithSign(item.price)}
					</span>
				</div>
				<div className={styles.accommodationCardMeta}>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img src="/icons/user.svg" alt="" width={14} height={14} className={styles.accommodationCardIcon} />
					<span>{item.capacity}</span>
					<span>{item.area}</span>
				</div>
				{item.description && (
					<p className={styles.accommodationCardDescription}>{item.description}</p>
				)}
			</div>
		))}
	</div>
);

interface ProzhivanieSideProps {
	showExtraPerson?: boolean; // Флаг для отображения информации о дополнительном человеке
}

export const ProzhivanieSide: FC<ProzhivanieSideProps> = ({ showExtraPerson = true }) => (
	<div>
		{showExtraPerson && (
			<>
				<p className={styles.sideTitle}>Дополнительный человек:</p>
				<p className={styles.sideText}>
					взрослый 12&nbsp;000&nbsp;₽/СУТКИ
					<br />
					ребёнок (от&nbsp;5&nbsp;до&nbsp;12&nbsp;лет) 5&nbsp;000&nbsp;₽/СУТКИ
				</p>
			</>
		)}
		<p className={styles.sideTitle}>Съедобное бревно (обед и ужин):</p>
		<p className={styles.sideText}>
			Завтрак входит в стоимость проживания
			<br />
			взрослый 8&nbsp;000&nbsp;₽/ДЕНЬ
			<br />
			ребёнок (от&nbsp;5&nbsp;до&nbsp;12&nbsp;лет) 5&nbsp;000&nbsp;₽/ДЕНЬ
		</p>
		<p className={styles.sideText}>Что входит:</p>
		<ul className={styles.list}>
			<li className={styles.listItem}>круглосуточное питание&nbsp;- обед, ужин</li>
			<li className={styles.listItem}>«алтайский водопой» от&nbsp;воды Petroglyph</li>
			<li className={styles.listItem}>ланчбоксы в&nbsp;путешествия и&nbsp;ночной дожор</li>
			<li className={styles.listItem}>алтайский травяной сбор (чай) весь день&nbsp;- комплиментарно</li>
		</ul>
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
						{item.priceText ? <p className={styles.priceNum}>{item.priceText}</p> : <p className={styles.priceNum}>{item.priceChild ? `${formatPriceWithSign(item.price)} / ${formatPriceWithSign(item.priceChild)}` : formatPriceWithSign(item.price)}</p>}

						{item.note && <p className={styles.priceNote}>{item.note}</p>}
					</div>
				</div>
			))}
		</div>
	);
};
export const AdditionalServicesSide: FC = () => (
	<div>
		{/* <p className={styles.sideTitle}>
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
    </p>
		<p className={styles.sideTitle}>
			дополнительно мы&nbsp;включаем в&nbsp;счёт <br />
			стоимость сезонного билета:
		</p>
		<p className={styles.sideText}>
			взрослый 7&nbsp;000&nbsp;₽/ДЕНЬ <br />
			ребёнок (от&nbsp;5&nbsp;до&nbsp;14&nbsp;лет) 4&nbsp;900&nbsp;₽/ДЕНЬ
		</p> */}
	</div>
);

export const TraktirMeals: FC = () => (
	<>
		<div className={styles.priceTable}>
			<div className={styles.priceRow}>
				<div className={styles.tableHeaderCol}>&nbsp;</div>
				<div className={styles.tableHeaderCol}></div>
				<div className={styles.tableHeaderCol}>цена,&nbsp;руб</div>
			</div>
			{GASTRO_TRAKTIR_FESTIVAL.map((item, index) => (
				<div className={styles.priceRow} key={index}>
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
						) : item.price ? (
							<p className={styles.priceNum}>{formatPriceWithSign(item.price)}</p>
						) : (
							<p className={styles.priceNum}>{item.priceText}</p>
						)}
						{!!item.note ? <p className={styles.priceNote}>{item.note}</p> : ''}
					</div>
				</div>
			))}
			<br />
			<br />
			<p className={styles.sideText}>Услуга &laquo;водопой&raquo; &mdash;&nbsp;500&nbsp;руб.&nbsp;с&nbsp;человека в&nbsp;сутки. Неограниченный запас воды Petroglyph с&nbsp;газом и&nbsp;без оплачивается теми гостями, которые не&nbsp;берут &laquo;съедобное бревно&raquo;.</p>
		</div>
	</>
);
export const TraktirMealsForNonGuests: FC = () => (
	<div className={styles.priceTable}>
		<div className={styles.priceRow}>
			<div className={styles.tableHeaderCol}>&nbsp;</div>
			<div className={styles.tableHeaderCol}></div>
			<div className={styles.tableHeaderCol}>цена,&nbsp;руб</div>
		</div>
		{GASTRO_TRAKTIR_FESTIVAL_FOR_NON_GUESTS.map((item, index) => (
			<div className={styles.priceRow} key={index}>
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
	</div>
);
const WhatWeEatBlock: FC = () => {
	const { gastropub, guestsStaying, guestsNotStaying } = WHAT_WE_EAT;
	return (
		<>
			<div className={styles.whatWeEatGastropubLayout}>
				<div className={styles.whatWeEatMealTimes}>
					<h3 className={styles.whatWeEatGastropubHeading}>{gastropub.name}</h3>
					{gastropub.mealTimes.map((m, i) => (
						<div className={styles.whatWeEatMealTimeRow} key={i}>
							{m.name}: {m.time}
						</div>
					))}
				</div>
				<p className={styles.whatWeEatDescription}>{gastropub.description}</p>
			</div>
			<div className={styles.whatWeEatColumns}>
				<div className={styles.whatWeEatColumn}>
					<h4 className={styles.whatWeEatColumnHeading}>{guestsStaying.title}</h4>
					{guestsStaying.items.map((item, i) => (
						<div className={styles.whatWeEatItem} key={i}>
							<div className={styles.whatWeEatItemLeft}>
								<span className={styles.whatWeEatItemTitle}>{item.title}</span>
								{'description' in item && item.description && <span className={styles.whatWeEatItemDescription}>{item.description}</span>}
							</div>
							<div className={styles.whatWeEatItemRight}>
								{'note' in item && item.note && <span className={styles.whatWeEatItemNote}>{item.note}</span>}
								{'price' in item && item.price !== undefined && <span className={styles.whatWeEatItemPrice}>{formatPriceWithSign(item.price)}</span>}
								{'priceAdult' in item && 'priceChild' in item && item.priceAdult !== undefined && item.priceChild !== undefined && (
									<>
										<span className={styles.whatWeEatItemPrice}>{formatPriceWithSign(item.priceAdult)}</span> <span className={styles.whatWeEatItemDescriptor}>взрослый</span>
										<br />
										<span className={styles.whatWeEatItemPrice}>{formatPriceWithSign(item.priceChild)}</span> <span className={styles.whatWeEatItemDescriptor}>ребенок</span>
									</>
								)}
							</div>
						</div>
					))}
				</div>
				<div className={styles.whatWeEatColumn}>
					<h4 className={styles.whatWeEatColumnHeading}>{guestsNotStaying.title}</h4>
					{guestsNotStaying.items.map((item, i) => (
						<div className={styles.whatWeEatItem} key={i}>
							<div className={styles.whatWeEatItemLeft}>
								<span className={styles.whatWeEatItemTitle}>{item.title}</span>
							</div>
							<div className={styles.whatWeEatItemRight}>
								<span className={styles.whatWeEatItemPrice}>{formatPriceWithSign(item.priceAdult)}</span> <span className={styles.whatWeEatItemDescriptor}>взрослый</span>
								<br />
								<span className={styles.whatWeEatItemPrice}>{formatPriceWithSign(item.priceChild)}</span> <span className={styles.whatWeEatItemDescriptor}>ребенок</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export const DrinkPriceRow: FC<{
	item: { title?: string; price?: number; priceText?: string; pricePrefix?: string; description?: string; unit?: string };
}> = ({ item }) => (
	<div className={styles.whatWeEatItem}>
		<div className={styles.whatWeEatItemLeft}>
			{item.title && <span className={styles.whatWeEatItemTitle}>{item.title}</span>}
			{item.description && <span className={item.title ? styles.whatWeEatItemDescription : styles.whatWeEatItemTitle}>{item.description}</span>}
		</div>
		<div className={styles.whatWeEatItemRight}>
			<span className={styles.whatWeEatItemPrice}>
				{item.priceText ?? (item.price != null ? `${item.pricePrefix ?? ''}${formatPriceWithSign(item.price)}` : '')}
			</span>
			{item.unit && <span className={styles.whatWeEatItemDescriptor}> {item.unit}</span>}
		</div>
	</div>
);

const WhatWeDrinkBlock: FC = () => {
	const { coffeeShop, bar, corkage } = WHAT_WE_DRINK;
	return (
		<>
			<h3 className={styles.subsectionHeading}>{coffeeShop.name}</h3>
			<p className={styles.additionalPersonNote}>{coffeeShop.description}</p>
			<h4 className={styles.whatWeDrinkAccentSubheading}>{coffeeShop.subheading}</h4>
			<div className={styles.whatWeEatColumns}>
				<div className={styles.whatWeEatColumn}>
					{coffeeShop.leftColumn.map((item, i) => (
						<DrinkPriceRow item={item} key={i} />
					))}
				</div>
				<div className={styles.whatWeEatColumn}>
					{coffeeShop.rightColumn.map((item, i) => (
						<DrinkPriceRow item={item} key={i} />
					))}
				</div>
			</div>
			<h3 className={styles.subsectionHeading}>{bar.name}</h3>
			<p className={styles.whatWeDrinkBarDescription}>{bar.description}</p>
			<div className={styles.whatWeEatColumns}>
				<div className={styles.whatWeEatColumn}>
					{bar.items.map((item, i) => (
						<DrinkPriceRow item={item} key={i} />
					))}
				</div>
				<div className={styles.whatWeEatColumn} />
			</div>
			<p className={styles.additionalPersonNote}>{corkage}</p>
		</>
	);
};

const ComfortBlock: FC = () => (
	<div className={styles.whatWeEatColumns}>
		<div className={styles.whatWeEatColumn}>
			{COMFORT.items.map((item, i) => (
				<DrinkPriceRow item={item} key={i} />
			))}
		</div>
		<div className={styles.whatWeEatColumn} />
	</div>
);

const PoezdkiTripRow: FC<{ item: PoezdkiTripItem }> = ({ item }) => (
	<div className={styles.whatWeEatItem}>
		<div className={styles.whatWeEatItemLeft}>
			<span className={styles.whatWeEatItemTitle}>{item.title}</span>
		</div>
		<div className={styles.whatWeEatItemRight}>
			{item.priceText ? (
				<span className={styles.whatWeEatItemPrice}>{item.priceText}</span>
			) : (
				<>
					<span className={styles.whatWeEatItemPrice}>{formatPriceWithSign(item.priceAdult!)}</span>{' '}
					<span className={styles.whatWeEatItemDescriptor}>взрослый</span>
					<br />
					<span className={styles.whatWeEatItemPrice}>{formatPriceWithSign(item.priceChild!)}</span>{' '}
					<span className={styles.whatWeEatItemDescriptor}>детский</span>
				</>
			)}
		</div>
	</div>
);

const PoezdkiPartnerTableRow: FC<{ item: PoezdkiPartnerItem }> = ({ item }) => (
	<div className={styles.priceRow}>
		<div>
			<p className={styles.partnerTableServiceTitle}>{item.title}</p>
			{item.condition && <p className={styles.partnerTableCondition}>{item.condition}</p>}
		</div>
		<div className={styles.partnerTableColLeft}>
			<p className={styles.partnerTableDuration}>{item.duration ?? ''}</p>
		</div>
		<div className={styles.partnerTableColRight}>
			{item.priceText && <p className={styles.priceNum}>{item.priceText}</p>}
			{item.price !== undefined && (
				<p className={styles.priceNum}>
					{item.pricePrefix}
					{formatPriceWithSign(item.price)}
				</p>
			)}
			{item.priceAdult !== undefined && (
				<>
					<p className={styles.priceNum}>
						<span>{formatPriceWithSign(item.priceAdult)}</span>{' '}
						<span className={styles.partnerTablePriceLabel}>взрослый</span>
					</p>
					<p className={styles.priceNum}>
						<span>{formatPriceWithSign(item.priceChild!)}</span>{' '}
						<span className={styles.partnerTablePriceLabel}>детский</span>
					</p>
				</>
			)}
		</div>
	</div>
);

export const PoezdkiCarRow: FC<{ item: PoezdkiCarItem }> = ({ item }) => (
	<div className={styles.whatWeEatItem}>
		<div className={styles.whatWeEatItemLeft}>
			<span className={styles.whatWeEatItemTitle}>{item.title}</span>
			{item.note && <span className={styles.whatWeEatItemDescription}>{item.note}</span>}
		</div>
		<div className={styles.whatWeEatItemRight}>
			{item.pricePerHour !== undefined && (
				<>
					<span className={styles.whatWeEatItemPrice}>{formatPriceWithSign(item.pricePerHour)}</span>{' '}
					<span className={styles.whatWeEatItemDescriptor}>час</span>
					<br />
					<span className={styles.whatWeEatItemPrice}>{formatPriceWithSign(item.pricePerDay!)}</span>{' '}
					<span className={styles.whatWeEatItemDescriptor}>сутки</span>
				</>
			)}
			{item.price !== undefined && (
				<>
					<span className={styles.whatWeEatItemPrice}>{formatPriceWithSign(item.price)}</span>
					{item.priceNote && <span className={styles.whatWeEatItemDescriptor}> {item.priceNote}</span>}
				</>
			)}
		</div>
	</div>
);

export const PoezdkiGuideRow: FC<{ item: PoezdkiGuideItem }> = ({ item }) => (
	<div className={styles.whatWeEatItem}>
		<div className={styles.whatWeEatItemLeft}>
			<span className={styles.whatWeEatItemTitle}>{item.title}</span>
			{item.description && <span className={styles.whatWeEatItemDescription}>{item.description}</span>}
		</div>
		<div className={styles.whatWeEatItemRight}>
			<span className={styles.whatWeEatItemPrice}>{formatPriceWithSign(item.pricePerHour)}</span>{' '}
			<span className={styles.whatWeEatItemDescriptor}>час</span>
		</div>
	</div>
);

const PoezdkiBlock: FC = () => {
	const { trips35, fullDay, partner, carRental, guides } = POEZDKI;
	return (
		<>
			<h3 className={styles.subsectionHeading}>{trips35.sectionTitle}</h3>
			<div className={styles.whatWeEatColumns}>
				<div className={styles.whatWeEatColumn}>
					{trips35.leftColumn.map((item, i) => (
						<PoezdkiTripRow item={item} key={i} />
					))}
				</div>
				<div className={styles.whatWeEatColumn}>
					{trips35.rightColumn.map((item, i) => (
						<PoezdkiTripRow item={item} key={i} />
					))}
				</div>
			</div>
			<h3 className={styles.subsectionHeading}>{fullDay.sectionTitle}</h3>
			<div className={styles.whatWeEatColumns}>
				<div className={styles.whatWeEatColumn}>
					{fullDay.leftColumn.map((item, i) => (
						<PoezdkiTripRow item={item} key={i} />
					))}
				</div>
				<div className={styles.whatWeEatColumn}>
					{fullDay.rightColumn.map((item, i) => (
						<PoezdkiTripRow item={item} key={i} />
					))}
				</div>
			</div>
			<h3 className={styles.subsectionHeadingBrand}>{partner.sectionTitle}</h3>
			<div className={styles.priceTable}>
				<div className={styles.partnerTableHeaderRow}>
					<span className={styles.partnerTableHeaderCol}>УСЛУГА</span>
					<span className={styles.partnerTableHeaderCol}>ПРОДОЛЖИТЕЛЬНОСТЬ</span>
					<span className={styles.partnerTableHeaderCol}>ЦЕНА, РУБ.</span>
				</div>
				{partner.items.map((item, i) => (
					<PoezdkiPartnerTableRow item={item} key={i} />
				))}
			</div>
			<h3 className={styles.subsectionHeading}>{carRental.sectionTitle}</h3>
			<div className={styles.whatWeEatColumns}>
				<div className={styles.whatWeEatColumn}>
					{carRental.leftColumn.map((item, i) => (
						<PoezdkiCarRow item={item} key={i} />
					))}
				</div>
				<div className={styles.whatWeEatColumn}>
					{carRental.rightColumn.map((item, i) => (
						<PoezdkiCarRow item={item} key={i} />
					))}
				</div>
			</div>
			<h3 className={styles.subsectionHeading}>{guides.sectionTitle}</h3>
			<h4 className={styles.whatWeDrinkAccentSubheading}>{guides.subheading}</h4>
			<div className={styles.whatWeEatColumns}>
				<div className={styles.whatWeEatColumn}>
					{guides.leftColumn.map((item, i) => (
						<PoezdkiGuideRow item={item} key={i} />
					))}
				</div>
				<div className={styles.whatWeEatColumn}>
					{guides.rightColumn.map((item, i) => (
						<PoezdkiGuideRow item={item} key={i} />
					))}
				</div>
			</div>
		</>
	);
};

const PuteshestviyaBlock: FC = () => {
	const { mainHeading, items } = PUTESHESTVIYA;
	return (
		<>
			<h3 className={styles.subsectionHeading}>{mainHeading}</h3>
			<div className={styles.travelsWrap}>
				{items.map((item, i) => (
					<div key={i} className={styles.travelsRow}>
						<div>
							<h4 className={styles.travelsSubheading}>{item.title}</h4>
							<p className={styles.travelsLeftText}>{item.description}</p>
						</div>
						<div className={styles.travelsRightGroup}>
							{item.rightItems.map((rightItem, j) =>
								rightItem.isPrice ? (
									<p key={j} className={styles.travelsRightPrice}>
										{rightItem.text}
									</p>
								) : (
									<p key={j} className={styles.travelsRightLabel}>
										{rightItem.text}
									</p>
								),
							)}
						</div>
					</div>
				))}
			</div>
		</>
	);
};

const DlyaDeteyBlock: FC = () => {
	const { paragraph, intro, listItems } = DLYA_DETEY;
	return (
		<div className={styles.travelsRow}>
			<div>
				<p className={styles.travelsLeftText}>{paragraph}</p>
				<p className={styles.travelsLeftText}>{intro}</p>
				<ul className={styles.travelsList}>
					{listItems.map((item, i) => (
						<li key={i} className={styles.travelsListItem}>
							{item}
						</li>
					))}
				</ul>
			</div>
			<div />
		</div>
	);
};

const ConceptStoreBlock: FC = () => {
	const { paragraph, ctaText } = CONCEPT_STORE;
	return (
		<>
			<p className={styles.travelsLeftText}>{paragraph}</p>
			<p className={styles.additionalPersonNote}>{ctaText}</p>
		</>
	);
};

const ZozhZomBlock: FC = () => (
	<>
		<div className={styles.whatWeEatColumns}>
			<div className={styles.whatWeEatColumn}>
				{ZOZH_ZOM.leftColumn.map((item, i) => (
					<DrinkPriceRow item={item} key={i} />
				))}
			</div>
			<div className={styles.whatWeEatColumn}>
				{ZOZH_ZOM.rightColumn.map((item, i) => (
					<DrinkPriceRow item={item} key={i} />
				))}
			</div>
		</div>
		<h4 className={styles.travelsSubheadingWithGap}>{GROUP_HIKINGS.title}</h4>
		<GroupHikingsBlock />
	</>
);

const GroupHikingsBlock: FC = () => (
	<div className={styles.whatWeEatColumns}>
		<div className={styles.whatWeEatColumn}>
			{GROUP_HIKINGS.leftColumn.map((item, i) => (
				<DrinkPriceRow item={item} key={i} />
			))}
		</div>
		<div className={styles.whatWeEatColumn}>
			{GROUP_HIKINGS.rightColumn.map((item, i) => (
				<DrinkPriceRow item={item} key={i} />
			))}
		</div>
	</div>
);

const BlagodatSaunaBlock: FC = () => (
	<div className={styles.whatWeEatColumns}>
		<div className={styles.whatWeEatColumn}>
			{BLAGODAT_SAUNA.leftColumn.map((item, i) => (
				<DrinkPriceRow item={item} key={i} />
			))}
		</div>
		<div className={styles.whatWeEatColumn}>
			{BLAGODAT_SAUNA.rightColumn.map((item, i) => (
				<DrinkPriceRow item={item} key={i} />
			))}
		</div>
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
		{TRAKTIR_MENU.map((item, index) => (
			<div key={index} className={styles.priceRow}>
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

export const BarMenu: FC = () => (
	<div className={styles.priceTable}>
		<div className={styles.priceRow}>
			<div className={styles.tableHeaderCol}>НАПИТОК</div>
			<div className={styles.tableHeaderCol}></div>
			<div className={styles.tableHeaderCol}>цена,&nbsp;руб</div>
		</div>
		{BAR_MENU.map((item, index) => (
			<div className={styles.priceRow} key={index}>
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

export const TriksterMenu: FC = () => (
	<div className={styles.priceTable}>
		<div className={styles.priceRow}>
			<div className={styles.tableHeaderCol}>НАПИТОК</div>
			<div className={styles.tableHeaderCol}></div>
			<div className={styles.tableHeaderCol}>цена,&nbsp;руб</div>
		</div>
		{TRIKSTER_MENU.map((item, index) => (
			<div className={styles.priceRow} key={index}>
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

export const HeatLabSibir: FC = () => {
	return (
		<>
			<div>
				<p className={styles.groupTitle}>Режим работы</p>
				<p className={styles.sideText}>с&nbsp;11:00 до&nbsp;24:00 ночи</p>
			</div>

			<br />
			<br />

			<p className={styles.sideText}>В аренду каждой нашей бани входит</p>
			{HEAT_LAB_SERVICE.map((item, itemIndex) => (
				<div key={itemIndex} className={styles.priceRowWide}>
					<div>
						{!!item.list && (
							<ul className={styles.priceList}>
								{item.list.map((listItem, listIndex) => (
									<li key={listIndex}>{listItem}</li>
								))}
							</ul>
						)}
					</div>
				</div>
			))}
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

const Transfer: FC = () => {
	return (
		<>
			<div>
				<br />
				<br />
				<p className={styles.sideText}>Стоимость услуг указана с&nbsp;учетом всех налогов и&nbsp;НДС.</p>
				<br />
				<br />
			</div>
			<div className={styles.priceTable}>
				<div className={styles.priceRow}>
					<div className={styles.tableHeaderCol}>услуга</div>
					<div className={styles.tableHeaderCol}>&nbsp;</div>
					<div className={styles.tableHeaderCol}>цена, руб</div>
				</div>

				{TRANSFER.map((item, index) => (
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
							{item.priceText ? <p className={styles.priceNum}>{item.priceText}</p> : <p className={styles.priceNum}>{item.priceChild ? `${formatPriceWithSign(item.price)} / ${formatPriceWithSign(item.priceChild)}` : formatPriceWithSign(item.price)}</p>}

							{item.note && <p className={styles.priceNote}>{item.note}</p>}
						</div>
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
				<p className={styles.sideText}>Проводятся от&nbsp;4-х человек. Если вы&nbsp;хотите отправиться в&nbsp;поездку своей компанией,скажите нам и&nbsp;мы&nbsp;рассчитаем стоимость в&nbsp;индивидуальном формате и&nbsp;с&nbsp;учетом ваших пожеланий</p>
				<br />
				<p className={styles.sideText}>При расчете поездок мы&nbsp;считаем детей независимо от&nbsp;возраста&nbsp;&mdash; от&nbsp;0&nbsp;до&nbsp;12&nbsp;лет. Мы&nbsp;сажаем их&nbsp;на&nbsp;отдельное место и&nbsp;собираем в&nbsp;дорогу ланч-бокс</p>
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

						{item.priceText ? (
							<p className={styles.priceNum}>{item.priceText}</p>
						) : item.pricePrefix ? (
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
				<br />
				{DRIVERS.map((item, index) => (
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

						{item.priceText ? (
							<p className={styles.priceNum}>{item.priceText}</p>
						) : item.pricePrefix ? (
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
				<br />
				<p className={styles.sideText}>Услуги следопытов, водителей мы&nbsp;считаем не&nbsp;дольше 6&nbsp;часов, чтобы вы&nbsp;не&nbsp;торопились</p>
				{/*  */}
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
									{item.priceText ? (
										<p className={styles.priceNum}>{item.priceText}</p>
									) : item.pricePrefix ? (
										<p className={styles.priceNum}>
											{item.pricePrefix}
											{formatPriceWithSign(item.price)}
										</p>
									) : (
										<p className={styles.priceNum}>{formatPriceWithSign(item.price)}</p>
									)}

									{item.note && !item.priceText && <p className={styles.priceNote}>{item.note}</p>}
								</div>
							</div>
						))}
					</div>
					<div>
						<p className={styles.sideLightText}>Мы&nbsp;не&nbsp;скрываем собственные комиссии и&nbsp;наценки. За&nbsp;работу с&nbsp;подрядчиками мы&nbsp;берем комиссию от&nbsp;7% (вертолеты) до&nbsp;20% (бизнес-зал), которую вы&nbsp;увидите в&nbsp;своем счете.</p>
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
				<div className={styles.priceRowSmall}>
					<div className={styles.tableHeaderCol}>услуга</div>
					<div className={styles.tableHeaderCol}>цена,&nbsp;руб</div>
				</div>
				{AUTO_RENT.map((item, index) => (
					<div key={index} className={styles.priceRowSmall}>
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
const CorporativeNonGuests: FC = () => (
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

			{CORPORATIVE_PRICE_NON_GUESTS.map((item, index) => (
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
		{PRICE_SERVICES.map((item, index) => (
			<div key={index} className={styles.priceRow}>
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
			{TO_MARS.map((item, index) => (
				<div key={index} className={styles.priceRow}>
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
			{ADDITIONAL_SERVICES.map((item, index) => (
				<div key={index} className={styles.priceRow}>
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

export const ZozhZom: FC = () => <ZozhZomBlock />;

export const PricesPage: FC = () => {
	return (
		<main className={styles.content} id="vsibirzasvoyschet">
			<PageHeading>В&nbsp;СИБИРЬ ЗА&nbsp;СВОЙ СЧЁТ&nbsp;&mdash; АЛТАЙ</PageHeading>
			<br />
			<AccordionSection defaultOpen={false} title="ПРОЖИВАНИЕ">
				<PackageBlock />
				<p className={styles.separatorNote}>Если вы&nbsp;все таки хотите все по&nbsp;отдельности и&nbsp;дороже:</p>
				<h3 className={styles.subsectionHeading}>РАЗМЕЩЕНИЕ В&nbsp;НОМЕРАХ</h3>
				<ProzhivanieGrid items={PROZHIVANIE_ROOMS} />
				<h3 className={styles.subsectionHeading}>РАЗМЕЩЕНИЕ В&nbsp;ОТДЕЛЬНО СТОЯЩИХ ДОМАХ</h3>
				<ProzhivanieGrid items={PROZHIVANIE_HOUSES} />
				<p className={styles.additionalPersonNote}>
					Каждый дополнительный человек в&nbsp;спальне и&nbsp;доме: от&nbsp;+7&nbsp;000&nbsp;₽ взрослый; от&nbsp;+4&nbsp;000&nbsp;₽ ребёнок от&nbsp;5&nbsp;до&nbsp;12&nbsp;лет. Дети до&nbsp;5&nbsp;лет&nbsp;&mdash; комплиментарно.
				</p>
			</AccordionSection>
			<AccordionSection defaultOpen={false} title={WHAT_WE_EAT.title}>
				<WhatWeEatBlock />
			</AccordionSection>
			<AccordionSection defaultOpen={false} title={WHAT_WE_DRINK.title}>
				<WhatWeDrinkBlock />
			</AccordionSection>
			<AccordionSection defaultOpen={false} title={COMFORT.title}>
				<ComfortBlock />
			</AccordionSection>
			<AccordionSection defaultOpen={false} title={BLAGODAT_SAUNA.title}>
				<BlagodatSaunaBlock />
			</AccordionSection>
			<AccordionSection defaultOpen={false} title={ZOZH_ZOM.title}>
				<ZozhZomBlock />
			</AccordionSection>
			<AccordionSection defaultOpen={false} title={POEZDKI.title}>
				<PoezdkiBlock />
			</AccordionSection>
			<AccordionSection defaultOpen={false} title={PUTESHESTVIYA.title}>
				<PuteshestviyaBlock />
			</AccordionSection>
			<AccordionSection defaultOpen={false} title={DLYA_DETEY.title}>
				<DlyaDeteyBlock />
			</AccordionSection>
			<AccordionSection defaultOpen={false} title={CONCEPT_STORE.title}>
				<ConceptStoreBlock />
			</AccordionSection>
		</main>
	);
};
