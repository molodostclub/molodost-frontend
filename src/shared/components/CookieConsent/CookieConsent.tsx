import { FC, useEffect, useState } from 'react';

import * as styles from './CookieConsent.css';

const STORAGE_KEY = 'cookie_consent_accepted';

export const CookieConsent: FC = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const accepted = localStorage.getItem(STORAGE_KEY);
		if (!accepted) {
			setVisible(true);
		}
	}, []);

	const handleAccept = () => {
		localStorage.setItem(STORAGE_KEY, '1');
		setVisible(false);
	};

	if (!visible) return null;

	return (
		<div className={styles.wrapper}>
			<div className={styles.textBlock}>
				<p className={styles.textBold}>
					Продолжая гулять по нашему сайту, ты даешь{' '}
					<a href="/docs/agreement.docx" target="_blank" rel="noopener noreferrer" className={styles.link}>
						согласие на то, что мы используем cookies
					</a>
					{' '}&mdash; как дрова для уютного костра!
					Всё о нашей{' '}
					<a href="/docs/personal-data-agreement.docx" target="_blank" rel="noopener noreferrer" className={styles.link}>
						политике конфиденциальности
					</a>.
				</p>
				<p className={styles.text}>
					Не хочешь? Просто подкорректируй настройки в браузере и наслаждайся отдыхом без лишнего.
				</p>
			</div>
			<button type="button" className={styles.okButton} onClick={handleAccept}>
				OK
			</button>
		</div>
	);
};
