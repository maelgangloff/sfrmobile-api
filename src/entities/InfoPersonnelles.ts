export interface InfoPersonnelles {
  numeroContrat: string
  infosPro: null
  nomPrenomTitulaire: string
  adresseContact: Adresse
  adresseFacturation: Adresse
  moyenPaiement: null
  emailContact: string
  telephoneContact: string
  preferencesContact: string
  modePaiement: string
  coordBancaires: string
  referenceMandat: string
  referenceCB: null
  wallet: null
  emailFacturation: string
  tituFictif: boolean
  expirationCB: boolean
  notPrelevement: boolean
  telephoneContactMobile: string
  telephoneContactFixe: null
  mandatCree: boolean
  mandatValide: boolean
  typeMoyenPaiement: string
  blocPro: boolean
  npei: boolean
  npaiadresseFacturation: boolean
  npaiadresseContact: boolean
}

export interface Adresse {
  numeroEtVoie: string
  codePostal: string
  ville: string
  pays: string
}
