import { FC } from 'react';

import { uikit, indent } from '@styles';
import { formatPriceWithSign } from '@utils';
import { Description, PageHeading, PriceTableHeader, PriceTableRow, priceTable } from '@uikit';
import cn from 'classnames';

import * as styles from './CarRent.css';
import * as stylesPrice from '../PricesPage/PricesPage.css';
import { AIRPORT_TRANSFER_PRICE, CARS, FROM_AIRPORT_TRANSFER_PRICE, BUSINESS_TRANSFER_PRICE_ADULT, BUSINESS_TRANSFER_PRICE_CHILD } from './CarRent.constants';
import { AUTO_RENT } from '../PricesPage/PricesPage.constants';

const PriceTable: FC = () => (
	<div className={styles.tableContainer}>
		{AUTO_RENT.map((item) => (
			<>
				<div className={stylesPrice.priceRowSmall}>
					{!!item.subtitle ? (
						<p className={stylesPrice.priceTitle}>
							{item.title} <br />
							<span className={stylesPrice.priceSubtitle}>{item.subtitle}</span>
						</p>
					) : (
						<p className={stylesPrice.priceTitle}>{item.title}</p>
					)}
					<div>
						<p className={stylesPrice.priceNum}>{formatPriceWithSign(item.price)} +&nbsp;заправка</p>
						{!!item.note ? <p className={stylesPrice.priceNote}>{item.note}</p> : ''}
					</div>
				</div>
				<br />
				<br />
			</>
		))}
		<div>
			<p className={stylesPrice.sideLightText}>
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
);

export const CarRent: FC = () => {
	return (
		<main className={styles.content} id="avtoprokat">
			<PageHeading>автопрокат «бывалый рейнджер»</PageHeading>
			<div className={styles.grid}>
				<div className={styles.textContent.top}>
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
