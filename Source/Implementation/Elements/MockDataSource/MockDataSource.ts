/* eslint-disable @typescript-eslint/member-ordering -- 特別な整理方法。 */

/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ┅┅┅ Entities ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
/* ┅┅┅ Access Control ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type User from "@CommonSolution/Entities/AccessControl/User";

/* ┅┅┅ Contact Request ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type ContactRequest from "@Entities/ContactRequest/ContactRequest";
import type InvalidContactRequestSubmittingAttempt from "@Entities/ContactRequest/InvalidContactRequestSubmittingAttempt";

/* ╍╍╍ Product ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
import type Product from "@Entities/Product/Product";
import type ProductCategory from "@Entities/Product/ProductCategory";

/* ┅┅┅ Calculations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import calculatePriceWithConsumptionTaxRate from "@CommonSolution/Calculations/calculatePriceWithConsumptionTaxRate";

/* ┅┅┅ Gateways ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import ProductCategoryGateway from "@Gateways/ProductCategoryGateway";
import ProductGateway from "@Gateways/ProductGateway";
import type ContactRequestGateway from "@Gateways/ContactRequestGateway";

/* ┅┅┅ Restrictions ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import SupportedLanguagesBCP_47_Subtags from "@CommonSolution/Restrictions/SupportedLanguagesBCP_47_Subtags";

/* ┅┅┅ Mock Data Source ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import ProductsIDsGeneratorForMockDataSource from "./IDsGenerators/Product/ProductsIDsGeneratorForMockDataSource";
import ProductsCategoriesIDsGeneratorForMockDataSource from
    "./IDsGenerators/Product/ProductsCategoriesIDsGeneratorForMockDataSource";
import ContactRequestsIDsGeneratorsForMockDataSource from
    "@MockDataSource/IDsGenerators/ContactRequest/ContactRequestsIDsGeneratorsForMockDataSource";
import InvalidContactRequestsSubmittingAttemptsIDsGeneratorsForMockDataSource from
    "@MockDataSource/IDsGenerators/ContactRequest/InvalidContactRequestsSubmittingAttemptsIDsGeneratorsForMockDataSource";

/* ┅┅┅ Data ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
/* ╍╍╍ Localizations ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
import type ProductLocalization from "@MockDataSource/Localizations/ProductLocalization";
import type ProductCategoryLocalization from "@MockDataSource/Localizations/ProductCategoryLocalization";

/* ╍╍╍ Mockers ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
import ProductsCategoriesCollectionsMocker from "./Collections/ProductsCategoriesCollectionsMocker";
import ProductsCollectionsMocker from "./Collections/ProductsCollectionsMocker";

/* ┅┅┅ Samples Repositories ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import SampleProductsCategoriesRepository from "@MockDataSource/SamplesRepositories/SampleProductsCategoriesRepository";
import SampleProductsRepository from "@MockDataSource/SamplesRepositories/SampleProductsRepository";

/* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import {
  DataMocking,
  LocalizableEntitiesByIDsMap,
  getItemsOfPaginationPage,
  getExpectedToBeNonUndefinedMapValue,
  getEntriesOfObjectWithFixedKeysSetAndUniformValues,
  Logger,
  isNumber,
  isString,
  isNull,
  isNotUndefined
} from "@yamato-daiwa/es-extensions";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


export default class MockDataSource {

  /* ━━━ Data ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Access Control ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public readonly users: Map<User.EmailAddress, User> = new Map();

  /* ┅┅┅ Contact Request ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public readonly contactRequests: Map<ContactRequest.ID, ContactRequest> = new Map();
  public readonly invalidContactRequestSubmittingAttempts:
      Map<InvalidContactRequestSubmittingAttempt.ID, InvalidContactRequestSubmittingAttempt> = new Map();

  /* ┅┅┅ Product ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public readonly productsCategories:
      LocalizableEntitiesByIDsMap<
        ProductCategory, ProductCategory.ID, ProductCategoryLocalization, SupportedLanguagesBCP_47_Subtags
      >;

  public readonly products:
      LocalizableEntitiesByIDsMap<Product, Product.ID, ProductLocalization, SupportedLanguagesBCP_47_Subtags>;


  /* ━━━ IDs Generators ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  private readonly productsCategoriesIDsGenerator: ProductsCategoriesIDsGeneratorForMockDataSource =
      new ProductsCategoriesIDsGeneratorForMockDataSource();
  private readonly productsIDsGenerator: ProductsIDsGeneratorForMockDataSource =
      new ProductsIDsGeneratorForMockDataSource();
  private readonly contactRequestsIDsGenerator: ContactRequestsIDsGeneratorsForMockDataSource =
      new ContactRequestsIDsGeneratorsForMockDataSource();
  private readonly invalidContactRequestsSubmittingAttempts:
      InvalidContactRequestsSubmittingAttemptsIDsGeneratorsForMockDataSource =
          new InvalidContactRequestsSubmittingAttemptsIDsGeneratorsForMockDataSource();

  /* ━━━ Relations ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  private readonly productsCategoriesUsage: Readonly<{
    products: Map<Product.ID, ProductCategory.ID>;
  }>;


  /* ━━━ Initialization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  private static selfSoleInstance: MockDataSource | null = null;

  public static getInstance(): MockDataSource {
    return MockDataSource.selfSoleInstance ?? (MockDataSource.selfSoleInstance = new MockDataSource());
  }

  private constructor() {

    const sampleProductsCategoriesRepository: SampleProductsCategoriesRepository = new SampleProductsCategoriesRepository();

    const sampleProductsCategoriesLocalizableEntitiesMap:
        LocalizableEntitiesByIDsMap<
          ProductCategory,
          ProductCategory.ID,
          ProductCategoryLocalization,
          SupportedLanguagesBCP_47_Subtags
        > =
            sampleProductsCategoriesRepository.assignIDsAndGetLocalizableEntitiesMap({
              preGeneratedIDs:
                  this.productsCategoriesIDsGenerator.generateMultipleOnes(sampleProductsCategoriesRepository.entitiesCount),
              mustCacheGeneratedSamples: true
            });

    const sampleProductRepository: SampleProductsRepository = new SampleProductsRepository(
      sampleProductsCategoriesRepository.getExpectedBeInitializedSamplesWithLocalizationsByHumanFriendlyIDs()
    );

    this.productsCategories =
        new LocalizableEntitiesByIDsMap({
          initialEntitiesWithLocalizations: [
            ...sampleProductsCategoriesLocalizableEntitiesMap.values(),
            ...ProductsCategoriesCollectionsMocker.generate({
              mockingOrder: [
                {
                  nameInfixForSearchingImitation: "-SEARCHING_TEST-",
                  quantity: 3
                },
                {
                  completelyRandom: true,
                  quantity: 2
                }
              ],
              requirements: {
                productsCategoriesIDsGenerator: this.productsCategoriesIDsGenerator
              }
            }).
                values()
          ],
          getEntityID: (productCategory: ProductCategory): ProductCategory.ID => productCategory.ID
        });

    this.products =
        new LocalizableEntitiesByIDsMap({
          initialEntitiesWithLocalizations: [

              ...sampleProductRepository.assignIDsAndGetLocalizableEntitiesMap({
                  preGeneratedIDs: this.productsIDsGenerator.generateMultipleOnes(sampleProductRepository.entitiesCount),
                mustCacheGeneratedSamples: false
              }).
                  values(),

              ...ProductsCollectionsMocker.generate({
                mockingOrder: [
                  {
                    optionalPropertiesDecisionStrategy: DataMocking.OptionalPropertiesDecisionStrategies.mustGenerateAll,
                    quantity: 3
                  },
                  {
                    optionalPropertiesDecisionStrategy: DataMocking.OptionalPropertiesDecisionStrategies.mustGenerateAll,
                    titleInfixForSearchingImitation: "-SEARCHING_TEST-",
                    quantity: 2
                  },
                  {
                    optionalPropertiesDecisionStrategy:
                        DataMocking.OptionalPropertiesDecisionStrategies.mustSkipIfHasNotBeenPreDefined,
                    quantity: 3
                  }
                ],
                requirements: {
                  productsIDsGenerator: this.productsIDsGenerator,
                  availableCategories: sampleProductsCategoriesLocalizableEntitiesMap
                }
              }).
                  values()

          ],
          getEntityID: (product: Product): Product.ID => product.ID
        });

    this.productsCategoriesUsage = {
      products:
          new Map(
            Array.from(this.products.values()).
                map(
                  (
                    { entity: product }:
                        LocalizableEntitiesByIDsMap.
                            EntityWithLocalizations<Product, ProductLocalization, SupportedLanguagesBCP_47_Subtags>
                  ):
                      Readonly<[ Product.ID, ProductCategory.ID ]> =>
                          [ product.ID, product.category.ID ]
                )
          )
    };

    Logger.logSuccess({
      title: "モックテータソース初期化完了",
      description: "モックテータソースがした。納品版に於いては、此のメッセージがあるべきではない。"
    });

  }


  /* ━━━ Transactions ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Access Control ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public retrieveUserByEmailAddressIfExists(targetEmailAddress: string): User | null {
    return this.users.get(targetEmailAddress) ?? null;
  }


  /* ┅┅┅ Contact Request ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public submitLegitimateContactRequest(
    {
      target,
      requesterName,
      requesterEmailAddress,
      requesterPhoneNumber__digitsOnly,
      message
    }: ContactRequestGateway.LegitimateContactRequestSubmitting.RequestData
  ): ContactRequest.ID {

    const ID_ForNewContactRequest: ContactRequest.ID = this.contactRequestsIDsGenerator.generateOne();

    this.contactRequests.set(
      ID_ForNewContactRequest,
      {
        ID: ID_ForNewContactRequest,
        target,
        requesterName,
        requesterEmailAddress,
        requesterPhoneNumber__digitsOnly,
        message,
        submittingDateTime: new Date()
      }
    );

    return ID_ForNewContactRequest;

  }

  public recordInvalidContactRequestSubmittingAttempt(
    {
      target,
      requesterName,
      requesterEmailAddress,
      requesterPhoneNumber__digitsOnly,
      message
    }: ContactRequestGateway.InvalidContactRequestSubmittingRecording.RequestData
  ): void {

    const ID_ForNewInvalidContactRequestSubmittingAttempt: InvalidContactRequestSubmittingAttempt.ID =
        this.invalidContactRequestsSubmittingAttempts.generateOne();

    this.invalidContactRequestSubmittingAttempts.set(
        ID_ForNewInvalidContactRequestSubmittingAttempt,
        {
          ID: ID_ForNewInvalidContactRequestSubmittingAttempt,
          target,
          requesterName,
          requesterEmailAddress,
          requesterPhoneNumber__digitsOnly,
          message,
          submittingDateTime__ISO8601: new Date().toISOString()
        }
    );

  }


  /* ┅┅┅ Product Category ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public retrieveAllProductsCategories(
    { targetLanguageBCP_47_Subtag }: Readonly<{ targetLanguageBCP_47_Subtag: SupportedLanguagesBCP_47_Subtags; }>
  ): Array<ProductCategory> {
    return Array.from(this.productsCategories.values()).
        map(
          (
            { entity: productCategory, localizations }:
            LocalizableEntitiesByIDsMap.
                EntityWithLocalizations<ProductCategory, ProductCategoryLocalization, SupportedLanguagesBCP_47_Subtags>
          ): ProductCategory => {

          const targetLocalization: ProductCategoryLocalization = localizations[targetLanguageBCP_47_Subtag];

          return {
            ...productCategory,
            localizedName: targetLocalization.name
          };

        }
    );
  }

  public retrieveProductsCategoriesSelection(
    {
      searchingByFullOrPartialProductCategoryName = "",
      targetLanguageBCP_47_Subtag
    }: ProductCategoryGateway.RetrievingOfSelection.RequestParameters
  ): ProductCategoryGateway.RetrievingOfSelection.ResponseData {

    const productsCategoriesSelection: Array<ProductCategory> =
        Array.from(this.productsCategories.values()).
            flatMap(
              (
                { entity: productCategory, localizations }:
                    LocalizableEntitiesByIDsMap.EntityWithLocalizations<
                      ProductCategory, ProductCategoryLocalization, SupportedLanguagesBCP_47_Subtags
                    >
              ): Array<ProductCategory> => {

                const targetLocalization: ProductCategoryLocalization = localizations[targetLanguageBCP_47_Subtag];

                return [
                  ...searchingByFullOrPartialProductCategoryName.length >
                      ProductCategoryGateway.RetrievingOfSelection.RequestParameters.
                          MINIMAL_CHARACTERS_AT_SEARCHING_REQUEST_BY_FULL_OR_PARTIAL_PRODUCT_CATEGORY_NAME &&
                      !targetLocalization.name.includes(searchingByFullOrPartialProductCategoryName) ?
                          [] :
                          [
                            {
                              ID: productCategory.ID,
                              localizedName: targetLocalization.name
                            }
                          ]
                ];

              }
            );

    return {
      filteredItems: productsCategoriesSelection,
      totalItemsCountInDataSource: this.productsCategories.size
    };

  }

  public retrieveExpectedToBeExistingOneProductCategory(
    {
      targetLanguageBCP_47_Subtag,
      ID_OfTargetProductCategory
    }: ProductCategoryGateway.RetrievingOfOne.RequestParameters
  ): ProductCategory {

    const {
      entity,
      localizations
    }: LocalizableEntitiesByIDsMap.
        EntityWithLocalizations<ProductCategory, ProductCategoryLocalization, SupportedLanguagesBCP_47_Subtags> =
            getExpectedToBeNonUndefinedMapValue(this.productsCategories, ID_OfTargetProductCategory);

    return {
      ...entity,
      localizedName: localizations[targetLanguageBCP_47_Subtag].name
    };

  }

  public addOneProductCategory(
    {
      productCategoryLocalizedNames
    }: ProductCategoryGateway.AddingOfOne.RequestData
  ): ProductCategoryGateway.AddingOfOne.AddedProductCategoryID {

    const ID_ForNewProductCategory: string = this.productsCategoriesIDsGenerator.generateOne();

    this.productsCategories.addEntityWithLocalization({
      entity: {
        ID: ID_ForNewProductCategory,
        localizedName: "{{ localizedName }}"
      },
      localizations: {
        [SupportedLanguagesBCP_47_Subtags.japanese]: {
          name: productCategoryLocalizedNames[SupportedLanguagesBCP_47_Subtags.japanese],
          languageBCP_47_Subtag: SupportedLanguagesBCP_47_Subtags.japanese
        },
        [SupportedLanguagesBCP_47_Subtags.english]: {
          name: productCategoryLocalizedNames[SupportedLanguagesBCP_47_Subtags.english],
          languageBCP_47_Subtag: SupportedLanguagesBCP_47_Subtags.english
        }
      }
    });

    return ID_ForNewProductCategory;

  }

  public updateOneProductCategory(requestData: ProductCategoryGateway.UpdatingOfOne.RequestData): void {

    const { localizations }:
        LocalizableEntitiesByIDsMap.
            EntityWithLocalizations<ProductCategory, ProductCategoryLocalization, SupportedLanguagesBCP_47_Subtags> =
                getExpectedToBeNonUndefinedMapValue(this.productsCategories, requestData.productCategoryID);

    for (const [ languageBCP_47_Subtag, localization ] of getEntriesOfObjectWithFixedKeysSetAndUniformValues(localizations)) {

      const { productCategoryName: productCategoryNewName }:
          ProductCategoryGateway.UpdatingOfOne.RequestData.LocaleDependents =
              requestData.localeDependents[languageBCP_47_Subtag] ?? {};

      if (isNotUndefined(productCategoryNewName)) {
        localization.name = productCategoryNewName;
      }

    }

  }

  public deleteOneProductCategory(targetProductCategoryID: ProductCategory.ID): void {

    if (
      Object.values(this.productsCategoriesUsage).
          some(
            (IDsOfUsedCategories: Map<unknown, ProductCategory.ID>): boolean =>
                IDsOfUsedCategories.has(targetProductCategoryID)
          )
    ) {
      Logger.throwErrorWithFormattedMessage({
        errorType: "DeletingTargetIsInUseError",
        title: "削除対象の目的は使用中",
        description: `ID「${ targetProductCategoryID }」のカテゴリーは仕様中なので削除不可能`,
        occurrenceLocation: "className.methodName(compoundParameter)",
        additionalData: this.productsCategoriesUsage
      });
    }

    this.productsCategories.delete(targetProductCategoryID);

  }


  /* ┅┅┅ Product ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public retrieveAllProducts(
    { targetLanguageBCP_47_Subtag }: Readonly<{ targetLanguageBCP_47_Subtag: SupportedLanguagesBCP_47_Subtags; }>
  ): Array<Product> {
    return Array.from(this.products.values()).
        map(
          (
            { entity: product, localizations }:
                LocalizableEntitiesByIDsMap.EntityWithLocalizations<
                  Product, ProductLocalization, SupportedLanguagesBCP_47_Subtags
                >
          ): Product => {

            const targetLocalization: ProductLocalization = localizations[targetLanguageBCP_47_Subtag];

            return {
              ...product,
              localizedTitle: targetLocalization.title,
              localizedDescription: targetLocalization.description
            };

          }
        );
  }

  public retrieveProductsSelection(
    {
      targetLanguageBCP_47_Subtag,
      categoriesIDs,
      searchingByFullOrPartialProductTitle = "",
      itemsCountPerPaginationPage,
      paginationPageNumber
    }: ProductGateway.RetrievingOfSelection.RequestParameters
  ): ProductGateway.RetrievingOfSelection.ResponseData {

    const productsSelection: Array<Product> =
        Array.from(this.products.values()).
            flatMap(
              (
                { entity: product, localizations }:
                    LocalizableEntitiesByIDsMap.EntityWithLocalizations<
                      Product, ProductLocalization, SupportedLanguagesBCP_47_Subtags
                    >
              ): Array<Product> => {

                const targetLocalization: ProductLocalization = localizations[targetLanguageBCP_47_Subtag];

                if (categoriesIDs.length > 0 && !categoriesIDs.includes(product.category.ID)) {
                  return [];
                }


                if (
                  searchingByFullOrPartialProductTitle.length >
                      ProductGateway.RetrievingOfSelection.RequestParameters.
                          MINIMAL_CHARACTERS_AT_SEARCHING_REQUEST_BY_FULL_OR_PARTIAL_PRODUCT_TITLE &&
                  !targetLocalization.title.includes(searchingByFullOrPartialProductTitle)
                ) {
                  return [];
                }


                return [
                  {
                    ...product,
                    localizedTitle: targetLocalization.title,
                    localizedDescription: targetLocalization.description
                  }
                ];

              }
            );

    return {
      filteredItemsOfTargetPaginationPage:
          getItemsOfPaginationPage({
            targetPageNumber__numerationFrom1: paginationPageNumber,
            items: productsSelection,
            itemsCountPerPaginationPage
          }),
      selectionItemsCount: productsSelection.length,
      totalItemsCount: this.products.size
    };

  }

  public retrieveExpectedToBeExistingOneProduct(
    {
      targetLanguageBCP_47_Subtag,
      ID_OfTargetProduct
    }: ProductGateway.RetrievingOfOne.RequestParameters
  ): Product {

    const {
      entity,
      localizations
    }: LocalizableEntitiesByIDsMap.
        EntityWithLocalizations<Product, ProductLocalization, SupportedLanguagesBCP_47_Subtags> =
            getExpectedToBeNonUndefinedMapValue(this.products, ID_OfTargetProduct);

    const targetLocalization: ProductLocalization = localizations[targetLanguageBCP_47_Subtag];

    return {
      ...entity,
      localizedTitle: targetLocalization.title,
      localizedDescription: targetLocalization.description
    };

  }

  public addOneProduct(
    {
      localizations: productLocalizations,
      productCategoryID,
      price__yens__excludingConsumptionTax,
      consumptionTaxRate,
      productQuantityRemainInStock
    }: ProductGateway.AddingOfOne.RequestData
  ): ProductGateway.AddingOfOne.AddedProductID {

    const ID_ForNewProduct: string = this.productsIDsGenerator.generateOne();

    this.products.addEntityWithLocalization({
      entity: {
        ID: ID_ForNewProduct,
        localizedTitle: "{{ localizedTitle }}",
        localizedDescription: "{{ localizedDescription }}",
        photoFileNameWithExtension: "Dummy.jpg",
        category: {
          ID: productCategoryID,
          localizedName: "{{ localizedName }}"
        },
        price__yens__excludingConsumptionTax,
        consumptionTaxRate,
        price__yens__includingConsumptionTax:
            calculatePriceWithConsumptionTaxRate({ price__yens__excludingConsumptionTax, consumptionTaxRate }),
        ...isNotUndefined(productQuantityRemainInStock) ?
            { quantityRemainInStock: productQuantityRemainInStock } :
            null
      },
      localizations: {
        [SupportedLanguagesBCP_47_Subtags.japanese]: {
          title: productLocalizations[SupportedLanguagesBCP_47_Subtags.japanese].productTitle,
          description: productLocalizations[SupportedLanguagesBCP_47_Subtags.japanese].productDescription,
          languageBCP_47_Subtag: SupportedLanguagesBCP_47_Subtags.japanese
        },
        [SupportedLanguagesBCP_47_Subtags.english]: {
          title: productLocalizations[SupportedLanguagesBCP_47_Subtags.english].productTitle,
          description: productLocalizations[SupportedLanguagesBCP_47_Subtags.english].productDescription,
          languageBCP_47_Subtag: SupportedLanguagesBCP_47_Subtags.english
        }
      }
    });

    this.productsCategoriesUsage.products.set(ID_ForNewProduct, productCategoryID);

    return ID_ForNewProduct;

  }

  public updateOneProduct(requestData: ProductGateway.UpdatingOfOne.RequestData): void {

    const { entity, localizations }:
        LocalizableEntitiesByIDsMap.EntityWithLocalizations<Product, ProductLocalization, SupportedLanguagesBCP_47_Subtags> =
                getExpectedToBeNonUndefinedMapValue(this.products, requestData.productID);

    if (isNotUndefined(requestData.productCategoryID)) {
      entity.category = getExpectedToBeNonUndefinedMapValue(this.productsCategories, requestData.productCategoryID).entity;
    }

    if (isNotUndefined(requestData.productPrice__yens__excludingTax)) {
      entity.price__yens__excludingConsumptionTax = requestData.productPrice__yens__excludingTax;
    }

    if (isNumber(requestData.productQuantityRemainInStock, { mustConsiderNaN_AsNumber: false })) {
      entity.quantityRemainInStock = requestData.productQuantityRemainInStock;
    } else if (isNull(requestData.productQuantityRemainInStock)) {
      delete entity.quantityRemainInStock;
    }

    for (const [ languageBCP_47_Subtag, localization ] of getEntriesOfObjectWithFixedKeysSetAndUniformValues(localizations)) {

      const {
        title: updatedProductTitle,
        description: updatedProductDescription
      }: ProductLocalization =
          localizations[languageBCP_47_Subtag];

      if (isNotUndefined(updatedProductTitle)) {
        localization.title = updatedProductTitle;
      }

      if (isString(updatedProductDescription)) {
        localization.description = updatedProductDescription;
      } else if (isNull(updatedProductDescription)) {
        delete localization.description;
      }

    }

  }

  public deleteOneProduct(targetProductID: Product.ID): void {
    this.products.delete(targetProductID);
  }


  /* ━━━ Non named group ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
 public getCurrentPositionsOfProductsCategoriesIDsGenerator(): Array<string> {
    return this.productsCategoriesIDsGenerator.getReservedPositions();
  }

  public getCurrentPositionsOfProductsIDsGenerator(): Array<string> {
    return this.productsIDsGenerator.getReservedPositions();
  }

  public getCurrentPositionsOfContactRequestsIDsGenerator(): Array<string> {
    return this.contactRequestsIDsGenerator.getReservedPositions();
  }

  public getCurrentPositionsOfInvalidContactRequestsSubmittingAttemptsIDsGenerator(): Array<string> {
    return this.invalidContactRequestsSubmittingAttempts.getReservedPositions();
  }

}
