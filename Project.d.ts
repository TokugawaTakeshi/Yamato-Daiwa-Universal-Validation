declare const __IS_LOCAL_DEVELOPMENT_BUILDING_MODE__YDA__: boolean;
declare const __IS_TESTING_BUILDING_MODE__YDA__: boolean;
declare const __IS_STAGING_BUILDING_MODE__YDA__: boolean;
declare const __IS_PRODUCTION_BUILDING_MODE__YDA__: boolean;


declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<unknown, unknown, unknown>;
  export default component;
}

declare module "*.pug" {
  const HTML_Template: string;
  export default HTML_Template;
}
