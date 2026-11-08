/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ┅┅┅ Entities ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type CurrentAuthenticatedUser from "@Entities/AccessControl/CurrentAuthenticatedUser";

/* ┅┅┅ Gateways ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type AccessControlGateway from "@Gateways/AccessControlGateway";

/* ┅┅┅ Contracts ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import AccessControlTransactions from "@Interactions/ClientAndFrontServer/Transactions/AccessControl/AccessControlTransactions";
import TransactionSpecificError from "@Interactions/ClientAndFrontServer/Transactions/TransactionSpecificError";

/* ┅┅┅ Data ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import CurrentlyAuthenticatedUserFromFrontServerSpecification from
    "@Client/Data/FromFrontServer/CurrentlyAuthenticatedUserFromFrontServerSpecification";

/* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import { AJAX_Service, DataSubmittingFailedError, RawObjectDataProcessor } from "@yamato-daiwa/es-extensions";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


export default class AccessControlAJAX_Gateway implements AccessControlGateway {

  /** @throws TransactionSpecificError */
  /** @throws DataSubmittingFailedError */
  public async signIn(requestData: AccessControlGateway.SigningIn.RequestData): Promise<CurrentAuthenticatedUser> {

    const response: AJAX_Service.ObjectDataResponse<CurrentAuthenticatedUser> =
        await AJAX_Service.submitData<CurrentAuthenticatedUser>({
          HTTP_Method: AccessControlTransactions.SigningIn.HTTP_METHOD,
          alternatingURI_PathPart: AccessControlTransactions.SigningIn.URI_PATH,
          requestData,
          validResponseDataSpecification: {
            subtype: RawObjectDataProcessor.ObjectSubtypes.fixedSchema,
            nameForLogging: "CurrentAuthenticatedUser",
            properties: CurrentlyAuthenticatedUserFromFrontServerSpecification
          }
        });

    if (response.isSuccessful) {
      return response.data;
    }


    throw "errorObjectPayload" in response &&
        TransactionSpecificError.isResponseDataIncludedDataForConstructor(response.errorObjectPayload) ?
            new TransactionSpecificError(response.errorObjectPayload) :
            new DataSubmittingFailedError({
              mentionToData: "AccessControlGateway.SigningIn.RequestData",
              ..."errorObjectPayload" in response ?
                  { additionalData: response.errorObjectPayload } : { messageSpecificPart: response.errorTextPayload }
            });

  }


  /** @throws TransactionSpecificError */
  /** @throws DataSubmittingFailedError */
  public async signOut(): Promise<void> {

    const response: AJAX_Service.ObjectDataResponse = await AJAX_Service.submitData({
      HTTP_Method: AccessControlTransactions.SigningOut.HTTP_METHOD,
      alternatingURI_PathPart: AccessControlTransactions.SigningOut.URI_PATH,
      requestData: {}
    });

    if (response.isSuccessful) {
      return;
    }


    throw "errorObjectPayload" in response &&
        TransactionSpecificError.isResponseDataIncludedDataForConstructor(response.errorObjectPayload) ?
            new TransactionSpecificError(response.errorObjectPayload) :
            new DataSubmittingFailedError({
              mentionToData: "AccessControlGateway.SigningOut.RequestData",
              ..."errorObjectPayload" in response ?
                  { additionalData: response.errorObjectPayload } : { messageSpecificPart: response.errorTextPayload }
            });

  }

}
