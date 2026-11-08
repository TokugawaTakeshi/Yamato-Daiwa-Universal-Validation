/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ┅┅┅ Entities ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import User from "@Entities/AccessControl/User";

/* ┅┅┅ Constructs ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import AccessControlTransactions from
    "@Interactions/ClientAndFrontServer/Transactions/AccessControl/AccessControlTransactions";

/* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import {
  EmailAddressInputtedValueValidation,
  PasswordInputtedValueValidation
} from "@yamato-daiwa/frontend";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


namespace InputtedSigningInDataValidations {

  export class EmailAddress extends EmailAddressInputtedValueValidation {
    public constructor(localization: EmailAddressInputtedValueValidation.Localization) {
      super({
        isInputRequired: AccessControlTransactions.SigningIn.RequestData.EmailAddress.IS_REQUIRED,
        minimalCharactersCount: User.EmailAddress.MINIMAL_ONE_BYTE_CHARACTERS_COUNT,
        maximalCharactersCount: User.EmailAddress.MAXIMAL_ONE_BYTE_CHARACTERS_COUNT,
        regularExpression: User.EmailAddress.REGULAR_EXPRESSION,
        localization
      });
    }
  }

  export class Password extends PasswordInputtedValueValidation {
    public constructor(localization: PasswordInputtedValueValidation.Localization) {
      super({
        isInputRequired: AccessControlTransactions.SigningIn.RequestData.Password.IS_REQUIRED,
        minimalCharactersCount: User.Password.MINIMAL_ONE_BYTE_CHARACTERS_COUNT,
        maximalCharactersCount: User.Password.MAXIMAL_ONE_BYTE_CHARACTERS_COUNT,
        allowedNonWordCharacters: Array.from(User.Password.ALLOWED_NON_WORD_CHARACTERS),
        localization
      });
    }
  }

}


export default InputtedSigningInDataValidations;
