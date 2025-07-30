import { useEffect } from 'react';
import { PageContainer, Postscriptum } from '@core/Home';
import { InnerPageHeader, PageCover, Footer, PageMeta } from '@shared/components';
import { BaikalPage } from '@/core/Baikal';
import { HousesSplit } from '@/utils';
import { GetStaticProps } from 'next';
import { getHousesSplit } from '@/utils';

type Props = HousesSplit;

export default function Baikal(pageProps: Props) {
	useEffect(() => {
		const handleHashChange = () => {
			const hash = window.location.hash;
			if (hash) {
				// ждём, пока DOM отрисуется (если блок рендерится динамически)
				requestAnimationFrame(() => {
					const element = document.querySelector(hash);
					if (element) {
						element.scrollIntoView({ behavior: 'smooth' });
					}
				});
			}
		};

		// Скролл при монтировании, если уже есть hash
		handleHashChange();

		// Скролл при каждом изменении hash
		window.addEventListener('hashchange', handleHashChange);

		return () => {
			window.removeEventListener('hashchange', handleHashChange);
		};
	}, []);
	return (
		<>
			<PageMeta title="Молодость на Байкале" />
			<InnerPageHeader />
			<PageCover src="/images/baikal/main.png" />
			<PageContainer>
				<BaikalPage {...pageProps} />
				<Postscriptum />
			</PageContainer>
			<Footer />
		</>
	);
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	try {
		const data = await getHousesSplit();
		return {
			props: { ...data },
			revalidate: 60,
		};
	} catch (error: any) {
		console.error('🔥 Ошибка при загрузке Baikal:', error.message || error);
		if (error?.response?.data) {
			console.error('Ответ от API:', error.response.data);
		}

		// Возвращаем безопасные дефолтные props
		return {
			props: {
				individual: [],
				inHouse: [],
			},
			revalidate: 300,
		};
	}
};
