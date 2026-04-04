import { FC, ReactNode } from 'react';
import cn from 'classnames';

import { ACCORDION_PATH_MULTILINE, ACCORDION_PATH_SINGLE } from './accordionPaths';
import * as styles from './AccordionSection.css';

export type AccordionGraphicLayout = 'responsive' | 'single' | 'multiline';

type Props = {
	children: ReactNode;
	layout?: AccordionGraphicLayout;
	/** Узкая обводка без width: 100% (кнопка-ссылка) */
	inline?: boolean;
	/** Толщина обводки SVG (в аккордеоне прайса передают 4) */
	strokeWidth?: number;
	graphicClassName?: string;
	titleClassName?: string;
};

export const AccordionGraphic: FC<Props> = ({
	children,
	layout = 'responsive',
	inline = false,
	strokeWidth = 2,
	graphicClassName,
	titleClassName,
}) => {
	const graphicClass = cn(
		inline ? styles.accordionGraphicInline : styles.accordionGraphic,
		graphicClassName,
	);

	const sw = strokeWidth;

	return (
		<span className={graphicClass}>
			{layout === 'responsive' && (
				<>
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
							strokeWidth={sw}
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
							strokeWidth={sw}
							vectorEffect="non-scaling-stroke"
							fill="none"
						/>
					</svg>
				</>
			)}
			{layout === 'multiline' && (
				<svg
					className={cn(styles.accordionSvg, styles.accordionSvgMultilineOnly)}
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
						strokeWidth={sw}
						vectorEffect="non-scaling-stroke"
						fill="none"
					/>
				</svg>
			)}
			{layout === 'single' && (
				<svg
					className={cn(styles.accordionSvg, styles.accordionSvgSingleOnly)}
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
						strokeWidth={sw}
						vectorEffect="non-scaling-stroke"
						fill="none"
					/>
				</svg>
			)}
			<span className={cn(styles.accordionTitle, titleClassName)}>{children}</span>
		</span>
	);
};
