import { HTTP_Methods } from "@yamato-daiwa/es-extensions";


namespace LoggingTransactions {

  const URI_PATH_PREFIX: string = "/api/logging";

  export namespace ThrownErrorLogSubmitting {
    export const HTTP_METHOD: HTTP_Methods = HTTP_Methods.post;
    export const URI_PATH: string = `${ URI_PATH_PREFIX }/thrown_error`;
  }

  export namespace ErrorLogSubmitting {
    export const HTTP_METHOD: HTTP_Methods = HTTP_Methods.post;
    export const URI_PATH: string = `${ URI_PATH_PREFIX }/error`;
  }

  export namespace WarningLogSubmitting {
    export const HTTP_METHOD: HTTP_Methods = HTTP_Methods.post;
    export const URI_PATH: string = `${ URI_PATH_PREFIX }/warning`;
  }

}


export default LoggingTransactions;
