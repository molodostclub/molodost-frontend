/* eslint-disable @next/next/no-sync-scripts */
import { FC, useState } from 'react';

import { Description, PageHeading, SectionHeading } from '@/uikit';
import { HousesSplit, formatPriceWithSign } from '@/utils';
import { ContactsBox } from '@/shared/components';
import { Housing } from './Housing/Housing';
import * as styles from './WhereWeLive.css';
import { Modal } from '@/shared/components/Modal';
import { ContactForm } from '../ContactForm';
import Link from 'next/link';

const PricingInfo: FC = () => (
	<>
		<div className={styles.pricingInfoContent}>
			<div className={styles.border} />
			<div className={styles.pricingInfoContainer}>
				<div>
					<p className={styles.priceText}>{formatPriceWithSign(6000)}</p>
					<p className={styles.pricingInfoText}>доплата за&nbsp;взрослого</p>
				</div>
				<div>
					<p className={styles.priceText}>{formatPriceWithSign(4000)}</p>
					<p className={styles.pricingInfoText}>доплата за&nbsp;ребенка (от&nbsp;5 до&nbsp;12&nbsp;лет)</p>
				</div>
			</div>
			<div className={styles.border} />
		</div>
	</>
);

type Props = HousesSplit;

export const WhereWeLive: FC<Props> = ({ inHouse, individual }) => {
	const [isOpenModal, setOpenModal] = useState<boolean>(false);

	// Фильтруем номера (individual), оставляя только те, где isMars === false
	const filteredIndividual = individual.filter((house) => !house.attributes.isMars && !house.attributes.isBaikal);

	// Фильтруем дома (inHouse), оставляя только те, где isMars === false
	const filteredInHouse = inHouse.filter((house) => !house.attributes.isMars && !house.attributes.isBaikal);

	const openModal = () => setOpenModal(true);
	const closeModal = () => setOpenModal(false);

	// options for select
	const getOptions = () => {
		return [...filteredInHouse, ...filteredIndividual] // Используем отфильтрованные массивы
			.sort((a, b) => a.attributes.basePrice - b.attributes.basePrice)
			.map((item) => {
				const {
					attributes: { title, basePrice },
				} = item;
				const val = `${title.trim()}.\n От ${formatPriceWithSign(basePrice)} / ночь`;

				return {
					value: val,
					label: val,
				};
			});
	};

	return (
		<>
			<Modal isOpen={isOpenModal} closeModal={closeModal}>
				<ContactForm options={getOptions()} />
			</Modal>
			<main className={styles.main}>
				<div className={styles.content}>
					<div className={styles.gridTop}>
						<div className={styles.textTop}>
							<div className={styles.titleWrapper}>
								<PageHeading>где живем?</PageHeading>
							</div>
							<Description>
								В&nbsp;самом центре Алтая, на&nbsp;Культурной Турбазе &laquo;Молодость&raquo;, которая находится всего в&nbsp;15&nbsp;минутах от&nbsp;аэропорта. С&nbsp;1958 года тут работала турбаза под названием &laquo;Юность&raquo;.
								<br />
								<br />
								Теперь здесь&nbsp;&mdash; реконструированные дома, в&nbsp;которых и&nbsp;деревенский русский минимализм, и&nbsp;немного экобрутализма.
							</Description>
							<div className={styles.priceDesktop}>
								<PricingInfo />
							</div>
						</div>
						<div className={styles.noteBlock}>
							<p className={styles.accentText} style={{ marginBottom: 30 }}>
								Бронирование проживания на турбазе «Молодость» на Алтае
							</p>
							<div className={styles.contacts}>
								<Link className={styles.ctaBtn} href="/booking">
									<button className={styles.ctaBtn}>Забронировать</button>
								</Link>
							</div>
							<p className={styles.accentText} style={{ marginBottom: 30 }}>
								Или свяжитесь с&nbsp;нами по&nbsp;номеру
							</p>
							<div className={styles.contacts}>
								<ContactsBox type="small" />
							</div>
							<div className={styles.priceMobile}>
								<PricingInfo />
							</div>
						</div>
					</div>
					<br />
					<br />
					<Description>ИЮЛЬ - АВГУСТ ВЫСОКИЙ СЕЗОН</Description>

					<h2 className={styles.heading}>размещение в&nbsp;номерах</h2>
				</div>
				<div className={styles.housingBlock}>
					{filteredIndividual.map((house) => (
						<Housing house={house} key={house.id} />
					))}
				</div>
				<div className={styles.content}>
					<h2 className={styles.heading}>размещение в&nbsp;домах</h2>
				</div>
				<div className={styles.housingBlock}>
					{filteredInHouse.map((house) => (
						<Housing house={house} key={house.id} />
					))}
				</div>
				<div className={styles.content}>
					<Description>
						Комфортные путешествия на&nbsp;Алтай действительно стоят недешево. Вы&nbsp;можете убедиться в&nbsp;этом, сравнив наши цены с&nbsp;другими отелями, например: номер в&nbsp;отеле &laquo;Клевер&raquo; стоит от&nbsp;25&nbsp;000&nbsp;₽ , в&nbsp;&laquo;Алтай
						Резорт&raquo;&nbsp;&mdash; от&nbsp;29&nbsp;200&nbsp;₽, а&nbsp;&laquo;Вилладж Телецкое&raquo; примут вас минимум за&nbsp;95&nbsp;220&nbsp;₽
					</Description>
				</div>
			</main>
		</>
	);
};
