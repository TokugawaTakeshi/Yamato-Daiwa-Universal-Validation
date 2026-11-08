/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ┅┅┅ Entities ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import User from "@Entities/AccessControl/User";

/* ┅┅┅ Assets ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type { InheritEnumerationKeys } from "@yamato-daiwa/es-extensions";

/* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import { HTTP_Methods } from "fundamental-constants";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


namespace AccessControlTransactions {

  export namespace SigningIn {

    export const HTTP_METHOD: HTTP_Methods = HTTP_Methods.post;
    export const URI_PATH: string = "/sign_in";
    export const MAXIMAL_REQUEST_BODY_SIZE__KILOBYTES: number = 100;

    export namespace RequestData {

      export namespace EmailAddress {
        export const TYPE: StringConstructor = String;
        export const IS_REQUIRED: boolean = true;
        export const MINIMAL_ONE_BYTE_CHARACTERS_COUNT: number = User.EmailAddress.MINIMAL_ONE_BYTE_CHARACTERS_COUNT;
        export const MAXIMAL_ONE_BYTE_CHARACTERS_COUNT: number = User.EmailAddress.MAXIMAL_ONE_BYTE_CHARACTERS_COUNT;
        export const REGULAR_EXPRESSION: RegExp = User.EmailAddress.REGULAR_EXPRESSION;
      }

      export namespace Password {
        export const TYPE: StringConstructor = String;
        export const IS_REQUIRED: boolean = true;
        export const MINIMAL_ONE_BYTE_CHARACTERS_COUNT: number = User.Password.MINIMAL_ONE_BYTE_CHARACTERS_COUNT;
        export const MAXIMAL_ONE_BYTE_CHARACTERS_COUNT: number = User.Password.MAXIMAL_ONE_BYTE_CHARACTERS_COUNT;
        export const ALLOWED_NON_WORD_CHARACTERS: ReadonlySet<string> = User.Password.ALLOWED_NON_WORD_CHARACTERS;
      }

    }

    export namespace SpecificErrors {

      export enum Codes {
        invalidEmailAndPasswordCombination = "INVALID_EMAIL_AND_PASSWORD_COMBINATION"
      }

    }

  }

  export namespace SigningOut {
    export const HTTP_METHOD: HTTP_Methods = HTTP_Methods.post;
    export const URI_PATH: string = "/sign_out";
  }

  export type StringResources = Readonly<{

    signingIn: Readonly<{
      specificErrors: Readonly<
        InheritEnumerationKeys<typeof SigningIn.SpecificErrors.Codes, string>
      >;

    }>;

  }>;

}


export default AccessControlTransactions;
