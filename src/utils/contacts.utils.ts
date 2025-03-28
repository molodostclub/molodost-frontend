export const trimTel = (tel: string) => tel.replace(/\s/g, '');
export const telHref = (tel: string) => `tel:${tel}`;
export const whatsappHref = (tel: string) => `https://wa.me/${tel}`;
export const telegramHref = 'https://t.me/ClubMolodost';
