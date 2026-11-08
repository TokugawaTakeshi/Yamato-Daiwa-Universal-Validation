/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ┅┅┅ Entities ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type Product from "@Entities/Product/Product";
import type ProductCategory from "@Entities/Product/ProductCategory";
import type ProductLocalization from "@MockDataSource/Localizations/ProductLocalization";

/* ┅┅┅ Restrictions ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type SupportedLanguagesBCP_47_Subtags from "@CommonSolution/Restrictions/SupportedLanguagesBCP_47_Subtags";

/* ┅┅┅ Data ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import ProductMocker from "@MockDataSource/Entities/Product/ProductMocker";

/* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type { InMemorySerialNanoID_Generator } from "@yamato-daiwa/serial-unique-identifiers";
import type ProductCategoryLocalization from "@MockDataSource/Localizations/ProductCategoryLocalization";
import { DataMocking, LocalizableEntitiesByIDsMap } from "@yamato-daiwa/es-extensions";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


abstract class ProductsCollectionsMocker {

  public static generate(
    {
      mockingOrder,
      requirements: {
        productsIDsGenerator,
        availableCategories
      }
    }: Readonly<{
      mockingOrder: ProductsCollectionsMocker.MockingOrder;
      requirements: Readonly<{
        productsIDsGenerator: InMemorySerialNanoID_Generator;
        availableCategories: LocalizableEntitiesByIDsMap<
          ProductCategory, ProductCategory.ID, ProductCategoryLocalization, SupportedLanguagesBCP_47_Subtags
        >;
      }>;
    }>
  ): LocalizableEntitiesByIDsMap<Product, Product.ID, ProductLocalization, SupportedLanguagesBCP_47_Subtags> {

    const accumulatingCollection:
        LocalizableEntitiesByIDsMap<
          Product,
          Product.ID,
          ProductLocalization,
          SupportedLanguagesBCP_47_Subtags
        > =
            new LocalizableEntitiesByIDsMap({ getEntityID: ({ ID }: Product): Product.ID => ID });

    for (const subset of mockingOrder) {

      const itemsQuantity: number = "quantity" in subset ? subset.quantity : subset.withLocalizedTitles.length;

      for (let itemNumber: number = 1; itemNumber <= itemsQuantity; itemNumber++) {

        const { entity, localizations }: LocalizableEntitiesByIDsMap.EntityWithLocalizations<
          Product, ProductLocalization, SupportedLanguagesBCP_47_Subtags
        > =

            ProductMocker.generate({
              requirements: {
                IDsGenerator: productsIDsGenerator,
                availableCategories
              },
              preDefinedFields: {
                ..."withLocalizedTitles" in subset ?
                    { localizedTitles: subset.withLocalizedTitles[itemNumber - 1] } :
                    null
              },
              options: {
                optionalPropertiesDecisionStrategy:
                    "optionalPropertiesDecisionStrategy" in subset ?
                        subset.optionalPropertiesDecisionStrategy :
                        DataMocking.OptionalPropertiesDecisionStrategies.mustGenerateWith50PercentageProbability,
                ..."titleInfixForSearchingImitation" in subset ?
                    { titleInfixForSearchingImitation: subset.titleInfixForSearchingImitation } : null
              }
            });

        accumulatingCollection.set(
          entity.ID,
          {
            entity,
            localizations
          }
        );

      }

    }

    return accumulatingCollection;

  }

}


namespace ProductsCollectionsMocker {

  export type MockingOrder = ReadonlyArray<Subset>;

  export type Subset = Readonly<
    {
      optionalPropertiesDecisionStrategy: DataMocking.OptionalPropertiesDecisionStrategies;
      titleInfixForSearchingImitation?: string;
      quantity: number;
    } |
    {
      withLocalizedTitles: ReadonlyArray<Readonly<{ [key in SupportedLanguagesBCP_47_Subtags]: string }>>;
    }
  >;

}


export default ProductsCollectionsMocker;
