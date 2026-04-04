import { FC } from 'react';
import Link from 'next/link';

import { AccordionGraphic } from '@shared/components/AccordionSection';
import { BaikalTripCards } from '@/core/Baikal/BaikalTripCards';
import { TripsSplit } from '@/utils';
import { Description, SectionHeading } from '@/uikit';
import { pageContainer, pageSection } from '@/styles/uikit.css';
import cn from 'classnames';

import { TripsItems } from './TripsItems';
import * as styles from './HowWeTrip.css';

type Props = {
	trips: TripsSplit;
	variant?: 'manjerok' | 'baikal';
	/** Вступление под заголовком «Как мы путешествуем» (только `variant="baikal"`) */
	introText?: string;
};

export const HowWeTrip: FC<Props> = ({ trips: { allDay, notAllDay }, variant, introText }) => {
	const isBaikal = variant === 'baikal';
	const isManjerokPage = variant === 'manjerok';
	const isManjerokLayout = variant === 'manjerok' || variant === 'baikal';
	const containerClass = isBaikal
		? styles.headingsBlockBaikal
		: isManjerokLayout
			? styles.headingsBlockManjerok
			: pageContainer;
	const tripsWrapperClass = isBaikal ? styles.tripsBlockBaikal : styles.tripsBlockManjerok;
	const carouselClass = cn(styles.carouselWrapper, isManjerokLayout && styles.carouselWrapperManjerok);
	const tripCardsOuterClass = isBaikal ? styles.baikalCardsShell : carouselClass;
	const TripCards = isBaikal ? BaikalTripCards : TripsItems;

	return (
		<>
			{isBaikal && introText ? (
				<div className={styles.baikalHowWeTripIntroSection}>
					<div className={tripsWrapperClass}>
						<div className={containerClass}>
							<div className={styles.contentWrapperBaikalIntro}>
								<SectionHeading>Как мы путешествуем</SectionHeading>
							</div>
							<Description className={styles.baikalIntro}>{introText}</Description>
						</div>
					</div>
				</div>
			) : null}

			<div className={pageSection}>
				{isManjerokLayout ? (
					<div
						className={cn(
							tripsWrapperClass,
							isManjerokPage && styles.manjerokFirstTripsAboveTravel,
						)}
					>
						<div className={containerClass}>
							{isManjerokPage ? (
								<div className={styles.manjerokTravelHeroHeading}>
									<div className={styles.manjerokTravelHeroRow}>
										<h2 className={styles.manjerokTravelHeroTitle}>КАК МЫ ПУТЕШЕСТВУЕМ</h2>
										<Link
											href="/kak-my-puteshevstvuem"
											className={styles.manjerokTravelHeroMoreLink}
											prefetch={false}
										>
											<AccordionGraphic
												layout="single"
												inline
												titleClassName={styles.manjerokTravelHeroMoreLabel}
											>
												Подробнее
											</AccordionGraphic>
										</Link>
									</div>
								</div>
							) : null}
							<div className={styles.contentWrapperManjerok}>
								<SectionHeading accented>ПОЕЗДКИ НА ЦЕЛЫЙ ДЕНЬ</SectionHeading>
							</div>
						</div>
						<div className={tripCardsOuterClass}>
							<TripCards
								trips={allDay}
								listClassName={isManjerokLayout ? styles.carouselListNoPadding : undefined}
								carouselClassName={isManjerokLayout ? styles.carouselNoMargin : undefined}
							/>
						</div>
					</div>
				) : (
					<>
						<div className={containerClass}>
							<div className={styles.contentWrapper}>
								<SectionHeading>Как мы путешествуем</SectionHeading>
							</div>
							<div className={styles.contentWrapper}>
								<SectionHeading accented>ПОЕЗДКИ НА ЦЕЛЫЙ ДЕНЬ</SectionHeading>
							</div>
						</div>
						<div className={carouselClass}>
							<TripCards
								trips={allDay}
								listClassName={isManjerokLayout ? styles.carouselListNoPadding : undefined}
								carouselClassName={isManjerokLayout ? styles.carouselNoMargin : undefined}
							/>
						</div>
					</>
				)}
			</div>

			<div className={pageSection}>
				{isManjerokLayout ? (
					<div className={tripsWrapperClass}>
						<div className={containerClass}>
							<div className={styles.contentWrapperManjerok}>
								<SectionHeading accented>
									{isBaikal ? 'ПОЕЗДКИ НА ПОЛ ДНЯ' : 'ПОЕЗДКИ на полдня'}
								</SectionHeading>
							</div>
						</div>
						<div className={tripCardsOuterClass}>
							<TripCards
								trips={notAllDay}
								listClassName={isManjerokLayout ? styles.carouselListNoPadding : undefined}
								carouselClassName={isManjerokLayout ? styles.carouselNoMargin : undefined}
							/>
						</div>
					</div>
				) : (
					<>
						<div className={containerClass}>
							<div className={styles.contentWrapper}>
								<SectionHeading accented>ПОЕЗДКИ на полдня</SectionHeading>
							</div>
						</div>
						<div className={tripCardsOuterClass}>
							<TripCards
								trips={notAllDay}
								listClassName={isManjerokLayout ? styles.carouselListNoPadding : undefined}
								carouselClassName={isManjerokLayout ? styles.carouselNoMargin : undefined}
							/>
						</div>
					</>
				)}
			</div>
		</>
	);
};
