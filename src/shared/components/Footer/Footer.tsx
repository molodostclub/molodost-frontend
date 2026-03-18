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

/** Центральные ссылки для варианта Байкал — контакты ведут на страницу контактов Байкала */
const CENTER_LINKS_BAIKAL = [
	{ label: 'ПРАВИЛА ЖИЗНИ', href: '/pravila-zhizni', bold: false },
	{ label: 'НАШ ФЕСТИВАЛЬ', href: '/nash-festival', bold: true },
	{ label: 'КОНТАКТЫ', href: '/nashi-kontakty-baikal', bold: false },
];

const ADDRESS_DEFAULT =
	'ООО «Молодость», 649115, Республика Алтай, Майминский район, с. Соузга, тер. Молодость, зд. 1';

const ADDRESS_BAIKAL =
	'ООО «Молодость. Байкал», 671273, Республика Бурятия, Прибайкальский район, с. Турка, микрорайон Турка, д. 3, офис 21';

const phoneNumberBaikal = '+7 924 014 20 70';
const phoneDisplayBaikal = '8 924 014 20 70';
const telBaikal = trimTel(phoneNumberBaikal);
const emailBaikal = 'molodostbaikal@yandex.ru';

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

const LEGAL_LINKS_RIGHT_BAIKAL = [
	{ label: 'Заявление на возврат', href: '/docs/return-blank.pdf' },
	{ label: 'Реквизиты', href: '/pravovie-documenti-baikal' },
];

type Props = {
	variant?: 'default' | 'baikal';
};

export const Footer: FC<Props> = ({ variant = 'default' }) => {
	const isBaikal = variant === 'baikal';
	const centerLinks = isBaikal ? CENTER_LINKS_BAIKAL : CENTER_LINKS;
	const address = isBaikal ? ADDRESS_BAIKAL : ADDRESS_DEFAULT;
	const footerEmail = isBaikal ? emailBaikal : email;
	const footerPhoneDisplay = isBaikal ? phoneDisplayBaikal : phoneDisplay;
	const footerTel = isBaikal ? telBaikal : tel;
	const legalRight = isBaikal ? LEGAL_LINKS_RIGHT_BAIKAL : LEGAL_LINKS_RIGHT;

	return (
		<footer className={styles.footer}>
			<div className={styles.inner}>
				<div className={styles.navColumn}>
					{NAV_LINKS.map((link) => (
						<Link key={link.href} href={link.href} className={styles.navLink} prefetch={false}>
							{link.label}
						</Link>
					))}
					<p className={styles.addressText}>{address}</p>
				</div>

				<div className={styles.centerColumn}>
					{centerLinks.map((link) => (
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
							<a href={`mailto:${footerEmail}`} className={styles.emailLink}>
								{footerEmail}
							</a>
						</div>

						<a href={telHref(footerTel)} className={styles.phonePill}>
							<span className={styles.phoneIcon}>
								<Image src="/icons/phone-brand.svg" alt="" width={24} height={24} />
							</span>
							<span className={styles.phoneLink}>{footerPhoneDisplay}</span>
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
								{legalRight.map((link) => (
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
