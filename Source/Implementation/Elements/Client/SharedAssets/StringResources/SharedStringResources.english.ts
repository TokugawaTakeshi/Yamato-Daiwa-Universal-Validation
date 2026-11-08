import type SharedStringResources from "@Client/SharedAssets/StringResources/SharedStringResources";


const SharedStringResources__English: SharedStringResources = {

  HTML_PageTitles: {

    generateForOpenPage: ({ specificPart }: Readonly<{ specificPart: string; }>): string =>
      `${ specificPart } - Sample Application`,

    generateForAdminPage: ({ specificPart }: Readonly<{ specificPart: string; }>): string =>
      `${ specificPart } - Admin Panel - Sample Application`

  },

  generateErrorMessageWithApology:
      ({ userFriendlyErrorMessageWithoutApology }: SharedStringResources.ErrorMessageWithApology.TemplateVariables): string =>
          userFriendlyErrorMessageWithoutApology +
          "If the cause is not the internet connection, we'll begin the investigation shortly. " +
          "We are apologize for the inconvenience."

};


export default SharedStringResources__English;
