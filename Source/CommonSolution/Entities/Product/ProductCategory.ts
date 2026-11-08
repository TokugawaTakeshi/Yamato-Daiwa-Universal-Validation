import { FIXED_CHARACTERS_COUNT_IN_NANO_ID } from "fundamental-constants";


type ProductCategory = {
  readonly ID: ProductCategory.ID;
  localizedName: string;
};


namespace ProductCategory {

  export const NAME: string = "ProductCategory";


  /* ━━━ ID ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export type ID = string;
  export namespace ID {
    export const NAME: string = "ID";
    export const TYPE: StringConstructor = String;
    export const IS_REQUIRED: boolean = true;
    export const FIXED_ONE_BYTE_CHARACTERS_COUNT: number = FIXED_CHARACTERS_COUNT_IN_NANO_ID;
  }

  /* ━━━ Localized Name ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export namespace LocalizedName {
    export const NAME: string = "localizedName";
    export const TYPE: StringConstructor = String;
    export const IS_REQUIRED: boolean = true;
    export const MINIMAL_ONE_BYTE_CHARACTERS_COUNT: number = 2;
    export const MAXIMAL_ONE_BYTE_CHARACTERS_COUNT: number = 100;
  }

}


export default ProductCategory;
