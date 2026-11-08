/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ┅┅┅ Business Rules ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
/* ╍╍╍ Entities ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
import ProductCategory from "@Entities/Product/ProductCategory";

/* ╍╍╍ Restrictions ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
import SupportedLanguagesBCP_47_Subtags from "@CommonSolution/Restrictions/SupportedLanguagesBCP_47_Subtags";

/* ┅┅┅ Data ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type ProductCategoryLocalization from "@MockDataSource/Localizations/ProductCategoryLocalization";

/* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type ProductsCategoriesIDsGeneratorForMockDataSource from
    "@MockDataSource/IDsGenerators/Product/ProductsCategoriesIDsGeneratorForMockDataSource";
import {
  LocalizableEntitiesByIDsMap,
  getRandomString,
  getArithmeticMean,
  adjustCharactersCount,
  isNotUndefined
} from "@yamato-daiwa/es-extensions";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


export default abstract class ProductCategoryMocker {

  public static generate(
    {
      requirements: { IDsGenerator },
      preDefinedFields = {},
      options = {}
    }: Readonly<{
      requirements: Readonly<{
        IDsGenerator: ProductsCategoriesIDsGeneratorForMockDataSource;
      }>;
      preDefinedFields?: Partial<
        Pick<ProductCategory, "ID"> &
        Readonly<{
          localizedNames?: Readonly<{ [key in SupportedLanguagesBCP_47_Subtags]?: string }>;
        }>
      >;
      options?: Readonly<{ nameInfixForSearchingImitation?: string; }>;
    }>
  ): LocalizableEntitiesByIDsMap.EntityWithLocalizations<
    ProductCategory, ProductCategoryLocalization, SupportedLanguagesBCP_47_Subtags
  > {

    const ID: ProductCategory.ID = preDefinedFields.ID ?? IDsGenerator.generateOne();

    return {

      entity: {
        ID,
        localizedName: "{{ localizedName }}"
      },

      localizations: LocalizableEntitiesByIDsMap.EntityWithLocalizations.createLocalizations(
        SupportedLanguagesBCP_47_Subtags,
        (languageBCP_47_Subtag: SupportedLanguagesBCP_47_Subtags): ProductCategoryLocalization =>

            ({
              languageBCP_47_Subtag,
              name:
                  ProductCategoryMocker.decideLocalizedName(
                    languageBCP_47_Subtag,
                    preDefinedFields.localizedNames?.[languageBCP_47_Subtag],
                    options.nameInfixForSearchingImitation
                  )
            })
      )

    };

  }

  private static decideLocalizedName(
    languageBCP_47_Subtag: SupportedLanguagesBCP_47_Subtags,
    preDefinedLocalizedName?: string,
    nameInfixForSearchingImitation?: string
  ): string {

    if (isNotUndefined(preDefinedLocalizedName)) {
      return adjustCharactersCount({
        targetString: preDefinedLocalizedName,
        minimalCharactersCount: ProductCategory.LocalizedName.MINIMAL_ONE_BYTE_CHARACTERS_COUNT,
        maximalCharactersCount: ProductCategory.LocalizedName.MAXIMAL_ONE_BYTE_CHARACTERS_COUNT,
        filling: { toStart: true },
        cropping: { fromEnd: true }
      });
    }


    switch (languageBCP_47_Subtag) {

      case SupportedLanguagesBCP_47_Subtags.english: {

        return getRandomString({
          minimalCharactersCount: ProductCategory.LocalizedName.MINIMAL_ONE_BYTE_CHARACTERS_COUNT,
          maximalCharactersCount: ProductCategory.LocalizedName.MAXIMAL_ONE_BYTE_CHARACTERS_COUNT,
          ...isNotUndefined(nameInfixForSearchingImitation) ?
              { infix: nameInfixForSearchingImitation } : null,
          minimalRandomlyGeneratedCharactersCount: getArithmeticMean(
            ProductCategory.LocalizedName.MINIMAL_ONE_BYTE_CHARACTERS_COUNT,
            ProductCategory.LocalizedName.MAXIMAL_ONE_BYTE_CHARACTERS_COUNT
          )
        });

      }

      case SupportedLanguagesBCP_47_Subtags.japanese: {

        return getRandomString({
          minimalCharactersCount: ProductCategory.LocalizedName.MINIMAL_ONE_BYTE_CHARACTERS_COUNT,
          maximalCharactersCount: ProductCategory.LocalizedName.MAXIMAL_ONE_BYTE_CHARACTERS_COUNT,
          ...isNotUndefined(nameInfixForSearchingImitation) ?
              { infix: nameInfixForSearchingImitation } : null,
          minimalRandomlyGeneratedCharactersCount: getArithmeticMean(
            ProductCategory.LocalizedName.MINIMAL_ONE_BYTE_CHARACTERS_COUNT,
            ProductCategory.LocalizedName.MAXIMAL_ONE_BYTE_CHARACTERS_COUNT
          )
        });

      }

    }

  }

}
