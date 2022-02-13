export interface Consumption {
  msisdn: string
  numeroContrat: string
  gammeTarifaire: string
  profilPSW: string
  profilClient: string
  pta: string
  dateDebutPeriode: string
  dateFinPeriode: string
  reinitialisationForfait: Array<{
    type: string
    version: number
    texte: Texte
  }>
  zones: Zone[]
}

export interface Texte {
  libelle: string
  libelleSansValeurs?: string
  valeurs?: Conso[]
}

export interface Conso {
  nom?: string
  unite: string
  libelle: string
  quantite: number
  compteur?: number
}

export interface Zone {
  code: string
  titre?: string
  sousZones?: Zone[]
  conso?: Conso
  items?: Item[]
}

export interface Item {
  code?: string
  titre?: string
  illimite: boolean
  encours: Array<{
    type: string
    version: number
    horsForfait?: AchatsAbonnementsMultimedias
    action?: Action
    achatsAbonnementsMultimedias?: AchatsAbonnementsMultimedias
    texte?: Texte
    jauge?: {
      categorie: string
      min: Conso
      max: Conso
      seuil: number
    }
    carbone?: Texte
    actionCarbone?: Action
    equivalentsCarbone?: {
      titre: string
      conso: Texte
      emisDepuis: Texte
      equivalents: {
        titre: string
        details: Array<{
          code: string
          conso: Texte
          pictoUrl: string
        }>
      }
      ecoGestes: {
        titre: string
        actions: Action[]
      }
    }
  }>
  conso?: Conso
}

export interface AchatsAbonnementsMultimedias {
  libelle: string
  conso: Conso
}

export interface Action {
  code: string
  libelle: string
  uri: string
  format: string
}

export interface ConsumptionNationale {
  dansForfait: Array<{
    dateConso: string
    libelle: string
    unite: string
    valeur: number
  }>
  dateJJ: string
  msisdn: string
  numContrat: string
}
