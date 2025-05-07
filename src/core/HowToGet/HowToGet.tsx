import { FC, useState, useEffect } from 'react';

import { indent, uikit } from '@styles';
import * as styles from './HowToGet.css';
import { ContactsBox } from '@/shared/components';
import Link from 'next/link';
import cn from 'classnames';

export const HowToGet: FC = () => {
	return (
		<>
			<div className={styles.content}>
				<div className={styles.grid}>
					<div className={styles.column}>
						<p className={styles.accentText}>Чтобы забронировать проживание на Алтае или Байкале, свяжитесь с&nbsp;нами по&nbsp;номеру</p>
						<ContactsBox type="small" />
					</div>
					<div className={styles.column}>
						<p className={styles.accentText}>Бронирование проживания на турбазе «Молодость» на Алтае</p>
						<Link className={styles.ctaBtn} href="/booking">
							<button className={styles.ctaBtn}>Забронировать</button>
						</Link>
					</div>
					<div className={styles.column}>
						<p className={styles.accentText}>Или заполните анкету (только для желающих приехать на турбазу «МОЛОДОСТЬ» на Алтае)</p>
						<Link href="/anketa" className={styles.ctaBtn}>
							Анкета
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
