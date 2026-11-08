import {
  EMAIL_ADDRESS_VALID_PATTERN,
  MAXIMAL_CHARACTERS_COUNT_OF_EMAIL_ADDRESS,
  MINIMAL_CHARACTERS_COUNT_OF_EMAIL_ADDRESS
} from "fundamental-constants";


type User = {
  emailAddress: string;
  displayingName: string;
  authorityRole: User.AuthorityRoles;
  hashedPassword: string;
};


namespace User {

  export const NAME: string = "User";


  /* ━━━ Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Email Address ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  export type EmailAddress = string;

  export namespace EmailAddress {
    export const NAME: string = "emailAddress";
    export const TYPE: StringConstructor = String;
    export const IS_REQUIRED: boolean = true;
    export const MINIMAL_ONE_BYTE_CHARACTERS_COUNT: number = MINIMAL_CHARACTERS_COUNT_OF_EMAIL_ADDRESS;
    export const MAXIMAL_ONE_BYTE_CHARACTERS_COUNT: number = MAXIMAL_CHARACTERS_COUNT_OF_EMAIL_ADDRESS;
    export const REGULAR_EXPRESSION: RegExp = EMAIL_ADDRESS_VALID_PATTERN;
  }


  /* ┅┅┅ Displaying Name ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  export namespace DisplayingName {
    export const NAME: string = "displayingName";
    export const TYPE: StringConstructor = String;
    export const IS_REQUIRED: boolean = true;
    export const MINIMAL_CHARACTERS_COUNT: number = 2;
    export const MAXIMAL_CHARACTERS_COUNT: number = 250;
  }


  /* ┅┅┅ Authority Role ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  export enum AuthorityRoles {
    admin = "admin",
    editor = "editor"
  }

  export namespace AuthorityRole {
    export const TYPE: StringConstructor = String;
    export const IS_REQUIRED: boolean = true;
    export const ALLOWED_VALUES: ReadonlySet<AuthorityRoles> = new Set(Object.values(AuthorityRoles));
  }


  /* ┅┅┅ Hashed Password ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  export namespace HashedPassword {
    export const NAME: string = "hashedPassword";
    export const TYPE: StringConstructor = String;
    export const IS_REQUIRED: boolean = true;
  }


  /* ━━━ Related Metadata ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Password ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  export namespace Password {

    export const TYPE: StringConstructor = String;

    export const MINIMAL_ONE_BYTE_CHARACTERS_COUNT: number = 8;
    export const MAXIMAL_ONE_BYTE_CHARACTERS_COUNT: number = 32;

    export const ALLOWED_NON_WORD_CHARACTERS: ReadonlySet<string> = new Set([
      "!",
      "@",
      "#",
      "$",
      "^",
      "*",
      "-",
      "_",
      "+",
      "=",
      "{",
      "}",
      "[",
      "]",
      "|",
      "\\",
      "/",
      ":",
      ";",
      "<",
      ">",
      ",",
      ".",
      "?"
    ]);

  }

}


export default User;
