import type PasswordRecoveryPageStringResources from "./PasswordRecoveryPageStringResources";
import SharedStringResources__Japanese from "@Client/SharedAssets/StringResources/SharedStringResources.japanese";


const PasswordResettingPageStringResources__Japanese: PasswordRecoveryPageStringResources = {

  pageTitle: SharedStringResources__Japanese.HTML_PageTitles.generateForOpenPage({ specificPart: "パスワード回復" }),

  steps: {

    emailInputting: {

      topHeading: "メールアドレスの入力",

      guidance:
          "パスワードを回復するにはメールアドレスが必用になります。" +
          "お持ちのアカウントのメールアドレスを入力して下さい。",

      textBoxes: {
        emailAddress: {
          label: "メールアドレス"
        }
      },

      submittingButton: {
        label: "次へ"
      }

    },

    recoveryCodeInputting: {

      guidances: {

        emailSubmitting:
            "指定されたメールアドレスに該当しているアカウントが存在していれば、一度切れのコードが送信されました。" +
            "メールアドレスのご確認の上、送信されたコードを入力して下さい。",

        spamFalsePositive: {
          title: "迷惑メール誤検知にご注意",
          description:
            "コードを含めているメールが迷惑メールのフィルターによって間違って迷惑メールとして認識される事があります。" +
            "「迷惑メール」フォルダーを含めて、新着メールをご確認下さい。"
        }

      },

      textBoxes: {
        oneTimeCode: "一度切れのコード"
      },

      submittingButton: {
        label: "次へ"
      }

    }

  },

  topHeading: "パスワードリセット",

  guidances: {

    emailAddressInputting: {
      title: "アカウントの復帰",
      description:
          "お持ちのアカウントのメールアドレスを入力して下さい。" +
          "入力メールアドレスのアカウントが存在している場合、アカウント復帰の案内が届きます。"

    },

    recoveryCodeInputting: {
      title: "復帰コードの入力",
      description:
          "入力メールアドレスのアカウントが存在している場合、アカウント復帰のコードが送信されました。" +
          "このコードを入力して下さい。"
    },

    newPasswordInputting: {
      title: "新規パスワードの入力",
      description: "新しいパスワードを入力して下さい。"
    }

  },

  inputs: {

    emailAddress: { label: "メールアドレス" },

    password: { label: "パスワード" }

  },

  buttons: {

    signingIn: {

      label: "サインイン"

    }

  },

  links: {

    passwordRecovery: { label: "パスワードを忘れた方こちら" }

  },

  errors: {

    signingInFailed: "恐れ入りますが、認証中不具合が発生しました。インターネット接続に問題ない場合、お手数ですが、運用側とご連絡下さい。"

  }

};


export default PasswordResettingPageStringResources__Japanese;
