import { PriceItemProps } from "./types"

export const sortPriceForMobile = (array: PriceItemProps[]) => {
  const arr = [...array]

  arr.sort((a, b) => 
    a.price && typeof a.price !== 'string' && b.price && typeof b.price !== 'string' 
      ? a?.price - b?.price 
      : 0
  )

  return arr
}
