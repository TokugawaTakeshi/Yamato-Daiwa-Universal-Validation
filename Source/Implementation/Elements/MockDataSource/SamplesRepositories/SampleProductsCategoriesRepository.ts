/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ┅┅┅ Entities ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type ProductCategory from "@Entities/Product/ProductCategory";

/* ┅┅┅ Restrictions ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import SupportedLanguagesBCP_47_Subtags from "@CommonSolution/Restrictions/SupportedLanguagesBCP_47_Subtags";

/* ┅┅┅ Data ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type ProductCategoryLocalization from "@MockDataSource/Localizations/ProductCategoryLocalization";

/* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import { LocalizableSampleDataRepository, type LocalizableEntitiesByIDsMap } from "@yamato-daiwa/es-extensions";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


class SampleProductsCategoriesRepository extends LocalizableSampleDataRepository<
  ProductCategory,
  ProductCategory.ID,
  SampleProductsCategoriesRepository.HumanReadableIDs,
  ProductCategoryLocalization,
  SupportedLanguagesBCP_47_Subtags,
  SampleProductsCategoriesRepository.Workpiece
> {

  protected readonly workpieces: SampleProductsCategoriesRepository.Workpieces = {
    officeDesks: {
      [SupportedLanguagesBCP_47_Subtags.english]: { name: "Office Desks" },
      [SupportedLanguagesBCP_47_Subtags.japanese]: { name: "事務所専用机" }
    },
    kitchenDesks: {
      [SupportedLanguagesBCP_47_Subtags.english]: { name: "Kitchen Desks" },
      [SupportedLanguagesBCP_47_Subtags.japanese]: { name: "キッチンデスク" }
    },
    diningTables: {
      [SupportedLanguagesBCP_47_Subtags.english]: { name: "Dining Tables" },
      [SupportedLanguagesBCP_47_Subtags.japanese]: { name: "ダイニングテーブル" }
    },
    sofas: {
      [SupportedLanguagesBCP_47_Subtags.english]: { name: "Sofas" },
      [SupportedLanguagesBCP_47_Subtags.japanese]: { name: "ソファ" }
    },
    bedFrames: {
      [SupportedLanguagesBCP_47_Subtags.english]: { name: "Bed Frames" },
      [SupportedLanguagesBCP_47_Subtags.japanese]: { name: "ベッドフレーム" }
    },
    wardrobes: {
      [SupportedLanguagesBCP_47_Subtags.english]: { name: "Wardrobes" },
      [SupportedLanguagesBCP_47_Subtags.japanese]: { name: "ワードローブ" }
    },
    lighting: {
      [SupportedLanguagesBCP_47_Subtags.english]: { name: "Lighting" },
      [SupportedLanguagesBCP_47_Subtags.japanese]: { name: "照明" }
    },
    curtainsAndBlinds: {
      [SupportedLanguagesBCP_47_Subtags.english]: { name: "Curtains & Blinds" },
      [SupportedLanguagesBCP_47_Subtags.japanese]: { name: "カーテン＆ブラインド" }
    },
    bathroomStorage: {
      [SupportedLanguagesBCP_47_Subtags.english]: { name: "Bathroom Storage" },
      [SupportedLanguagesBCP_47_Subtags.japanese]: { name: "バスルーム収納" }
    },
    outdoorFurniture: {
      [SupportedLanguagesBCP_47_Subtags.english]: { name: "Outdoor Furniture" },
      [SupportedLanguagesBCP_47_Subtags.japanese]: { name: "屋外家具" }
    }
  };

  protected override completeWorkpiece(
    regularID: ProductCategory.ID,
    workpiece: SampleProductsCategoriesRepository.Workpiece
  ): LocalizableEntitiesByIDsMap.EntityWithLocalizations<
    ProductCategory, ProductCategoryLocalization, SupportedLanguagesBCP_47_Subtags
  > {
    return {

      entity: {
        ID: regularID,
        localizedName: "{{ localizedName }}"
      },

      localizations: LocalizableSampleDataRepository.createLocalizations(
        workpiece,
        (_workpiece: SampleProductsCategoriesRepository.Workpiece): SampleProductsCategoriesRepository.Workpiece =>
            _workpiece,
        (
          languageBCP_47_Subtag: SupportedLanguagesBCP_47_Subtags,
          localeDependentFields: SampleProductsCategoriesRepository.Workpiece.LocaleDependent
        ): ProductCategoryLocalization =>
            ({ languageBCP_47_Subtag, ...localeDependentFields })
      )

    };
  }

  protected override getEntityID(productCategory: ProductCategory): ProductCategory.ID {
    return productCategory.ID;
  }

}


namespace SampleProductsCategoriesRepository {

  export type HumanReadableIDs =
      "officeDesks" |
      "kitchenDesks" |
      "diningTables" |
      "sofas" |
      "bedFrames" |
      "wardrobes" |
      "lighting" |
      "curtainsAndBlinds" |
      "bathroomStorage" |
      "outdoorFurniture";

  export type Workpieces = Readonly<{ [keys in HumanReadableIDs]: Workpiece; }>;

  export type Workpiece = Readonly<{ [keys in SupportedLanguagesBCP_47_Subtags ]: Workpiece.LocaleDependent }>;

  export namespace Workpiece {
    export type LocaleDependent = Omit<ProductCategoryLocalization, "languageBCP_47_Subtag">;
  }

  export type SamplesWithLocalizationsByHumanFriendlyIDs =
      LocalizableSampleDataRepository.
          SamplesWithLocalizationsByHumanFriendlyIDs<
            HumanReadableIDs,
            ProductCategory,
            ProductCategoryLocalization,
            SupportedLanguagesBCP_47_Subtags
          >;

}


export default SampleProductsCategoriesRepository;
