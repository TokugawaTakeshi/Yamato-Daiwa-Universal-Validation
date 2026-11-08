import type SigningInPageStringResources from "./SigningInPageStringResources";
import SharedStringResources__English from "@Client/SharedAssets/StringResources/SharedStringResources.english";


const SigningInPageStringResources__English: SigningInPageStringResources = {

  pageTitle: SharedStringResources__English.HTML_PageTitles.generateForOpenPage({ specificPart: "Sign In" }),

  topHeading: "Sign In",

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

  },

  accessibilityGuidances: {

    signingInInProgress: "Logging in now. Please wait."

  }

};


export default SigningInPageStringResources__English;
