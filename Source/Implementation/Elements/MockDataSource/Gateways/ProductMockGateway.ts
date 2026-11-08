/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ┅┅┅ Entities ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type Product from "@Entities/Product/Product";

/* ┅┅┅ Gateways ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type ProductGateway from "@Gateways/ProductGateway";

/* ┅┅┅ Data ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type MockDataSource from "@MockDataSource/MockDataSource";

/* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import { MockGatewayHelper } from "@yamato-daiwa/es-extensions";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


export default class ProductMockGateway implements ProductGateway {

  private static readonly MUST_SIMULATE_ERROR: boolean = false;


  public constructor(
    private readonly mockDataSource: MockDataSource
  ) {}


  public async retrieveSelection(
    requestParameters: ProductGateway.RetrievingOfSelection.RequestParameters
  ): Promise<ProductGateway.RetrievingOfSelection.ResponseData> {
    return MockGatewayHelper.simulateDataRetrieving({
      requestParameters,
      getResponseData:
          (): ProductGateway.RetrievingOfSelection.ResponseData =>
              this.mockDataSource.retrieveProductsSelection(requestParameters),
      minimalPendingPeriod__seconds: 1,
      maximalPendingPeriod__seconds: 5,
      mustSimulateError: ProductMockGateway.MUST_SIMULATE_ERROR,
      gatewayName: "ProductMockGateway",
      transactionName: "retrieveSelection"
    });
  }

  public async retrieveExpectedToBeExistingOne(
    requestParameters: ProductGateway.RetrievingOfOne.RequestParameters
  ): Promise<Product> {
    return MockGatewayHelper.simulateDataRetrieving({
      requestParameters,
      getResponseData:
          (): Product =>
              this.mockDataSource.retrieveExpectedToBeExistingOneProduct(requestParameters),
      minimalPendingPeriod__seconds: 1,
      maximalPendingPeriod__seconds: 5,
      mustSimulateError: ProductMockGateway.MUST_SIMULATE_ERROR,
      gatewayName: "ProductMockGateway",
      transactionName: "retrieveExpectedToBeExistingOne"
    });
  }

  public async addOne(
    requestData: ProductGateway.AddingOfOne.RequestData
  ): Promise<ProductGateway.AddingOfOne.AddedProductID> {
    return MockGatewayHelper.simulateDataSubmitting({
      requestData,
      getResponseData:
          (): ProductGateway.AddingOfOne.AddedProductID =>
              this.mockDataSource.addOneProduct(requestData),
      mustSimulateError: ProductMockGateway.MUST_SIMULATE_ERROR,
      gatewayName: "ProductMockGateway",
      transactionName: "addOne"
    });
  }

  public async updateOne(requestData: ProductGateway.UpdatingOfOne.RequestData): Promise<void> {
    return MockGatewayHelper.simulateDataSubmitting({
      requestData,
      getResponseData: (): void => { this.mockDataSource.updateOneProduct(requestData); },
      mustSimulateError: ProductMockGateway.MUST_SIMULATE_ERROR,
      gatewayName: "ProductMockGateway",
      transactionName: "updateOne"
    });
  }

  public async deleteOne(targetProductID: Product.ID): Promise<void> {
    return MockGatewayHelper.simulateDataSubmitting({
      requestData: targetProductID,
      getResponseData: (): void => { this.mockDataSource.deleteOneProduct(targetProductID); },
      mustSimulateError: ProductMockGateway.MUST_SIMULATE_ERROR,
      gatewayName: "ProductMockGateway",
      transactionName: "deleteOne"
    });
  }

}
