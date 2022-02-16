export interface NotificationsCount {
  totalCount: number
  notifications: Array<{
    count: number
    timestamp: number
    numLigneOuCommande: string
    gamme: string
  }>
}

export interface Notification {
  timestamp: number
  totalNumberOfElements: number
  totalPages: number
  numberOfElements: number
  pageIndex: number
  numLigneOuCommande: string
  gamme: string
  notifications: Array<{
    id: string
    timestamp: number
    numeroLigne: string
    idCommande: string|null
    read: boolean
    client: {
      idCSU: any
      idSiebel: string|null
      idClient: string|null
      numeroCommande: string|null
      numeroASC: any
    }
    event: {
      name: string
      code: string
      type: string
      actionWeb: string
      actionAppli: string
      objectTitle: string
      important: boolean
      category: {
        name: string
        text: string
        property: string
        picto: string
        pictoSfr: string
        pictoRed: string
        pictoWhite: string
      }
      actionAppliSfr: string
      actionWebSfr: string
      actionAppliRed: string
      actionWebRed: string
      actionAppliWhite: string
      actionWebWhite: string
    }
  }>
}
