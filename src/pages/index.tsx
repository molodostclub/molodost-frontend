import { TurkClubIntro, HowToGetHome, OurIdols, Postscriptum, ClosingGallery, PageContainer } from '@core/Home';
import { Breadcrumb, InnerPageHeader, PageCover, Footer, PageMeta, SiberiaNavButtons } from '@shared/components';

export default function Home() {
	return (
		<>
			<PageMeta isMainPage />
			<InnerPageHeader isMainPage />
			<PageCover src="/images/main-cover2.jpg" />
			<Breadcrumb items={[{ label: 'Главная' }]} />
			<PageContainer>
				<TurkClubIntro />
				<HowToGetHome />
				<OurIdols />
			</PageContainer>
			<Postscriptum />
			<PageContainer>
				<ClosingGallery />
				<SiberiaNavButtons />
			</PageContainer>
			<Footer />
		</>
	);
}
