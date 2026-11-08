import type SupportedLanguagesBCP_47_Subtags from "@CommonSolution/Restrictions/SupportedLanguagesBCP_47_Subtags";


type ProductLocalization = {
  languageBCP_47_Subtag: SupportedLanguagesBCP_47_Subtags;
  title: string;
  description?: string;
};


export default ProductLocalization;
