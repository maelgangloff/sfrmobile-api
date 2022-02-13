export interface OptionsAchat {
  plafondAchat: {
    credit: number
    min?: number
    max?: number
    defaut?: number
  }
  droitsAchat: Array<{
    code: string
    titre?: string
    description?: string
    autorise: boolean
  }>
}
