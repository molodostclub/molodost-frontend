import { FC } from 'react';

import * as styles from './HowToGet.css';
import { ContactsBox } from '@/shared/components';
import Link from 'next/link';
import { PageHeading } from '@/uikit';

export const HowToGet: FC = () => {
	return (
		<>
			<div className={styles.content}>
				<PageHeading>ТУРБАЗА «МОЛОДОСТЬ» НА АЛТАЕ</PageHeading>
				<div className={styles.grid}>
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
