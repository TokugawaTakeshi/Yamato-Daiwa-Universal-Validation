import type ProductCategory from "./ProductCategory";
import {
  Integer,
  type IntegerConstructor,
  Float,
  type FloatConstructor,
  FIXED_CHARACTERS_COUNT_IN_NANO_ID
} from "fundamental-constants";


type Product = {
  readonly ID: Product.ID;
  localizedTitle: string;
  localizedDescription?: string;
  photoFileNameWithExtension: string;
  category: ProductCategory;
  price__yens__excludingConsumptionTax: number;
  price__yens__includingConsumptionTax: number;
  consumptionTaxRate: number;
  quantityRemainInStock?: number;
};


namespace Product {

  export const NAME: string = "Product";


  /* ━━━ ID ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export type ID = string;
  export namespace ID {
    export const NAME: string = "ID";
    export const TYPE: StringConstructor = String;
    export const IS_REQUIRED: boolean = true;
    export const FIXED_ONE_BYTE_CHARACTERS_COUNT: number = FIXED_CHARACTERS_COUNT_IN_NANO_ID;
  }

  /* ━━━ Localized Title ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export namespace LocalizedTitle {
    export const NAME: string = "localizedTitle";
    export const TYPE: StringConstructor = String;
    export const IS_REQUIRED: boolean = true;
    export const MINIMAL_ONE_BYTE_CHARACTERS_COUNT: number = 2;
    export const MAXIMAL_ONE_BYTE_CHARACTERS_COUNT: number = 200;
  }

  /* ━━━ Photo  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export namespace Photo {

    export const MAXIMAL_FILE_SIZE__KILOBYTES: number = 20_000;

    export enum ALLOWED_MIME_TYPES {
      jpeg = "image/jpeg",
      webp = "image/webp"
    }

    export namespace FileNameWithExtension {

    export const NAME: string = "photoFileNameWithExtension";
    export const TYPE: StringConstructor = String;
    export const MAXIMAL_ONE_BYTE_CHARACTERS_COUNT: number = 242;
    export const IS_REQUIRED: boolean = true;

    export function generate(
      {
        productID,
        revisionHash,
        fileNameExtension
      }: Readonly<{
        productID: string;
        revisionHash: string;
        fileNameExtension: string;
      }>
      ): string {
        return `${ productID }~${ revisionHash }.${ fileNameExtension }`;
      }

    }

  }

  /* ━━━ Localized Description ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export namespace LocalizedDescription {
    export const NAME: string = "localizedDescription";
    export const TYPE: StringConstructor = String;
    export const IS_REQUIRED: boolean = false;
    export const MINIMAL_ONE_BYTE_CHARACTERS_COUNT: number = 2;
    export const MAXIMAL_ONE_BYTE_CHARACTERS_COUNT: number = 500;
  }

  /* ━━━ Category ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export namespace Category {
    export const NAME: string = "category";
    export const TYPE: ObjectConstructor = Object;
    export const IS_REQUIRED: boolean = true;
  }

  /* ━━━ Price (Yens, Excluding Consumption Tax) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export namespace Price__Yens__ExcludingConsumptionTax {
    export const NAME: string = "price__yens__excludingConsumptionTax";
    export const TYPE: IntegerConstructor = Integer;
    export const IS_REQUIRED: boolean = true;
    export const MINIMAL_VALUE: number = 1;
    export const MAXIMAL_VALUE: number = Number.MAX_SAFE_INTEGER;
  }

  /* ━━━ Price (Yens, Including Consumption Tax) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export namespace Price__Yens__IncludingConsumptionTax {
    export const NAME: string = "price__yens__includingConsumptionTax";
    export const TYPE: IntegerConstructor = Integer;
    export const IS_REQUIRED: boolean = true;
    export const MINIMAL_VALUE: number = 1;
    export const MAXIMAL_VALUE: number = Number.MAX_SAFE_INTEGER;
  }

  /* ━━━ Consumption Tax Rate ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export namespace ConsumptionTaxRate {
    export const NAME: string = "consumptionTaxRate";
    export const TYPE: FloatConstructor = Float;
    export const IS_REQUIRED: boolean = true;
    export const MINIMAL_VALUE: number = 0;
    export const MAXIMAL_VALUE: number = 1;
  }

  /* ━━━ Quantity Remain in Stock ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export namespace QuantityRemainInStock {
    export const NAME: string = "quantityRemainInStock";
    export const TYPE: IntegerConstructor = Integer;
    export const IS_REQUIRED: boolean = false;
    export const MINIMAL_VALUE: number = 0;
    export const MAXIMAL_VALUE: number = Number.MAX_SAFE_INTEGER;
  }

}


export default Product;
