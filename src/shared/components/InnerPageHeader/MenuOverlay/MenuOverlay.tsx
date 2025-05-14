import { FC, Fragment, MouseEvent, useEffect, useState } from 'react';
import cx from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { SmallLogo } from '@uikit';
import { useIsFirstRender } from '@shared/hooks';
import { APP_ROUTES, MenuItem } from './MenuOverlay.constants';
import * as styles from './MenuOverlay.css';
import { scrollToAnchor, getHashParams } from './MeuOverlay.utils';

type Props = {
	opened: boolean;
	onClose(): void;
};

export const MenuOverlay: FC<Props> = ({ opened, onClose }) => {
	const isFirstRender = useIsFirstRender();
	const router = useRouter();
	const [openMenu, setOpenMenu] = useState<string | null>(null);

	useEffect(() => {
		const params = getHashParams();
		if (params.scrollto) {
			scrollToAnchor(params.scrollto);
		}
	}, []);

	const handleClickMenuItem = (event: MouseEvent<HTMLAnchorElement>, item: MenuItem) => {
		if (isCurrentPage(item.href ?? '#')) {
			event.preventDefault();
			onClose();

			const url = new URL(item.href ?? '', window.location.origin);
			const anchor = url.hash.replace('#', '');

			if (anchor) {
				window.location.hash = anchor;
			}
		}
	};

	const isCurrentPage = (href: string) => {
		const sharpPos = href.indexOf('#');
		if (sharpPos > 0) {
			const url = href.slice(0, sharpPos);
			return url === router.pathname;
		}
		return href === router.pathname;
	};

	const toggleMenu = (id: string) => {
		setOpenMenu((prev) => (prev === id ? null : id)); // Закрывает предыдущее и открывает новое подменю
	};

	const overlay = cx(styles.overlay, {
		[styles.overlayTransition]: !isFirstRender,
		[styles.overlayVisibility.visible]: opened,
		[styles.overlayVisibility.hidden]: !opened,
	});

	return (
		<div className={cx(styles.overlayWrapper, { [styles.opened]: opened })}>
			{/* Полупрозрачный фон */}
			<div className={styles.overlayBackground} onClick={onClose} />

			{/* Меню */}
			<div className={overlay}>
				<div className={styles.content}>
					<div className={styles.header}>
						<Link href="/">
							<SmallLogo color="white" />
						</Link>
						<button type="button" onClick={onClose} className={styles.cross} />
					</div>

					<nav className={styles.menu}>
						<ul className={styles.menuList}>
							{APP_ROUTES.map((item) => (
								<Fragment key={item.label}>
									<li className={styles.menuItem}>
										{item.subItems ? (
											<>
												<button className={cx(styles.menuLabel, styles.menuButton)} onClick={() => toggleMenu(item.label)}>
													{item.label}{' '}
													{openMenu === item.label ? (
														<svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
															<g transform="rotate(180, 8, 4.5)">
																<path
																	d="M14.4327 0.946877L14.4326 0.947036L8.00709 6.56343L1.56883 0.946876C1.26793 0.684375 0.791615 0.684375 0.49071 0.946876C0.169763 1.22686 0.169764 1.69746 0.490709 1.97744L7.45527 8.05312C7.60811 8.18646 7.79721 8.25 7.99433 8.25C8.17556 8.25 8.37852 8.18823 8.53339 8.05312L15.4954 1.97966C15.8319 1.70045 15.8326 1.22753 15.5109 0.946876C15.21 0.684375 14.7336 0.684374 14.4327 0.946877Z"
																	fill="white"
																	stroke="white"
																	strokeWidth="0.5"
																/>
															</g>
														</svg>
													) : (
														<svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path
																d="M14.4327 0.946877L14.4326 0.947036L8.00709 6.56343L1.56883 0.946876C1.26793 0.684375 0.791615 0.684375 0.49071 0.946876C0.169763 1.22686 0.169764 1.69746 0.490709 1.97744L7.45527 8.05312C7.60811 8.18646 7.79721 8.25 7.99433 8.25C8.17556 8.25 8.37852 8.18823 8.53339 8.05312L15.4954 1.97966C15.8319 1.70045 15.8326 1.22753 15.5109 0.946876C15.21 0.684375 14.7336 0.684374 14.4327 0.946877Z"
																fill="white"
																stroke="white"
																strokeWidth="0.5"
															/>
														</svg>
													)}
												</button>
												<div
													className={cx(styles.subMenu, {
														[styles.subMenuOpen]: openMenu === item.label,
													})}
												>
													<ul>
														{item.subItems.map((subItem) => (
															<li key={subItem.label} className={styles.subMenuItem}>
																<Link href={subItem.href ?? '#'} onClick={(event) => handleClickMenuItem(event, subItem)} className={styles.subMenuLabel}>
																	{subItem.label}
																</Link>
															</li>
														))}
													</ul>
												</div>
											</>
										) : (
											<Link href={item.href ?? '#'} onClick={(event) => handleClickMenuItem(event, item)} className={styles.menuLabel}>
												{item.label}
											</Link>
										)}
									</li>
								</Fragment>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};
