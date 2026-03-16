import { FC, ReactNode, useState } from 'react';
import { ArrowButton } from '@uikit/Button';
import * as styles from './AccordionSection.css';
import cn from 'classnames';

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
				<ArrowButton direction="right" color="brand" size="accordion">
					{title}
				</ArrowButton>
			</button>
			<div className={cn(styles.content, !isOpen && styles.contentHidden)}>
				{children}
			</div>
		</section>
	);
};
