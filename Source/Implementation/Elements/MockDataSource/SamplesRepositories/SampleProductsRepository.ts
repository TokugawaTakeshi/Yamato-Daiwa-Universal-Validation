/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ┅┅┅ Entities ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type Product from "@Entities/Product/Product";
import type ProductCategory from "@Entities/Product/ProductCategory";

/* ┅┅┅ Restrictions ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import SupportedLanguagesBCP_47_Subtags from "@CommonSolution/Restrictions/SupportedLanguagesBCP_47_Subtags";

/* ┅┅┅ Calculations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import calculatePriceWithConsumptionTaxRate from "@CommonSolution/Calculations/calculatePriceWithConsumptionTaxRate";

/* ┅┅┅ Data ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type ProductLocalization from "@MockDataSource/Localizations/ProductLocalization";
import type SampleProductsCategoriesRepository from "@MockDataSource/SamplesRepositories/SampleProductsCategoriesRepository";

/* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import { LocalizableSampleDataRepository, type LocalizableEntitiesByIDsMap } from "@yamato-daiwa/es-extensions";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


class SampleProductsRepository extends LocalizableSampleDataRepository<
  Product,
  Product.ID,
  SampleProductsRepository.HumanReadableIDs,
  ProductLocalization,
  SupportedLanguagesBCP_47_Subtags,
  SampleProductsRepository.Workpiece
> {

  /* ━━━ Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected readonly workpieces: SampleProductsRepository.Workpieces;


  /* ━━━ Data ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  private static generateWorkpieces(
    productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs:
        SampleProductsCategoriesRepository.SamplesWithLocalizationsByHumanFriendlyIDs
  ): SampleProductsRepository.Workpieces {

    return {

      minimalistWoodenBedFrame: {
        photoFileNameWithExtension: "MinimalistWoodenBedFrame~903df84c09.png",
        categoryID: productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs.bedFrames.entity.ID,
        price__yens__excludingConsumptionTax: 45000,
        consumptionTaxRate: 0.1,
        quantityRemainInStock: 12,
        localeDependent: {
          [SupportedLanguagesBCP_47_Subtags.english]: {
            title: "Minimalist Wooden Bed Frame",
            description: "A sleek, solid oak bed frame with a minimalist design, perfect for modern bedrooms.",
            category: {
              name: productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs.bedFrames.
                  localizations[SupportedLanguagesBCP_47_Subtags.english].name
            }
          },
          [SupportedLanguagesBCP_47_Subtags.japanese]: {
            title: "ミニマリスト木製ベッドフレーム",
            description: "モダンな寝室に最適な、ミニマルなデザインの頑丈なオーク材ベッドフレーム。",
            category: {
              name: productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs.bedFrames.
                  localizations[SupportedLanguagesBCP_47_Subtags.japanese].name
            }
          }
        }
      },

      compactBathroomCabinet: {
        photoFileNameWithExtension: "CompactBathroomCabinet~591ac3387a.png",
        categoryID: productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs.bathroomStorage.entity.ID,
        price__yens__excludingConsumptionTax: 15000,
        consumptionTaxRate: 0.1,
        quantityRemainInStock: 8,
        localeDependent: {
          [SupportedLanguagesBCP_47_Subtags.english]: {
            title: "Compact Bathroom Cabinet",
            description: "Space-saving wall-mounted cabinet with two shelves, ideal for small bathrooms.",
            category: {
              name: productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs.bathroomStorage.
                  localizations[SupportedLanguagesBCP_47_Subtags.english].name
            }
          },
          [SupportedLanguagesBCP_47_Subtags.japanese]: {
            title: "コンパクトバスルームキャビネット",
            description: "小さなバスルームに最適な、2段棚付きの省スペース壁掛けキャビネット。",
            category: {
              name: productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs.bathroomStorage.
                  localizations[SupportedLanguagesBCP_47_Subtags.japanese].name
            }
          }
        }
      },

      ergonomicOfficeChair: {
        photoFileNameWithExtension: "ErgonomicOfficeChair~9bdbcaf69e.png",
        categoryID: productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs.officeDesks.entity.ID,
        price__yens__excludingConsumptionTax: 28000,
        consumptionTaxRate: 0.1,
        quantityRemainInStock: 15,
        localeDependent: {
          [SupportedLanguagesBCP_47_Subtags.english]: {
            title: "Ergonomic Office Chair",
            description: "High-back mesh chair with adjustable lumbar support and armrests for long working hours.",
            category: {
              name: productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs.officeDesks.
                  localizations[SupportedLanguagesBCP_47_Subtags.english].name
            }
          },
          [SupportedLanguagesBCP_47_Subtags.japanese]: {
            title: "人間工学に基づいたオフィスチェア",
            description: "長時間の作業に適した、調節可能なランバーサポートとアームレストを備えたハイバックメッシュチェア。",
            category: {
              name: productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs.officeDesks.
                  localizations[SupportedLanguagesBCP_47_Subtags.japanese].name
            }
          }
        }
      },

      modernGlassDiningTable: {
        photoFileNameWithExtension: "ModernGlassDiningTable~0a3c9e75f3.png",
        categoryID: productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs.diningTables.entity.ID,
        price__yens__excludingConsumptionTax: 55000,
        consumptionTaxRate: 0.1,
        quantityRemainInStock: 5,
        localeDependent: {
          [SupportedLanguagesBCP_47_Subtags.english]: {
            title: "Modern Glass Dining Table",
            description: "Tempered glass top with chrome-finished legs, seating up to 6 people comfortably.",
            category: {
              name: productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs.diningTables.
                  localizations[SupportedLanguagesBCP_47_Subtags.english].name
            }
          },
          [SupportedLanguagesBCP_47_Subtags.japanese]: {
            title: "モダンガラスダイニングテーブル",
            description: "最大6人まで快適に座れる、クロム仕上げの脚を備えた強化ガラス天板のテーブル。",
            category: {
              name: productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs.diningTables.
                  localizations[SupportedLanguagesBCP_47_Subtags.japanese].name
            }
          }
        }
      },

      velvetThreeSeaterSofa: {
        photoFileNameWithExtension: "VelvetThreeSeaterSofa~345e050068.png",
        categoryID: productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs.sofas.entity.ID,
        price__yens__excludingConsumptionTax: 85000,
        consumptionTaxRate: 0.1,
        quantityRemainInStock: 3,
        localeDependent: {
          [SupportedLanguagesBCP_47_Subtags.english]: {
            title: "Velvet Three-Seater Sofa",
            description: "Luxurious deep blue velvet sofa with plush cushioning and gold-toned metal legs.",
            category: {
              name: productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs.sofas.
                  localizations[SupportedLanguagesBCP_47_Subtags.english].name
            }
          },
          [SupportedLanguagesBCP_47_Subtags.japanese]: {
            title: "ベルベット3人掛けソファ",
            description: "豪華なディープブルーのベルベットソファ。贅沢なクッションとゴールドトーンの金属脚が特徴です。",
            category: {
              name: productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs.sofas.
                  localizations[SupportedLanguagesBCP_47_Subtags.japanese].name
            }
          }
        }
      },

      scandinavianOakWardrobe: {
        photoFileNameWithExtension: "ScandinavianOakWardrobe~881f39a1bf.png",
        categoryID: productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs.wardrobes.entity.ID,
        price__yens__excludingConsumptionTax: 72000,
        consumptionTaxRate: 0.1,
        quantityRemainInStock: 7,
        localeDependent: {
          [SupportedLanguagesBCP_47_Subtags.english]: {
            title: "Scandinavian Oak Wardrobe",
            description: "Large two-door wardrobe made of solid oak with ample hanging space and drawers.",
            category: {
              name: productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs.wardrobes.
                  localizations[SupportedLanguagesBCP_47_Subtags.english].name
            }
          },
          [SupportedLanguagesBCP_47_Subtags.japanese]: {
            title: "北欧風オーク材ワードローブ",
            description: "十分な吊り下げスペースと引き出しを備えた、頑丈なオーク材の大型2ドアワードローブ。",
            category: {
              name: productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs.wardrobes.
                  localizations[SupportedLanguagesBCP_47_Subtags.japanese].name
            }
          }
        }
      },

      industrialPendantLight: {
        photoFileNameWithExtension: "IndustrialPendantLight~635aecaeb4.png",
        categoryID: productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs.lighting.entity.ID,
        price__yens__excludingConsumptionTax: 12000,
        consumptionTaxRate: 0.1,
        quantityRemainInStock: 20,
        localeDependent: {
          [SupportedLanguagesBCP_47_Subtags.english]: {
            title: "Industrial Pendant Light",
            description: "Matte black metal dome light with a vintage Edison bulb included.",
            category: {
              name: productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs.lighting.
                  localizations[SupportedLanguagesBCP_47_Subtags.english].name
            }
          },
          [SupportedLanguagesBCP_47_Subtags.japanese]: {
            title: "インダストリアルペンダントライト",
            description: "ヴィンテージのエジソン電球が付属した、マットブラックの金属製ドームライト。",
            category: {
              name: productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs.lighting.
                  localizations[SupportedLanguagesBCP_47_Subtags.japanese].name
            }
          }
        }
      },

      blackoutThermalCurtains: {
        photoFileNameWithExtension: "BlackoutThermalCurtains~ebddba660c.png",
        categoryID: productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs.curtainsAndBlinds.entity.ID,
        price__yens__excludingConsumptionTax: 8000,
        consumptionTaxRate: 0.1,
        quantityRemainInStock: 25,
        localeDependent: {
          [SupportedLanguagesBCP_47_Subtags.english]: {
            title: "Blackout Thermal Curtains",
            description: "Set of two heavy-duty blackout curtains that help maintain room temperature.",
            category: {
              name: productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs.curtainsAndBlinds.
                  localizations[SupportedLanguagesBCP_47_Subtags.english].name
            }
          },
          [SupportedLanguagesBCP_47_Subtags.japanese]: {
            title: "遮光断熱カーテン",
            description: "室温の維持に役立つ、厚手の遮光カーテン2枚セット。",
            category: {
              name: productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs.curtainsAndBlinds.
                  localizations[SupportedLanguagesBCP_47_Subtags.japanese].name
            }
          }
        }
      },

      teakGardenLoungeSet: {
        photoFileNameWithExtension: "TeakGardenLoungeSet~e51f958417.png",
        categoryID: productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs.outdoorFurniture.entity.ID,
        price__yens__excludingConsumptionTax: 120000,
        consumptionTaxRate: 0.1,
        quantityRemainInStock: 2,
        localeDependent: {
          [SupportedLanguagesBCP_47_Subtags.english]: {
            title: "Teak Garden Lounge Set",
            description: "Weather-resistant teak wood sofa and coffee table set with waterproof cushions.",
            category: {
              name: productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs.outdoorFurniture.
                  localizations[SupportedLanguagesBCP_47_Subtags.english].name
            }
          },
          [SupportedLanguagesBCP_47_Subtags.japanese]: {
            title: "チーク材ガーデンラウンジセット",
            description: "防水クッション付きの耐候性チーク材ソファとコーヒーテーブルのセット。",
            category: {
              name: productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs.outdoorFurniture.
                  localizations[SupportedLanguagesBCP_47_Subtags.japanese].name
            }
          }
        }
      },

      marbleTopKitchenIsland: {
        photoFileNameWithExtension: "MarbleTopKitchenIsland~d36d862a6c.png",
        categoryID: productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs.kitchenDesks.entity.ID,
        price__yens__excludingConsumptionTax: 95000,
        consumptionTaxRate: 0.1,
        quantityRemainInStock: 4,
        localeDependent: {
          [SupportedLanguagesBCP_47_Subtags.english]: {
            title: "Marble Top Kitchen Island",
            description: "Elegant kitchen island with a white marble top, breakfast bar, and storage cabinets.",
            category: {
              name: productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs.kitchenDesks.
                  localizations[SupportedLanguagesBCP_47_Subtags.english].name
            }
          },
          [SupportedLanguagesBCP_47_Subtags.japanese]: {
            title: "大理石天板キッチンアイランド",
            description: "ホワイトの大理石天板、ブレックファストバー、収納キャビネットを備えたエレガントなキッチンアイランド。",
            category: {
              name: productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs.kitchenDesks.
                  localizations[SupportedLanguagesBCP_47_Subtags.japanese].name
            }
          }
        }
      }

    };

  }


  /* ━━━ Constructor ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public constructor(
    productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs:
        SampleProductsCategoriesRepository.SamplesWithLocalizationsByHumanFriendlyIDs
  ) {

    super();

    this.workpieces =
        SampleProductsRepository.generateWorkpieces(productsCategoriesSamplesWithLocalizationsByHumanFriendlyIDs);

  }


  /* ━━━ Implementing of Abstract Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected override completeWorkpiece(
    regularID: Product.ID,
    workpiece: SampleProductsRepository.Workpiece
  ): LocalizableEntitiesByIDsMap.EntityWithLocalizations<Product, ProductLocalization, SupportedLanguagesBCP_47_Subtags> {
    return {

      entity: {
        ID: regularID,
        localizedTitle: "{{ localizedTitle }}",
        localizedDescription: "{{ localizedDescription }}",
        photoFileNameWithExtension: workpiece.photoFileNameWithExtension,
        category: {
          ID: workpiece.categoryID,
          localizedName: "{{ localizedName }}"
        },
        price__yens__excludingConsumptionTax: workpiece.price__yens__excludingConsumptionTax,
        consumptionTaxRate: workpiece.consumptionTaxRate,
        price__yens__includingConsumptionTax:
            calculatePriceWithConsumptionTaxRate({
              price__yens__excludingConsumptionTax: workpiece.price__yens__excludingConsumptionTax,
              consumptionTaxRate: workpiece.consumptionTaxRate
            }),
        quantityRemainInStock: workpiece.quantityRemainInStock
      },

      localizations: LocalizableSampleDataRepository.createLocalizations(
        workpiece,
        (_workpiece: SampleProductsRepository.Workpiece):
            Readonly<{ [keys in SupportedLanguagesBCP_47_Subtags ]: SampleProductsRepository.Workpiece.LocaleDependent }> =>
                _workpiece.localeDependent,
        (
          languageBCP_47_Subtag: SupportedLanguagesBCP_47_Subtags,
          localeDependentFields: SampleProductsRepository.Workpiece.LocaleDependent
        ): ProductLocalization =>
            ({ languageBCP_47_Subtag, ...localeDependentFields })
      )

    };
  }

  protected override getEntityID(product: Product): Product.ID {
    return product.ID;
  }

}


namespace SampleProductsRepository {

  export type HumanReadableIDs =
      "minimalistWoodenBedFrame" |
      "compactBathroomCabinet" |
      "ergonomicOfficeChair" |
      "modernGlassDiningTable" |
      "velvetThreeSeaterSofa" |
      "scandinavianOakWardrobe" |
      "industrialPendantLight" |
      "blackoutThermalCurtains" |
      "teakGardenLoungeSet" |
      "marbleTopKitchenIsland";

  export type Workpieces = Readonly<{ [keys in HumanReadableIDs]: Workpiece; }>;

  export type Workpiece = Readonly<

    Pick<
      Product,
        "photoFileNameWithExtension" |
        "price__yens__excludingConsumptionTax" |
        "consumptionTaxRate" |
        "quantityRemainInStock"
    > &

    {
      categoryID: ProductCategory.ID;
      localeDependent: Readonly<{ [keys in SupportedLanguagesBCP_47_Subtags ]: Workpiece.LocaleDependent }>;
    }

  >;

  export namespace Workpiece {
    export type LocaleDependent =
        Omit<ProductLocalization, "languageBCP_47_Subtag"> &
        Readonly<{
          category: SampleProductsCategoriesRepository.Workpiece.LocaleDependent;
        }>;

  }

}


export default SampleProductsRepository;
