import { FC } from 'react';
import Link from 'next/link';

import * as styles from './Breadcrumb.css';

type BreadcrumbItem = {
	label: string;
	href?: string;
};

type Props = {
	items: BreadcrumbItem[];
};

export const Breadcrumb: FC<Props> = ({ items }) => {
	return (
		<nav className={styles.breadcrumb}>
			{items.map((item, index) => {
				const isLast = index === items.length - 1;

				return (
					<span key={index}>
						{item.href && !isLast ? (
							<Link href={item.href} className={styles.link} prefetch={false}>
								{item.label}
							</Link>
						) : (
							<span className={isLast ? styles.current : styles.link}>
								{item.label}
							</span>
						)}
						{!isLast && <span className={styles.separator}>–</span>}
					</span>
				);
			})}
		</nav>
	);
};
