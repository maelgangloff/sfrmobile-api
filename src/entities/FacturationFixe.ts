export interface FacturationFixe {
  factures: Array<{
    dateFacture: string
    infoPaiement: {
      montantTotal: string
      datePaiement: string
      payee: boolean
      paiementEnRetard: boolean
    }
    sommaire: {
      montantTotal: string
      valeurFacture: number
    }
    numeroFacture: string
    typeFacture: {
      typeFacture: string
      typeFactureLibelle: string
    }
  }>
  modeDePaiement: {
    prelevement: boolean
  }

}
