import { CrowdinApi, PatchRequest, ResponseList, ResponseObject } from '../core';
export declare class Languages extends CrowdinApi {
    /**
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listSupportedLanguages(limit?: number, offset?: number): Promise<ResponseList<LanguagesModel.Language>>;
    /**
     * @param request request body
     */
    addCustomLanguage(request: LanguagesModel.AddLanguageRequest): Promise<ResponseObject<LanguagesModel.Language>>;
    /**
     * @param languageId language identifier
     */
    getLanguage(languageId: string): Promise<ResponseObject<LanguagesModel.Language>>;
    /**
     * @param languageId language identifier
     */
    deleteCustomLanguage(languageId: string): Promise<void>;
    /**
     * @param languageId language identifier
     * @param request request body
     */
    editCustomLanguage(languageId: string, request: PatchRequest[]): Promise<ResponseObject<LanguagesModel.Language>>;
}
export declare namespace LanguagesModel {
    interface Language {
        id: string;
        name: string;
        editorCode: string;
        twoLettersCode: string;
        threeLettersCode: string;
        locale: string;
        androidCode: string;
        osxCode: string;
        osxLocale: string;
        pluralCategoryNames: string[];
        pluralRules: string;
        pluralExamples: string[];
        textDirection: TextDirection;
        dialectOf: number;
    }
    interface AddLanguageRequest {
        name: string;
        dialectOf?: number;
        code: string;
        localeCode: string;
        twoLettersCode?: string;
        threeLettersCode: string;
        textDirection: TextDirection;
        pluralCategoryNames: string[];
    }
    enum TextDirection {
        LTR = "ltr",
        RTL = "rtl"
    }
}
