export interface OptionsCatalog {
  code: string
  containers: Array<{
    code: string
    label: null
    categories: Array<{
      code: string
      label: string
      picUrl: string
    }>
  }>
  pushOptions: Array<{
    code: string
    name: string
    description: string
    discountLabel: null
    price: number
    discount: number
    discountDuration: number
    frequency: string
    logoUrl: null
    needsConsent: boolean
    picUrl: string
    materialImpacts: boolean
    migCachee: boolean
  }>
}
