export type IndentInner = {
  [index: string]: number,
}

export type Indent = {
  [index: string]: IndentInner | string[],
}

export type GenerateIndentsProps = {
  className: string
  property: string
  isTablet?: boolean
}
