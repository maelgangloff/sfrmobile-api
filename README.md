<a name="SfrMobile"></a>

## SfrMobile
Support non-officiel de l'API mobile de SFR/RED.Les identifiants utilisés sont les mêmes que pour se connecter sur le site de l'opérateur.

**Kind**: global class  

* [SfrMobile](#SfrMobile)
    * [new SfrMobile(casauthenticationtoken)](#new_SfrMobile_new)
    * _instance_
        * [.getConso(line)](#SfrMobile+getConso)
        * [.getConsoNationale(line)](#SfrMobile+getConsoNationale)
        * [.getFacturation(line, duration)](#SfrMobile+getFacturation)
        * [.getFicheMonCompte()](#SfrMobile+getFicheMonCompte)
        * [.getDashboard(line)](#SfrMobile+getDashboard)
        * [.getInfosPersonnelles(line)](#SfrMobile+getInfosPersonnelles)
        * [.getNotifications()](#SfrMobile+getNotifications)
        * [.getEquipements(line, universe)](#SfrMobile+getEquipements)
        * [.getOptionDetail(line, universe, environment, option)](#SfrMobile+getOptionDetail)
        * [.getOptionsCatalog(line)](#SfrMobile+getOptionsCatalog)
        * [.getOptionsCatalogDetail(line)](#SfrMobile+getOptionsCatalogDetail)
        * [.getOptions(line, category)](#SfrMobile+getOptions)
        * [.getEquipementDetail(line, optionCode, universe)](#SfrMobile+getEquipementDetail)
        * [.getParc(line, universe, environment)](#SfrMobile+getParc)
        * [.getPaiementTiersAchatsAbonnements(line)](#SfrMobile+getPaiementTiersAchatsAbonnements)
        * [.getPaiementTiersOptionsAchat(line)](#SfrMobile+getPaiementTiersOptionsAchat)
        * [.postPaiementTiersOptionsAchat(selectedLine, otp, data)](#SfrMobile+postPaiementTiersOptionsAchat)
        * [.getOTPSMS(line)](#SfrMobile+getOTPSMS)
    * _static_
        * [.login(username, password, duration)](#SfrMobile.login)

<a name="new_SfrMobile_new"></a>

### new SfrMobile(casauthenticationtoken)

| Param | Type | Description |
| --- | --- | --- |
| casauthenticationtoken | <code>string</code> | Jeton temporaire d'authentification |

**Example**  
```jsconst { SfrMobile } = require('sfrmobile-api')SfrMobile.login(username, password).then(({ token }) => {   const user = new SfrMobile(token)   // Votre code})```
<a name="SfrMobile+getConso"></a>

### sfrMobile.getConso(line)
Consommation générale de la ligne

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>string</code> | MSISDN de la ligne à sélectionner |

<a name="SfrMobile+getConsoNationale"></a>

### sfrMobile.getConsoNationale(line)
Historique de la consommation sur le territoire national

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Description |
| --- | --- |
| line | MSISDN de la ligne à sélectionner |

<a name="SfrMobile+getFacturation"></a>

### sfrMobile.getFacturation(line, duration)
Historique de facturation de la ligne

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| line | <code>string</code> |  | MSISDN de la ligne à sélectionner |
| duration | <code>number</code> | <code>6</code> | Nombre de périodes de facturation (6,12,18,24) |

<a name="SfrMobile+getFicheMonCompte"></a>

### sfrMobile.getFicheMonCompte()
Fiche descriptive du compte de l'utilisateur courrant

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  
<a name="SfrMobile+getDashboard"></a>

### sfrMobile.getDashboard(line)
Informations générales de la ligne

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Description |
| --- | --- |
| line | MSISDN de la ligne à sélectionner |

<a name="SfrMobile+getInfosPersonnelles"></a>

### sfrMobile.getInfosPersonnelles(line)
Informations personnelles concernant la ligne

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Description |
| --- | --- |
| line | MSISDN de la ligne à sélectionner |

<a name="SfrMobile+getNotifications"></a>

### sfrMobile.getNotifications()
Notifications de l'utilisateur courant

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  
<a name="SfrMobile+getEquipements"></a>

### sfrMobile.getEquipements(line, universe)
Liste des équipements mis à disposition pour une ligne

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>string</code> | MSISDN de la ligne à sélectionner |
| universe | <code>Universe</code> \| <code>string</code> | SFR/RED |

<a name="SfrMobile+getOptionDetail"></a>

### sfrMobile.getOptionDetail(line, universe, environment, option)
Détail d'une option souscrite

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>string</code> | MSISDN de la ligne à sélectionner |
| universe | <code>Universe</code> \| <code>string</code> | SFR/RED |
| environment | <code>Environment</code> \| <code>string</code> | Type de ligne |
| option | <code>string</code> | Identifiant de l'option |

<a name="SfrMobile+getOptionsCatalog"></a>

### sfrMobile.getOptionsCatalog(line)
Catalogue des catégories d'options disponibles pour une ligne

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>string</code> | MSISDN de la ligne à sélectionner |

<a name="SfrMobile+getOptionsCatalogDetail"></a>

### sfrMobile.getOptionsCatalogDetail(line)
Catalogue détaillé des catégories d'options disponibles pour une ligne

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>string</code> | MSISDN de la ligne à sélectionner |

<a name="SfrMobile+getOptions"></a>

### sfrMobile.getOptions(line, category)
Lister les options disponibles dans une catégorie

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>string</code> | MSISDN de la ligne à sélectionner |
| category | <code>string</code> | Catégorie d'option |

<a name="SfrMobile+getEquipementDetail"></a>

### sfrMobile.getEquipementDetail(line, optionCode, universe)
Obtenir la description complète de l'équipement

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>string</code> | MSISDN de la ligne à sélectionner |
| optionCode | <code>string</code> | Identifiant de l'option d'équipement |
| universe | <code>Universe</code> \| <code>string</code> | SFR/RED |

<a name="SfrMobile+getParc"></a>

### sfrMobile.getParc(line, universe, environment)
Détails de l'offre d'une ligne

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>string</code> | MSISDN de la ligne à sélectionner |
| universe | <code>Universe</code> \| <code>string</code> | SFR/RED |
| environment | <code>Environment</code> \| <code>string</code> | Type de ligne |

<a name="SfrMobile+getPaiementTiersAchatsAbonnements"></a>

### sfrMobile.getPaiementTiersAchatsAbonnements(line)
Liste des achats et abonnements (hors forfait) sur la ligne

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Description |
| --- | --- |
| line | MSISDN de la ligne à sélectionner |

<a name="SfrMobile+getPaiementTiersOptionsAchat"></a>

### sfrMobile.getPaiementTiersOptionsAchat(line)
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

### sfrMobile.getOTPSMS(line)
Obtenir un code à usage unique pour effectuer une opération

**Kind**: instance method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Description |
| --- | --- |
| line | MSISDN de la ligne à sélectionner |

<a name="SfrMobile.login"></a>

### SfrMobile.login(username, password, duration)
Obtenir un jeton d'authentification auprès du CAS de SFR

**Kind**: static method of [<code>SfrMobile</code>](#SfrMobile)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| username | <code>string</code> |  | Identifiant du compte |
| password | <code>string</code> |  | Mot de passe du compte |
| duration | <code>number</code> | <code>86400</code> | Durée de validité du jeton demandé en secondes |

