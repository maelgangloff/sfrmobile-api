export interface Notifications {
  totalCount: number
  notifications: Notification[]
}

export interface Notification {
  count: number
  timestamp: number
  numLigneOuCommande: string
  gamme: string
}
