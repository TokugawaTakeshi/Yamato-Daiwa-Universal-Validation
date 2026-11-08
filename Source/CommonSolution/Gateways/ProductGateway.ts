import type Product from "@Entities/Product/Product";
import type ProductCategory from "@Entities/Product/ProductCategory";
import type SupportedLanguagesBCP_47_Subtags from "@CommonSolution/Restrictions/SupportedLanguagesBCP_47_Subtags";


interface ProductGateway {

  retrieveSelection:
      (requestParameters: ProductGateway.RetrievingOfSelection.RequestParameters) =>
          Promise<ProductGateway.RetrievingOfSelection.ResponseData>;

  retrieveExpectedToBeExistingOne:
      (requestParameters: ProductGateway.RetrievingOfOne.RequestParameters) =>
          Promise<Product>;

  addOne:
      (requestData: ProductGateway.AddingOfOne.RequestData) =>
          Promise<ProductGateway.AddingOfOne.AddedProductID>;

  updateOne:
      (requestData: ProductGateway.UpdatingOfOne.RequestData) =>
          Promise<void>;

  deleteOne: (targetProductID: Product.ID) => Promise<void>;

}


namespace ProductGateway {

  export namespace RetrievingOfSelection {

    export type RequestParameters = Readonly<{
      paginationPageNumber: number;
      itemsCountPerPaginationPage: number;
      searchingByFullOrPartialProductTitle?: string;
      categoriesIDs: ReadonlyArray<ProductCategory.ID>;
      targetLanguageBCP_47_Subtag: SupportedLanguagesBCP_47_Subtags;
    }>;

    export namespace RequestParameters {
      export const MINIMAL_CHARACTERS_AT_SEARCHING_REQUEST_BY_FULL_OR_PARTIAL_PRODUCT_TITLE: number = 2;
    }

    export type ResponseData = Readonly<{
      filteredItemsOfTargetPaginationPage: Array<Product>;
      selectionItemsCount: number;
      totalItemsCount: number;
    }>;

  }

  export namespace RetrievingOfOne {

    export type RequestParameters = Readonly<{
      ID_OfTargetProduct: Product.ID;
      targetLanguageBCP_47_Subtag: SupportedLanguagesBCP_47_Subtags;
    }>;

  }

  export namespace AddingOfOne {

    export type RequestData =
        Readonly<{
          localizations: Readonly<{ [key in SupportedLanguagesBCP_47_Subtags]: RequestData.Localization }>;
          photoBase64_Code: string;
          productCategoryID: ProductCategory.ID;
          price__yens__excludingConsumptionTax: number;
          consumptionTaxRate: number;
          productQuantityRemainInStock?: number;
        }>;

    export namespace RequestData {
      export type Localization = {
        productTitle: string;
        productDescription?: string;
      };
    }

    export type AddedProductID = Product.ID;

  }


  /* 【 規約 】
   * ● undefined (?) : 以前の値をそもままにしておく
   * ●          null : 任意なプロパティーを空にする */
  export namespace UpdatingOfOne {

    export type RequestData = Readonly<{
      productID: string;
      localizations: Readonly<{ [key in SupportedLanguagesBCP_47_Subtags]: RequestData.LocaleDependents }>;
      photoBase64_Code?: string;
      productCategoryID?: ProductCategory.ID;
      productPrice__yens__excludingTax?: number;
      consumptionTaxRate?: number;
      productQuantityRemainInStock?: number | null;
    }>;

    export namespace RequestData {
      export type LocaleDependents = {
        productTitle?: string;
        productDescription?: string | null;
      };
    }

  }

}


export default ProductGateway;
