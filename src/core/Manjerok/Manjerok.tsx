import { FC } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

import { BaseItems } from '@core/Home/OurBase/BaseItems';
import { Entertainment } from '@core/Home/Entertainment';
import { HowWeTrip } from '@core/HowWeTrip';
import { WhatWeEat } from '@core/Home/WhatWeEat';
import { WhereDoWeLive } from '@core/Home/WhereDoWeLive';
import { useIsTablet } from '@shared/hooks';
import { CenteredBrandQuote } from '@shared/components';
import { HousesSplit, TripsSplit } from '@/utils';
import * as styles from './Manjerok.css';

type Props = {
	houses: HousesSplit;
	trips: TripsSplit;
};

export const Manjerok: FC<Props> = ({ houses, trips }) => {
	const isTablet = useIsTablet();
	const [emblaRef] = useEmblaCarousel({
		align: 'start',
		dragFree: false,
		slidesToScroll: 1,
		containScroll: 'trimSnaps',
		skipSnaps: true,
	});

	return (
		<>
			<div className={styles.content}>
				<blockquote className={styles.quoteBlock}>
					<p className={styles.quoteText}>
						Первое правило «Молодости»:
						<br />
						<span className={styles.quoteLineBold}>План на&nbsp;завтра вы узнаете завтра</span>
						<br />
						полностью соответствует
						<br />
						второму закону
						<br />
						термодинамики: <span className={styles.quoteLineBold}>энтропия</span>
						<br />
						<span className={styles.quoteLineBold}>в&nbsp;замкнутых системах возрастает</span>
					</p>
				</blockquote>

				<section className={styles.ourBaseSection}>
					<h2 className={styles.sectionTitle}>Наша база</h2>
					<div className={styles.ourBaseWrapper}>
						<p className={styles.ourBaseDescription}>Центром нашей экосистемы является культурная турбаза &laquo;Молодость&raquo;, которая находится всего в&nbsp;15&nbsp;минутах езды от&nbsp;аэропорта Горно-Алтайск на&nbsp;берегу реки Катуни. На&nbsp;территории турбазы расположены:</p>
						<div className={styles.ourBaseFeatures}>
							<div className={styles.ourBaseFeatureItem}>
								<Image src="/icons/our-base-air.svg" alt="" width={99} height={79} />
								<span className={styles.ourBaseFeatureTitle}>
									15&nbsp;минут{'\n'}от&nbsp;аэропорта{'\n'}Горно-Алтайска
								</span>
							</div>
							<div className={styles.ourBaseFeatureItem}>
								<Image src="/icons/our-base-river.svg" alt="" width={90} height={79} />
								<span className={styles.ourBaseFeatureTitle}>На&nbsp;берегу{'\n'}реки Катунь</span>
							</div>
							<div className={styles.ourBaseFeatureItem}>
								<Image src="/icons/our-base-route.svg" alt="" width={99} height={79} />
								<span className={styles.ourBaseFeatureTitle}>От&nbsp;нас удобно{'\n'}строить все маршруты</span>
							</div>
							<div className={styles.ourBaseFeatureItem}>
								<Image src="/icons/our-base-beauty.svg" alt="" width={99} height={79} />
								<span className={styles.ourBaseFeatureTitle}>
									У&nbsp;нас есть 4&nbsp;гостевых{'\n'}дома в&nbsp;самых красивых{'\n'}местах
								</span>
							</div>
						</div>
					</div>
					{!isTablet && (
						<div className={styles.placeListMobile} ref={emblaRef}>
							<div className={styles.placeListContainer}>
								<BaseItems />
							</div>
						</div>
					)}
					{isTablet && (
						<div className={styles.placeListTablet}>
							<BaseItems />
						</div>
					)}
				</section>
				<br />
				<br />
				<br />
				<CenteredBrandQuote
					noMarginBottom={true}
					quote={<p>Тоска по&nbsp;&laquo;Молодости&raquo; одолела сразу по&nbsp;возвращении. На&nbsp;редкость чудесное, тонко и&nbsp;умно устроенное пространство! Не&nbsp;сомневаюсь, что оно будет распухать и&nbsp;улыбаться&hellip;</p>}
					attribution={
						<>
							Татьяна Черниговская
							<br />
							(мыслитель)
						</>
					}
				/>
				<br />
				<br />
				<WhereDoWeLive houses={houses} />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<WhatWeEat title="что мы едим" text="Все основные продукты нам поставляют местные фермеры, в полях Кош-Агача пасутся наши собственные бараны, а в огороде, где в детстве гулял Василий Шукшин, мы выращиваем свой картофель." />
			</div>

			<div className={styles.travelBlockWrapper}>
				<div className={styles.travelBlock}>
					<div className={styles.travelBlockLeft} />
					<div className={styles.travelBlockCenter} />
					<div className={styles.travelBlockRight} />
				</div>
			</div>

			<HowWeTrip trips={trips} variant="manjerok" />

			<div className={styles.quoteBlockWrapper}>
				<CenteredBrandQuote noMarginBottom quote={<p>&laquo;Молодость&raquo; это как проход через шкаф в&nbsp;страну Нарнию, которую мне напоминает волшебный Алтай</p>} attribution="Константин Крюков (звезда)" />
			</div>

			<div className={styles.entertainmentSection}>
				<Entertainment variant="manjerok" compactTop />
			</div>
		</>
	);
};
