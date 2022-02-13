export interface EquipementDetail {
  code: string
  label: string
  shortDescription: string
  picUrl: string
  linkedOptionCode: string
  longDescription?: string
}

export interface Equipement {
  idResponse: string
  equipements: EquipementDetail[]
  pushOptions: []
}
