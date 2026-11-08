/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ┅┅┅ Entities ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type User from "@Entities/AccessControl/User";

/* ┅┅┅ Gateways ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import AccessControlGateway from "@Gateways/AccessControlGateway";
import type UserGateway from "@Gateways/UserGateway";

/* ┅┅┅ Contracts ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import TransactionSpecificError from "@Interactions/ClientAndFrontServer/Transactions/TransactionSpecificError";

/* ┅┅┅ Data ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import AccessControlTransactions from "@Interactions/ClientAndFrontServer/Transactions/AccessControl/AccessControlTransactions";
import SigningInTransactions = AccessControlTransactions.SigningIn;

/* ┅┅┅ Assets ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import { SECONDS_COUNT_IN_MINUTE } from "fundamental-constants";
import AccessControlTransactionsStringResources__Japanese from
    "@Interactions/ClientAndFrontServer/Transactions/AccessControl/AccessControlTransactionsStringResources.japanese";

/* ┅┅┅ Framework ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import Express from "express";
import {
  Controller,
  Body as RequestBody,
  UseBefore as useMiddlewaresBefore,
  Res as HTTP_Response
} from "routing-controllers";
import {
  Route,
  parseAndValidateJSON_RequestBody
} from "@yamato-daiwa/express-extensions";
import { rateLimit as limitRequestsCountPerInterval } from "express-rate-limit";

/* ┅┅┅ 補助 ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
/* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import FrontServerDependenciesInjector from "@FrontServer/DependenciesInjection/FrontServerDependenciesInjector";
import {
  RawObjectDataProcessor,
  HTTP_StatusCodes,
  secondsToMilliseconds,
  isNull
} from "@yamato-daiwa/es-extensions";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


@Controller()
export default class AccessControlController {

  private readonly userGateway: UserGateway = FrontServerDependenciesInjector.gateways.user;

  @Route(
    SigningInTransactions.HTTP_METHOD,
    SigningInTransactions.URI_PATH
  )
  @useMiddlewaresBefore(
    limitRequestsCountPerInterval({
      windowMs: secondsToMilliseconds(SECONDS_COUNT_IN_MINUTE),
      limit: 10,
      standardHeaders: true,
      legacyHeaders: false
    }),
    parseAndValidateJSON_RequestBody({
      requestBodySizeLimit__bytesPackageFormat: `${ SigningInTransactions.MAXIMAL_REQUEST_BODY_SIZE__KILOBYTES }kb`,
      validationAndProcessing: {
        subtype: RawObjectDataProcessor.ObjectSubtypes.fixedSchema,
        nameForLogging: "AccessControlGateway.SigningIn.RequestData",
        properties: {
          emailAddress: {
            type: SigningInTransactions.RequestData.EmailAddress.TYPE,
            isUndefinedForbidden: SigningInTransactions.RequestData.EmailAddress.IS_REQUIRED,
            isNullForbidden: true,
            minimalCharactersCount: SigningInTransactions.RequestData.EmailAddress.MINIMAL_ONE_BYTE_CHARACTERS_COUNT,
            maximalCharactersCount: SigningInTransactions.RequestData.EmailAddress.MAXIMAL_ONE_BYTE_CHARACTERS_COUNT,
            validValueRegularExpression: SigningInTransactions.RequestData.EmailAddress.REGULAR_EXPRESSION
          },
          password: {
            type: SigningInTransactions.RequestData.Password.TYPE,
            isUndefinedForbidden: SigningInTransactions.RequestData.Password.IS_REQUIRED,
            isNullForbidden: true,
            minimalCharactersCount: SigningInTransactions.RequestData.Password.MINIMAL_ONE_BYTE_CHARACTERS_COUNT,
            maximalCharactersCount: SigningInTransactions.RequestData.Password.MAXIMAL_ONE_BYTE_CHARACTERS_COUNT,
            customValidators: {
              validationFunction(
                { value: password }: RawObjectDataProcessor.PropertyOrElementCustomValidator.CompoundParameter<string>
              ): boolean {

                for (const character of Array.from(password)) {

                  if (
                    !(/[a-zA-Z0-9]/u).test(character) &&
                        !Array.from(SigningInTransactions.RequestData.Password.ALLOWED_NON_WORD_CHARACTERS).includes(character)
                  ) {
                    return false;
                  }

                }

                return true;

              },
              descriptionForLogging:
                  "ラテン文字か・数字か、次の特殊文字。" +
                  Array.from(SigningInTransactions.RequestData.Password.ALLOWED_NON_WORD_CHARACTERS).join("、")
            }
          }
        }
      }
    })
  )
  protected async signIn(
    @RequestBody({ required: true }) requestData: AccessControlGateway.SigningIn.RequestData,
    @HTTP_Response() response: Express.Response
  ): Promise<Express.Response> {

    const targetUser: User | null = await this.userGateway.retrieveOneByEmailAddressIfExists(requestData.emailAddress);

    if (isNull(targetUser)) {
      return response.
          status(HTTP_StatusCodes.unauthorized).
          send(
            TransactionSpecificError.generateDataCanBeUsedAsConstructorParameter({
              code: AccessControlTransactions.SigningIn.SpecificErrors.Codes.invalidEmailAndPasswordCombination,
              publicLocalizedErrorMessage:
                  AccessControlTransactionsStringResources__Japanese.signingIn.specificErrors.invalidEmailAndPasswordCombination,
              technicalMessage: "メールが間違っているか、パスワードが正しくないか、其の両方の結果サインインに失敗。"
            })
          );
    }

    const isInputtedPasswordCorrect: boolean = await FrontServerDependenciesInjector.
        services.
        passwordHashing.
        isRawPasswordCorrespondingToHashedOne(requestData.password, targetUser.hashedPassword);

    if (!isInputtedPasswordCorrect) {
      return response.
          status(HTTP_StatusCodes.unauthorized).
          send(
            TransactionSpecificError.generateDataCanBeUsedAsConstructorParameter({
              code: AccessControlTransactions.SigningIn.SpecificErrors.Codes.invalidEmailAndPasswordCombination,
              publicLocalizedErrorMessage:
                  AccessControlTransactionsStringResources__Japanese.signingIn.specificErrors.invalidEmailAndPasswordCombination,
              technicalMessage: "メールが間違っているか、パスワードが正しくないか、其の両方の結果サインインに失敗。"
            })
          );
    }

    return response.
        status(HTTP_StatusCodes.OK).
        json({
          emailAddress: requestData.emailAddress,
          displayingName: targetUser.displayingName,
          authorityRole: targetUser.authorityRole
        });

  }

}
