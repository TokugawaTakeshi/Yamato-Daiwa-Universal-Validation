import type { PossiblyReadonlyParsedJSON } from "@yamato-daiwa/es-extensions";
import { isString, isPossiblyReadonlyParsedJSON_Object } from "@yamato-daiwa/es-extensions";


class TransactionSpecificError extends Error {

  public readonly code: string;
  public readonly publicLocalizedErrorMessage: string;


  public static generateDataCanBeUsedAsConstructorParameter(
    constructorParameter: TransactionSpecificError.ConstructorParameter
  ): TransactionSpecificError.ConstructorParameter {
    return constructorParameter;
  }

  public static isResponseDataIncludedDataForConstructor(
    responseData: PossiblyReadonlyParsedJSON
  ): responseData is TransactionSpecificError.ConstructorParameter {
    return isPossiblyReadonlyParsedJSON_Object(responseData) &&
        isString(responseData.code) &&
        isString(responseData.publicLocalizedErrorMessage) &&
        isString(responseData.technicalMessage);
  }


  public constructor(compoundParameter: TransactionSpecificError.ConstructorParameter) {

    super();

    this.code = compoundParameter.code;
    this.publicLocalizedErrorMessage = compoundParameter.publicLocalizedErrorMessage;
    this.message = compoundParameter.technicalMessage;

  }

}


namespace TransactionSpecificError {

  export type ConstructorParameter = Readonly<{
    code: string;
    publicLocalizedErrorMessage: string;
    technicalMessage: string;
  }>;

}


export default TransactionSpecificError;
