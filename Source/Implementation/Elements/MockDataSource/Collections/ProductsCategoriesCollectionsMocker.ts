/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ┅┅┅ Entities ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type ProductCategory from "@Entities/Product/ProductCategory";
import type ProductCategoryLocalization from "@MockDataSource/Localizations/ProductCategoryLocalization";

/* ┅┅┅ Restrictions ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type SupportedLanguagesBCP_47_Subtags from "@CommonSolution/Restrictions/SupportedLanguagesBCP_47_Subtags";

/* ┅┅┅ Data ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import ProductCategoryMocker from "../Entities/Product/Category/ProductCategoryMocker";

/* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import { LocalizableEntitiesByIDsMap } from "@yamato-daiwa/es-extensions";
import type { InMemorySerialNanoID_Generator } from "@yamato-daiwa/serial-unique-identifiers";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


abstract class ProductsCategoriesCollectionsMocker {

  public static generate(
    {
      mockingOrder,
      requirements: {
        productsCategoriesIDsGenerator
      }
    }: Readonly<{
      mockingOrder: ProductsCategoriesCollectionsMocker.MockingOrder;
      requirements: Readonly<{
        productsCategoriesIDsGenerator: InMemorySerialNanoID_Generator;
      }>;
    }>
  ): LocalizableEntitiesByIDsMap<
    ProductCategory, ProductCategory.ID, ProductCategoryLocalization, SupportedLanguagesBCP_47_Subtags
  > {

    const accumulatingCollection:
        LocalizableEntitiesByIDsMap<
          ProductCategory,
          ProductCategory.ID,
          ProductCategoryLocalization,
          SupportedLanguagesBCP_47_Subtags
        > =
            new LocalizableEntitiesByIDsMap({ getEntityID: ({ ID }: ProductCategory): ProductCategory.ID => ID });

    for (const subset of mockingOrder) {

      const itemsQuantity: number = "quantity" in subset ? subset.quantity : subset.withLocalizedNames.length;

      for (let itemNumber: number = 1; itemNumber <= itemsQuantity; itemNumber++) {

        const { entity, localizations }: LocalizableEntitiesByIDsMap.EntityWithLocalizations<
          ProductCategory, ProductCategoryLocalization, SupportedLanguagesBCP_47_Subtags
        > =

            ProductCategoryMocker.generate({
              requirements: { IDsGenerator: productsCategoriesIDsGenerator },
              preDefinedFields: {
                ..."withLocalizedNames" in subset ?
                    { localizedNames: subset.withLocalizedNames[itemNumber - 1] } :
                    null
              },
              options: {
                ..."nameInfixForSearchingImitation" in subset ?
                    { nameInfixForSearchingImitation: subset.nameInfixForSearchingImitation } : null
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


namespace ProductsCategoriesCollectionsMocker {

  export type MockingOrder = ReadonlyArray<Subset>;

  export type Subset = Readonly<
    {
      completelyRandom: true;
      quantity: number;
    } |
    {
      withLocalizedNames: ReadonlyArray<Readonly<{ [key in SupportedLanguagesBCP_47_Subtags]: string }>>;
    } |
    {
      nameInfixForSearchingImitation: string;
      quantity: number;
    }
  >;

}


export default ProductsCategoriesCollectionsMocker;
