const YamatoDaiwaStyleGuides = require("@yamato-daiwa/style_guides/ECMAScript");
const { NoRestrictedImportsRule } = require("@yamato-daiwa/style_guides/ESLintUtils");


module.exports = [

  {
    ignores: [
      "01-Source/Implementation/Elements/Database/_Generated",
      "02-StaticPreviewBuild",
      "03-LocalDevelopmentBuild",
      "04-TestingBuild",
      "05-StagingBuild",
      "06-ProductionBuild"
    ]
  },

  ...YamatoDaiwaStyleGuides,


  /* ━━━ Global Variables ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {

    files: [
      "**/*.ts",
      "Project.d.ts"
    ],

    languageOptions: {
      globals: {
        __IS_STATIC_PREVIEW_BUILDING_MODE__YDA__: "readonly",
        __IS_LOCAL_DEVELOPMENT_BUILDING_MODE__YDA__: "readonly",
        __IS_TESTING_BUILDING_MODE__YDA__: "readonly",
        __IS_STAGING_BUILDING_MODE__YDA__: "readonly",
        __IS_PRODUCTION_BUILDING_MODE__YDA__: "readonly"
      }
    },

    rules: {

      "no-underscore-dangle": [
        "warn",
        {
          allow: [
            "__IS_STATIC_PREVIEW_BUILDING_MODE__YDA__",
            "__IS_LOCAL_DEVELOPMENT_BUILDING_MODE__YDA__",
            "__IS_TESTING_BUILDING_MODE__YDA__",
            "__IS_STAGING_BUILDING_MODE__YDA__",
            "__IS_PRODUCTION_BUILDING_MODE__YDA__"
          ]
        }
      ]

    }

  },


  /* ━━━ ファイル群毎 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {

    files: [ "01-Source/CommonSolution/**/*.ts" ],

    rules: {

      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              regex:
                  NoRestrictedImportsRule.buildAllowedModulesRegularExpression({
                    allowedNodeModules: [ "fundamental-constants", "fundamental-constants-japan" ],
                    allowedAtMarkAliasedImports: [ "CommonSolution", "Entities" ]
                  }),
              message: "一般解決ディレクトリ内に汎用定数以外のライブラリー・フレームワークのインポートはクリーンアーキテクチャに依り厳禁。"
            }
          ]
        }
      ],

      /* 妥当なTypeScriptである限り、ビジネスルール内の子名スペースに在る変数名は親のスコープに在る変数名と一致する事を許可。 */
      "@typescript-eslint/no-shadow": "off"

    }

  },

  {
    files: [ "01-Source/Implementation/Elements/Client/**/*.ts" ],
    rules: {

      /* Node.jsバージョンの制限はクライアント側には関係ない。 */
      "n/no-unsupported-features/node-builtins": "off"

    }
  },


  /* ━━━ 理由毎 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {

    files: [
      "01-Source/CommonSolution/**/*.ts",
      "01-Source/Implementation/Elements/Client/DependenciesInjection/ClientDependencies.ts",
      "01-Source/Implementation/Elements/Client/SharedAssets/StringResources/SharedStringResources.ts",
      "01-Source/Implementation/Elements/Client/StaticPreview/ExportsForPug.ts",
      "01-Source/Implementation/Elements/FrontServer/Configuration/FrontServerNormalizedConfiguration.ts",
      "01-Source/Implementation/Elements/FrontServer/DependenciesInjection/FrontServerDependencies.ts",
      "01-Source/Implementation/Interactions/ClientAndFrontServer/BFF/ReusableDTOs/**/*"
    ],

    rules: {

      /* タイプアリアス・インターフェースと名スペースを結合する事は妥当なTypeScriptであり、ESLintに警告される事が望ましくないが、
       *   コミュニティは適切なオプションの導入をしたくない。 https://github.com/eslint/eslint/issues/15504 */
      "@typescript-eslint/no-redeclare": "off"

    }

  },

  {

    files: [ "01-Source/Implementation/Elements/Client/Data/FromUser/**/*.ts" ],

    rules: {

      /* 当規則は名スペース内のクラスに適応されていないが、ESLint上適切な例外オプションはない。 */
      "max-classes-per-file": "off"

    }

  },

  {

    files: [ "**/*Controller.ts" ],

    rules: {

      /* 一部分のメソッドはデコレーターだけで動き、体に論理を入れる必要は無い。 */
      "@typescript-eslint/no-empty-function": "off",

      /* メソッドは静的だと、「routing-controllers」に依りリクエストハンドラにマッピングされない。 */
      "@typescript-eslint/class-methods-use-this": "off",

      /* カテゴリー毎整理活用。 */
      "@typescript-eslint/member-ordering": "off"

    }

  },

  {

    files: [
      "01-Source/Automation/**/*",
      "01-Source/Implementation/Elements/Database/PrismaModelsDefinitions/**/*",
      "01-Source/Implementation/Elements/Database/generatePrismaSchema.ts"
    ],

    rules: {
      "n/no-unpublished-import": [
        "error",
        {
          allowModules: [
            "@yamato-daiwa/prisma-schema-generator",
            "html-minifier",
            "node-html-parser",
            "rev-hash"
          ]
        }
      ]
    }

  },

  {

    files: [ "01-Source/Implementation/Elements/InitialDataSource/_Generated/**/*" ],
    rules: {

      /* 最少化した自動生成HTMLは一行に入れ切れない事は普通。 */
      "@stylistic/max-len": [ "off" ],

      /* 最少化したHTMLコードでも、複数行になっている事が有る。 */
      "@stylistic/quotes": [ "off" ]

    }

  },

  {

    files: [ "01-Source/Implementation/Elements/MockDataSource/SamplesRepositories/SampleProductsRepository.ts" ],

    rules: {

      "@typescript-eslint/member-ordering": [ "off" ]

    }

  }

];
