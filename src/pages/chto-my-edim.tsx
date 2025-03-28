import { PageCoverWithVideo } from '@/shared/components/PageCoverWithVideo';
import { WhatWeEat } from '@core/WhatWeEat';
import { Footer, InnerPageHeader, PageMeta } from '@shared/components';
import Head from 'next/head';

export default function ChtoMyEdim() {
  return (
    <>
      <PageMeta title="Что мы едим" />
      <InnerPageHeader />
      <PageCoverWithVideo
        src="/video/0904_VSCO.mp4"
        poster="/images/chto-my-edim-cover.jpg"
      />
      <WhatWeEat />
      <Footer />
    </>
  );
}