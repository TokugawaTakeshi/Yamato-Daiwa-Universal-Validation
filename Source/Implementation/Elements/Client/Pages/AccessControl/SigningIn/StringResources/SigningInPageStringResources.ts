type SigningInPageStringResources = Readonly<{

  pageTitle: string;

  topHeading: string;

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

  accessibilityGuidances: Readonly<{
    signingInInProgress: string;
  }>;

}>;


export default SigningInPageStringResources;
