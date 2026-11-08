import type TopPageStringResources from "./TopPageStringResources";
import SharedStringResources__English from "@Client/SharedAssets/StringResources/SharedStringResources.english";


const TopPageStringResources__English: TopPageStringResources = {

  metadata: {
    title: SharedStringResources__English.HTML_PageTitles.generateForOpenPage({ specificPart: "Top Page" })
  },

  topHeading: "Top page",

  controls: {

    buttons: {
      retryingOfProductsCategoriesRetrieving: { label: "Try again" },
      retryingOfProductsRetrieving: { label: "Try again" },
      resettingOfProductsFiltering: { label: "Reset filtering" }
    },

    productsCategoriesDropDownList: {
      placeholder: "Category",
      accessibilityGuidances: {
        inputElement: "Selected product category",
        button: "Open product categories list",
        listBox: "Product categories list"
      }
    },

    productsSearchBox: {
      accessibilityGuidance: "Search products by title or description",
      placeholder: "Search products..."
    },

    productsPagination: {
      accessibilityGuidance: "Products pagination"
    }

  },

  errors: {

    productsCategoriesRetrievingFailed: {
      title: "Products Categories Retrieving Failed",
      description:
          SharedStringResources__English.generateErrorMessageWithApology({
            userFriendlyErrorMessageWithoutApology:
                "The malfunction has occurred during the retrieving of the products categories."
          })
    },

    productsRetrievingFailed: {
      title: "Products Retrieving Failed",
      description:
          SharedStringResources__English.generateErrorMessageWithApology({
            userFriendlyErrorMessageWithoutApology:
                "The malfunction has occurred during the retrieving of the products."
          })
    }

  },

  guidances: {
    noItemsAvailable: {
      title: "No products available",
      description: "There are no products available at this time."
    },
    noItemsFound: {
      title: "No products found",
      description: "No products match your search criteria."
    }
  },

  accessibilityGuidances: {
    productsLoadingInProgress: "Loading products..."
  }

};


export default TopPageStringResources__English;
