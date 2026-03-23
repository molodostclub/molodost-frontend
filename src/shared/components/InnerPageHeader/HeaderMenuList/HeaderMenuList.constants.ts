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
    href: '/manjerok',
  },
  {
    id: 2,
    label: 'БАЙКАЛ',
    href: '/baikal',
  },
  {
    id: 3,
    label: 'КУРИЛЫ',
    href: '/kurily',
  },
];
