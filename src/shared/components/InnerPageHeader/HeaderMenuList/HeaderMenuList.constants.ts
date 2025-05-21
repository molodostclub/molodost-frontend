interface HeaderMenuList {
  id: number
  label: string
  href: string
  openInNewWindow?: boolean
}

export const HEADER_MENU_LIST: HeaderMenuList[] = [
  {
    id: 1,
    label: 'АЛТАЙ',
    href: '/',
  },
  {
    id: 2,
    label: 'МАРС',
    href: '/mars',
  },
  {
    id: 3,
    label: 'БАЙКАЛ',
    href: '/baikal',
  },
];
