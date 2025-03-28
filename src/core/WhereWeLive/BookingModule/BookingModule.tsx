import Script from 'next/script';
import { FC } from 'react';

export const BookingModule: FC = () => {

  const initBnovoWidget = () => {
    // @ts-ignore
    Bnovo_Widget.init(function(){
      // @ts-ignore
      Bnovo_Widget.open('_bn_widget_', {
        type: "vertical",
        uid: "a29fb2b8-01d8-43db-be51-81d1de131cf2",
        lang: "ru",
        width: "300",
        width_mobile: "300",
        background: "#ffffff",
        background_mobile: "#ffffff",
        bg_alpha: "100",
        bg_alpha_mobile: "100",
        border_color_mobile: "#C6CAD3",
        padding: "24",
        padding_mobile: "24",
        border_radius: "8",
        font_type: "inter",
        title_color: "#242742",
        title_color_mobile: "#242742",
        title_size: "22",
        title_size_mobile: "22",
        inp_color: "#242742",
        inp_bordhover: "#dedfe3",
        inp_bordcolor: "#BCBCBC",
        inp_alpha: "100",
        btn_background: "#1875F0",
        btn_background_over: "#1850D2",
        btn_textcolor: "#FFFFFF",
        btn_textover: "#FFFFFF",
        btn_bordcolor: "#1875F0",
        btn_bordhover: "#1850D2",
        adults_default: "1",
        dates_preset: "on",
        dfrom_today: "on",
        dfrom_value: "2",
        dto_nextday: "on",
        dto_value: "2",
        cancel_color: "#FFFFFF",
        switch_mobiles_width: "800",
      });
    });
  }

  return (
    <>
      <Script onReady={initBnovoWidget} src="https://widget.reservationsteps.ru/js/bnovo.js" />
      <div className="left" id="_bn_widget_" style={{marginBottom: 30}}></div>
    </>
  )
}
