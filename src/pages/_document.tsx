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

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(87735647, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
              });
            `,
          }}
        />

        <noscript><div><img src="https://mc.yandex.ru/watch/87735647" alt="" style={{ position:'absolute', left:'-9999px' }} /></div></noscript>
        
      </body>
    </Html>
  );
}
