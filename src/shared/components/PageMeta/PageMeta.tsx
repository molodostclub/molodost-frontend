import Head from 'next/head';
import { FC } from 'react';

export const PageMeta: FC<{
	title?: string;
	isMainPage?: boolean;
}> = ({ title = '', isMainPage = false }) => {
	const MAIN_PAGE_TITLE = 'Турбаза "Молодость" на Алтае: отдых, цены, номера и условия проживания | Официальный сайт';
	const ANY_PAGE_TITLE = `${title} | Турбаза "Молодость"`;

	const MAIN_PAGE_META_DESCRIPTION = 'Отдых на Алтае на турбазе “Молодость”: условия проживания, цены, варианты размещения. Забронировать проживание на официальном сайте турбазы “Молодость”';
	const ANY_PAGE_META_DESCRIPTION = `${title} | официальный сайт турбазы "Молодость" на Алтае`;

	return (
		<>
			<Head>
				<title>{isMainPage ? MAIN_PAGE_TITLE : ANY_PAGE_TITLE}</title>
				<meta name="description" content={isMainPage ? MAIN_PAGE_META_DESCRIPTION : ANY_PAGE_META_DESCRIPTION} />

				<meta property="og:title" content="Молодость" />
				<meta property="og:description" content="Турбаза на Алтае" />
				<meta property="og:image" content="/images/og-image.jpg" />
			</Head>
		</>
	);
};
