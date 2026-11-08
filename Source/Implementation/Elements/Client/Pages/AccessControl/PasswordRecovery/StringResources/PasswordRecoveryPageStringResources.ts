type PasswordRecoveryPageStringResources = Readonly<{

  pageTitle: string;

  steps: Readonly<{

    emailInputting: Readonly<{

      topHeading: string;

      guidance: string;

      textBoxes: Readonly<{
        emailAddress: Readonly<{ label: string; }>;
      }>;

      submittingButton: Readonly<{ label: string; }>;

    }>;

    recoveryCodeInputting: Readonly<{

      guidances: Readonly<{

        emailSubmitting: string;

        spamFalsePositive: Readonly<{
          title: string;
          description: string;
        }>;

      }>;

      textBoxes: Readonly<{
        oneTimeCode: string;
      }>;

      submittingButton: Readonly<{ label: string; }>;

    }>;

  }>;

  topHeading: string;

  guidances: Readonly<{
    [
      key in
        "emailAddressInputting" |
        "recoveryCodeInputting" |
        "newPasswordInputting"
    ]: Readonly<{
      title: string;
      description: string;
    }>
  }>;

  inputs: Readonly<{
    emailAddress: Readonly<{ label: string; }>;
    password: Readonly<{ label: string; }>;
  }>;

  buttons: Readonly<{
    signingIn: Readonly<{ label: string; }>;
  }>;

  links: Readonly<{
    passwordRecovery: Readonly<{ label: string; }>;
  }>;

  errors: Readonly<{
    signingInFailed: string;
  }>;

}>;


export default PasswordRecoveryPageStringResources;
