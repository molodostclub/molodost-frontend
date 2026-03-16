import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import * as styles from './Footer.css';
import { trimTel, telHref, telegramHref } from '@/utils';

const phoneNumber = '+7 964 700 21 12';
const phoneDisplay = '8 964 700 21 12';
const tel = trimTel(phoneNumber);
const email = 'reservation@clubmolodost.ru';

const NAV_LINKS = [
	{ label: 'АЛТАЙ', href: '/' },
	{ label: 'БАЙКАЛ', href: '/baikal' },
	{ label: 'КУРИЛЫ', href: '/kurily' },
];

const CENTER_LINKS = [
	{ label: 'ПРАВИЛА ЖИЗНИ', href: '/pravila-zhizni', bold: false },
	{ label: 'НАШ ФЕСТИВАЛЬ', href: '/nash-festival', bold: true },
	{ label: 'КОНТАКТЫ', href: '/nashi-kontakty', bold: false },
];

/** Left column of legal links (per Figma) */
const LEGAL_LINKS_LEFT = [
	{ label: 'Порядок бронирования', href: '/docs/poradok_bronirovania_new.docx' },
	{ label: 'Правила предоставления услуг', href: '/docs/rules-order_.docx' },
	{ label: 'Правила пользования сайтом', href: '/docs/rules-for-use-site.docx' },
];

/** Right column of legal links (per Figma) */
const LEGAL_LINKS_RIGHT = [
	{ label: 'Заявление на возврат', href: '/docs/return-blank.pdf' },
	{ label: 'Реквизиты', href: '/pravovie-documenti' },
];

type Props = {
	variant?: 'default' | 'baikal';
};

export const Footer: FC<Props> = ({ variant = 'default' }) => {
	return (
		<footer className={styles.footer}>
			<div className={styles.inner}>
				<div className={styles.navColumn}>
					{NAV_LINKS.map((link) => (
						<Link key={link.href} href={link.href} className={styles.navLink} prefetch={false}>
							{link.label}
						</Link>
					))}
					<p className={styles.addressText}>
						ООО &laquo;Молодость&raquo;, 649115, Республика Алтай,
						Майминский район, с. Соузга, тер. Молодость, зд. 1
					</p>
				</div>

				<div className={styles.centerColumn}>
					{CENTER_LINKS.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={link.bold ? styles.centerLinkBold : styles.centerLink}
							prefetch={false}
						>
							{link.label}
						</Link>
					))}
				</div>

				<div className={styles.rightColumn}>
					<div className={styles.rightContent}>
						<div className={styles.emailWrap}>
							<a href={`mailto:${email}`} className={styles.emailLink}>
								{email}
							</a>
						</div>

						<a href={telHref(tel)} className={styles.phonePill}>
							<span className={styles.phoneIcon}>
								<Image src="/icons/phone-brand.svg" alt="" width={24} height={24} />
							</span>
							<span className={styles.phoneLink}>{phoneDisplay}</span>
						</a>

						<div className={styles.legalRow}>
							<div className={styles.legalColumnLeft}>
							{LEGAL_LINKS_LEFT.map((link) => (
								<a
									key={link.href}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className={styles.legalLink}
								>
									{link.label}
								</a>
							))}
							</div>
							<div className={styles.legalSeparator} aria-hidden />
							<div className={styles.legalColumnRight}>
							{LEGAL_LINKS_RIGHT.map((link) => (
								<a
									key={link.href}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className={styles.legalLink}
								>
									{link.label}
								</a>
							))}
							</div>
						</div>
					</div>

					<div className={styles.socialIcons}>
						<a
							href="https://max.ru"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.socialIcon}
						>
							<Image src="/icons/Max.png" alt="MAX" width={45} height={45} />
						</a>
						<a
							href={telegramHref}
							target="_blank"
							rel="noopener noreferrer"
							className={styles.socialIcon}
						>
							<Image src="/icons/Telegram.png" alt="Telegram" width={45} height={45} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};
