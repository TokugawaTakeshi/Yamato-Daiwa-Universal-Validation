/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ┅┅┅ Entities ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type ProductCategory from "@Entities/Product/ProductCategory";

/* ┅┅┅ Gateways ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type ProductCategoryGateway from "@Gateways/ProductCategoryGateway";

/* ┅┅┅ Data ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type MockDataSource from "@MockDataSource/MockDataSource";

/* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import { MockGatewayHelper } from "@yamato-daiwa/es-extensions";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


export default class ProductCategoryMockGateway implements ProductCategoryGateway {

  private static readonly MUST_SIMULATE_ERROR: boolean = false;


  public constructor(
    private readonly mockDataSource: MockDataSource
  ) {}


  public async retrieveSelection(
    requestParameters: ProductCategoryGateway.RetrievingOfSelection.RequestParameters
  ): Promise<ProductCategoryGateway.RetrievingOfSelection.ResponseData> {
    return MockGatewayHelper.simulateDataRetrieving({
      requestParameters,
      getResponseData:
          (): ProductCategoryGateway.RetrievingOfSelection.ResponseData =>
              this.mockDataSource.retrieveProductsCategoriesSelection(requestParameters),
      minimalPendingPeriod__seconds: 1,
      maximalPendingPeriod__seconds: 5,
      mustSimulateError: ProductCategoryMockGateway.MUST_SIMULATE_ERROR,
      gatewayName: "ProductCategoryMockGateway",
      transactionName: "retrieveSelection"
    });
  }

  public async retrieveExpectedToBeExistingOne(
    requestParameters: ProductCategoryGateway.RetrievingOfOne.RequestParameters
  ): Promise<ProductCategory> {
    return MockGatewayHelper.simulateDataRetrieving({
      requestParameters,
      getResponseData:
          (): ProductCategory =>
              this.mockDataSource.retrieveExpectedToBeExistingOneProductCategory(requestParameters),
      minimalPendingPeriod__seconds: 1,
      maximalPendingPeriod__seconds: 5,
      mustSimulateError: ProductCategoryMockGateway.MUST_SIMULATE_ERROR,
      gatewayName: "ProductCategoryMockGateway",
      transactionName: "retrieveExpectedToBeExistingOne"
    });
  }

  public async addOne(
    requestData: ProductCategoryGateway.AddingOfOne.RequestData
  ): Promise<ProductCategoryGateway.AddingOfOne.AddedProductCategoryID> {
    return MockGatewayHelper.simulateDataSubmitting({
      requestData,
      getResponseData:
          (): ProductCategoryGateway.AddingOfOne.AddedProductCategoryID =>
              this.mockDataSource.addOneProductCategory(requestData),
      mustSimulateError: ProductCategoryMockGateway.MUST_SIMULATE_ERROR,
      gatewayName: "ProductCategoryMockGateway",
      transactionName: "addOne"
    });
  }

  public async updateOne(requestData: ProductCategoryGateway.UpdatingOfOne.RequestData): Promise<void> {
    return MockGatewayHelper.simulateDataSubmitting({
      requestData,
      getResponseData: (): void => { this.mockDataSource.updateOneProductCategory(requestData); },
      mustSimulateError: ProductCategoryMockGateway.MUST_SIMULATE_ERROR,
      gatewayName: "ProductCategoryMockGateway",
      transactionName: "updateOne"
    });
  }

  public async deleteOne(targetCategoryCategoryID: ProductCategory.ID): Promise<void> {
    return MockGatewayHelper.simulateDataSubmitting({
      requestData: targetCategoryCategoryID,
      getResponseData: (): void => { this.mockDataSource.deleteOneProductCategory(targetCategoryCategoryID); },
      mustSimulateError: ProductCategoryMockGateway.MUST_SIMULATE_ERROR,
      gatewayName: "ProductCategoryMockGateway",
      transactionName: "deleteOne"
    });
  }

}
