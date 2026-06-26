import { AboutUs } from '@/core/AboutUs';
import { Breadcrumb, Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function AboutPage() {
	return (
		<>
			<PageMeta title="О нас" />
			<InnerPageHeader />
			<PageCover src="/images/o-nas.webp" />
			<Breadcrumb
				items={[{ label: 'Главная', href: '/' }, { label: 'О нас' }]}
			/>
			<AboutUs />
			<Footer />
		</>
	);
}
