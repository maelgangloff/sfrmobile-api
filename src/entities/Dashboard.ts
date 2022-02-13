export interface Dashboard {
  numeroLigne: string
  libelleOffre: string
  dateDebutPeriode: string
  dateFinPeriode: string
  dateDebutPeriodeSuivante: string
  montantDerniereFacture: string
  dateDerniereFacture: string
  enCours: EnCour[]
}

export interface Carbone {
  conso: EnCour
}

export interface EnCour {
  titre?: string
  type: string
  ordre: number
  presentationEC: string
  phraseSansVal?: string
  valeurs: Valeur[]
  jauge?: Jauge
  carbone?: Carbone
}

export interface Jauge {
  type: string
  valeurs: Valeur[]
}

export interface Valeur {
  index: number
  type: string
  unite: string
  libelle: string
  quantite: number
}
