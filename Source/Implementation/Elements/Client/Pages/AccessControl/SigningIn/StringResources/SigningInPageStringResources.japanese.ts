import type SigningInPageStringResources from "./SigningInPageStringResources";
import SharedStringResources__Japanese from "@Client/SharedAssets/StringResources/SharedStringResources.japanese";


const SigningInPageStringResources__Japanese: SigningInPageStringResources = {

  pageTitle: SharedStringResources__Japanese.HTML_PageTitles.generateForOpenPage({ specificPart: "サインイン" }),

  topHeading: "サインイン",

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

  },

  accessibilityGuidances: {

    signingInInProgress: "只今サインイン中です。暫くお待ちください。"

  }

};


export default SigningInPageStringResources__Japanese;
