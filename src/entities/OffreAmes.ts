export interface OffreAmes {
  codeRetour: number
  groupCharacteristic: {
    groupCharacteristics: Array<{
      classAME: string
      shortNameAME: string
      descriptionAME: string
      patternGroup: string
      benefitValueMinPerMonth: string
      benefitValueMaxPerMonth: string
      benefitValueMinPerYear: string
      benefitValueMaxPerYear: string
      status: string
      availableLines: number
      groupID: string
      groupName: string
      manager: string
      serviceType: string
      nom: string
      prenom: string
      civilite: string
      updateDate: Date
      memberCharacteristic: {
        memberCharacteristics: Array<{
          csuID: string
          status: string
          csuStatus: string
          lineIdentifier: string
          serviceType: string
          nom: string
          prenom: string
          civilite: string
          lineID: string
          updateDate: Date
          libellePTA: string
          ptaCode: string
          currentDataToShare?: number
          ptaEligibility?: string
          lineType?: string
          sharedDataNextDate: Date
          cutOffDay: number
          benefitCharacteristic: {
            benefitCharacteristics: Array<{
              benefitCode: string
              benefitShortName: string
              benefitDescription: string
              status: string
              activationDate: Date
              endDate: Date
              benefitValueMinPerMonth: string
              benefitValueMaxPerMonth: string
              benefitValueMinPerYear: string
              benefitValueMaxPerYear: string
              productCode: string
              unit: string
              invoiceAmount: string
              technicalCode?: string
            }>
          }
          sharedListElement?: {
            sharedElements: Array<{
              sheId: string
              type: string
              status: string
              actDate: Date
              sharedData?: number
            }>
          }
        }>
      }
    }>
  }
}
