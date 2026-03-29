import { FC, ReactNode, useState } from 'react';
import * as styles from './AccordionSection.css';
import cn from 'classnames';

import { AccordionGraphic } from './AccordionGraphic';

interface AccordionSectionProps {
	title: ReactNode;
	children: ReactNode;
	defaultOpen?: boolean;
}

export const AccordionSection: FC<AccordionSectionProps> = ({
	title,
	children,
	defaultOpen = true,
}) => {
	const [isOpen, setIsOpen] = useState(defaultOpen);

	return (
		<section className={styles.section}>
			<button
				type="button"
				className={styles.triggerButton}
				onClick={() => setIsOpen((prev) => !prev)}
				aria-expanded={isOpen}
			>
				<AccordionGraphic layout="responsive" strokeWidth={4}>
					{title}
				</AccordionGraphic>
			</button>
			<div className={cn(styles.content, !isOpen && styles.contentHidden)}>
				{children}
			</div>
		</section>
	);
};
