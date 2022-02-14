export interface OptionsCatalogDetail {
  code: string
  containers: Array<{
    code: string
    label: null
    categories: Array<{
      idResponse: string
      code: string
      label: string
      filters: string[]
      options: Array<{
        code: string
        name: string
        description: string
        discountLabel: null | string
        price: number
        discount: number
        discountDuration: number
        frequency: 'ONCE' | 'RECURRENT' | string
        logoUrl: null | string
        needsConsent: boolean
        picUrl: string
        materialImpacts: boolean
        migCachee: boolean
        pushForward?: boolean
        filters?: string[]
      }>
    }>
  }>
  pushOptions: Array<{
    code: string
    name: string
    description: string
    discountLabel: null | string
    price: number
    discount: number
    discountDuration: number
    frequency: 'ONCE' | 'RECURRENT' | string
    logoUrl: null | string
    needsConsent: boolean
    picUrl: string
    materialImpacts: boolean
    migCachee: boolean
    pushForward?: boolean
    filters?: string[]
  }>
}
