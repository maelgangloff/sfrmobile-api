export interface InfosClientFixe {
  isAdmin: boolean
  red4P: boolean
  consoHorsForfait: {
    montantHT: string
    montantTTC: string
    date: string
  }
  factures: any[]
  lignes: Array<{
    consoForfaitLimite: null
    consoLigne: Array<{
      destination: string
      creditConsomme: string
    }>
    god: any[]
    vod: any[]
    optionsSouscrites: Array<{
      codeOption: string
      libelleOption: string
      typeOption: string
    }>
    optionsComprises: any[]
    offre: {
      detail: {
        internetOptions: any[]
        telephonieOptions: any[]
        tvOptions: string[]
      }
      codeOffre: string
      gamme: string
      libelleOffre: string
    }
    ligne: string
    profilPsw: string
    optionInfoConso: boolean
    red4P: boolean
  }>
  idclient: string
  segment: string
  systemeFacturation: string
}
