import axios, { AxiosInstance } from 'axios'
import { Consumption, ConsumptionNationale } from './entities/Consumption'
import { Dashboard } from './entities/Dashboard'
import { Equipement, EquipementDetail } from './entities/Equipement'
import { Facturation } from './entities/Facturation'
import { FicheMonCompte } from './entities/FicheMonCompte'
import { InfoPersonnelles } from './entities/InfoPersonnelles'
import { LoginResponse } from './entities/LoginResponse'
import { OptionsCatalog } from './entities/OptionsCatalog'
import { OptionsList } from './entities/OptionsList'
import { Parc } from './entities/Parc'
import { Notification, NotificationsCount } from './entities/Notifications'
import { AchatsAbonnements } from './entities/AchatsAbonnements'
import { OptionsAchat } from './entities/OptionsAchat'
import { OptionDetail } from './entities/OptionDetail'
import { OptionsCatalogDetail } from './entities/OptionsCatalogDetail'
import { Stream } from 'stream'
import { VerifyUsernameResponse } from './entities/VerifyUsernameResponse'
import { OTPSMSResponse } from './entities/OTPSMSResponse'
import { OffreAmes } from './entities/OffreAmes'
import { FacturationFixe } from './entities/FacturationFixe'
import { InfosClientFixe } from './entities/InfosClientFixe'
import { InfosTerminalIMEI } from './entities/InfosTerminalIMEI'
import { InfosTerminal } from './entities/InfosTerminal'

export enum Universe {
  SFR = 'SFR',
  RED = 'RED'
}

export enum Environment {
  MOBILE = 'MOBILE',
  FIXE = 'FIXE',
  BOTH = 'BOTH'
}

/**
 * Support non-officiel de l'API mobile de SFR/RED.
 * Les identifiants utilisés sont les mêmes que pour se connecter sur le site de l'opérateur.
 */
export class SfrMobile {
  private readonly instance: AxiosInstance

  /**
   * @param {string} casauthenticationtoken Jeton temporaire d'authentification
   * @example ```js
   * const { SfrMobile } = require('sfrmobile-api')
   *
   * SfrMobile.login(username, password).then(({ token }) => {
   *    const user = new SfrMobile(token)
   *    // Votre code
   * })
   * ```
   */
  constructor (casauthenticationtoken: string) {
    this.instance = axios.create({
      headers: {
        casauthenticationtoken
      }
    })
  }

  /**
   * Obtenir un jeton d'authentification auprès du CAS de SFR
   * @param {string} username Identifiant du compte
   * @param {string} password Mot de passe du compte
   * @param {number} duration Durée de validité du jeton demandé en secondes
   * @param {Universe} universe SFR/RED
   * @return {Promise<LoginResponse>}
   * @static
   */
  public static async login (username: string, password: string, duration: number = 86400, universe: Universe = Universe.SFR): Promise<LoginResponse> {
    return (await axios.get('https://www.sfr.fr/cas/services/rest/3.2/createToken.json', {
      params: { duration },
      auth: {
        username, password
      },
      headers: {
        secret: `Basic ${Buffer.from(universe === Universe.SFR ? 'SFRETMoiAndroidV1:windows1980' : 'REDETMoiAndroidV1:android2019').toString('base64')}`
      }
    })).data.createToken
  }

  /**
   * Tester la validité d'un nom d'utilisateur
   * @param {string} username Nom d'utilisateur à tester
   * @param {Universe?} universe SFR/RED
   * @returns {Promise<VerifyUsernameResponse>}
   * @static
   */
  public static async verifyUsername (username: string, universe: Universe = Universe.SFR): Promise<VerifyUsernameResponse> {
    return (await axios.get(`https://selfcare-webservices.sfr.fr/securite-compte-mid/login/smartphones/2.0/verification/${username}`, {
      auth: universe === Universe.SFR ? { username: 'SFRETMoiAndroidV1', password: 'windows1980' } : { username: 'REDETMoiAndroidV1', password: 'android2019' }
    })).data
  }

  /**
   * Description du terminal associé à un IMEI
   * @param {string} imei Identifiant du terminal mobile
   * @returns {Promise<InfosTerminalIMEI>}
   */
  public static async getTerminalInfoIMEI (imei: string): Promise<InfosTerminalIMEI> {
    return (await axios.get(`https://selfcare-webservices.sfr.fr/webservices/infosterminal/services/rest/1.0/infosterminal/${imei}`)).data
  }

  /**
   * Description du terminal associé à un identifiant
   * @param {string} id Identifiant
   * @param {'BACARAT' | 'TAC'} type Type d'identifiant
   * @returns {Promise<InfosTerminal>}
   */
  public static async getTerminalInfo (id: string, type: 'BACARAT' | 'TAC'): Promise<InfosTerminal> {
    return (await axios.get(`https://selfcare-webservices.sfr.fr/webservices/infosterminal/services/rest/1.0/terminal/${id}`, {
      params: { type }
    })).data
  }

  /**
   * Description des terminaux associés à leur identifiant
   * @param {string[]} ids Identifiants
   * @param {'BACARAT' | 'TAC'} type Type d'identifiant
   * @returns {Promise<Array<InfosTerminal>>}
   */
  public static async getTerminauxInfo (ids: string[], type: 'BACARAT' | 'TAC'): Promise<InfosTerminal[]> {
    return (await axios.get(`https://selfcare-webservices.sfr.fr/webservices/infosterminal/services/rest/1.0/terminaux/${ids.join(',')}`, {
      params: { type }
    })).data
  }

  /**
   * Consommation générale de la ligne
   * @param {string} line MSISDN de la ligne à sélectionner
   * @return {Promise<Consumption>}
   */
  public async getConso (line: string): Promise<Consumption> {
    return (await this.instance({
      url: `https://selfcare-webservices.sfr.fr/infoconso-mobile-mid/rest/smartphones/4.0/conso/${line}`
    })).data.reponse
  }

  /**
   * Historique de la consommation sur le territoire national
   * @param line MSISDN de la ligne à sélectionner
   */
  public async getConsoNationale (line: string): Promise<ConsumptionNationale> {
    return (await this.instance({
      url: `https://selfcare-webservices.sfr.fr/infoconso-mobile-mid/rest/smartphones/4.0/historique/nationale/${line}`
    })).data.reponse
  }

  /**
   * Historique de facturation d'une ligne mobile
   * @param {string} line MSISDN de la ligne mobile à sélectionner
   * @param {number} duration Nombre de périodes de facturation (6,12,18,24)
   * @return {Promise<Facturation>}
   */
  public async getFacturationMobile (line: string, duration: 6|12|18|24 = 6): Promise<Facturation> {
    return (await this.instance({
      url: `https://selfcare-webservices.sfr.fr/facture-mobile-ws/consultation/smartphones/2.5/${line}`,
      params: { duration }
    })).data.reponse
  }

  /**
   * Télécharger la facture d'une ligne mobile
   * @param {string} line MSISDN de la ligne mobile à sélectionner
   * @param {string} numeroFacture Identifiant de la facture de la ligne mobile
   * @param {boolean} fadet Facture détaillée
   * @return {Promise<Stream>}
   */
  public async downloadFactureMobile (line: string, numeroFacture: string, fadet: boolean = false): Promise<Stream> {
    return (await this.instance({
      url: `https://selfcare-webservices.sfr.fr/facture-mobile-ws/consultation/smartphones/2.5/${line}/sfr-facture${fadet ? '-detail-' : '-'}${numeroFacture}.pdf`,
      responseType: 'stream'
    })).data
  }

  /**
 * Historique de facturation d'une ligne fixe
 * @param {string} line NDI de la ligne fixe
 * @param {number} duration Nombre de périodes de facturation (6,12,18,24)
 * @returns {Promise<FacturationFixe>}
 */
  public async getFacturationFixe (line: string, duration: 6|12|18|24 = 6): Promise<FacturationFixe> {
    return (await this.instance({
      url: `https://selfcare-webservices.sfr.fr/facture-fixe-mid/services/rest/2.0/consulterfactures/${line}`,
      params: { duration }
    })).data
  }

  /**
   * Télécharger la facture d'une ligne fixe
   * @param {string} line NDI de la ligne fixe
   * @param {string} idFact Identifiant de la facture de la ligne fixe
   * @return {Promise<Stream>}
   */
  public async downloadFactureFixe (line: string, idFact: string): Promise<Stream> {
    return (await this.instance({
      url: `https://selfcare-webservices.sfr.fr/webservices/infosclientfixe/services/rest/1.0/facture/${line}`,
      params: { idFact },
      responseType: 'stream'
    })).data
  }

  /**
   * Détails de la ligne fixe
   * @param {string|undefined} line NDI de la ligne fixe
   * @returns {Promise<InfosClientFixe>}
   */
  public async getInfosClientFixe (line?: string): Promise<InfosClientFixe> {
    return (await this.instance({
      url: `https://selfcare-webservices.sfr.fr/webservices/infosclientfixe/services/rest/1.0/infosclientfixe/${line ?? ''}`
    })).data
  }

  /**
   * Fiche descriptive du compte de l'utilisateur courant
   * @return {Promise<FicheMonCompte>}
   */
  public async getFicheMonCompte (): Promise<FicheMonCompte> {
    const req = await this.instance({
      url: `https://www.sfr.fr/webservices/userprofile/rest/moncompte/${Date.now()}`
    })
    if (!req.headers['content-type'].includes('application/json')) throw new Error('Unauthorized')
    return req.data.ficheMonCompte
  }

  /**
   * Informations générales de la ligne
   * @param line MSISDN de la ligne à sélectionner
   * @return {Promise<Dashboard>}
   */
  public async getDashboard (line: string): Promise<Dashboard> {
    return (await this.instance({
      url: `https://selfcare-webservices.sfr.fr/dashboard-mid/rest/smartphones/2.0/dashboard/${line}`
    })).data.reponse
  }

  /**
   * Informations personnelles concernant la ligne
   * @param line MSISDN de la ligne à sélectionner
   * @return {Promise<InfoPersonnelles>}
   */
  public async getInfosPersonnelles (line: string): Promise<InfoPersonnelles> {
    return (await this.instance({
      url: `https://espace-client.sfr.fr/services-admin/infopersonnelles/services/rest/2.0/${line}`
    })).data
  }

  /**
   * Nombre de notifications de l'utilisateur
  * @return {Promise<NotificationsCount>}
  */
  public async getNotificationsCount (): Promise<NotificationsCount> {
    return (await this.instance({
      url: 'https://espace-client.sfr.fr/espace-client-mid/notification/1.0/count',
      params: { platform: 'smartphones' }
    })).data
  }

  /**
   * Lister les notifications de l'utilisateur
   * @return {Promise<{notifications: Notification[]}>}
   */
  public async getNotifications (): Promise<{notifications: Notification[]}> {
    return (await this.instance({
      url: 'https://espace-client.sfr.fr/espace-client-mid/notification/1.0',
      params: { platform: 'smartphones' }
    })).data
  }

  /**
   * Liste des équipements mis à disposition pour une ligne
   * @param {string} line MSISDN de la ligne à sélectionner
   * @param {Universe|string} universe SFR/RED
   * @return {Promise<Equipement>}
   */
  public async getEquipements (line: string, universe: Universe|string = Universe.SFR): Promise<Equipement> {
    return (await this.instance({
      url: 'https://www.sfr.fr/webservices/parc/v1/APPLI_MOBILE/equipement',
      params: { line, universe }
    })).data
  }

  /**
   * Détail d'une option souscrite
   * @param {string} line MSISDN de la ligne à sélectionner
   * @param {Universe|string} universe SFR/RED
   * @param {Environment|string} environment Type de ligne
   * @param {string} option Identifiant de l'option
   * @return {Promise<OptionDetail>}
   */
  public async getOptionDetail (line: string, universe: Universe|string, environment: Environment|string, option: string): Promise<OptionDetail> {
    return (await this.instance({
      url: `https://www.sfr.fr/webservices/parc/v1/APPLI_MOBILE/option/${option}`,
      params: { line, environment, universe }
    })).data
  }

  /**
   * Catalogue des catégories d'options disponibles pour une ligne
   * @param {string} line MSISDN de la ligne à sélectionner
   * @return {Promise<OptionsCatalog>}
   */
  public async getOptionsCatalog (line: string): Promise<OptionsCatalog> {
    return (await this.instance({
      url: 'https://www.sfr.fr/webservices/options/v1/APPLI_MOBILE/catalog',
      params: { line }
    })).data
  }

  /**
   * Catalogue détaillé des catégories d'options disponibles pour une ligne
   * @param {string} line MSISDN de la ligne à sélectionner
   * @return {Promise<OptionsCatalogDetail>}
   */
  public async getOptionsCatalogDetail (line: string): Promise<OptionsCatalogDetail> {
    return (await this.instance({
      url: 'https://www.sfr.fr/webservices/options/v1/APPLI_MOBILE/catalog/details',
      params: { line }
    })).data
  }

  /**
   * Lister les options disponibles dans une catégorie
   * @param {string} line MSISDN de la ligne à sélectionner
   * @param {string} category Catégorie d'option
   * @return {Promise<OptionsList>}
   */
  public async getOptions (line: string, category: string): Promise<OptionsList> {
    return (await this.instance({
      url: `https://www.sfr.fr/webservices/options/v1/APPLI_MOBILE/category/${category}`,
      params: { line }
    })).data
  }

  /**
   * Obtenir la description complète de l'équipement
   * @param {string} line MSISDN de la ligne à sélectionner
   * @param {string} optionCode Identifiant de l'option d'équipement
   * @param {Universe|string} universe SFR/RED
   * @return {Promise<EquipementDetail>}
   */
  public async getEquipementDetail (line: string, optionCode: string, universe: Universe|string = Universe.SFR): Promise<EquipementDetail> {
    return (await this.instance({
      url: `https://www.sfr.fr/webservices/options/v1/APPLI_MOBILE/equipement/${optionCode}`,
      params: { line, optionCode, universe }
    })).data
  }

  /**
   * Détails de l'offre d'une ligne
   * @param {string} line MSISDN de la ligne à sélectionner
   * @param {Universe|string} universe SFR/RED
   * @param {Environment|string} environment Type de ligne
   * @return {Promise<Parc>}
   */
  public async getParc (line: string, universe: Universe|string = Universe.SFR, environment: Environment|string = Environment.MOBILE): Promise<Parc> {
    return (await this.instance({
      url: 'https://www.sfr.fr/webservices/parc/v1/APPLI_MOBILE/parc',
      params: { line, environment, universe }
    })).data
  }

  /**
   * Liste des achats et abonnements (hors forfait) sur la ligne
   * @param line MSISDN de la ligne à sélectionner
   * @return {Promise<AchatsAbonnements>}
   */
  public async getPaiementTiersAchatsAbonnements (line: string): Promise<AchatsAbonnements> {
    return (await this.instance({
      url: `https://selfcare-webservices.sfr.fr/webservices/paiement-tiers/services/rest/smartphones/2.0/achats-abonnements/consulterV2/${line}`
    })).data.reponse
  }

  /**
   * Droits d'achat sur la ligne (Stores, jeux, ...)
   * @param line MSISDN de la ligne à sélectionner
   * @return {Promise<OptionsAchat>}
   */
  public async getPaiementTiersOptionsAchat (line: string): Promise<OptionsAchat> {
    return (await this.instance({
      url: `https://selfcare-webservices.sfr.fr/webservices/paiement-tiers/services/rest/smartphones/2.0/options-achat/consultation/${line}`
    })).data.reponse
  }

  /**
   * Mettre à jour les droits d'achat sur la ligne
   * @param {string} selectedLine MSISDN de la ligne à sélectionner
   * @param {string} otp Code à usage unique obtenu avec getOTPSMS()
   * @param {OptionsAchat} data Droits d'achats à permuter
   */
  public async postPaiementTiersOptionsAchat (selectedLine: string, otp: string, data: OptionsAchat): Promise<any> {
    return (await this.instance({
      method: 'POST',
      url: 'https://selfcare-webservices.sfr.fr/webservices/paiement-tiers/services/rest/smartphones/2.0/options-achat/modification',
      params: { platform: 'smartphones', selectedLine, typeActe: 'optionsAchats' },
      headers: {
        'Content-Type': 'application/json',
        code: otp
      },
      data
    })).data
  }

  /**
   * Obtenir un code à usage unique pour effectuer une opération
   * @param line MSISDN de la ligne à sélectionner
   * @return {Promise<OTPSMSResponse>}
   */
  public async getOTPSMS (line: string): Promise<OTPSMSResponse> {
    return (await this.instance({
      url: `https://espace-client.sfr.fr/services-securite/rest/1.0/checkUrl/${line}`
    })).data
  }

  /**
 * Informations sur les remises Multi-Pack
 * @param line MSISDN de la ligne à sélectionner
 * @returns {Promise<OffreAmes>}
 */
  public async getOffreAMES (line: string): Promise<OffreAmes> {
    return (await this.instance({
      url: 'https://www.sfr.fr/webservices/selfcare/offre-ws/rest/public/v41/ames',
      params: { ligne: line }
    })).data
  }
}
