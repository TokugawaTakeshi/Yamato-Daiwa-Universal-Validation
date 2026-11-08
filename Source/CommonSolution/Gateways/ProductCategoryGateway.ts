import type ProductCategory from "@Entities/Product/ProductCategory";
import type SupportedLanguagesBCP_47_Subtags from "@CommonSolution/Restrictions/SupportedLanguagesBCP_47_Subtags";


interface ProductCategoryGateway {

  retrieveSelection:
      (requestParameters: ProductCategoryGateway.RetrievingOfSelection.RequestParameters) =>
          Promise<ProductCategoryGateway.RetrievingOfSelection.ResponseData>;

  retrieveExpectedToBeExistingOne:
      (requestParameters: ProductCategoryGateway.RetrievingOfOne.RequestParameters) =>
          Promise<ProductCategory>;

  addOne:
      (requestData: ProductCategoryGateway.AddingOfOne.RequestData) =>
          Promise<ProductCategoryGateway.AddingOfOne.AddedProductCategoryID>;

  updateOne:
      (requestData: ProductCategoryGateway.UpdatingOfOne.RequestData) =>
          Promise<void>;

  deleteOne: (targetCategoryCategoryID: ProductCategory.ID) => Promise<void>;

}


namespace ProductCategoryGateway {

  export namespace RetrievingOfSelection {

    export type RequestParameters = Readonly<{
      searchingByFullOrPartialProductCategoryName?: string;
      targetLanguageBCP_47_Subtag: SupportedLanguagesBCP_47_Subtags;
    }>;

    export namespace RequestParameters {
      export const MINIMAL_CHARACTERS_AT_SEARCHING_REQUEST_BY_FULL_OR_PARTIAL_PRODUCT_CATEGORY_NAME: number = 2;
    }

    export type ResponseData = Readonly<{
      filteredItems: Array<ProductCategory>;
      totalItemsCountInDataSource: number;
    }>;

  }

  export namespace RetrievingOfOne {

    export type RequestParameters = Readonly<{
      ID_OfTargetProductCategory: ProductCategory.ID;
      targetLanguageBCP_47_Subtag: SupportedLanguagesBCP_47_Subtags;
    }>;

  }

  export namespace AddingOfOne {

    export type RequestData = Readonly<{
      productCategoryLocalizedNames: Readonly<{ [key in SupportedLanguagesBCP_47_Subtags]: string }>;
    }>;

    export type AddedProductCategoryID = ProductCategory.ID;

  }

  export namespace UpdatingOfOne {

    export type RequestData = Readonly<{
      productCategoryID: ProductCategory.ID;
      localeDependents: Readonly<{
        [key in SupportedLanguagesBCP_47_Subtags]?: RequestData.LocaleDependents;
      }>;
    }>;

    export namespace RequestData {
      export type LocaleDependents = Readonly<{ productCategoryName?: string; }>;
    }

  }

}


export default ProductCategoryGateway;
