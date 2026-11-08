import type ContactRequest from "@Entities/ContactRequest/ContactRequest";
import { FIXED_CHARACTERS_COUNT_IN_NANO_ID } from "fundamental-constants";


/* 【 仕様 】 全フィルドは必須で、入力された通り保存。何も入力されなかった場合は空文字か、文字列化した「null」。 */
type InvalidContactRequestSubmittingAttempt = {

  ID: ContactRequest.ID;

  target: string;

  requesterName: string;
  requesterEmailAddress: string;
  requesterPhoneNumber__digitsOnly: string;

  message: string;

  submittingDateTime__ISO8601: string;

};


namespace InvalidContactRequestSubmittingAttempt {

  export const NAME: string = "InvalidContactRequestSubmittingAttempt";


  /* ━━━ ID ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export type ID = string;
  export namespace ID {
    export const NAME: string = "ID";
    export const TYPE: StringConstructor = String;
    export const IS_REQUIRED: boolean = true;
    export const FIXED_ONE_BYTE_CHARACTERS_COUNT: number = FIXED_CHARACTERS_COUNT_IN_NANO_ID;
  }


  /* ━━━ Target ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export namespace Target {
    export const NAME: string = "target";
    export const TYPE: StringConstructor = String;
    export const IS_REQUIRED: boolean = true;
  }


  /* ━━━ Requester Name ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export namespace RequesterName {
    export const NAME: string = "requesterName";
    export const TYPE: StringConstructor = String;
    export const IS_REQUIRED: boolean = true;
  }

  /* ━━━ Requester Email Address ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export namespace RequesterEmailAddress {
    export const NAME: string = "requesterEmailAddress";
    export const TYPE: StringConstructor = String;
    export const IS_REQUIRED: boolean = true;
  }

  /* ━━━ Requester Phone Number ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export namespace RequesterPhoneNumber__DigitsOnly {
    export const NAME: string = "requesterPhoneNumber__digitsOnly";
    export const TYPE: StringConstructor = String;
    export const IS_REQUIRED: boolean = true;
  }

  /* ━━━ Message ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export namespace Message {
    export const NAME: string = "message";
    export const TYPE: StringConstructor = String;
    export const IS_REQUIRED: boolean = true;
  }

  /* ━━━ Submitting Date/Time ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export namespace SubmittingDateTime {
    export const NAME: string = "submittingDateTime";
    export const TYPE: DateConstructor = Date;
    export const IS_REQUIRED: boolean = true;
  }

}


export default InvalidContactRequestSubmittingAttempt;
