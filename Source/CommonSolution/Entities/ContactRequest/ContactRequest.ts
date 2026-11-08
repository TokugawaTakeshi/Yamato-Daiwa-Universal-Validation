import {
  MINIMAL_CHARACTERS_COUNT_OF_EMAIL_ADDRESS,
  MAXIMAL_CHARACTERS_COUNT_OF_EMAIL_ADDRESS,
  EMAIL_ADDRESS_VALID_PATTERN,
  FIXED_CHARACTERS_COUNT_IN_NANO_ID
} from "fundamental-constants";
import {
  MINIMAL_DIGITS_COUNT_IN_JAPANESE_PHONE_NUMBER,
  JAPANESE_PHONE_NUMBER_VALID_PATTERN__NO_N_DASHES_ALLOWED,
  MAXIMAL_DIGITS_COUNT_IN_JAPANESE_PHONE_NUMBER
} from "fundamental-constants-japan";


type ContactRequest = {

  ID: ContactRequest.ID;

  target: ContactRequest.Targets;

  requesterName: string;
  requesterEmailAddress: string;
  requesterPhoneNumber__digitsOnly: string;

  message: string;

  submittingDateTime: Date;

};


namespace ContactRequest {

  export const NAME: string = "ContactRequest";


  /* ━━━ ID ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export type ID = string;
  export namespace ID {
    export const NAME: string = "ID";
    export const TYPE: StringConstructor = String;
    export const IS_REQUIRED: boolean = true;
    export const FIXED_ONE_BYTE_CHARACTERS_COUNT: number = FIXED_CHARACTERS_COUNT_IN_NANO_ID;
  }


  /* ━━━ Target ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export enum Targets {
    question = "QUESTION",
    consultationRequest = "CONSULTATION_REQUEST"
  }

  export namespace Target {
    export const NAME: string = "target";
    export const TYPE: StringConstructor = String;
    export const IS_REQUIRED: boolean = true;
    export const ALLOWED_VALUES: Set<Targets> = new Set(Object.values(Targets));
  }


  /* ━━━ Requester Name ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export namespace RequesterName {
    export const NAME: string = "requesterName";
    export const TYPE: StringConstructor = String;
    export const IS_REQUIRED: boolean = true;
    export const MINIMAL_ONE_BYTE_CHARACTERS_COUNT: number = 1;
    export const MAXIMAL_ONE_BYTE_CHARACTERS_COUNT: number = 50;
  }


  /* ━━━ Requester Email Address ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export namespace RequesterEmailAddress {
    export const NAME: string = "requesterEmailAddress";
    export const TYPE: StringConstructor = String;
    export const IS_REQUIRED: boolean = true;
    export const MINIMAL_ONE_BYTE_CHARACTERS_COUNT: number = MINIMAL_CHARACTERS_COUNT_OF_EMAIL_ADDRESS;
    export const MAXIMAL_ONE_BYTE_CHARACTERS_COUNT: number = MAXIMAL_CHARACTERS_COUNT_OF_EMAIL_ADDRESS;
    export const REGULAR_EXPRESSION: RegExp = EMAIL_ADDRESS_VALID_PATTERN;
  }


  /* ━━━ Requester Phone Number ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export namespace RequesterPhoneNumber__DigitsOnly {
    export const NAME: string = "requesterPhoneNumber__digitsOnly";
    export const TYPE: StringConstructor = String;
    export const IS_REQUIRED: boolean = true;
    export const MINIMAL_ONE_BYTE_CHARACTERS_COUNT: number = MINIMAL_DIGITS_COUNT_IN_JAPANESE_PHONE_NUMBER;
    export const MAXIMAL_ONE_BYTE_CHARACTERS_COUNT: number = MAXIMAL_DIGITS_COUNT_IN_JAPANESE_PHONE_NUMBER;
    export const REGULAR_EXPRESSION: RegExp = JAPANESE_PHONE_NUMBER_VALID_PATTERN__NO_N_DASHES_ALLOWED;
  }


  /* ━━━ Message ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export namespace Message {
    export const NAME: string = "message";
    export const TYPE: StringConstructor = String;
    export const IS_REQUIRED: boolean = true;
    export const MINIMAL_ONE_BYTE_CHARACTERS_COUNT: number = 12;
    export const MINIMAL_KANJI_AND_KANA_CHARACTERS_COUNT: number = MINIMAL_ONE_BYTE_CHARACTERS_COUNT;
    export const MINIMAL_KANJI_AND_KANA_CHARACTERS_RATIO: number = 0.8;
    export const MAXIMAL_ONE_BYTE_CHARACTERS_COUNT: number = 1000;
  }


  /* ━━━ Submitting Date/Time ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export namespace SubmittingDateTime {
    export const NAME: string = "submittingDateTime";
    export const TYPE: DateConstructor = Date;
    export const IS_REQUIRED: boolean = true;
  }

}


export default ContactRequest;
