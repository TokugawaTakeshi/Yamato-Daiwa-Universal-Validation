import type ContactRequest from "@Entities/ContactRequest/ContactRequest";
import type InvalidContactRequestSubmittingAttempt from "@Entities/ContactRequest/InvalidContactRequestSubmittingAttempt";


interface ContactRequestGateway {

  submitLegitimateOne:
      (requestData: ContactRequestGateway.LegitimateContactRequestSubmitting.RequestData) =>
          Promise<ContactRequest.ID>;

  recordInvalidContactRequestSubmittingAttempt:
      (requestData: ContactRequestGateway.InvalidContactRequestSubmittingRecording.RequestData) =>
          Promise<void>;

}


namespace ContactRequestGateway {

  export namespace LegitimateContactRequestSubmitting {

    export type RequestData = Pick<
      ContactRequest,
      "target" |
      "requesterName" |
      "requesterEmailAddress" |
      "requesterPhoneNumber__digitsOnly" |
      "message"
    >;

  }

  export namespace InvalidContactRequestSubmittingRecording {

    export type RequestData =
        Pick<
          InvalidContactRequestSubmittingAttempt,
          "requesterName" |
          "requesterEmailAddress" |
          "requesterPhoneNumber__digitsOnly" |
          "message"
        > &
        Readonly<{ target: string; }>;

  }

}


export default ContactRequestGateway;
