type TopPageStringResources = Readonly<{

  metadata: Readonly<{
    title: string;
  }>;

  topHeading: string;

  controls: Readonly<{

    buttons: Readonly<{
      [
        keys in
            "retryingOfProductsCategoriesRetrieving" |
            "retryingOfProductsRetrieving" |
            "resettingOfProductsFiltering"
      ]:
          Readonly<{ label: string; }>
    }>;

    productsCategoriesDropDownList: Readonly<{
      placeholder: string;
      accessibilityGuidances: Readonly<{
        inputElement: string;
        button: string;
        listBox: string;
      }>;
    }>;

    productsSearchBox: Readonly<{
      accessibilityGuidance: string;
      placeholder: string;
    }>;

    productsPagination: Readonly<{
      accessibilityGuidance: string;
    }>;

  }>;

  errors: Readonly<{
    [
      keys in
        "productsCategoriesRetrievingFailed" |
        "productsRetrievingFailed"
    ]:
      Readonly<{
        title: string;
        description: string;
      }>
  }>;

  guidances: Readonly<{
    noItemsAvailable: Readonly<{ title: string; description: string; }>;
    noItemsFound: Readonly<{ title: string; description: string; }>;
  }>;

  accessibilityGuidances: Readonly<{
    productsLoadingInProgress: string;
  }>;

}>;


export default TopPageStringResources;
