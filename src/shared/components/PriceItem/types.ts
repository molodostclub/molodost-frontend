interface additionalTitles {
  title: string
  price: number
  priceSuffix?: string
}

export interface PriceItemProps {
  title: string
  price?: number | string
  pricePrefix?: string
  priceAfter?: string
  
  priceForChild?: number
  priceForChildPrefix?: string
  priceForChildAfter?: string

  persons?: string
  area?: string
  description?: string
  className?: string

  additionalTitles?: additionalTitles[]
}


