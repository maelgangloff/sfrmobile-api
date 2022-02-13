export interface FicheMonCompte {
  civilite: string
  cogeres: any[]
  commandes: any[]
  compteWebFixeAdmin: boolean | null
  emailDeContactFixe: null | string
  emailDeContactMobile: null | string
  emailDeSecours: null | string
  empreinte: {
    etat: string
    date: string
  }
  idAsc: string
  ligneGestionnaire?: FicheMonCompte[]
  lignesEnGestion?: any[]
  lignesFixes: Array<{
    boxImg: string
    crmid: string
    dateActivation: string
    dateCreation: string
    decodeurImg: string
    decodeurTV: boolean
    facturationData: {
      adresse: Adresse
    }
    gamme: string
    isNumericable: boolean
    libelleCommercialBox: string
    libelleCommercialDecodeur: string
    libelleOffreSouscrite: string
    multipackId: string
    multipackRemiseGroupe: number
    multipackRemiseLigne: number
    ndi: string
    optionsSouscrites: Array<{
      codeOption: string
      libelle: null | string
    }>
    profilPSW: string
    statutJoya: string
    technoLigne: string
    utilisateurData: {
      adresse: Adresse
    }
  }>
  lignesMobiles: Array<{
    box4G: boolean
    facturationData: {
      adresse: Adresse
    }
    gammeTarifaire: string
    libelleForfait: string
    msisdn: string
    multipackId: null
    multipackRemiseGroupe: null
    multipackRemiseLigne: null
    numeroContrat: string
    offreYellow: null
    optionsSouscrites: Array<{
      codeProduit: string
      libelleCourt: string
    }>
    profilPSW: string
    segment: string
    statutJoya: null
    telephoneMobileIdBacarat: null
    telephoneMobileImei: string
    telephoneMobileTac: string
    utilisateurData: {
      adresse: Adresse
    }
  }>
  logins: string[]
  may: boolean
  nom: string
  prenom: string
  srr: boolean
  telephoneFixeDeContact: null | string
  telephoneMobileDeContact: string
  telephoneMobileDeSecours: string
}

export interface Adresse {
  adresse: string
  codePostal: string
  localite: string
}
