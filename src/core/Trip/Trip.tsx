import { FC } from 'react';

import * as styles from './Trip.css';
import { AttentionNote, BrandLink, Description, PriceTableRow, SectionHeading, priceTable } from '@uikit';
import { formatPriceWithSign } from '@utils';
import { TripModel } from '@/shared/types';

export const Trip: FC<{ trip: TripModel }> = ({ trip: { attributes: trip } }) => {
	return (
		<div className={styles.content}>
			{trip.isAllDay && <SectionHeading accented>Поездки на целый день</SectionHeading>}
			<div className={styles.headingWrapper}>
				<SectionHeading>{trip.title}</SectionHeading>
			</div>

			<div className={styles.grid}>
				<div className={styles.pricing}>
					<PriceTableRow title={trip.isAllDay ? 'Весь день' : trip.durationText}>
						{trip.priceAdult && (
							<div className={priceTable.cell}>
								<div>Взрослый</div>
								<div className={priceTable.accent}>{formatPriceWithSign(trip.priceAdult)}</div>
							</div>
						)}
						{trip.priceChild && (
							<div className={priceTable.cell}>
								<div>Ребенок</div>
								<div className={priceTable.accent}>{formatPriceWithSign(trip.priceChild)}</div>
							</div>
						)}
					</PriceTableRow>
				</div>

				<div className={styles.text}>
					<Description pre>{trip.description}</Description>
				</div>

				{!!trip.notes.length && (
					<ul className={styles.attentionList}>
						{trip.notes.map((item) => {
							return (
								<li key={item.id} className={styles.attentionListItem}>
									<AttentionNote>{item.text}</AttentionNote>
								</li>
							);
						})}
					</ul>
				)}
			</div>

			<div className={styles.backLink}>
				<BrandLink linkTo="/kak-my-puteshevstvuem" direction="left">
					Все путешествия
				</BrandLink>
			</div>
		</div>
	);
};
