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
import { Notifications } from './entities/Notifications'
import { AchatsAbonnements } from './entities/AchatsAbonnements'
import { OptionsAchat } from './entities/OptionsAchat'

export enum Universe {
  SFR = 'SFR',
  RED = 'RED'
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
   * @static
   */
  public static async login (username: string, password: string, duration: number = 86400): Promise<LoginResponse> {
    return (await axios.get('https://www.sfr.fr/cas/services/rest/3.2/createToken.json', {
      params: { duration },
      auth: {
        username, password
      },
      headers: {
        secret: `Basic ${Buffer.from('REDETMoiAndroidV1:android2019').toString('base64')}`
      }
    })).data.createToken
  }

  /**
   * Consommation générale de la ligne
   * @param {string} line MSISDN de la ligne à sélectionner
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
 * Historique de facturation de la ligne
 * @param {string} line MSISDN de la ligne à sélectionner
 * @param {number} duration Nombre de périodes de facturation (6,12,18,24)
 */
  public async getFacturation (line: string, duration: 6|12|18|24 = 6): Promise<Facturation> {
    return (await this.instance({
      url: `https://selfcare-webservices.sfr.fr/facture-mobile-ws/consultation/smartphones/2.5/${line}`,
      params: { duration }
    })).data.reponse
  }

  /**
   * Fiche descriptive du compte de l'utilisateur courrant
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
   */
  public async getDashboard (line: string): Promise<Dashboard> {
    return (await this.instance({
      url: `https://selfcare-webservices.sfr.fr/dashboard-mid/rest/smartphones/2.0/dashboard/${line}`
    })).data.reponse
  }

  /**
   * Informations personnelles concernant la ligne
   * @param line MSISDN de la ligne à sélectionner
   */
  public async getInfosPersonnelles (line: string): Promise<InfoPersonnelles> {
    return (await this.instance({
      url: `https://espace-client.sfr.fr/services-admin/infopersonnelles/services/rest/2.0/${line}`
    })).data
  }

  /**
 * Notifications de l'utilisateur courant
 */
  public async getNotifications (): Promise<Notifications> {
    return (await this.instance({
      url: 'https://espace-client.sfr.fr/espace-client-mid/notification/1.0/count',
      params: { platform: 'smartphones' }
    })).data
  }

  /**
   * Liste des équipements mis à disposition pour une ligne
   * @param {string} line MSISDN de la ligne à sélectionner
   * @param {Universe} universe SFR/RED
   */
  public async getEquipements (line: string, universe: Universe = Universe.SFR): Promise<Equipement> {
    return (await this.instance({
      url: 'https://www.sfr.fr/webservices/parc/v1/APPLI_MOBILE/equipement',
      params: { line, universe }
    })).data
  }

  /**
   * Catalogue des catégories d'options
   * @param {string} line MSISDN de la ligne à sélectionner
   */
  public async getOptionsCatalog (line: string): Promise<OptionsCatalog> {
    return (await this.instance({
      url: 'https://www.sfr.fr/webservices/options/v1/APPLI_MOBILE/catalog',
      params: { line }
    })).data
  }

  /**
   * Lister les options disponibles dans une catégorie
   * @param {string} line MSISDN de la ligne à sélectionner
   * @param {string} category Catégorie d'option
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
   * @param {string} universe SFR/RED
   */
  public async getEquipementDetail (line: string, optionCode: string, universe: Universe = Universe.SFR): Promise<EquipementDetail> {
    return (await this.instance({
      url: `https://www.sfr.fr/webservices/options/v1/APPLI_MOBILE/equipement/${optionCode}`,
      params: { line, optionCode, universe }
    })).data
  }

  /**
   * Détails de l'offre d'une ligne
   * @param {string} line MSISDN de la ligne à sélectionner
   * @param {string} universe SFR/RED
   * @param {string} environment Environnement de l'utilisateur (MOBILE)
   */
  public async getParc (line: string, universe: Universe = Universe.SFR, environment: string = 'MOBILE'): Promise<Parc> {
    return (await this.instance({
      url: 'https://www.sfr.fr/webservices/parc/v1/APPLI_MOBILE/parc',
      params: { line, environment, universe }
    })).data
  }

  /**
   * Liste des achats et abonnements (hors forfait) sur la ligne
   * @param line MSISDN de la ligne à sélectionner
   */
  public async getPaiementTiersAchatsAbonnements (line: string): Promise<AchatsAbonnements> {
    return (await this.instance({
      url: `https://selfcare-webservices.sfr.fr/webservices/paiement-tiers/services/rest/smartphones/2.0/achats-abonnements/consulterV2/${line}`
    })).data.reponse
  }

  /**
   * Droits d'achat sur la ligne (Stores, jeux, ...)
   * @param line MSISDN de la ligne à sélectionner
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
   */
  public async getOTPSMS (line: string): Promise<{codeRetour: number, secured: boolean, line: string}> {
    return (await this.instance({
      url: `https://espace-client.sfr.fr/services-securite/rest/1.0/checkUrl/${line}`
    })).data
  }
}
