import User from "@Entities/AccessControl/User";
import type { RawObjectDataProcessor } from "@yamato-daiwa/es-extensions";


const CurrentlyAuthenticatedUserFromFrontServerSpecification: RawObjectDataProcessor.PropertiesSpecification =

    {

      emailAddress: {
        type: User.EmailAddress.TYPE,
        isUndefinedForbidden: User.EmailAddress.IS_REQUIRED,
        isNullForbidden: true,
        minimalCharactersCount: User.EmailAddress.MINIMAL_ONE_BYTE_CHARACTERS_COUNT,
        maximalCharactersCount: User.EmailAddress.MAXIMAL_ONE_BYTE_CHARACTERS_COUNT,
        validValueRegularExpression: User.EmailAddress.REGULAR_EXPRESSION
      },

      displayingName: {
        type: User.DisplayingName.TYPE,
        isUndefinedForbidden: User.DisplayingName.IS_REQUIRED,
        isNullForbidden: true,
        minimalCharactersCount: User.DisplayingName.MINIMAL_CHARACTERS_COUNT,
        maximalCharactersCount: User.DisplayingName.MAXIMAL_CHARACTERS_COUNT
      },

      authorityRole: {
        type: User.AuthorityRole.TYPE,
        isUndefinedForbidden: User.AuthorityRole.IS_REQUIRED,
        isNullForbidden: true,
        allowedAlternatives: Array.from(User.AuthorityRole.ALLOWED_VALUES)
      }

    };


export default CurrentlyAuthenticatedUserFromFrontServerSpecification;
