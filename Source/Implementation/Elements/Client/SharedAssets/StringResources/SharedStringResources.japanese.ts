import type SharedStringResources from "@Client/SharedAssets/StringResources/SharedStringResources";


const SharedStringResources__Japanese: SharedStringResources = {

  HTML_PageTitles: {

    generateForOpenPage: ({ specificPart }: Readonly<{ specificPart: string; }>): string =>
      `${ specificPart } | サンプルアプリケーション`,

    generateForAdminPage: ({ specificPart }: Readonly<{ specificPart: string; }>): string =>
      `${ specificPart } | 管理画面 | サンプルアプリケーション`

  },

  generateErrorMessageWithApology:
      ({ userFriendlyErrorMessageWithoutApology }: SharedStringResources.ErrorMessageWithApology.TemplateVariables): string =>
          userFriendlyErrorMessageWithoutApology +
          "原因はインターネット接続ではない場合、不具合に関して調査し修正を行います。" +
          "重ねて御詫び申し上げます。"

};


export default SharedStringResources__Japanese;
