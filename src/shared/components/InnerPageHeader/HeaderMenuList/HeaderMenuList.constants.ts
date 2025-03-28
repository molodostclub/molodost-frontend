interface HeaderMenuList {
  id: number
  label: string
  href: string
  openInNewWindow?: boolean
}

export const HEADER_MENU_LIST: HeaderMenuList[] = [
  {
    id: 1,
    label: 'как к нам попасть',
    href: '/kak-popast',
  },
  {
    id: 2,
    label: 'правила жизни',
    href: '/pravila-zhizni',
  },
  {
    id: 3,
    label: 'В Сибирь за свой счет',
    href: '/v-sibir-za-svoy-schet',
  },
];
