import { CrowdinApi, PatchRequest, ResponseList, ResponseObject } from '../core';
export declare class Dictionaries extends CrowdinApi {
    /**
     * @param projectId project identifier
     * @param languageIds filter progress by Language Identifiers
     */
    listDictionaries(projectId: number, languageIds?: string): Promise<ResponseList<DictionariesModel.Dictionary>>;
    /**
     * @param projectId project identifier
     * @param languageId language identifier
     * @param request request body
     */
    editDictionary(projectId: number, languageId: string, request: PatchRequest[]): Promise<ResponseObject<DictionariesModel.Dictionary>>;
}
export declare namespace DictionariesModel {
    interface Dictionary {
        languageId: string;
        words: string[];
    }
}
