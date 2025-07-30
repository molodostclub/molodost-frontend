import { useEffect } from 'react';
import { PageContainer, Postscriptum } from '@core/Home';
import { InnerPageHeader, PageCover, Footer, PageMeta } from '@shared/components';
import { Mars } from '@/core/Mars';
import { HousesSplit } from '@/utils';
import { GetStaticProps } from 'next';
import { getHousesSplit } from '@/utils';

type Props = HousesSplit;

export default function MarsPage(pageProps: Props) {
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
			<PageMeta title="Приют на марсе" />
			<InnerPageHeader />
			<PageCover src="/images/mars/main.jpeg" />
			<PageContainer>
				<Mars {...pageProps} />
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
			revalidate: 1,
		};
	} catch (error: any) {
		console.error('🔥 Ошибка при загрузке данных для MarsPage:', error.message || error);
		if (error?.response?.data) {
			console.error('Ответ от API:', error.response.data);
		}

		return {
			props: {
				individual: [],
				inHouse: [],
			},
			revalidate: 60,
		};
	}
};
