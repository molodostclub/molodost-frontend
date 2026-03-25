import { FC, ReactNode, useState } from 'react';
import * as styles from './AccordionSection.css';
import cn from 'classnames';

const ACCORDION_PATH_SINGLE =
	'M284.151 2L303.589 29.1016L284.075 60H2V2H284.151Z';
const ACCORDION_PATH_MULTILINE =
	'M283.144 2L303 44.5342L283.077 93H2V2H283.144Z';

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
				<span className={styles.accordionGraphic}>
					<svg
						className={cn(styles.accordionSvg, styles.accordionSvgMultiline)}
						width="306"
						height="95"
						viewBox="0 0 306 95"
						fill="none"
						preserveAspectRatio="none"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden
					>
						<path
							d={ACCORDION_PATH_MULTILINE}
							stroke="currentColor"
							strokeWidth={4}
							vectorEffect="non-scaling-stroke"
							fill="none"
						/>
					</svg>
					<svg
						className={cn(styles.accordionSvg, styles.accordionSvgSingle)}
						width="306"
						height="62"
						viewBox="0 0 306 62"
						fill="none"
						preserveAspectRatio="none"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden
					>
						<path
							d={ACCORDION_PATH_SINGLE}
							stroke="currentColor"
							strokeWidth={4}
							vectorEffect="non-scaling-stroke"
							fill="none"
						/>
					</svg>
					<span className={styles.accordionTitle}>{title}</span>
				</span>
			</button>
			<div className={cn(styles.content, !isOpen && styles.contentHidden)}>
				{children}
			</div>
		</section>
	);
};
