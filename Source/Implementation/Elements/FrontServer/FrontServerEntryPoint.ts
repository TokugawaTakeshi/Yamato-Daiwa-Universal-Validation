/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ┅┅┅ Shims ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import "reflect-metadata";

/* ┅┅┅ Configuration ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import ConsoleLineInterface from "@FrontServer/ConsoleLineInterface";
import FrontServerConfigurationNormalizer from "@FrontServer/Configuration/FrontServerConfigurationNormalizer";
import type FrontServerNormalizedConfiguration from "@FrontServer/Configuration/FrontServerNormalizedConfiguration";
import FrontServerConfigurationRepresentative from "@FrontServer/Configuration/FrontServerConfigurationRepresentative";

/* ┅┅┅ Gateways Implementations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import ContactRequestPrismaGateway from "@FrontServer/Gateways/ContactRequestPrismaGateway";
import ProductCategoryPrismaGateway from "@FrontServer/Gateways/ProductCategoryPrismaGateway";
import ProductPrismaGateway from "@FrontServer/Gateways/ProductPrismaGateway";
import UserPrismaGateway from "@FrontServer/Gateways/UserPrismaGateway";

/* ┅┅┅ Services ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import FrontServerLogger from "@FrontServer/Services/Logging/FrontServerLogger";
import FrontServerLoggingPrismaService from "@FrontServer/Services/Logging/FrontServerLoggingPrismaService";
import Argon2idPasswordsHashingService from "@FrontServer/Services/PasswordHashing/Argon2idPasswordsHashingService";
import ProductsPhotosLocalStorageManagementService from
    "@FrontServer/Services/FilesManagement/Product/Photo/ProductsPhotosLocalStorageManagementService";

/* ┅┅┅ Controllers ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import AccessControlController from "@FrontServer/Controllers/AccessControlController";

/* ┅┅┅ Frameworks ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import Express, { type Express as ExpressApplication } from "express";
import provideBasicAuthentication from "express-basic-auth";
import { initializeRoutingControllersExpressHTTPS_Application } from "@yamato-daiwa/express-extensions";
import addSecurityResponseHTTP_Headers from "helmet";
import logRequests from "morgan";
import connectHistoryAPI_Fallback from "connect-history-api-fallback";
import * as Prisma from "@prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import Redis, { type RedisOptions } from "ioredis";

/* ┅┅┅ Dependencies Injection ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type FrontServerDependencies from "@FrontServer/DependenciesInjection/FrontServerDependencies";
import FrontServerDependenciesInjector from "@FrontServer/DependenciesInjection/FrontServerDependenciesInjector";
import { initializeAll_IDsIoredisGeneratorsForFrontServer } from
    "@FrontServer/IDsGenerators/initializeAll_IDsIoredisGeneratorsForFrontServer";

/* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import { Logger, isNotUndefined } from "@yamato-daiwa/es-extensions";
import {
  ConsoleApplicationLogger,
  ConsoleCommandsParser,
  ImprovedFileSystem
} from "@yamato-daiwa/es-extensions-nodejs";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


export default class FrontServer {

  static {
    FrontServer.initializeAndStart().catch(Logger.logPromiseError);
  }

  private static async initializeAndStart(): Promise<void> {

    /* 【 方法論 】 データベースがが未初期化ので、データベースやり取りをしている「FrontServerLogger」は未だ利用出来ない。 */
    Logger.setImplementation(ConsoleApplicationLogger);

    FrontServerConfigurationRepresentative.initialize(
      FrontServerConfigurationNormalizer.normalize({
        configurationFromConsoleCommand: ConsoleCommandsParser.
            parse<ConsoleLineInterface.ParsedArguments>(ConsoleLineInterface.specification)
      })
    );

    ImprovedFileSystem.ensureDirectoriesCreated([
      FrontServerConfigurationRepresentative.directories.uploads.$ABSOLUTE_PATH,
      FrontServerConfigurationRepresentative.directories.uploads.products.photos.$ABSOLUTE_PATH
    ]);

    const prismaClient: Prisma.PrismaClient = new Prisma.PrismaClient(FrontServer.getPrismaClientConfiguration());

    const ioredisClient: Redis = new Redis(FrontServer.getKeyValueDatabaseConfiguration());

    const IDsGenerators: FrontServerDependencies.IDsGenerators =
        await initializeAll_IDsIoredisGeneratorsForFrontServer(ioredisClient);

    FrontServerDependenciesInjector.setDependencies({

      gateways: {

        contactRequest:

            new ContactRequestPrismaGateway(
              prismaClient,
              IDsGenerators.contactRequests,
              IDsGenerators.invalidContactRequestsSubmittingAttempts
            ),

        productCategory: new ProductCategoryPrismaGateway(prismaClient, IDsGenerators.productsCategories),

        product: new ProductPrismaGateway(prismaClient, IDsGenerators.products),

        user: new UserPrismaGateway(prismaClient)

      },

      services: {

        logging: new FrontServerLoggingPrismaService(prismaClient),

        passwordHashing:

            new Argon2idPasswordsHashingService({
              passwordHashPepper: FrontServerConfigurationRepresentative.passwordHashPepper
            }),

        filesManagement: {
          products: {
            photos: new ProductsPhotosLocalStorageManagementService()
          }
        }

      }

    });

    Logger.setImplementation(new FrontServerLogger());

    await initializeRoutingControllersExpressHTTPS_Application({

      configuration: {

        HTTPS: {
          port: FrontServerConfigurationRepresentative.HTTP_Port,
          SSL_KeyFilePath__absoluteOrRelative: FrontServerConfigurationRepresentative.filesAbsolutePaths.SSL.key,
          SSL_CertificateFilePath__absoluteOrRelative: FrontServerConfigurationRepresentative.filesAbsolutePaths.SSL.certificate
        },

        routingControllers: {
          classTransformer: false,
          controllers: [
            AccessControlController
          ],
          cors: __IS_LOCAL_DEVELOPMENT_BUILDING_MODE__YDA__
        }

      },

      eventsHandlers: {
        onExpressApplicationCreated: FrontServer.onExpressApplicationCreated,
        onApplicationStarted: FrontServer.onApplicationStarted
      }

    });

  }


  /* ━━━ Hooks ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  private static async onExpressApplicationCreated(expressApplication: ExpressApplication): Promise<void> {

    expressApplication.

        use(
          addSecurityResponseHTTP_Headers({
            contentSecurityPolicy: !__IS_LOCAL_DEVELOPMENT_BUILDING_MODE__YDA__
          })
        ).

        use(connectHistoryAPI_Fallback({ verbose: true })).

        use(Express.static(FrontServerConfigurationRepresentative.directories.publicAssets.$ABSOLUTE_PATH)).
        use(Express.static(FrontServerConfigurationRepresentative.directories.uploads.$ABSOLUTE_PATH)).

        use(logRequests(__IS_LOCAL_DEVELOPMENT_BUILDING_MODE__YDA__ ? "dev" : "common"));

    if (isNotUndefined(FrontServerConfigurationRepresentative.basicAuthentication)) {
      expressApplication.use(
        provideBasicAuthentication({
          challenge: true,
          users: {
            [FrontServerConfigurationRepresentative.basicAuthentication.userName]:
                FrontServerConfigurationRepresentative.basicAuthentication.password
          }
        })
      );
    }

    return Promise.resolve();

  }

  private static async onApplicationStarted(): Promise<void> {

    Logger.logSuccess({
      title: "サーバー起動",
      description: `https://localhost:${ FrontServerConfigurationRepresentative.HTTP_Port }`,
      compactLayout: true
    });

    return Promise.resolve();

  }


  /* ┅┅┅ Configuration ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  private static getPrismaClientConfiguration(): Pick<Prisma.Prisma.PrismaClientOptions, "adapter"> {

    const mainDatabaseConnectionConfiguration: FrontServerNormalizedConfiguration.MainDatabaseConnection =
        FrontServerConfigurationRepresentative.mainDatabaseConnection;

    return {

      adapter:

        new PrismaMariaDb({

          database: mainDatabaseConnectionConfiguration.databaseName,

          host:

              mainDatabaseConnectionConfiguration.isDatabaseInExternalNetwork ?
                  "localhost" :
                  mainDatabaseConnectionConfiguration.hostInInternalNetwork,

          port:

              mainDatabaseConnectionConfiguration.isDatabaseInExternalNetwork ?
                  mainDatabaseConnectionConfiguration.externalPort :
                  mainDatabaseConnectionConfiguration.internalPort,

          user: mainDatabaseConnectionConfiguration.userName,

          password: mainDatabaseConnectionConfiguration.password,

          /* 【 理論 】
           * 一般的には不要だが、指定しないと、下記のバグが発生。
           * https://github.com/prisma/orm/issues/28612
           * 上記のイッシューが修正済みな筈だが、エラーが未だ発生している。 */
          allowPublicKeyRetrieval: true

        })

    };

  }

  private static getKeyValueDatabaseConfiguration(): RedisOptions {

    const keyValueDatabaseConnectionConfiguration: FrontServerNormalizedConfiguration.KeyValueDatabaseConnection =
        FrontServerConfigurationRepresentative.keyValueDatabaseConnection;

    return {

      db: keyValueDatabaseConnectionConfiguration.databaseIndex,

      host:

          keyValueDatabaseConnectionConfiguration.isDatabaseInExternalNetwork ?
              "localhost" :
              keyValueDatabaseConnectionConfiguration.hostInInternalNetwork,

      port:

          keyValueDatabaseConnectionConfiguration.isDatabaseInExternalNetwork ?
              keyValueDatabaseConnectionConfiguration.externalPort :
              keyValueDatabaseConnectionConfiguration.internalPort,

      username: keyValueDatabaseConnectionConfiguration.userName,

      password: keyValueDatabaseConnectionConfiguration.password

    };

  }

}
