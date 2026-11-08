import type PasswordRecoveryPageStringResources from "./PasswordRecoveryPageStringResources";
import SharedStringResources__English from "@Client/SharedAssets/StringResources/SharedStringResources.english";


const PasswordRecoveryPageStringResources__English: PasswordRecoveryPageStringResources = {

  pageTitle: SharedStringResources__English.HTML_PageTitles.generateForOpenPage({ specificPart: "Password Recovery" }),

  steps: {

    emailInputting: {

      topHeading: "Inputting of Email Address",

      guidance:
          "The Email will required to restore the password. " +
          "Please input the email address related with your account.",

      textBoxes: {
        emailAddress: {
          label: "Email Address"
        }
      },

      submittingButton: {
        label: "To Next Step"
      }

    },

    recoveryCodeInputting: {

      guidances: {

        emailSubmitting:
            "If account corresponding to inputted email address is existing, the email address with recovery code " +
              "has been submitted. " +
            "Please check your email address and input the confirmation code",

        spamFalsePositive: {
          title: "Spam False Positive Warning",
          description:
            "Sometimes the email including the recovery code been misrecognized as spam. " +
            "Please check the incoming emails including \"Spam\" folder. "
        }

      },

      textBoxes: {
        oneTimeCode: "One-time Code"
      },

      submittingButton: {
        label: "To Next Step"
      }

    }

  },

  topHeading: "Password Resetting",

  guidances: {

    emailAddressInputting: {
      title: "Account Recovery",
      description:
          "Please input the email address of your account. " +
          "In account with inputted email address exists, the guidance will be submitted to this address."
    },

    recoveryCodeInputting: {
      title: "Inputting of Recovery Code",
      description:
          "In account with inputted email address exists, the recovery code has been submitted to this address. " +
          "Please input this code."
    },

    newPasswordInputting: {
      title: "Inputting of New Password",
      description: "Please input the new password."
    }

  },

  inputs: {

    emailAddress: { label: "Email Address" },

    password: { label: "Password" }

  },

  buttons: {

    signingIn: {

      label: "Sign In"

    }

  },

  links: {

    passwordRecovery: { label: "Forgot Password" }

  },

  errors: {

    signingInFailed:
        "We are sorry, but error has occurred during signing in. " +
        "If internet connection is fine, please contact with support."

  }

};


export default PasswordRecoveryPageStringResources__English;
