type SharedStringResources = Readonly<{

  HTML_PageTitles: Readonly<{
    [
      key in
          "generateForOpenPage" |
          "generateForAdminPage"
    ]: (templateParameters: Readonly<{ specificPart: string; }>) => string;
  }>;

  generateErrorMessageWithApology:
      (templateVariables: SharedStringResources.ErrorMessageWithApology.TemplateVariables) => string;

}>;


namespace SharedStringResources {

  export namespace ErrorMessageWithApology {
    export type TemplateVariables = Readonly<{ userFriendlyErrorMessageWithoutApology: string; }>;
  }

}


export default SharedStringResources;
