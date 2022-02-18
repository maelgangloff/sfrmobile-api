import { InfosTerminalIMEI } from './InfosTerminalIMEI'

export interface InfosTerminal extends InfosTerminalIMEI {
  autofocus: boolean
  enregistrementVideo: boolean
  appareilPhoto: string | null
  assistGuide?: any
  assistSupport?: any
  assistVideo?: any
  categorie: string | null
  conditionsHotline?: any
  dimensionsEcran: string | null
  ecranTactile: string | null
  famille?: string | null
  formatCarteSIM: string
  hotlineConstructeur?: any
  nbCouleursEcran: string | null
  openOS: string | null
  openOSVersion: string | null
  resolutionCamera: string | null
  resolutionEcran: string | null
  tailleMemoireInterne: string | null
  zoomNumerique: string | null
}
