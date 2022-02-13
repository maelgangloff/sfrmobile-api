export interface OptionsList {
  idResponse: string
  code: string
  label: string
  filters: any[]
  options: Array<{
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
    pushForward: boolean
    filters: any[]
  }>
}
