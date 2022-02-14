export interface OptionDetail {
  code: string
  name: string
  description: string
  logoUrl: string
  picUrl: string
  commitmentLabel: string|null
  commitmentUrl: string|null
  commitmentWarning: string|null
  activationUrl: string|null
  activationStatus: string
  status: string|null
  beginDate: string
  endDate: string
  cancellationUrl: string|null
  dateFinGel: string|null
  modifiable: boolean
  cancellable: boolean
  price: any
  warningLabel: string|null
  parameters: any[]
}
