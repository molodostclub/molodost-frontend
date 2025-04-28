import { FC, useState } from 'react';

import { uikit } from '@styles';

import { Description, SectionHeading } from '@uikit';
import * as styles from './HowToGet.css';
import { CardInfo, ContactsBox } from '@/shared/components';
import { Modal } from '@/shared/components/Modal';
import { ContactForm } from '../ContactForm';
import { HousesSplit, formatPriceWithSign } from '@/utils';
import Link from 'next/link';

type Props = HousesSplit;

export const HowToGet: FC<Props> = ({ inHouse, individual }) => {
	const [isOpenModal, setOpenModal] = useState<boolean>(false);

	const openModal = () => setOpenModal(true);
	const closeModal = () => setOpenModal(false);

	// options for select
	const getOptions = () => {
		return [...inHouse, ...individual]
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
			<div className={styles.content}>
				<div style={{ marginBottom: 60, maxWidth: 300 }}>
					<p className={styles.accentText} style={{ marginBottom: 30 }}>
						Чтобы забронировать проживание на Алтае или Бфйкале, свяжитесь с&nbsp;нами по&nbsp;номеру <Link href="tel:79647002112">+7&nbsp;964&nbsp;700&nbsp;21&nbsp;12</Link>
					</p>

					<div className={styles.contacts}>
						<ContactsBox type="small" />
					</div>

					{/* <button onClick={openModal} className={styles.ctaBtn}>
            Вступить в клуб
          </button> */}
					{/* <Link
						href="https://wa.me/79647002112?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B5%D0%B7%D0%B4%D0%BA%D1%83"
						className={styles.ctaBtn}
					>
						Вступить в клуб
					</Link> */}
					<br />
					<br />
					<p className={styles.accentText} style={{ marginBottom: 30 }}>
						Или заполните анкету (толькео для желающих приехать на турбазу «МОЛОДОСТЬ» на Алтае)
					</p>
					<Link href="/anketa" className={styles.ctaBtn}>
						Анкета
					</Link>
				</div>
			</div>
		</>
	);
};
