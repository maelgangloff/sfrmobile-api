export interface AchatsAbonnements {
  debAchats: string
  finAchats: string
  achatsEnCours: Array<{
    editeur: string
    prix: string
    service: string
    fournisseur: string
    conteste: boolean
    smsPlus: boolean
    dateTransaction: string
    paiementVia: string
    refTransaction: string
    customerServiceContact: string
    serviceSfr: boolean
    type: string
  }>
  achatsHistorique: any[]
  abonnements: any[]
}
