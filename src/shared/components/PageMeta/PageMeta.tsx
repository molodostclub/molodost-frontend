import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

export const PageMeta: FC<{
	title?: string;
	isMainPage?: boolean;
}> = ({ title = '', isMainPage = false }) => {
	const MAIN_PAGE_TITLE = 'Турбаза "Молодость" на Алтае: отдых, цены, номера и условия проживания | Официальный сайт';
	const ANY_PAGE_TITLE = `${title} | Турбаза "Молодость"`;

	const MAIN_PAGE_META_DESCRIPTION = 'Отдых на Алтае на турбазе “Молодость”: условия проживания, цены, варианты размещения. Забронировать проживание на официальном сайте турбазы “Молодость”';
	const ANY_PAGE_META_DESCRIPTION = `${title} | официальный сайт турбазы "Молодость" на Алтае`;
	const router = useRouter();

	useEffect(() => {
		const root = document.documentElement;
		root.classList.toggle('travelline-booking-page', router.pathname === '/booking');

		return () => root.classList.remove('travelline-booking-page');
	}, [router.pathname]);

	return (
		<>
			<Head>
				<title>{isMainPage ? MAIN_PAGE_TITLE : ANY_PAGE_TITLE}</title>
				<meta name="description" content={isMainPage ? MAIN_PAGE_META_DESCRIPTION : ANY_PAGE_META_DESCRIPTION} />

				<meta property="og:title" content="Молодость" />
				<meta property="og:description" content="Турбаза на Алтае" />
				<meta property="og:image" content="/images/og-image.webp" />
			</Head>
		</>
	);
};
