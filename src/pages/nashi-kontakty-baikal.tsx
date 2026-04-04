import { OurContactsBaikal } from '@core/OurContacts';
import { Breadcrumb, Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function NashyKontaktyBaikal() {
	return (
		<>
			<PageMeta title="Контакты — Молодость на Байкале" />
			<InnerPageHeader />
			<PageCover src="/images/baikal/main.png" />
			<Breadcrumb
				items={[
					{ label: 'Главная', href: '/' },
					{ label: 'Молодость на Байкале', href: '/baikal' },
					{ label: 'Контакты' },
				]}
			/>
			<OurContactsBaikal />
			<Footer variant="baikal" />
		</>
	);
}
