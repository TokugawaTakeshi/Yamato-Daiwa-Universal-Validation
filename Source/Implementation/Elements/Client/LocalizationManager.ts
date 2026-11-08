/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ┅┅┅ Application Business Rules ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import SupportedLanguagesBCP_47_Subtags from "@CommonSolution/Restrictions/SupportedLanguagesBCP_47_Subtags";

/* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import { isElementOfEnumeration, isFunctionLike, isNotNull, Logger } from "@yamato-daiwa/es-extensions";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


abstract class LocalizationManager {

  public static onLoadingStartedEventHandler?: () => unknown;
  public static onLoadingFinishedEventHandler?: () => unknown;

  private static readonly DEFAULT_LANGUAGE_TAG: SupportedLanguagesBCP_47_Subtags.japanese =
      SupportedLanguagesBCP_47_Subtags.japanese;

  private static readonly ACTIVE_LANGUAGE_TAG_LOCAL_STORAGE_KEY: string = "ACTIVE_LANGUAGE_TAG--LocalizationManager";

  private static readonly stringResourcesLoading:
      Map<LocalizationManager.StringResourcesLoading.BundleID, Promise<void>> = new Map();

  private static counterForStringResourcesBundleID_Generating: number = 0;


  static #activeLanguageTag: SupportedLanguagesBCP_47_Subtags;


  static {

    const activeLanguageTagFromLocalStorage: string | null = localStorage.
        getItem(LocalizationManager.ACTIVE_LANGUAGE_TAG_LOCAL_STORAGE_KEY);

    if (
      isNotNull(activeLanguageTagFromLocalStorage) &&
          isElementOfEnumeration(activeLanguageTagFromLocalStorage, SupportedLanguagesBCP_47_Subtags)
    ) {

      LocalizationManager.#activeLanguageTag = activeLanguageTagFromLocalStorage;

    } else {

      // TODO В совр. версиях браузеа это также может быть ja-JP
      LocalizationManager.#activeLanguageTag =
          isElementOfEnumeration(navigator.language, SupportedLanguagesBCP_47_Subtags) ?
              navigator.language :
              LocalizationManager.DEFAULT_LANGUAGE_TAG;

      localStorage.setItem(
        LocalizationManager.ACTIVE_LANGUAGE_TAG_LOCAL_STORAGE_KEY, LocalizationManager.#activeLanguageTag
      );

    }

  }


  public static startLoadingOfInitialResources(): void {

    LocalizationManager.onLoadingStartedEventHandler?.();

    Promise.all(LocalizationManager.stringResourcesLoading.values()).
        catch(Logger.logPromiseError).
        finally(
          (): void => {
            LocalizationManager.onLoadingFinishedEventHandler?.();
          }
        );

  }

  public static manageStringResources<StringResources extends object>(
    {
      localeDependentStringResources,
      onResourcesLoaded
    }: Readonly<{
      localeDependentStringResources: Readonly<{
        [ keys in SupportedLanguagesBCP_47_Subtags ]: StringResources | (() => Promise<StringResources>) }
      >;
      onResourcesLoaded: (localizedStringResources: StringResources) => void;
    }>
  ): void {

    let stringResources: StringResources | (() => Promise<StringResources>);

    switch (LocalizationManager.#activeLanguageTag) {

      case SupportedLanguagesBCP_47_Subtags.japanese: {
        stringResources = localeDependentStringResources[SupportedLanguagesBCP_47_Subtags.japanese];
        break;
      }

      case SupportedLanguagesBCP_47_Subtags.english: {
        stringResources = localeDependentStringResources[SupportedLanguagesBCP_47_Subtags.english];
      }

    }


    if (isFunctionLike(stringResources)) {

      const stringResourcesID: number = ++LocalizationManager.counterForStringResourcesBundleID_Generating;

      LocalizationManager.stringResourcesLoading.set(
        stringResourcesID,
        stringResources().
            then(($stringResources: StringResources): void => { onResourcesLoaded($stringResources); }).
            catch(Logger.logPromiseError).
            finally((): void => { LocalizationManager.stringResourcesLoading.delete(stringResourcesID); })
      );

      return;

    }

    onResourcesLoaded(stringResources);

  }

  public static async ensureDynamicLoadingOfLocalizationsComplete(): Promise<void> {
    await Promise.all(LocalizationManager.stringResourcesLoading.values());
  }

  public static setNewLocalizationAndReloadPage(targetLanguageTag: SupportedLanguagesBCP_47_Subtags): void {
    localStorage.setItem(LocalizationManager.ACTIVE_LANGUAGE_TAG_LOCAL_STORAGE_KEY, targetLanguageTag);
    window.location.reload();
  }

  public static get activeLanguageTag(): SupportedLanguagesBCP_47_Subtags {
    return LocalizationManager.#activeLanguageTag;
  }

}


namespace LocalizationManager {

  export namespace StringResourcesLoading {
    export type BundleID = number;
  }

}


export default LocalizationManager;
