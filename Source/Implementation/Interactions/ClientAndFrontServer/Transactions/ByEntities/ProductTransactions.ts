import { HTTP_Methods } from "fundamental-constants";


namespace ProductTransactions {

  const URI_PATH_PREFIX: string = "/api/products";

  export namespace RetrievingOfSelection {
    export const HTTP_METHOD: HTTP_Methods = HTTP_Methods.get;
    export const URI_PATH: string = URI_PATH_PREFIX;
  }

  export namespace RetrievingOfOne {

    export const HTTP_METHOD: HTTP_Methods = HTTP_Methods.get;

    export enum URN_PathParametersValues {
      productID = "product_id"
    }
    export type URI_PathParameters = Readonly<{
      productID: string;
    }>;

    function getURN_PathWorkpiece(
      { productID }: URI_PathParameters
    ): string {
      return `${ URI_PATH_PREFIX }/${ productID }`;
    }

    export const URN_PathTemplate: string = getURN_PathWorkpiece({ productID: `:${ URN_PathParametersValues.productID }` });

    export function buildURN_Path(pathParameters: URI_PathParameters): string {
      return getURN_PathWorkpiece(pathParameters);
    }

  }

  export namespace Adding {
    export const HTTP_METHOD: HTTP_Methods = HTTP_Methods.post;
    export const URI_PATH: string = URI_PATH_PREFIX;
  }

  export namespace Updating {
    export const HTTP_METHOD: HTTP_Methods = HTTP_Methods.patch;
    export const URI_PATH: string = URI_PATH_PREFIX;
  }

  export namespace Deleting {

    export const HTTP_METHOD: HTTP_Methods = HTTP_Methods.delete;
    export const URI_PATH: string = URI_PATH_PREFIX;

    export enum URN_PathParametersValues {
      productID = "product_id"
    }
    export type URI_PathParameters = Readonly<{
      productID: string;
    }>;

    function getURN_PathWorkpiece(
      { productID }: URI_PathParameters
    ): string {
      return `${ URI_PATH_PREFIX }/${ productID }`;
    }

    export const URN_PathTemplate: string = getURN_PathWorkpiece({ productID: `:${ URN_PathParametersValues.productID }` });

    export function buildURN_Path(pathParameters: URI_PathParameters): string {
      return getURN_PathWorkpiece(pathParameters);
    }

  }

}


export default ProductTransactions;
