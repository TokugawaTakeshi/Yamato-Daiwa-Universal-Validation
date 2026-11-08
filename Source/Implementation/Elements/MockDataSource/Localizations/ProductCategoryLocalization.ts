import type SupportedLanguagesBCP_47_Subtags from "@CommonSolution/Restrictions/SupportedLanguagesBCP_47_Subtags";


type ProductCategoryLocalization = {
  languageBCP_47_Subtag: SupportedLanguagesBCP_47_Subtags;
  name: string;
};


export default ProductCategoryLocalization;
