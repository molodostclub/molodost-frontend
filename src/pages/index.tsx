import { GetStaticProps } from 'next';

import { Intro, OurBase, OurIdols, PageContainer, OurAltay, WhatWeEat, Entertainment, OurEcosystem, WhereDoWeLive, Postscriptum, Motto } from '@core/Home';
import { InnerPageHeader, PageCover, Footer, PageMeta } from '@shared/components';
import { HousesSplit, getHousesSplit } from '@utils';

type Props = {
	houses: HousesSplit;
};

export default function Home({ houses }: Props) {
	return (
		<>
			<PageMeta isMainPage />
			<InnerPageHeader isMainPage />
			<PageCover src="/images/main-cover2.jpg" />
			<PageContainer>
				<Motto />
				<Intro />
				<OurAltay />
				<OurIdols />
				<OurBase />
				<OurEcosystem />
				<WhereDoWeLive houses={houses} />
				<WhatWeEat />
				<Entertainment />
				<Postscriptum />
			</PageContainer>
			<Footer />
		</>
	);
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	try {
		const houses = await getHousesSplit();

		return {
			props: {
				houses,
			},
			revalidate: 3600, // 1 час - было 5 секунд, это вызывало постоянную регенерацию и 100% CPU
		};
	} catch (error: any) {
		console.error('🔥 Ошибка загрузки houses:', error?.message || error);
		if (error?.response?.data) {
			console.error('Ответ от API:', error.response.data);
		}

		return {
			props: {
				houses: {
					individual: [],
					inHouse: [],
				},
			},
			revalidate: 60,
		};
	}
};
