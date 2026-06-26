import { WhereWeLive } from '@/core/WhereWeLive';
import { HousesSplit, getHousesSplit } from '@/utils';
import { Breadcrumb, Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';
import { GetStaticProps } from 'next';

type Props = HousesSplit;

export default function GdeZhivem(pageProps: Props) {
	return (
		<>
			<PageMeta title="Где живем?" />
			<InnerPageHeader />
			<PageCover src="/images/gde-zhivem-cover.webp" />
			<Breadcrumb items={[{ label: 'Главная', href: '/' }, { label: 'Где мы живём' }]} />
			<WhereWeLive {...pageProps} />
			<Footer />
		</>
	);
}

export const getStaticProps: GetStaticProps<Props> = () => ({
	props: getHousesSplit(),
});
