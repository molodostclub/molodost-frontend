import { FC } from 'react';

import * as styles from './Footer.css';
import Image from 'next/image';
import { telHref, telegramHref, trimTel, whatsappHref } from '@/utils';
import { AttentionNote } from '@/uikit';
import { RulesList } from '../RulesList';
import { FooterButtons } from '../FooterButtons';

const phoneNumber = '+7 964 700 21 12';
const tel = trimTel(phoneNumber);

export const Footer: FC = () => {
	return (
		<>
			<FooterButtons />
			<RulesList />
			<footer className={styles.footer}>
				<Image src="/icons/logo-white.svg" alt="Логотип" width={173} height={137} />
				<ul className={styles.contactList}>
					<li className={styles.contactItem}>
						<a href={telHref(tel)} className={styles.contactLink}>
							{phoneNumber}
						</a>
					</li>
					<li className={styles.contactItem}>
						<a target="_blank" href={telegramHref} className={styles.contactLinkUnderlined}>
							Telegram
						</a>
					</li>
					<li className={styles.contactItem}>
						<a target="_blank" href={whatsappHref(tel)} className={styles.contactLinkUnderlined}>
							WhatsApp
						</a>
					</li>
				</ul>

				<ul className={styles.attentionList}>
					{['«Молодость» работает в формате «открытых цен» и показывает все, как есть и сколько это реально стоит.'].map((item, index) => {
						return (
							<li key={index} className={styles.attentionListItem}>
								<AttentionNote whiteTheme={true}>{item}</AttentionNote>
							</li>
						);
					})}
				</ul>
				<div className={styles.logoWrapper}>
					<img className={styles.logoItem} src="/icons/mir.svg" alt="Мир" />
					<img className={styles.logoItem} src="/icons/sbp-seeklogo.svg" alt="СБП" />
				</div>
			</footer>
		</>
	);
};
