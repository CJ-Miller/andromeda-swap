import { CrowdinApi, DownloadLink, PatchRequest, ResponseList, ResponseObject, Status } from '../core';
export declare class TranslationMemory extends CrowdinApi {
    /**
     * @param groupId group identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listTm(groupId?: number, limit?: number, offset?: number): Promise<ResponseList<TranslationMemoryModel.TranslationMemory>>;
    /**
     * @param request request body
     */
    addTm(request: TranslationMemoryModel.AddTranslationMemoryRequest): Promise<ResponseObject<TranslationMemoryModel.TranslationMemory>>;
    /**
     * @param tmId tm identifier
     */
    getTm(tmId: number): Promise<ResponseObject<TranslationMemoryModel.TranslationMemory>>;
    /**
     * @param tmId tm identifier
     */
    deleteTm(tmId: number): Promise<void>;
    /**
     * @param tmId tm identifier
     * @param request request body
     */
    editTm(tmId: number, request: PatchRequest[]): Promise<ResponseObject<TranslationMemoryModel.TranslationMemory>>;
    /**
     * @param tmId tm identifier
     */
    clearTm(tmId: number): Promise<void>;
    /**
     * @param tmId tm identifier
     * @param exportId export identifier
     */
    downloadTm(tmId: number, exportId: string): Promise<ResponseObject<DownloadLink>>;
    /**
     * @param tmId tm identifier
     * @param request request body
     */
    exportTm(tmId: number, request: TranslationMemoryModel.ExportTranslationMemoryRequest): Promise<ResponseObject<Status<TranslationMemoryModel.ExportTranslationMemoryAttribute>>>;
    /**
     * @param tmId tm identifier
     * @param exportId export identifier
     */
    checkExportStatus(tmId: number, exportId: string): Promise<ResponseObject<Status<TranslationMemoryModel.ExportTranslationMemoryAttribute>>>;
    /**
     * @param tmId tm identifier
     * @param request request body
     */
    importTm(tmId: number, request: TranslationMemoryModel.ImportTranslationMemoryRequest): Promise<ResponseObject<Status<TranslationMemoryModel.ImportTranslationMemoryAttribute>>>;
    /**
     * @param tmId tm identifier
     * @param importId import identifier
     */
    checkImportStatus(tmId: number, importId: string): Promise<ResponseObject<Status<TranslationMemoryModel.ImportTranslationMemoryAttribute>>>;
}
export declare namespace TranslationMemoryModel {
    interface TranslationMemory {
        id: number;
        groupId: number;
        userId: number;
        name: string;
        languageIds: string[];
        segmentsCount: number;
        defaultProjectId: number;
        projectIds: number[];
        createdAt: string;
    }
    interface AddTranslationMemoryRequest {
        name: string;
        groupId?: number;
    }
    interface ExportTranslationMemoryRequest {
        sourceLanguageId?: number;
        targetLanguageId?: number;
        format?: Format;
    }
    interface ImportTranslationMemoryRequest {
        storageId: number;
        firstLineContainsHeader?: boolean;
        scheme?: Scheme;
    }
    interface ExportTranslationMemoryAttribute {
        sourceLanguageId: string;
        targetLanguageId: string;
        format: string;
    }
    interface ImportTranslationMemoryAttribute {
        tmId: number;
        storageId: number;
        firstLineContainsHeader: number;
        scheme: Scheme;
    }
    enum Format {
        TMX = "tmx",
        CSV = "csv",
        XLSX = "xlsx"
    }
    interface Scheme {
        [key: string]: number;
    }
}
