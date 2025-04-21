import { FC } from 'react';

import { Description, PageHeading, PriceTableHeader, PriceTableRow, SectionHeading, priceTable } from '@uikit';
import { formatPriceWithSign } from '@utils';
import * as styles from './MovingPricing.css';
import { pageContainer, pageSection } from '@/styles/uikit.css';

export const MovingPricing: FC = () => (
	<div className={pageSection}>
		<div className={pageContainer}>
			<div className={styles.movementTitle}>
				<SectionHeading accented>Групповые хайкинги</SectionHeading>
			</div>
			<div className={styles.tableWrapper}>
				<div className={styles.tableContainer}>
					<div className={priceTable.table}>
						<PriceTableRow title="Групповой хайкинг по Хоббитании">
							<div className={priceTable.cell}>2-3&nbsp;ч.</div>
							<div className={priceTable.cellAccent}>{formatPriceWithSign(3_000)}</div>
						</PriceTableRow>
						<PriceTableRow title="Групповой хайкинг на гору Черепан">
							<div className={priceTable.cell}>3-4&nbsp;ч.</div>
							<div className={priceTable.cellAccent}>{formatPriceWithSign(3_000)}</div>
						</PriceTableRow>
						<PriceTableRow title="КОННЫЕ ПРОГУЛКИ">
							<div className={priceTable.cell}></div>
							<div className={priceTable.cellAccent}>от&nbsp;{formatPriceWithSign(3_000)}</div>
						</PriceTableRow>
						<PriceTableRow title="РАФТЫ">
							<div className={priceTable.cell}></div>
							<div className={priceTable.cellAccent}>от&nbsp;{formatPriceWithSign(5_000)}</div>
						</PriceTableRow>
						<PriceTableRow title="МОТОРНЫЕ ЛОДКИ ПО РЕКЕ">
							<div className={priceTable.cell}></div>
							<div className={priceTable.cellAccent}>от&nbsp;{formatPriceWithSign(5_000)}</div>
						</PriceTableRow>
						<PriceTableRow title="СНЕГОХОДЫ">
							<div className={priceTable.cell}></div>
							<div className={priceTable.accent}>от&nbsp;{formatPriceWithSign(5_000)}</div>
						</PriceTableRow>
					</div>
				</div>
				<div className={styles.tableContainer}>
					<div className={priceTable.table}>
						<PriceTableRow title="Групповой хайкинг на гору Бабырган. Группы от&nbsp;5&nbsp;человек">
							<div className={priceTable.cell}>5-6&nbsp;ч.</div>
							<div className={priceTable.cell}>
								<div className={priceTable.accent}>{formatPriceWithSign(5_000)}</div>
								на человека
							</div>
						</PriceTableRow>
						<PriceTableRow title="Групповой хайкинг на&nbsp;гору Сарлык. Группы от 5&nbsp;человек">
							<div className={priceTable.cell}>5-6&nbsp;ч.</div>
							<div className={priceTable.cell}>
								<div className={priceTable.accent}>{formatPriceWithSign(8_000)}&nbsp;</div>
								на&nbsp;человека
							</div>
						</PriceTableRow>
						<PriceTableRow title="ПОЕЗДКИ НА&nbsp;БОЛОТОХОДАХ И&nbsp;КВАДРОЦИКЛАХ">
							<div className={priceTable.cell}></div>
							<div className={priceTable.accent}>от&nbsp;{formatPriceWithSign(10_000)}&nbsp;</div>
						</PriceTableRow>

						<PriceTableRow title="ВЕРТОЛЕТНЫЕ ТУРЫ">
							<div className={priceTable.cell}></div>
							<div className={priceTable.cell}>
								<div className={priceTable.accent}>от&nbsp;{formatPriceWithSign(150_000)}&nbsp;</div>
								(при полной загрузке вертолета)
							</div>
						</PriceTableRow>
					</div>
				</div>
			</div>
		</div>
	</div>
);
