import { FC } from 'react';

import { PageHeading } from '@uikit';
import { AccordionSection } from '@shared/components';
import { formatPriceWithSign } from '@utils';
import {
	DrinkPriceRow,
	PoezdkiCarRow,
	PoezdkiGuideRow,
	ProzhivanieGrid,
} from '../PricesPage/PricesPage';
import * as styles from '../PricesPage/PricesPage.css';
import { WHAT_WE_DRINK } from '../PricesPage/PricesPage.constants';
import {
	BLAGODAT_BAIKAL,
	COMFORT_BAIKAL,
	CONCEPT_STORE_BAIKAL,
	DLYA_DETEY_BAIKAL,
	NA_BAZE_BAIKAL,
	POEZDKI_BAIKAL,
	PROZHIVANIE_BAIKAL_ADDITIONAL_PERSON,
	PROZHIVANIE_BAIKAL_CUBES,
	PROZHIVANIE_BAIKAL_GERAH,
	PROZHIVANIE_BAIKAL_PROGRAM,
	PUTESHESTVIYA_BAIKAL,
	ZOZH_ZOM_BAIKAL,
} from './PricesPageBaikal.constants';

const NaBazeBlock: FC = () => {
	const { gastropub, guestsStaying, guestsNotStaying, vodopoyNote, coffeeShop } = NA_BAZE_BAIKAL;
	return (
		<>
			<div className={styles.whatWeEatGastropubLayout}>
				<div className={styles.whatWeEatMealTimes}>
					<h3 className={styles.whatWeEatGastropubHeading}>{gastropub.name}</h3>
					{gastropub.mealTimes.map((m, i) => (
						<div className={styles.whatWeEatMealTimeRow} key={i}>
							{m.name} {m.time}
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
								{'description' in item && item.description && (
									<span className={styles.whatWeEatItemDescription}>{item.description}</span>
								)}
							</div>
							<div className={styles.whatWeEatItemRight}>
								{'priceAdult' in item &&
									item.priceAdult !== undefined &&
									'priceChild' in item &&
									item.priceChild !== undefined && (
										<>
											<span className={styles.whatWeEatItemPrice}>
												{formatPriceWithSign(item.priceAdult)}
											</span>{' '}
											<span className={styles.whatWeEatItemDescriptor}>взрослый</span>
											<br />
											<span className={styles.whatWeEatItemPrice}>
												{formatPriceWithSign(item.priceChild)}
											</span>{' '}
											<span className={styles.whatWeEatItemDescriptor}>ребенок</span>
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
								<span className={styles.whatWeEatItemPrice}>
									{formatPriceWithSign(item.priceAdult)}
								</span>{' '}
								<span className={styles.whatWeEatItemDescriptor}>взрослый</span>
								<br />
								<span className={styles.whatWeEatItemPrice}>
									{formatPriceWithSign(item.priceChild)}
								</span>{' '}
								<span className={styles.whatWeEatItemDescriptor}>ребенок</span>
							</div>
						</div>
					))}
				</div>
			</div>
			<p className={styles.additionalPersonNote}>{vodopoyNote}</p>
			<h3 className={styles.subsectionHeading}>{coffeeShop.name}</h3>
			<p className={styles.additionalPersonNote}>{coffeeShop.description}</p>
			<div className={styles.whatWeEatColumns}>
				<div className={styles.whatWeEatColumn}>
					{coffeeShop.leftColumn.map((entry, i) =>
						'subheading' in entry ? (
							<h4 key={i} className={styles.whatWeDrinkAccentSubheading}>
								{entry.subheading}
							</h4>
						) : (
							<DrinkPriceRow key={i} item={entry} />
						),
					)}
				</div>
				<div className={styles.whatWeEatColumn}>
					{coffeeShop.rightColumn.map((entry, i) =>
						'subheading' in entry ? (
							<h4 key={i} className={styles.whatWeDrinkAccentSubheading}>
								{entry.subheading}
							</h4>
						) : (
							<DrinkPriceRow key={i} item={entry} />
						),
					)}
				</div>
			</div>
		</>
	);
};

const ComfortBlockBaikal: FC = () => (
	<div className={styles.whatWeEatColumns}>
		<div className={styles.whatWeEatColumn}>
			{COMFORT_BAIKAL.items.map((item, i) => (
				<DrinkPriceRow item={item} key={i} />
			))}
		</div>
		<div className={styles.whatWeEatColumn} />
	</div>
);

const BlagodatBlockBaikal: FC = () => (
	<div className={styles.whatWeEatColumns}>
		<div className={styles.whatWeEatColumn}>
			{BLAGODAT_BAIKAL.leftColumn.map((item, i) => (
				<DrinkPriceRow item={item} key={i} />
			))}
		</div>
		<div className={styles.whatWeEatColumn}>
			{BLAGODAT_BAIKAL.rightColumn.map((item, i) => (
				<DrinkPriceRow item={item} key={i} />
			))}
		</div>
	</div>
);

const ZozhZomBlockBaikal: FC = () => (
	<div className={styles.whatWeEatColumns}>
		<div className={styles.whatWeEatColumn}>
			{ZOZH_ZOM_BAIKAL.leftColumn.map((item, i) => (
				<DrinkPriceRow item={item} key={i} />
			))}
		</div>
		<div className={styles.whatWeEatColumn}>
			{ZOZH_ZOM_BAIKAL.rightColumn.map((item, i) => (
				<DrinkPriceRow item={item} key={i} />
			))}
		</div>
	</div>
);

const PoezdkiBlockBaikal: FC = () => {
	const { shortTrips } = POEZDKI_BAIKAL;
	return (
		<>
			<h3 className={styles.subsectionHeading}>{shortTrips.sectionTitle}</h3>
			<div className={styles.whatWeEatColumns}>
				<div className={styles.whatWeEatColumn}>
					{shortTrips.items.map((item, i) => (
						<div className={styles.whatWeEatItem} key={i}>
							<div className={styles.whatWeEatItemLeft}>
								<span className={styles.whatWeEatItemTitleBrand}>{item.title}</span>
								{item.note && (
									<span className={styles.whatWeEatItemDescription}>{item.note}</span>
								)}
							</div>
							<div className={styles.whatWeEatItemRight}>
								{item.priceText && (
									<span className={styles.whatWeEatItemPrice}>{item.priceText}</span>
								)}
								{item.subItems?.map((sub, j) => (
									<div key={j}>
										<span className={styles.whatWeEatItemTitleBrand}>{sub.label}</span>{' '}
										<span className={styles.whatWeEatItemPrice}>{sub.priceText}</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
				<div className={styles.whatWeEatColumn} />
			</div>
		</>
	);
};

const PuteshestviyaBlockBaikal: FC = () => {
	const { fullDayAdventures, carRental, guides } = PUTESHESTVIYA_BAIKAL;
	return (
		<>
			<h3 className={styles.subsectionHeading}>{fullDayAdventures.sectionTitle}</h3>
			<div className={styles.whatWeEatColumns}>
				<div className={styles.whatWeEatColumn}>
					{fullDayAdventures.items.map((item, i) => (
						<div className={styles.whatWeEatItem} key={i}>
							<div className={styles.whatWeEatItemLeft}>
								<span className={styles.whatWeEatItemTitleBrand}>{item.title}</span>
								{item.description && (
									<span className={styles.whatWeEatItemDescription}>{item.description}</span>
								)}
							</div>
							<div className={styles.whatWeEatItemRight}>
								<span className={styles.whatWeEatItemPrice}>{item.priceText}</span>
							</div>
						</div>
					))}
				</div>
				<div className={styles.whatWeEatColumn} />
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
					{guides.items.map((item, i) => (
						<PoezdkiGuideRow item={item} key={i} />
					))}
				</div>
				<div className={styles.whatWeEatColumn} />
			</div>
		</>
	);
};

const DlyaDeteyBlockBaikal: FC = () => {
	const { paragraph, intro, listItems } = DLYA_DETEY_BAIKAL;
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

const ConceptStoreBlockBaikal: FC = () => {
	const { paragraph, ctaText } = CONCEPT_STORE_BAIKAL;
	return (
		<>
			<p className={styles.travelsLeftText}>{paragraph}</p>
			<p className={styles.additionalPersonNote}>{ctaText}</p>
		</>
	);
};

export const PricesPageBaikal: FC = () => {
	return (
		<main className={styles.content} id="vsibirzasvoyschet-baikal">
			<PageHeading>В&nbsp;СИБИРЬ ЗА&nbsp;СВОЙ СЧЁТ&nbsp;&mdash; БАЙКАЛ</PageHeading>
			<br />
			<AccordionSection title="ПРОЖИВАНИЕ">
				<h3 className={styles.subsectionHeading}>РАЗМЕЩЕНИЕ В ГЭРАХ</h3>
				<ProzhivanieGrid items={PROZHIVANIE_BAIKAL_GERAH} />
				<h3 className={styles.subsectionHeading}>РАЗМЕЩЕНИЕ В КУБИКАХ</h3>
				<ProzhivanieGrid items={PROZHIVANIE_BAIKAL_CUBES} />
				<p className={styles.additionalPersonNote}>{PROZHIVANIE_BAIKAL_ADDITIONAL_PERSON}</p>
				<h3 className={styles.subsectionHeading}>НАША ПРОГРАММА:</h3>
				<ul className={styles.list}>
					{PROZHIVANIE_BAIKAL_PROGRAM.map((item, i) => (
						<li key={i} className={styles.listItem}>
							{item}
						</li>
					))}
				</ul>
			</AccordionSection>
			<AccordionSection title={NA_BAZE_BAIKAL.title}>
				<NaBazeBlock />
			</AccordionSection>
			<AccordionSection title={WHAT_WE_DRINK.title}>
				<></>
			</AccordionSection>
			<AccordionSection title={COMFORT_BAIKAL.title}>
				<ComfortBlockBaikal />
			</AccordionSection>
			<AccordionSection title={BLAGODAT_BAIKAL.title}>
				<BlagodatBlockBaikal />
			</AccordionSection>
			<AccordionSection title={ZOZH_ZOM_BAIKAL.title}>
				<ZozhZomBlockBaikal />
			</AccordionSection>
			<AccordionSection title={POEZDKI_BAIKAL.title}>
				<PoezdkiBlockBaikal />
			</AccordionSection>
			<AccordionSection title={PUTESHESTVIYA_BAIKAL.title}>
				<PuteshestviyaBlockBaikal />
			</AccordionSection>
			<AccordionSection title={DLYA_DETEY_BAIKAL.title}>
				<DlyaDeteyBlockBaikal />
			</AccordionSection>
			<AccordionSection title={CONCEPT_STORE_BAIKAL.title}>
				<ConceptStoreBlockBaikal />
			</AccordionSection>
		</main>
	);
};
