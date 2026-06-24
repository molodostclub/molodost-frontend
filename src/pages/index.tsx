import { ClosingGallery } from '@core/Home/ClosingGallery';
import { HowToGetHome } from '@core/Home/HowToGetHome';
import { OurIdols } from '@core/Home/OurIdols';
import { PageContainer } from '@core/Home/PageContainer';
import { Postscriptum } from '@core/Home/Postscriptum';
import { TurkClubIntro } from '@core/Home/TurkClubIntro';
import { Breadcrumb } from '@shared/components/Breadcrumb';
import { Footer } from '@shared/components/Footer';
import { InnerPageHeader } from '@shared/components/InnerPageHeader';
import { PageCover } from '@shared/components/PageCover';
import { PageMeta } from '@shared/components/PageMeta';
import { SiberiaNavButtons } from '@shared/components/SiberiaNavButtons';

export default function Home() {
	return (
		<>
			<PageMeta isMainPage />
			<InnerPageHeader isMainPage />
			<PageCover
				src="/images/main-cover2.jpg"
				priority
				sizes="(max-width: 767px) 100vw, (max-width: 1200px) 100vw, 1200px"
			/>
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
