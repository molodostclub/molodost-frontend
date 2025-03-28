import { FC } from 'react';

import { uikit, indent } from '@styles';
import { formatPriceWithSign } from '@utils';
import { Description, PageHeading, PriceTableHeader, PriceTableRow, priceTable } from '@uikit';
import cn from 'classnames';

import * as styles from './CarRent.css';
import { AIRPORT_TRANSFER_PRICE, CARS, FROM_AIRPORT_TRANSFER_PRICE, BUSINESS_TRANSFER_PRICE_ADULT, BUSINESS_TRANSFER_PRICE_CHILD } from './CarRent.constants';

const PriceTable: FC = () => (
	<div className={styles.tableContainer}>
		<div className={priceTable.table}>
			<PriceTableHeader>
				<div className={priceTable.cell}>час</div>
				<div className={priceTable.cell}>сутки</div>
			</PriceTableHeader>
			{CARS.map(({ name, pricePerDay, pricePerHour }, i) => (
				<PriceTableRow key={i} title={name}>
					<div className={priceTable.cell}>
						<div className={priceTable.accent}>{formatPriceWithSign(pricePerHour)}</div>
						<div>+ заправка</div>
					</div>
					<div className={priceTable.cell}>
						<div className={priceTable.accent}>{formatPriceWithSign(pricePerDay)}</div>
						<div>+ заправка</div>
					</div>
				</PriceTableRow>
			))}
			<PriceTableRow title="Встреча в аэропорту" titleCell="titleCellLarge">
				<div className={priceTable.cell}>
					<span className={priceTable.accent}>{formatPriceWithSign(FROM_AIRPORT_TRANSFER_PRICE)}</span>
					<span className={uikit.scopeMobile}> / чел.</span>
					<span className={uikit.spanDesktop}> / человек</span>
				</div>
			</PriceTableRow>
			<PriceTableRow title="Трансфер в Аэропорт" titleCell="titleCellLarge">
				<div className={priceTable.cell}>
					<span className={priceTable.accent}>{formatPriceWithSign(AIRPORT_TRANSFER_PRICE)}</span>
					<span className={uikit.scopeMobile}> / чел.</span>
					<span className={uikit.spanDesktop}> / человек</span>
				</div>
			</PriceTableRow>
			<PriceTableRow title="Бизнес зал прилет (взрослый/ребенок до 12 лет) *с учетом нашей комиссии" titleCell="titleCellLarge">
				<div className={priceTable.cell}>
					<span className={priceTable.accent}>
						{formatPriceWithSign(BUSINESS_TRANSFER_PRICE_ADULT)}/{formatPriceWithSign(BUSINESS_TRANSFER_PRICE_CHILD)}
					</span>
					<span className={uikit.spanDesktop}> / человек</span>
				</div>
			</PriceTableRow>
		</div>
	</div>
);

export const CarRent: FC = () => {
	return (
		<main className={styles.content} id="avtoprokat">
			<PageHeading>автопрокат «бывалый рейнджер»</PageHeading>
			<div className={cn(indent.tablet_mt_15, indent.mt_6)}>
				<p className={styles.attention}>
					Цены актуальны <span className={styles.attentionRed}>до 31 марта 2025 года</span>.
				</p>
			</div>
			<div className={styles.grid}>
				<div className={styles.textContent.top}>
					{/* <BrandLink linkTo='/' button='left'>динамика мечты</BrandLink> */}
					<Description>
						Если вам хочется что-нибудь забронировать заранее — забронируйте автомобиль, и вы не будете ни от кого и ни от чего зависеть.
						<br />
						<br />
						Почти все наши поездки можно сделать самостоятельно, воспользовавшись нашим автопрокатом.
						<br />
						<br />
						Мы с удовольствием расскажем, как проехать и где по пути стоит задержаться. Карту маршрутов и описание местности вы можете получить в нашем турбюро.
						<br />
						<br />
						Минимальный срок бронирования машины заранее — 3 дня.
					</Description>
				</div>
				<PriceTable />
				<div className={styles.textContent.bottom}>
					<Description>
						На Алтае работает Яндекс.Такси, а стоимость поездок и длительность ожидания смогут Вас по-настоящему удивить.
						<br />
						<br />
						Также мы можем связать Вас с нашими друзьями, которые дают в аренду машины непремиальной категории.
					</Description>
				</div>
			</div>
		</main>
	);
};
