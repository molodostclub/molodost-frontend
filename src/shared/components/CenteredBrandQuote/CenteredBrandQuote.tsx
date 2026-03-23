import { FC, ReactNode } from 'react';
import cn from 'classnames';

import * as styles from './CenteredBrandQuote.css';

type AttributionFont = 'apercu' | 'cera';

type Props = {
	/** Основной текст цитаты (обычно `<p>` с переносами `<br />`) */
	quote: ReactNode;
	attribution?: ReactNode;
	attributionFont?: AttributionFont;
	/** Убрать нижний отступ блока (как `quoteBlockChernigovskayaNoMargin` на Манжерок) */
	noMarginBottom?: boolean;
	className?: string;
};

export const CenteredBrandQuote: FC<Props> = ({
	quote,
	attribution,
	attributionFont = 'apercu',
	noMarginBottom = false,
	className,
}) => {
	const footerClass = attributionFont === 'cera' ? styles.footerCera : styles.footerApercu;

	return (
		<blockquote
			className={cn(styles.block, noMarginBottom && styles.blockNoMarginBottom, className)}
		>
			<div className={styles.quoteInner}>{quote}</div>
			{attribution != null && <footer className={footerClass}>{attribution}</footer>}
		</blockquote>
	);
};
