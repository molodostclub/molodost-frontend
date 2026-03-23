import { FC, Fragment } from 'react';

import type { LegendItemData } from './legend.constants';
import * as styles from './LegendListItem.css';
import cn from 'classnames';

type Props = LegendItemData;

export const LegendListItem: FC<Props> = ({ number, label, gridColumn, gridRow }) => {
	const isWideBadge = number >= 10;
	const lines = label.split('\n');

	return (
		<li
			className={styles.item}
			style={{
				gridColumn,
				gridRow,
			}}
		>
			<div className={cn(styles.badge, isWideBadge && styles.badgeWide)}>
				<span className={styles.badgeNumber}>{number}</span>
			</div>
			<span className={styles.label}>
				{lines.map((line, i) => (
					<Fragment key={i}>
						{i > 0 ? <br /> : null}
						{line}
					</Fragment>
				))}
			</span>
		</li>
	);
};
