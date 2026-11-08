type ClientAndFrontServerConnectionConfiguration = Readonly<{
  mustUseHTTP: boolean;
  domain: string;
  port: number;
}>;


export default ClientAndFrontServerConnectionConfiguration;
