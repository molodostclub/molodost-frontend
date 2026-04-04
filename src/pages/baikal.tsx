import { useEffect } from 'react';
import { PageContainer } from '@core/Home';
import { Breadcrumb, InnerPageHeader, PageCover, Footer, PageMeta } from '@shared/components';
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
			<Breadcrumb items={[{ label: 'Главная', href: '/' }, { label: 'Байкал' }]} />
			<PageContainer>
				<BaikalPage {...pageProps} />
			</PageContainer>
			<Footer variant="baikal" />
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
	} catch (error) {
		console.warn('getHousesSplit уже вернул безопасный объект, но поймано исключение:', error);
		return {
			props: {
				individual: [],
				inHouse: [],
				luxiping: [],
			},
			revalidate: 300,
		};
	}
};
