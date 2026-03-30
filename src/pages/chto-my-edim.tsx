import { PageCoverWithVideo } from '@/shared/components/PageCoverWithVideo';
import { WhatWeEat } from '@core/WhatWeEat';
import { Breadcrumb, Footer, InnerPageHeader, PageMeta } from '@shared/components';

export default function ChtoMyEdim() {
  return (
    <>
      <PageMeta title="Что мы едим" />
      <InnerPageHeader />
      <PageCoverWithVideo
        src="/video/0904_VSCO.mp4"
        poster="/images/chto-my-edim-cover.jpg"
      />
      <Breadcrumb
        items={[
          { label: 'Главная', href: '/' },
          { label: 'Экосистема Алтай', href: '/nasha-ekosistema' },
          { label: 'Что мы едим и пьем' },
        ]}
      />
      <WhatWeEat />
      <Footer />
    </>
  );
}