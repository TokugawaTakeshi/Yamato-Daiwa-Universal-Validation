import type TopPageStringResources from "./TopPageStringResources";
import SharedStringResources__Japanese from "@Client/SharedAssets/StringResources/SharedStringResources.japanese";


const TopPageStringResources__Japanese: TopPageStringResources = {

  metadata: {
    title: SharedStringResources__Japanese.HTML_PageTitles.generateForOpenPage({ specificPart: "トップ" })
  },

  topHeading: "トップ",

  controls: {

    buttons: {
      retryingOfProductsCategoriesRetrieving: { label: "再取得" },
      retryingOfProductsRetrieving: { label: "再取得" },
      resettingOfProductsFiltering: { label: "絞り込みをリセット" }
    },

    productsCategoriesDropDownList: {
      placeholder: "カテゴリー",
      accessibilityGuidances: {
        inputElement: "選択済みの商品カテゴリー",
        button: "商品カテゴリー一覧を開く",
        listBox: "商品カテゴリー一覧"
      }
    },

    productsSearchBox: {
      accessibilityGuidance: "タイトルか詳細で商品を検索",
      placeholder: "商品を検索"
    },

    productsPagination: {
      accessibilityGuidance: "商品のページネーション"
    }

  },

  errors: {

    productsCategoriesRetrievingFailed: {
      title: "商品カテゴリー取得失敗",
      description:
          SharedStringResources__Japanese.
              generateErrorMessageWithApology({ userFriendlyErrorMessageWithoutApology: "商品カテゴリー取得中不具合が発生しました。" })
    },

    productsRetrievingFailed: {
      title: "商品取得失敗",
      description:
          SharedStringResources__Japanese.
              generateErrorMessageWithApology({ userFriendlyErrorMessageWithoutApology: "商品取得中不具合が発生しました。" })

    }

  },

  guidances: {
    noItemsAvailable: {
      title: "商品がありません",
      description: "現在、利用可能な商品はありません。"
    },
    noItemsFound: {
      title: "商品が見つかりません",
      description: "検索条件に一致する商品が見つかりませんでした。"
    }
  },

  accessibilityGuidances: {
    productsLoadingInProgress: "商品を読み込み中..."
  }

};


export default TopPageStringResources__Japanese;
