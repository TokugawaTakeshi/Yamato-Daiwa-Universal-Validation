/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ┅┅┅ Entities ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type Product from "@Entities/Product/Product";
import type ProductCategory from "@Entities/Product/ProductCategory";

/* ┅┅┅ Restrictions ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import SupportedLanguagesBCP_47_Subtags from "@CommonSolution/Restrictions/SupportedLanguagesBCP_47_Subtags";

/* ┅┅┅ Data ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import MockDataSource from "@MockDataSource/MockDataSource";

/* ┅┅┅ Constants ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import LAYOUT_SCROLLABLE_CONTAINER_HTML_ID from "@Client/Constants/LAYOUT_SCROLLABLE_CONTAINER_HTML_ID";

/* ┅┅┅ String Resources ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
/* ╍╍╍ Pages ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
/* ─── Top ────────────────────────────────────────────────────────────────────────────────────────────────────────── */
import type TopPageStringResources from "@Client/Pages/Top/Localizations/TopPageStringResources";
import TopPageStringResources__Japanese from "@Client/Pages/Top/Localizations/TopPageStringResources.japanese";
import TopPageStringResources__English from "@Client/Pages/Top/Localizations/TopPageStringResources.english";

/* ─── Users Management ───────────────────────────────────────────────────────────────────────────────────────────── */
import type UsersManagementPageStringResources from
    "@Client/Pages/AdminPanel/UsersManagement/Localizations/UsersManagementPageStringResources";
import UsersManagementPageStringResources__Japanese from
    "@Client/Pages/AdminPanel/UsersManagement/Localizations/UsersManagementPageStringResources.japanese";
import UsersManagementPageStringResources__English from
    "@Client/Pages/AdminPanel/UsersManagement/Localizations/UsersManagementPageStringResources.english";

/* ─── Access Control ─────────────────────────────────────────────────────────────────────────────────────────────── */
/* ┄┄┄ Signing In ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ */
import type SigningInPageStringResources from
    "@Client/Pages/AccessControl/SigningIn/StringResources/SigningInPageStringResources";
import SigningInPageStringResources__Japanese from
    "@Client/Pages/AccessControl/SigningIn/StringResources/SigningInPageStringResources.japanese";
import SigningInPageStringResources__English from
    "@Client/Pages/AccessControl/SigningIn/StringResources/SigningInPageStringResources.english";

/* ┄┄┄ Password Resetting ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ */
import type PasswordResettingPageStringResources from
    "@Client/Pages/AccessControl/PasswordRecovery/StringResources/PasswordRecoveryPageStringResources";
import PasswordResettingPageStringResources__Japanese from
    "@Client/Pages/AccessControl/PasswordRecovery/StringResources/PasswordRecoveryPageStringResources.japanese";
import PasswordResettingPageStringResources__English from
    "@Client/Pages/AccessControl/PasswordRecovery/StringResources/PasswordRecoveryPageStringResources.english";

/* ─── Static Preview ─────────────────────────────────────────────────────────────────────────────────────────────── */
/* ┄┄┄ Loading ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ */
import type LoadingPageStringResources from "@Client/StaticPreview/Pages/Loading/Localizations/LoadingPageStringResources";
import LoadingPageStringResources__English from
    "@Client/StaticPreview/Pages/Loading/Localizations/LoadingPageStringResources.english";
import LoadingPageStringResources__Japanese from
    "@Client/StaticPreview/Pages/Loading/Localizations/LoadingPageStringResources.japanese";

/* ╍╍╍ GUI Components ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
/* ─── Loading View ───────────────────────────────────────────────────────────────────────────────────────────────── */
import type LoadingViewStringResources from
    "@Client/SharedGUI_Components/OnePerPage/LoadingView/Localizations/LoadingViewStringResources";
import LoadingViewStringResources__Japanese from
      "@Client/SharedGUI_Components/OnePerPage/LoadingView/Localizations/LoadingViewStringResources.japanese";
import LoadingViewStringResources__English from
      "@Client/SharedGUI_Components/OnePerPage/LoadingView/Localizations/LoadingViewStringResources.english";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


type StringResourcesPack<StaticStrings> = Readonly<{
  [
    key in
        "JAPANESE" |
        "ENGLISH"
  ]: StaticStrings
}>;

export type ExportsForPug = Readonly<{

  constants: ExportsForPug.Constants;

  testData: ExportsForPug.TestData;

  stringResources: Readonly<{

    pages: Readonly<{

      top: StringResourcesPack<TopPageStringResources>;

      usersManagement: StringResourcesPack<UsersManagementPageStringResources>;

      accessControl: Readonly<{
        signingIn: StringResourcesPack<SigningInPageStringResources>;
        passwordResetting: StringResourcesPack<PasswordResettingPageStringResources>;
      }>;

      staticPreview: Readonly<{
        loading: StringResourcesPack<LoadingPageStringResources>;
      }>;

    }>;

    GUI_Components: Readonly<{
      onePerPage: Readonly<{
        loadingView: StringResourcesPack<LoadingViewStringResources>;
      }>;
    }>;

  }>;

}>;

export namespace ExportsForPug {

  export type Constants = Readonly<{
    LAYOUT_SCROLLABLE_CONTAINER_HTML_ID: string;
  }>;

  export type TestData = Readonly<{
    products: TestData.Localizable<Product>;
    productsCategories: TestData.Localizable<ProductCategory>;
  }>;

  export namespace TestData {

    export type Localizable<Data> = Readonly<{
      [key in SupportedLanguagesBCP_47_Subtags]: ReadonlyArray<Data>;
    }>;

  }

}


const mockDataSource: MockDataSource = MockDataSource.getInstance();


const exportsForPug: ExportsForPug = {

  constants: {
    LAYOUT_SCROLLABLE_CONTAINER_HTML_ID
  },

  testData: {

    products: {
      [SupportedLanguagesBCP_47_Subtags.english]:
          mockDataSource.retrieveAllProducts({
            targetLanguageBCP_47_Subtag: SupportedLanguagesBCP_47_Subtags.english
          }),
      [SupportedLanguagesBCP_47_Subtags.japanese]:
          mockDataSource.retrieveAllProducts({
            targetLanguageBCP_47_Subtag: SupportedLanguagesBCP_47_Subtags.japanese
          })
    },

    productsCategories: {
      [SupportedLanguagesBCP_47_Subtags.english]:
          mockDataSource.retrieveAllProductsCategories({
            targetLanguageBCP_47_Subtag: SupportedLanguagesBCP_47_Subtags.english
          }),
      [SupportedLanguagesBCP_47_Subtags.japanese]:
          mockDataSource.retrieveAllProductsCategories({
            targetLanguageBCP_47_Subtag: SupportedLanguagesBCP_47_Subtags.japanese
          })
    }

  },

  stringResources: {

    pages: {

      top: {
        JAPANESE: TopPageStringResources__Japanese,
        ENGLISH: TopPageStringResources__English
      },

      usersManagement: {
        JAPANESE: UsersManagementPageStringResources__Japanese,
        ENGLISH: UsersManagementPageStringResources__English
      },

      accessControl: {
        signingIn: {
          JAPANESE: SigningInPageStringResources__Japanese,
          ENGLISH: SigningInPageStringResources__English
        },
        passwordResetting: {
          JAPANESE: PasswordResettingPageStringResources__Japanese,
          ENGLISH: PasswordResettingPageStringResources__English
        }
      },

      staticPreview: {
        loading: {
          JAPANESE: LoadingPageStringResources__Japanese,
          ENGLISH: LoadingPageStringResources__English
        }
      }


    },

    GUI_Components: {
      onePerPage: {
        loadingView: {
          JAPANESE: LoadingViewStringResources__Japanese,
          ENGLISH: LoadingViewStringResources__English
        }
      }
    }

  }

};


export default exportsForPug;
