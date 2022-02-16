import { InfosTerminalIMEI } from './InfosTerminalIMEI'

export interface InfosTerminal extends InfosTerminalIMEI {
  autofocus: boolean
  enregistrementVideo: boolean
  appareilPhoto: string
  assistGuide?: any
  assistSupport?: any
  assistVideo?: any
  categorie: string
  conditionsHotline?: any
  dimensionsEcran: string
  ecranTactile: string
  famille?: any
  formatCarteSIM: string
  hotlineConstructeur?: any
  nbCouleursEcran: string
  openOS: string
  openOSVersion: string
  resolutionCamera: string
  resolutionEcran: string
  tailleMemoireInterne: string
  zoomNumerique: string
}
