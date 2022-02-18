<a name="SfrMobile"></a>

## SfrMobile
Support non-officiel de l'API mobile de SFR/RED.
Les identifiants utilisés sont les mêmes que pour se connecter sur le site de l'opérateur.

**Kind**: global class  

* [SfrMobile](#SfrMobile)
    * [new SfrMobile(casauthenticationtoken)](#new_SfrMobile_new)
    * _instance_
        * [.getConso(line)](#SfrMobile+getConso) ⇒ <code>Promise.&lt;Consumption&gt;</code>
        * [.getConsoNationale(line)](#SfrMobile+getConsoNationale) ⇒ <code>Promise.&lt;ConsumptionNationale&gt;</code>
        * [.getFacturationMobile(line, duration)](#SfrMobile+getFacturationMobile) ⇒ <code>Promise.&lt;Facturation&gt;</code>
        * [.downloadFactureMobile(line, numeroFacture, fadet)](#SfrMobile+downloadFactureMobile) ⇒ <code>Promise.&lt;Stream&gt;</code>
        * [.getFacturationFixe(line, duration)](#SfrMobile+getFacturationFixe) ⇒ <code>Promise.&lt;FacturationFixe&gt;</code>
        * [.downloadFactureFixe(line, idFact)](#SfrMobile+downloadFactureFixe) ⇒ <code>Promise.&lt;Stream&gt;</code>
        * [.getInfosClientFixe(line)](#SfrMobile+getInfosClientFixe) ⇒ <code>Promise.&lt;InfosClientFixe&gt;</code>
        * [.getFicheMonCompte()](#SfrMobile+getFicheMonCompte) ⇒ <code>Promise.&lt;FicheMonCompte&gt;</code>
        * [.getDashboard(line)](#SfrMobile+getDashboard) ⇒ <code>Promise.&lt;Dashboard&gt;</code>
        * [.getInfosPersonnelles(line)](#SfrMobile+getInfosPersonnelles) ⇒ <code>Promise.&lt;InfoPersonnelles&gt;</code>
        * [.getNotificationsCount()](#SfrMobile+getNotificationsCount) ⇒ <code>Promise.&lt;NotificationsCount&gt;</code>
        * [.getNotifications()](#SfrMobile+getNotifications) ⇒ <code>Promise.&lt;{notifications: Array.&lt;Notification&gt;}&gt;</code>
        * [.getEquipements(line, universe)](#SfrMobile+getEquipements) ⇒ <code>Promise.&lt;Equipement&gt;</code>
        * [.getOptionDetail(line, universe, environment, option)](#SfrMobile+getOptionDetail) ⇒ <code>Promise.&lt;OptionDetail&gt;</code>
        * [.getOptionsCatalog(line)](#SfrMobile+getOptionsCatalog) ⇒ <code>Promise.&lt;OptionsCatalog&gt;</code>
        * [.getOptionsCatalogDetail(line)](#SfrMobile+getOptionsCatalogDetail) ⇒ <code>Promise.&lt;OptionsCatalogDetail&gt;</code>
        * [.getOptions(line, category)](#SfrMobile+getOptions) ⇒ <code>Promise.&lt;OptionsList&gt;</code>
        * [.getEquipementDetail(line, optionCode, universe)](#SfrMobile+getEquipementDetail) ⇒ <code>Promise.&lt;EquipementDetail&gt;</code>
        * [.getParc(line, universe, environment)](#SfrMobile+getParc) ⇒ <code>Promise.&lt;Parc&gt;</code>
        * [.getPaiementTiersAchatsAbonnements(line)](#SfrMobile+getPaiementTiersAchatsAbonnements) ⇒ <code>Promise.&lt;AchatsAbonnements&gt;</code>
        * [.getPaiementTiersOptionsAchat(line)](#SfrMobile+getPaiementTiersOptionsAchat) ⇒ <code>Promise.&lt;OptionsAchat&gt;</code>
        * [.postPaiementTiersOptionsAchat(selectedLine, otp, data)](#SfrMobile+postPaiementTiersOptionsAchat)
        * [.getOTPSMS(line)](#SfrMobile+getOTPSMS) ⇒ <code>Promise.&lt;OTPSMSResponse&gt;</code>
        * [.getOffreAMES(line)](#SfrMobile+getOffreAMES) ⇒ <code>Promise.&lt;OffreAmes&gt;</code>
    * _static_
        * [.login(username, password, duration, universe)](#SfrMobile.login) ⇒ <code>Promise.&lt;LoginResponse&gt;</code>
        * [.verifyUsername(username, universe)](#SfrMobile.verifyUsername) ⇒ <code>Promise.&lt;VerifyUsernameResponse&gt;</code>
        * [.getTerminalInfoIMEI(imei)](#SfrMobile.getTerminalInfoIMEI) ⇒ <code>Promise.&lt;InfosTerminalIMEI&gt;</code>
        * [.getTerminalInfo(id, type)](#SfrMobile.getTerminalInfo) ⇒ <code>Promise.&lt;InfosTerminal&gt;</code>
        * [.getTerminauxInfo(ids, type)](#SfrMobile.getTerminauxInfo) ⇒ <code>Promise.&lt;Array.&lt;InfosTerminal&gt;&gt;</code>

<a name="new_SfrMobile_new"></a>

### new SfrMobile(casauthenticationtoken)

| Param | Type | Description |
| --- | --- | --- |
| casauthenticationtoken | <code>string</code> | Jeton temporaire d'authentification |

**Example**  
```js
const { SfrMobile } = require('sfrmobile-api')

SfrMobile.login(username, password).then(({ token }) => {
   const user = new SfrMobile(token)
   // Votre code
})
```
<a name="SfrMobile+getConso"></a>

### sfrMobile.getConso(line) ⇒ <code>Promise.&lt;Consumption&gt;</code>
Consommation générale de la ligne

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>string</code> | MSISDN de la ligne à sélectionner |

<a name="SfrMobile+getConsoNationale"></a>

### sfrMobile.getConsoNationale(line) ⇒ <code>Promise.&lt;ConsumptionNationale&gt;</code>
Historique de la consommation sur le territoire national

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Description |
| --- | --- |
| line | MSISDN de la ligne à sélectionner |

<a name="SfrMobile+getFacturationMobile"></a>

### sfrMobile.getFacturationMobile(line, duration) ⇒ <code>Promise.&lt;Facturation&gt;</code>
Historique de facturation d'une ligne mobile

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| line | <code>string</code> |  | MSISDN de la ligne mobile à sélectionner |
| duration | <code>number</code> | <code>6</code> | Nombre de périodes de facturation (6,12,18,24) |

<a name="SfrMobile+downloadFactureMobile"></a>

### sfrMobile.downloadFactureMobile(line, numeroFacture, fadet) ⇒ <code>Promise.&lt;Stream&gt;</code>
Télécharger la facture d'une ligne mobile

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| line | <code>string</code> |  | MSISDN de la ligne mobile à sélectionner |
| numeroFacture | <code>string</code> |  | Identifiant de la facture de la ligne mobile |
| fadet | <code>boolean</code> | <code>false</code> | Facture détaillée |

<a name="SfrMobile+getFacturationFixe"></a>

### sfrMobile.getFacturationFixe(line, duration) ⇒ <code>Promise.&lt;FacturationFixe&gt;</code>
Historique de facturation d'une ligne fixe

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| line | <code>string</code> |  | NDI de la ligne fixe |
| duration | <code>number</code> | <code>6</code> | Nombre de périodes de facturation (6,12,18,24) |

<a name="SfrMobile+downloadFactureFixe"></a>

### sfrMobile.downloadFactureFixe(line, idFact) ⇒ <code>Promise.&lt;Stream&gt;</code>
Télécharger la facture d'une ligne fixe

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>string</code> | NDI de la ligne fixe |
| idFact | <code>string</code> | Identifiant de la facture de la ligne fixe |

<a name="SfrMobile+getInfosClientFixe"></a>

### sfrMobile.getInfosClientFixe(line) ⇒ <code>Promise.&lt;InfosClientFixe&gt;</code>
Détails de la ligne fixe

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>string</code> \| <code>undefined</code> | NDI de la ligne fixe |

<a name="SfrMobile+getFicheMonCompte"></a>

### sfrMobile.getFicheMonCompte() ⇒ <code>Promise.&lt;FicheMonCompte&gt;</code>
Fiche descriptive du compte de l'utilisateur courant

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  
<a name="SfrMobile+getDashboard"></a>

### sfrMobile.getDashboard(line) ⇒ <code>Promise.&lt;Dashboard&gt;</code>
Informations générales de la ligne

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Description |
| --- | --- |
| line | MSISDN de la ligne à sélectionner |

<a name="SfrMobile+getInfosPersonnelles"></a>

### sfrMobile.getInfosPersonnelles(line) ⇒ <code>Promise.&lt;InfoPersonnelles&gt;</code>
Informations personnelles concernant la ligne

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Description |
| --- | --- |
| line | MSISDN de la ligne à sélectionner |

<a name="SfrMobile+getNotificationsCount"></a>

### sfrMobile.getNotificationsCount() ⇒ <code>Promise.&lt;NotificationsCount&gt;</code>
Nombre de notifications de l'utilisateur

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  
<a name="SfrMobile+getNotifications"></a>

### sfrMobile.getNotifications() ⇒ <code>Promise.&lt;{notifications: Array.&lt;Notification&gt;}&gt;</code>
Lister les notifications de l'utilisateur

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  
<a name="SfrMobile+getEquipements"></a>

### sfrMobile.getEquipements(line, universe) ⇒ <code>Promise.&lt;Equipement&gt;</code>
Liste des équipements mis à disposition pour une ligne

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>string</code> | MSISDN de la ligne à sélectionner |
| universe | <code>Universe</code> \| <code>string</code> | SFR/RED |

<a name="SfrMobile+getOptionDetail"></a>

### sfrMobile.getOptionDetail(line, universe, environment, option) ⇒ <code>Promise.&lt;OptionDetail&gt;</code>
Détail d'une option souscrite

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>string</code> | MSISDN de la ligne à sélectionner |
| universe | <code>Universe</code> \| <code>string</code> | SFR/RED |
| environment | <code>Environment</code> \| <code>string</code> | Type de ligne |
| option | <code>string</code> | Identifiant de l'option |

<a name="SfrMobile+getOptionsCatalog"></a>

### sfrMobile.getOptionsCatalog(line) ⇒ <code>Promise.&lt;OptionsCatalog&gt;</code>
Catalogue des catégories d'options disponibles pour une ligne

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>string</code> | MSISDN de la ligne à sélectionner |

<a name="SfrMobile+getOptionsCatalogDetail"></a>

### sfrMobile.getOptionsCatalogDetail(line) ⇒ <code>Promise.&lt;OptionsCatalogDetail&gt;</code>
Catalogue détaillé des catégories d'options disponibles pour une ligne

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>string</code> | MSISDN de la ligne à sélectionner |

<a name="SfrMobile+getOptions"></a>

### sfrMobile.getOptions(line, category) ⇒ <code>Promise.&lt;OptionsList&gt;</code>
Lister les options disponibles dans une catégorie

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>string</code> | MSISDN de la ligne à sélectionner |
| category | <code>string</code> | Catégorie d'option |

<a name="SfrMobile+getEquipementDetail"></a>

### sfrMobile.getEquipementDetail(line, optionCode, universe) ⇒ <code>Promise.&lt;EquipementDetail&gt;</code>
Obtenir la description complète de l'équipement

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>string</code> | MSISDN de la ligne à sélectionner |
| optionCode | <code>string</code> | Identifiant de l'option d'équipement |
| universe | <code>Universe</code> \| <code>string</code> | SFR/RED |

<a name="SfrMobile+getParc"></a>

### sfrMobile.getParc(line, universe, environment) ⇒ <code>Promise.&lt;Parc&gt;</code>
Détails de l'offre d'une ligne

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>string</code> | MSISDN de la ligne à sélectionner |
| universe | <code>Universe</code> \| <code>string</code> | SFR/RED |
| environment | <code>Environment</code> \| <code>string</code> | Type de ligne |

<a name="SfrMobile+getPaiementTiersAchatsAbonnements"></a>

### sfrMobile.getPaiementTiersAchatsAbonnements(line) ⇒ <code>Promise.&lt;AchatsAbonnements&gt;</code>
Liste des achats et abonnements (hors forfait) sur la ligne

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Description |
| --- | --- |
| line | MSISDN de la ligne à sélectionner |

<a name="SfrMobile+getPaiementTiersOptionsAchat"></a>

### sfrMobile.getPaiementTiersOptionsAchat(line) ⇒ <code>Promise.&lt;OptionsAchat&gt;</code>
Droits d'achat sur la ligne (Stores, jeux, ...)

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Description |
| --- | --- |
| line | MSISDN de la ligne à sélectionner |

<a name="SfrMobile+postPaiementTiersOptionsAchat"></a>

### sfrMobile.postPaiementTiersOptionsAchat(selectedLine, otp, data)
Mettre à jour les droits d'achat sur la ligne

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Type | Description |
| --- | --- | --- |
| selectedLine | <code>string</code> | MSISDN de la ligne à sélectionner |
| otp | <code>string</code> | Code à usage unique obtenu avec getOTPSMS() |
| data | <code>OptionsAchat</code> | Droits d'achats à permuter |

<a name="SfrMobile+getOTPSMS"></a>

### sfrMobile.getOTPSMS(line) ⇒ <code>Promise.&lt;OTPSMSResponse&gt;</code>
Obtenir un code à usage unique pour effectuer une opération

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Description |
| --- | --- |
| line | MSISDN de la ligne à sélectionner |

<a name="SfrMobile+getOffreAMES"></a>

### sfrMobile.getOffreAMES(line) ⇒ <code>Promise.&lt;OffreAmes&gt;</code>
Informations sur les remises Multi-Pack

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Description |
| --- | --- |
| line | MSISDN de la ligne à sélectionner |

<a name="SfrMobile.login"></a>

### SfrMobile.login(username, password, duration, universe) ⇒ <code>Promise.&lt;LoginResponse&gt;</code>
Obtenir un jeton d'authentification auprès du CAS de SFR

**Kind**: static method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| username | <code>string</code> |  | Identifiant du compte |
| password | <code>string</code> |  | Mot de passe du compte |
| duration | <code>number</code> | <code>86400</code> | Durée de validité du jeton demandé en secondes |
| universe | <code>Universe</code> |  | SFR/RED |

<a name="SfrMobile.verifyUsername"></a>

### SfrMobile.verifyUsername(username, universe) ⇒ <code>Promise.&lt;VerifyUsernameResponse&gt;</code>
Tester la validité d'un nom d'utilisateur

**Kind**: static method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Type | Description |
| --- | --- | --- |
| username | <code>string</code> | Nom d'utilisateur à tester |
| universe | <code>Universe</code> | SFR/RED |

<a name="SfrMobile.getTerminalInfoIMEI"></a>

### SfrMobile.getTerminalInfoIMEI(imei) ⇒ <code>Promise.&lt;InfosTerminalIMEI&gt;</code>
Description du terminal associé à un IMEI

**Kind**: static method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Type | Description |
| --- | --- | --- |
| imei | <code>string</code> | Identifiant du terminal mobile |

<a name="SfrMobile.getTerminalInfo"></a>

### SfrMobile.getTerminalInfo(id, type) ⇒ <code>Promise.&lt;InfosTerminal&gt;</code>
Description du terminal associé à un identifiant

**Kind**: static method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Identifiant |
| type | <code>&#x27;BACARAT&#x27;</code> \| <code>&#x27;TAC&#x27;</code> | Type d'identifiant |

<a name="SfrMobile.getTerminauxInfo"></a>

### SfrMobile.getTerminauxInfo(ids, type) ⇒ <code>Promise.&lt;Array.&lt;InfosTerminal&gt;&gt;</code>
Description des terminaux associés à leur identifiant

**Kind**: static method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Type | Description |
| --- | --- | --- |
| ids | <code>Array.&lt;string&gt;</code> | Identifiants |
| type | <code>&#x27;BACARAT&#x27;</code> \| <code>&#x27;TAC&#x27;</code> | Type d'identifiant |

