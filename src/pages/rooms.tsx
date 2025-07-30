import { WhereWeLive } from '@/core/WhereWeLive';
import { HousesSplit, getHousesSplit } from '@/utils';
import { Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';
import { GetStaticProps } from 'next';

type Props = HousesSplit;

export default function GdeZhivem(pageProps: Props) {
	return (
		<>
			<PageMeta title="Где живем?" />
			<InnerPageHeader />
			<PageCover src="/images/gde-zhivem-cover.jpg" />
			<WhereWeLive {...pageProps} />
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
		console.error('🔥 Ошибка загрузки данных для "Где живем?":', error?.message || error);
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
