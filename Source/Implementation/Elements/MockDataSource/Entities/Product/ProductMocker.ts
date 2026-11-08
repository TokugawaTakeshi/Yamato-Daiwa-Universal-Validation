/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ┅┅┅ Business Rules ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
/* ╍╍╍ Entities ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
import Product from "@Entities/Product/Product";
import type ProductCategory from "@Entities/Product/ProductCategory";

/* ╍╍╍ Restrictions ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
import SupportedLanguagesBCP_47_Subtags from "@CommonSolution/Restrictions/SupportedLanguagesBCP_47_Subtags";

/* ╍╍╍ Calculations ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
import calculatePriceWithConsumptionTaxRate from "@CommonSolution/Calculations/calculatePriceWithConsumptionTaxRate";

/* ┅┅┅ Data ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type ProductLocalization from "@MockDataSource/Localizations/ProductLocalization";
import type ProductCategoryLocalization from "@MockDataSource/Localizations/ProductCategoryLocalization";

/* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type ProductsIDsGeneratorForMockDataSource from
    "@MockDataSource/IDsGenerators/Product/ProductsIDsGeneratorForMockDataSource";
import {
  DataMocking,
  LocalizableEntitiesByIDsMap,
  getRandomString,
  getRandomInteger,
  getRandomArrayElement,
  getArithmeticMean,
  adjustCharactersCount,
  limitMinimalAndMaximalValues,
  isNotUndefined,
  getExpectedToBeNonUndefinedMapValue
} from "@yamato-daiwa/es-extensions";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


export default abstract class ProductMocker {

  private static readonly dummyImagesFilesNamesWithExtensions: ReadonlyArray<string> =
      [
        "DummyProduct-Red.png",
        "DummyProduct-Orange.png",
        "DummyProduct-Yellow.png",
        "DummyProduct-Green.png",
        "DummyProduct-Cyan.png",
        "DummyProduct-Blue.png",
        "DummyProduct-Purple.png"
      ];

  public static generate(
    {
      requirements: {
        IDsGenerator,
        availableCategories
      },
      preDefinedFields = {},
      options
    }: Readonly<{
      requirements: Readonly<{
        IDsGenerator: ProductsIDsGeneratorForMockDataSource;
        availableCategories: LocalizableEntitiesByIDsMap<
          ProductCategory, ProductCategory.ID, ProductCategoryLocalization, SupportedLanguagesBCP_47_Subtags
        >;
      }>;
      preDefinedFields?: Partial<
        Pick<
          Product,
              "ID" |
              "photoFileNameWithExtension" |
              "price__yens__excludingConsumptionTax" |
              "consumptionTaxRate" |
              "quantityRemainInStock"
        > &
        Readonly<{
          categoryID?: ProductCategory.ID;
          localizedTitles?: Readonly<{ [key in SupportedLanguagesBCP_47_Subtags]?: string }>;
          localizedDescriptions?: Readonly<{ [key in SupportedLanguagesBCP_47_Subtags]?: string }>;
        }>
      >;
      options: Readonly<{
        optionalPropertiesDecisionStrategy: DataMocking.OptionalPropertiesDecisionStrategies;
        titleInfixForSearchingImitation?: string;
      }>;
    }>
  ): LocalizableEntitiesByIDsMap.EntityWithLocalizations<
    Product, ProductLocalization, SupportedLanguagesBCP_47_Subtags
  > {

    const ID: Product.ID = preDefinedFields.ID ?? IDsGenerator.generateOne();

    const photoFileNameWithExtension: string =
        preDefinedFields.photoFileNameWithExtension ??
        getRandomArrayElement(ProductMocker.dummyImagesFilesNamesWithExtensions);

    const price__yens__excludingConsumptionTax: number =
        isNotUndefined(preDefinedFields.price__yens__excludingConsumptionTax) ?
            limitMinimalAndMaximalValues({
              targetNumber: preDefinedFields.price__yens__excludingConsumptionTax,
              minimalValue: Product.Price__Yens__ExcludingConsumptionTax.MINIMAL_VALUE,
              maximalValue: Product.Price__Yens__ExcludingConsumptionTax.MAXIMAL_VALUE
            }) :
            getRandomInteger({
              minimalValue: Product.Price__Yens__ExcludingConsumptionTax.MINIMAL_VALUE,
              maximalValue: Product.Price__Yens__ExcludingConsumptionTax.MAXIMAL_VALUE
            });

    const consumptionTaxRate: number =
        preDefinedFields.consumptionTaxRate ??
        /* eslint-disable-next-line @typescript-eslint/no-magic-numbers -- サンプル値としてマジックナンバー を許可。 */
        getRandomArrayElement([ 0.1, 0.08 ]);

    const categoryWithLocalizations: LocalizableEntitiesByIDsMap.EntityWithLocalizations<
      ProductCategory, ProductCategoryLocalization, SupportedLanguagesBCP_47_Subtags
    > =
        isNotUndefined(preDefinedFields.categoryID) ?
            getExpectedToBeNonUndefinedMapValue(availableCategories, preDefinedFields.categoryID) :
            getRandomArrayElement(Array.from(availableCategories.values()));

    const quantityRemainInStock: number | undefined = DataMocking.decideOptionalValue({
      ...isNotUndefined(preDefinedFields.quantityRemainInStock) ?
          {
            preDefinedValue: limitMinimalAndMaximalValues({
              targetNumber: preDefinedFields.quantityRemainInStock,
              minimalValue: Product.QuantityRemainInStock.MINIMAL_VALUE,
              maximalValue: Product.QuantityRemainInStock.MAXIMAL_VALUE
            })
          } :
          null,
      randomValueGenerator: (): number => getRandomInteger({
        minimalValue: Product.QuantityRemainInStock.MINIMAL_VALUE,
        maximalValue: Product.QuantityRemainInStock.MAXIMAL_VALUE
      }),
      strategy: options.optionalPropertiesDecisionStrategy
    });

    return {

      entity: {
        ID,
        localizedTitle: "{{ localizedTitle }}",
        localizedDescription: "{{ localizedDescription }}",
        photoFileNameWithExtension,
        category: categoryWithLocalizations.entity,
        price__yens__excludingConsumptionTax,
        price__yens__includingConsumptionTax:
            calculatePriceWithConsumptionTaxRate({ price__yens__excludingConsumptionTax, consumptionTaxRate }),
        consumptionTaxRate,
        ...isNotUndefined(quantityRemainInStock) ? { quantityRemainInStock } : null
      },

      localizations: LocalizableEntitiesByIDsMap.EntityWithLocalizations.createLocalizations(
        SupportedLanguagesBCP_47_Subtags,
        (languageBCP_47_Subtag: SupportedLanguagesBCP_47_Subtags): ProductLocalization =>

            ({
              languageBCP_47_Subtag,
              title:
                  ProductMocker.decideLocalizeTitle(
                    languageBCP_47_Subtag,
                    preDefinedFields.localizedTitles?.[languageBCP_47_Subtag],
                    options.titleInfixForSearchingImitation
                  ),
              ...ProductMocker.decideLocalizedDescription(
                languageBCP_47_Subtag,
                options.optionalPropertiesDecisionStrategy,
                preDefinedFields.localizedDescriptions?.[languageBCP_47_Subtag]
              )
            })
      )

    };

  }

  private static decideLocalizeTitle(
    languageBCP_47_Subtag: SupportedLanguagesBCP_47_Subtags,
    preDefinedLocalizedName?: string,
    nameInfixForSearchingImitation?: string
  ): string {

    if (isNotUndefined(preDefinedLocalizedName)) {
      return adjustCharactersCount({
        targetString: preDefinedLocalizedName,
        minimalCharactersCount: Product.LocalizedTitle.MINIMAL_ONE_BYTE_CHARACTERS_COUNT,
        maximalCharactersCount: Product.LocalizedTitle.MAXIMAL_ONE_BYTE_CHARACTERS_COUNT,
        filling: { toStart: true },
        cropping: { fromEnd: true }
      });
    }

    switch (languageBCP_47_Subtag) {

      case SupportedLanguagesBCP_47_Subtags.english: {

        return getRandomString({
          minimalCharactersCount: Product.LocalizedTitle.MINIMAL_ONE_BYTE_CHARACTERS_COUNT,
          maximalCharactersCount: Product.LocalizedTitle.MAXIMAL_ONE_BYTE_CHARACTERS_COUNT,
          ...isNotUndefined(nameInfixForSearchingImitation) ?
              { infix: nameInfixForSearchingImitation } : null,
          minimalRandomlyGeneratedCharactersCount: getArithmeticMean(
            Product.LocalizedTitle.MINIMAL_ONE_BYTE_CHARACTERS_COUNT,
            Product.LocalizedTitle.MAXIMAL_ONE_BYTE_CHARACTERS_COUNT
          )
        });

      }

      case SupportedLanguagesBCP_47_Subtags.japanese: {

        return getRandomString({
          minimalCharactersCount: Product.LocalizedTitle.MINIMAL_ONE_BYTE_CHARACTERS_COUNT,
          maximalCharactersCount: Product.LocalizedTitle.MAXIMAL_ONE_BYTE_CHARACTERS_COUNT,
          ...isNotUndefined(nameInfixForSearchingImitation) ?
              { infix: nameInfixForSearchingImitation } : null,
          minimalRandomlyGeneratedCharactersCount: getArithmeticMean(
            Product.LocalizedTitle.MINIMAL_ONE_BYTE_CHARACTERS_COUNT,
            Product.LocalizedTitle.MAXIMAL_ONE_BYTE_CHARACTERS_COUNT
          )
        });

      }

    }

  }

  private static decideLocalizedDescription(
    languageBCP_47_Subtag: SupportedLanguagesBCP_47_Subtags,
    optionalPropertiesDecisionStrategy: DataMocking.OptionalPropertiesDecisionStrategies,
    preDefinedLocalizedDescription?: string
  ): { description?: string; } {

    const localizedDescription: string | undefined = DataMocking.decideOptionalValue({
      ...isNotUndefined(preDefinedLocalizedDescription) ?
          {
            preDefinedValue: adjustCharactersCount({
              targetString: preDefinedLocalizedDescription,
              minimalCharactersCount: Product.LocalizedDescription.MINIMAL_ONE_BYTE_CHARACTERS_COUNT,
              maximalCharactersCount: Product.LocalizedDescription.MAXIMAL_ONE_BYTE_CHARACTERS_COUNT,
              filling: { toStart: true },
              cropping: { fromEnd: true }
            })
          } :
          null,
      randomValueGenerator(): string {

        switch (languageBCP_47_Subtag) {

          case SupportedLanguagesBCP_47_Subtags.english: {

            return getRandomString({
              minimalCharactersCount: Product.LocalizedDescription.MINIMAL_ONE_BYTE_CHARACTERS_COUNT,
              maximalCharactersCount: Product.LocalizedDescription.MAXIMAL_ONE_BYTE_CHARACTERS_COUNT,
              minimalRandomlyGeneratedCharactersCount: getArithmeticMean(
                Product.LocalizedDescription.MINIMAL_ONE_BYTE_CHARACTERS_COUNT,
                Product.LocalizedDescription.MAXIMAL_ONE_BYTE_CHARACTERS_COUNT
              )
            });

          }

          case SupportedLanguagesBCP_47_Subtags.japanese: {

            return getRandomString({
              minimalCharactersCount: Product.LocalizedDescription.MINIMAL_ONE_BYTE_CHARACTERS_COUNT,
              maximalCharactersCount: Product.LocalizedDescription.MAXIMAL_ONE_BYTE_CHARACTERS_COUNT,
              minimalRandomlyGeneratedCharactersCount: getArithmeticMean(
                Product.LocalizedDescription.MINIMAL_ONE_BYTE_CHARACTERS_COUNT,
                Product.LocalizedDescription.MAXIMAL_ONE_BYTE_CHARACTERS_COUNT
              )
            });

          }

        }
      },
      strategy: optionalPropertiesDecisionStrategy
    });


    return isNotUndefined(localizedDescription) ? { description: localizedDescription } : {};

  }

}
