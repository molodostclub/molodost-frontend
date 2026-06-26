import dynamic from 'next/dynamic';

import { TurkClubIntro } from '@core/Home/TurkClubIntro';
import { PageContainer } from '@core/Home/PageContainer';
import { Breadcrumb } from '@shared/components/Breadcrumb';
import { InnerPageHeader } from '@shared/components/InnerPageHeader';
import { PageCover } from '@shared/components/PageCover';
import { PageMeta } from '@shared/components/PageMeta';

const HowToGetHome = dynamic(() =>
	import('@core/Home/HowToGetHome').then((mod) => ({ default: mod.HowToGetHome })),
);
const OurIdols = dynamic(() =>
	import('@core/Home/OurIdols').then((mod) => ({ default: mod.OurIdols })),
);
const Postscriptum = dynamic(() =>
	import('@core/Home/Postscriptum').then((mod) => ({ default: mod.Postscriptum })),
);
const ClosingGallery = dynamic(() =>
	import('@core/Home/ClosingGallery').then((mod) => ({ default: mod.ClosingGallery })),
);
const SiberiaNavButtons = dynamic(() =>
	import('@shared/components/SiberiaNavButtons').then((mod) => ({ default: mod.SiberiaNavButtons })),
);
const Footer = dynamic(() =>
	import('@shared/components/Footer').then((mod) => ({ default: mod.Footer })),
);

export default function Home() {
	return (
		<>
			<PageMeta isMainPage />
			<InnerPageHeader isMainPage />
			<PageCover
				src="/images/main-cover2.webp"
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
