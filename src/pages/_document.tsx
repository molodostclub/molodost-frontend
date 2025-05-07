import { Html, Head, Main, NextScript } from 'next/document';

import { themeClass } from '@styles';

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon"></link>
        <meta name="yandex-verification" content="92dcfd357eeba278" />
        <script
					dangerouslySetInnerHTML={{
						__html: `
							(function(w) {
								var q = [
									["setContext", "TL-INT-molodost-club_2025-04-29", "ru"],
									["embed", "booking-form", {
											container: "tl-booking-form"
									}],
									["embed", "search-form", {
											container: "tl-search-form"
									}]
								];
								var h = ["ru-ibe.tlintegration.ru", "ibe.tlintegration.ru", "ibe.tlintegration.com"];
								var t = w.travelline = (w.travelline || {}),
									ti = t.integration = (t.integration || {});
								ti.__cq = ti.__cq? ti.__cq.concat(q) : q;
									if (!ti.__loader) {
									ti.__loader = true;
									var d=w.document,c=d.getElementsByTagName("head")[0]||d.getElementsByTagName("body")[0];
									function e(s,f) {return function() {w.TL||(c.removeChild(s),f())}}
									(function l(h) {
										if (0===h.length) return; var s=d.createElement("script");
										s.type="text/javascript";s.async=!0;s.src="https://"+h[0]+"/integration/loader.js";
										s.onerror=s.onload=e(s,function(){l(h.slice(1,h.length))});c.appendChild(s)
									})(h);
								}
							})(window);
						`,
					}}
				/>
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

        <noscript><div><img src="https://mc.yandex.ru/watch/87735647" style={{ position:'absolute', left:'-9999px' }} /></div></noscript>
        
      </body>
    </Html>
  );
}
