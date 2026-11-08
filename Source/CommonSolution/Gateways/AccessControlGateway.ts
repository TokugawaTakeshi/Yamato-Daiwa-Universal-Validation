import type CurrentAuthenticatedUser from "@Entities/AccessControl/CurrentAuthenticatedUser";


interface AccessControlGateway {

  signIn: (requestData: AccessControlGateway.SigningIn.RequestData) => Promise<CurrentAuthenticatedUser>;

  signOut: () => Promise<void>;

}


namespace AccessControlGateway {

  export namespace SigningIn {

    export type RequestData = Readonly<{
      emailAddress: string;
      password: string;
    }>;

  }

}


export default AccessControlGateway;
