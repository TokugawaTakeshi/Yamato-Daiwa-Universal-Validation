import { ConsoleCommandsParser } from "@yamato-daiwa/es-extensions-nodejs";
import FrontServerNormalizedConfiguration from "@FrontServer/Configuration/FrontServerNormalizedConfiguration";


namespace ConsoleLineInterface {

  export type ParsedArguments = Readonly<{
    environment: FrontServerNormalizedConfiguration.ExecutionEnvironments;
  }>;

  export const specification: ConsoleCommandsParser.CommandLineInterfaceSpecification = {

    applicationName: "Front Server",
    applicationDescription: "Sample Application - Front server",

    commandPhrases: {
      startServer: {

        isDefault: true,
        description: "サーバを起動する",

        options: {
          environment: {
            type: ConsoleCommandsParser.ParametersTypes.string,
            required: true,
            allowedAlternatives: Object.values(FrontServerNormalizedConfiguration.ExecutionEnvironments)
          }
        }

      }
    }

  };

}


export default ConsoleLineInterface;
