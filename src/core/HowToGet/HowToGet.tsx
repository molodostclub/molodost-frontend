import { FC, useState, useEffect } from 'react';

import { indent, uikit } from '@styles';
import * as styles from './HowToGet.css';
import { ContactsBox } from '@/shared/components';
import Link from 'next/link';
import cn from 'classnames';
import { PageHeading } from '@/uikit';

export const HowToGet: FC = () => {
	return (
		<>
			<div className={styles.content}>
				<PageHeading>ТУРБАЗА «МОЛОДОСТЬ» НА АЛТАЕ</PageHeading>
				<div className={styles.grid}>
					<div className={styles.column}>
						<p className={styles.accentText}>Забронировать онлайн здесь и&nbsp;сейчас</p>
						<Link className={styles.ctaBtn} href="/booking">
							<button className={styles.ctaBtn}>Забронировать</button>
						</Link>
					</div>
					<div className={styles.column}>
						<p className={styles.accentText}>Если у&nbsp;вас есть вопросы и&nbsp;вы&nbsp;хотите больше узнать о&nbsp;проекте</p>
						<ContactsBox type="small" />
					</div>
					<div className={styles.column}>
						<p className={styles.accentText}>Если вы&nbsp;планируете все&nbsp;до&nbsp;мелочей</p>
						<Link href="/anketa" className={styles.ctaBtn}>
							Анкета
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
