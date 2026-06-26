/* eslint-disable @next/next/no-img-element, jsx-a11y/alt-text */
import { Html, Head, Main, NextScript } from 'next/document';

import { themeClass } from '@styles';

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon"></link>
        <link rel="preload" href="/fonts/ApercuPro-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/ApercuPro-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/CeraCondensedCY-Desktop-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/CeraCondensedCY-Desktop-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/CeraCondensedCY-Desktop-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/CeraCompactCY-Desktop-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <meta name="yandex-verification" content="92dcfd357eeba278" />
      </Head>
      <body className={themeClass}>
        <Main />
        <NextScript />

        <noscript><div><img src="https://mc.yandex.ru/watch/87735647" alt="" style={{ position:'absolute', left:'-9999px' }} /></div></noscript>
        
      </body>
    </Html>
  );
}
