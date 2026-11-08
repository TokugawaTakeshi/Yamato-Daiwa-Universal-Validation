import type User from "@Entities/AccessControl/User";


interface UserGateway {
  retrieveOneByEmailAddressIfExists: (targetEmailAddress: string) => Promise<User | null>;
}


export default UserGateway;
