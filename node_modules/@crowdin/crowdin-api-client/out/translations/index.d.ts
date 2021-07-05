import { CrowdinApi, DownloadLink, ResponseList, ResponseObject, Status } from '../core';
export declare class Translations extends CrowdinApi {
    /**
     * @param projectId project identifier
     * @param request request body
     */
    applyPreTranslation(projectId: number, request: TranslationsModel.PreTranslateRequest): Promise<ResponseObject<Status<TranslationsModel.PreTranslationStatusAttributes>>>;
    /**
     * @param projectId project identifier
     * @param preTranslationId pre translation identifier
     */
    preTranslationStatus(projectId: number, preTranslationId: string): Promise<ResponseObject<Status<TranslationsModel.PreTranslationStatusAttributes>>>;
    /**
     * @param projectId project identifier
     * @param fileId file identifier
     * @param request request body
     * @param eTag eTag 'If-None-Match' header
     */
    buildProjectFileTranslation(projectId: number, fileId: number, request: TranslationsModel.BuildProjectFileTranslationRequest, eTag?: string): Promise<ResponseObject<TranslationsModel.BuildProjectFileTranslationResponse>>;
    /**
     * @param projectId project identifier
     * @param branchId branch identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listProjectBuilds(projectId: number, branchId?: number, limit?: number, offset?: number): Promise<ResponseList<TranslationsModel.Build>>;
    /**
     * @param projectId project identifier
     * @param request request body
     */
    buildProject(projectId: number, request?: TranslationsModel.BuildRequest | TranslationsModel.PseudoBuildRequest): Promise<ResponseObject<TranslationsModel.Build>>;
    /**
     * @param projectId project identifier
     * @param buildId build identifier
     */
    downloadTranslations(projectId: number, buildId: number): Promise<ResponseObject<DownloadLink>>;
    /**
     * @param projectId project identifier
     * @param buildId build identifier
     */
    checkBuildStatus(projectId: number, buildId: number): Promise<ResponseObject<TranslationsModel.Build>>;
    /**
     * @param projectId project identifier
     * @param buildId build identifier
     */
    cancelBuild(projectId: number, buildId: number): Promise<void>;
    /**
     * @param projectId project identifier
     * @param languageId language identifier
     * @param request request body
     */
    uploadTranslation(projectId: number, languageId: string, request: TranslationsModel.UploadTranslationRequest): Promise<ResponseObject<TranslationsModel.UploadTranslationResponse>>;
    /**
     * @param projectId project identifier
     * @param request request body
     */
    exportProjectTranslation(projectId: number, request: TranslationsModel.ExportProjectTranslationRequest): Promise<ResponseObject<DownloadLink>>;
}
export declare namespace TranslationsModel {
    interface PreTranslateRequest {
        languageIds: string[];
        fileIds: number[];
        method?: Method;
        engineId?: number;
        autoApproveOption?: AutoApproveOption;
        duplicateTranslations?: boolean;
        translateUntranslatedOnly?: boolean;
        translateWithPerfectMatchOnly?: boolean;
        markAddedTranslationsAsDone?: boolean;
    }
    interface BuildProjectFileTranslationRequest {
        targetLanguageId: string;
        exportAsXliff?: boolean;
        skipUntranslatedStrings?: boolean;
        skipUntranslatedFiles?: boolean;
        exportApprovedOnly?: boolean;
        exportWithMinApprovalsCount?: number;
    }
    interface BuildProjectFileTranslationResponse extends DownloadLink {
        etag: string;
    }
    interface PreTranslationStatusAttributes {
        languageIds: string[];
        fileIds: number[];
        method: Method;
        autoApproveOption: AutoApproveOption;
        duplicateTranslations: boolean;
        translateUntranslatedOnly: boolean;
        translateWithPerfectMatchOnly: boolean;
    }
    enum Method {
        TM = "tm",
        MT = "mt"
    }
    enum AutoApproveOption {
        ALL = "all",
        EXCEPT_AUTO_SUBSTITUTED = "exceptAutoSubstituted",
        PERFECT_MATCH_ONLY = "perfectMatchOnly",
        NONE = "none"
    }
    enum CharTransformation {
        ASIAN = "asian",
        EUROPEAN = "european",
        ARABIC = "arabic",
        CYRILLIC = "cyrillic"
    }
    interface Build {
        id: number;
        status: string;
        progress: number;
        attributes: Attribute[];
    }
    interface Attribute {
        projectId: number;
        branchId: number;
        targetLanguagesId: string[];
        skipUntranslatedStrings: boolean;
        exportApprovedOnly: boolean;
        exportWithMinApprovalsCount: number;
        skipUntranslatedFiles: boolean;
    }
    interface BuildRequest {
        branchId?: number;
        targetLanguageIds?: string[];
        skipUntranslatedStrings?: boolean;
        skipUntranslatedFiles?: boolean;
        exportApprovedOnly?: boolean;
        exportWithMinApprovalsCount?: number;
    }
    interface PseudoBuildRequest {
        pseudo: boolean;
        prefix?: string;
        suffix?: string;
        lengthTransformation?: number;
        charTransformation?: CharTransformation;
    }
    interface UploadTranslationRequest {
        storageId: number;
        fileId: number;
        importEqSuggestions?: boolean;
        autoApproveImported?: boolean;
        markAddedTranslationsAsDone?: boolean;
        translateHidden?: boolean;
    }
    interface UploadTranslationResponse {
        projectId: number;
        storageId: number;
        languageId: string;
        fileId: number;
    }
    interface ExportProjectTranslationRequest {
        targetLanguageId: string;
        format?: string;
        labelIds?: number[];
        branchIds?: number[];
        directoryIds?: number[];
        fileIds?: number[];
        skipUntranslatedStrings?: boolean;
        skipUntranslatedFiles?: boolean;
        exportWithMinApprovalsCount?: number;
    }
}
