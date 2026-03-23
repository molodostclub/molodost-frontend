import { FC } from 'react';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import type { TripModel, TripPriceFooterRow } from '@/shared/types';

import 'swiper/css';
import 'swiper/css/navigation';

import * as styles from './BaikalTripCards.css';

const ChevronPrev = () => (
	<svg className={styles.navIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
		<path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

const ChevronNext = () => (
	<svg className={styles.navIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
		<path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

type Props = {
	trip: TripModel;
};

function BaikalPriceFooterRows({ rows }: { rows: TripPriceFooterRow[] }) {
	return (
		<div className={styles.priceFooterRows}>
			{rows.map((row, i) => {
				if (row.variant === 'plain') {
					return (
						<p key={i} className={styles.priceFooterPlain}>
							{row.text}
						</p>
					);
				}
				if (row.variant === 'twoCols') {
					return (
						<div key={i} className={styles.priceFooterTwoCols}>
							<div className={styles.priceFooterColStart}>
								<span className={styles.priceFooterMain}>{row.left}</span>
								{row.leftNote ? <span className={styles.priceFooterNoteLight}>{row.leftNote}</span> : null}
							</div>
							<div className={styles.priceFooterColEnd}>
								<span className={styles.priceFooterMain}>{row.right}</span>
								{row.rightNote ? <span className={styles.priceFooterNoteLight}>{row.rightNote}</span> : null}
							</div>
						</div>
					);
				}
				return (
					<div key={i} className={styles.priceFooterThreeCols}>
						<div className={styles.priceFooterThreeCellLeft}>
							<span className={styles.priceFooterMain}>{row.left}</span>
							{row.leftNote ? <span className={styles.priceFooterNoteLight}>{row.leftNote}</span> : null}
						</div>
						<div className={styles.priceFooterThreeCellMid}>
							<span className={styles.priceFooterMain}>{row.mid}</span>
							{row.midNote ? <span className={styles.priceFooterNoteLight}>{row.midNote}</span> : null}
						</div>
						<div className={styles.priceFooterThreeCellRight}>
							<span className={styles.priceFooterMain}>{row.right}</span>
							{row.rightNote ? (
								<span
									className={
										row.rightNoteAccent ? styles.priceFooterNoteAccent : styles.priceFooterNoteLight
									}
								>
									{row.rightNote}
								</span>
							) : null}
						</div>
					</div>
				);
			})}
		</div>
	);
}

export const BaikalTripCard: FC<Props> = ({ trip: { id, attributes } }) => {
	const rawPaths =
		attributes.staticCoverPaths && attributes.staticCoverPaths.length > 0
			? attributes.staticCoverPaths
			: attributes.staticCoverPath
				? [attributes.staticCoverPath]
				: [];
	const paths = rawPaths.filter((p): p is string => typeof p === 'string' && p.length > 0);

	const multi = paths.length > 1;

	/* Кнопки ДО Swiper: модуль Navigation ищет селекторы через document — элементы уже в DOM */
	const navId = String(id);
	const navSelectors =
		multi
			? {
					prevEl: `[data-baikal-swiper-prev="${navId}"]`,
					nextEl: `[data-baikal-swiper-next="${navId}"]`,
				}
			: false;

	const hasSplitFooter = Boolean(attributes.footerDuration || attributes.footerPrice);
	const hasStructuredFooter = Boolean(attributes.priceFooterRows?.length);
	const hasLegacyFooterLines = Boolean(attributes.priceFooterLines?.length);
	const hasLinesFooter = hasStructuredFooter || hasLegacyFooterLines;
	const hasSimpleDuration = Boolean(attributes.durationText) && !hasSplitFooter && !hasLinesFooter;

	const hasIntroBlock = Boolean(
		attributes.subtitle || attributes.titleNote || attributes.subtitleClosing,
	);

	return (
		<div className={styles.card}>
			{paths.length > 0 ? (
				<>
					<button
						type="button"
						data-baikal-swiper-prev={navId}
						className={multi ? styles.navPrev : styles.navHidden}
						aria-label="Предыдущее фото"
					>
						<ChevronPrev />
					</button>
					<button
						type="button"
						data-baikal-swiper-next={navId}
						className={multi ? styles.navNext : styles.navHidden}
						aria-label="Следующее фото"
					>
						<ChevronNext />
					</button>
					<Swiper
						className={styles.swiperRoot}
						modules={multi ? [Navigation] : []}
						slidesPerView={1}
						spaceBetween={0}
						navigation={navSelectors}
						loop={false}
					>
						{paths.map((src, i) => (
							<SwiperSlide key={`${id}-${i}`}>
								<div className={styles.slideImageWrap}>
									{/* next/image + Swiper часто даёт рантайм-ошибки; статика из /public — обычный img */}
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img src={src} alt="" className={styles.slideImage} />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</>
			) : null}

			<div className={styles.gradient} aria-hidden />

			<div className={styles.content}>
				<div className={styles.contentInteractive}>
					<h3 className={styles.title}>{attributes.title}</h3>
					{attributes.titleNote && attributes.subtitle ? (
						<div className={styles.titleNoteRow}>
							<p className={styles.titleNote}>{attributes.titleNote}</p>
							<p className={styles.descriptionColumn}>{attributes.subtitle}</p>
						</div>
					) : attributes.subtitle ? (
						<p className={styles.description}>{attributes.subtitle}</p>
					) : attributes.titleNote ? (
						<p className={styles.titleNote}>{attributes.titleNote}</p>
					) : null}
					{attributes.subtitleClosing ? (
						<p className={styles.subtitleClosing}>{attributes.subtitleClosing}</p>
					) : null}

					{hasLinesFooter ? (
						<>
							<div className={cn(styles.line, !hasIntroBlock && styles.lineAfterTitleOnly)} />
							{hasStructuredFooter ? (
								<BaikalPriceFooterRows rows={attributes.priceFooterRows!} />
							) : (
								<div className={styles.priceStack}>
									{attributes.priceFooterLines!.map((line, i) => (
										<span key={i} className={styles.priceStackLine}>
											{line}
										</span>
									))}
								</div>
							)}
						</>
					) : hasSplitFooter ? (
						<>
							<div className={cn(styles.line, !hasIntroBlock && styles.lineAfterTitleOnly)} />
							<div className={styles.priceRow}>
								<span className={styles.priceText}>{attributes.footerDuration ?? ''}</span>
								<span className={styles.priceText}>{attributes.footerPrice ?? ''}</span>
							</div>
						</>
					) : hasSimpleDuration ? (
						<>
							<div className={cn(styles.line, !hasIntroBlock && styles.lineAfterTitleOnly)} />
							<div className={styles.priceRow}>
								<span className={styles.priceText}>{attributes.durationText}</span>
								<span />
							</div>
						</>
					) : null}
				</div>
			</div>
		</div>
	);
};
