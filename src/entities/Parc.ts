export interface Parc {
  idResponse: string
  marque: string
  eliAro: boolean
  eliMig: boolean
  migUrl: string
  aroUrl: string
  type: string
  eliTv: boolean | null
  offer: {
    name: string
    commitmentDate: string
    cancellationFeesUrl: string
    box4G: boolean
  }
  pillars: Array<{
    code: string
    label: string
    shortDescription: string
    longDescription: string
    type: string
    moreOptionsButtonLabel: string
    moreOptionsButtonUrl: string
    options: Array<{
      code: string
      name: string
      description: string
      logoUrl: null
      picUrl: string
      commitmentLabel: null
      commitmentUrl: null
      commitmentWarning: null
      activationUrl: null
      activationStatus: string
      status: string | null
      beginDate: string
      endDate: string
      cancellationUrl: string | null
      dateFinGel: null
      modifiable: boolean
      cancellable: boolean
      price: null
      warningLabel: string
      parameters: any[]
    }>
    includedOptions: Array<{
      code: string
      label: string
    }>
  }>
  eligibilityErrorMessage: null
  numberOfOptions: number
  ineligibilityMessage: null
  pillarIneligibilityMessage: null
  optionIneligibilityMessage: null
}
