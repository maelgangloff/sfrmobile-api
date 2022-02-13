export interface Facturation {
  factures: Array<{
    dateFacture: string
    sommaire: {
      montantTotal: string
      valeurFacture: string
      dateLimitePrelevement: string
      sections: Array<{
        rubriques: Array<{
          montant: string
          nom: string
        }>
        type: string
        nom: null
      }>
    }
    numeroFacture: string
    reference: string
    documentId: string
    documentDetailId: string
    hasFadetPDF: boolean
    location: boolean
    natureDocument: string
    typeFacture: {
      typeFacture: string
      typeFactureLibelle: string
    }
    hasFadetXML: boolean
    compteDeFacturation: string
    id: number
  }>
  modePaiement: {
    adresseFacturation: {
      adresse: string
      codePostal: string
      localite: string
    }
    prelevement: boolean
  }
  emailDemat: string
  canAccessBilanConso: boolean
  canAccessFadetHTML: boolean
  canAccessFadetPDF: boolean
  fadetHTMLDixChiffres: boolean
  hasPlusDeFactures: boolean
  showNotif: boolean
  hasLocation: boolean
  hasImpaye: boolean
  nombreImpaye: number
  hasPaiementEnRetard: boolean
  hasPlusieursImpayes: boolean
  hasEcheancier: boolean
  financements: any[]
  demat: boolean
}
