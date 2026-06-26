import '@styles/normalize.css';
import '@styles/global.css';

import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import "../shared/types"

const CookieConsent = dynamic(
  () => import('@/shared/components/CookieConsent').then((module) => module.CookieConsent),
  { ssr: false },
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        id="yandex-metrika-tag"
        src="https://mc.yandex.ru/metrika/tag.js"
        strategy="lazyOnload"
      />
      <Script
        id="yandex-metrika-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.ym = window.ym || function () { (window.ym.a = window.ym.a || []).push(arguments); };
            window.ym.l = window.ym.l || Date.now();
            ym(87735647, "init", {
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true,
              webvisor: true
            });
          `,
        }}
      />
      <CookieConsent />
    </>
  );
}
