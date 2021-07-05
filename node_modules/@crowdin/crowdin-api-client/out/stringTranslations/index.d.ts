import { BooleanInt, CrowdinApi, ResponseList, ResponseObject } from '../core';
export declare class StringTranslations extends CrowdinApi {
    /**
     * @param projectId project identifier
     * @param stringId string identifier
     * @param languageId language identifier
     * @param translationId translation identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     * @param fileId file identifier
     */
    listTranslationApprovals(projectId: number, stringId?: number, languageId?: string, translationId?: number, limit?: number, offset?: number, fileId?: number): Promise<ResponseList<StringTranslationsModel.Approval>>;
    /**
     * @param projectId project identifier
     * @param request request body
     */
    addApproval(projectId: number, request: StringTranslationsModel.AddApprovalRequest): Promise<ResponseObject<StringTranslationsModel.Approval>>;
    /**
     * @param projectId project identifier
     * @param approvalId approval identifier
     */
    approvalInfo(projectId: number, approvalId: number): Promise<ResponseObject<StringTranslationsModel.Approval>>;
    /**
     * @param projectId project identifier
     * @param approvalId approval identifier
     */
    removeApproval(projectId: number, approvalId: number): Promise<void>;
    /**
     * @param projectId project identifier
     * @param languageId language identifier
     * @param stringIds filter translations by stringIds
     * @param fileId filter translations by fileId
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     * @param labelIds filter translations by fileId
     * @param denormalizePlaceholders enable denormalize placeholders
     * @param croql filter translations by CroQL (Can't be used with `stringIds`, `labelIds` or `fileId` in same request)
     */
    listLanguageTranslations(projectId: number, languageId: string, stringIds?: string, fileId?: number, limit?: number, offset?: number, labelIds?: string, denormalizePlaceholders?: BooleanInt, croql?: string): Promise<ResponseList<StringTranslationsModel.PlainLanguageTranslation | StringTranslationsModel.PluralLanguageTranslation | StringTranslationsModel.IcuLanguageTranslation>>;
    /**
     * @param projectId project identifier
     * @param stringId string identifier
     * @param languageId language identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     * @param denormalizePlaceholders enable denormalize placeholders
     */
    listStringTranslations(projectId: number, stringId: number, languageId: string, limit?: number, offset?: number, denormalizePlaceholders?: BooleanInt): Promise<ResponseList<StringTranslationsModel.StringTranslation>>;
    /**
     * @param projectId project identifier
     * @param request request body
     */
    addTranslation(projectId: number, request: StringTranslationsModel.AddStringTranslationRequest): Promise<ResponseObject<StringTranslationsModel.StringTranslation>>;
    /**
     * @param projectId project identifier
     * @param stringId string identifier
     * @param languageId language identifier
     */
    deleteAllTranslations(projectId: number, stringId: number, languageId: string): Promise<void>;
    /**
     * @param projectId project identifier
     * @param translationId translation identifier
     */
    translationInfo(projectId: number, translationId: number): Promise<ResponseObject<StringTranslationsModel.StringTranslation>>;
    /**
     * @param projectId project identifier
     * @param translation translation identifier
     */
    deleteTranslation(projectId: number, translationId: number): Promise<void>;
    /**
     * @param projectId project identifier
     * @param translation translation identifier
     */
    restoreTranslation(projectId: number, translationId: number): Promise<ResponseObject<StringTranslationsModel.StringTranslation>>;
    /**
     * @param projectId project identifier
     * @param stringId string identifier
     * @param languageId language identifier
     * @param translationId translation identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listTranslationVotes(projectId: number, stringId?: number, languageId?: string, translationId?: number, limit?: number, offset?: number): Promise<ResponseList<StringTranslationsModel.Vote>>;
    /**
     * @param projectId project identifier
     * @param request request body
     */
    addVote(projectId: number, request: StringTranslationsModel.AddVoteRequest): Promise<ResponseObject<StringTranslationsModel.Vote>>;
    /**
     * @param projectId project identifier
     * @param voteId vote identifier
     */
    voteInfo(projectId: number, voteId: number): Promise<ResponseObject<StringTranslationsModel.Vote>>;
    /**
     * @param projectId project identifier
     * @param voteId vote identifier
     */
    cancelVote(projectId: number, voteId: number): Promise<void>;
}
export declare namespace StringTranslationsModel {
    interface Approval {
        id: number;
        user: User;
        translationId: number;
        stringId: number;
        languageId: string;
        workflowStepId: number;
        createdAt: string;
    }
    interface AddApprovalRequest {
        translationId: number;
    }
    interface StringTranslation {
        id: number;
        text: string;
        pluralCategoryName: string;
        user: User;
        rating: number;
        createdAt: string;
    }
    interface PlainLanguageTranslation {
        stringId: number;
        contentType: string;
        translationId: number;
        text: string;
        user: User;
        createdAt: string;
    }
    interface PluralLanguageTranslation {
        stringId: number;
        contentType: string;
        plurals: Plural[];
    }
    interface IcuLanguageTranslation {
        stringId: number;
        contentType: string;
        translationId: number;
        text: string;
        user: User;
        createdAt: string;
    }
    interface Plural {
        translationId: number;
        text: string;
        pluralForm: string;
        user: User;
        createdAt: string;
    }
    interface AddStringTranslationRequest {
        stringId: number;
        languageId: string;
        text: string;
        pluralCategoryName?: string;
    }
    interface Vote {
        id: number;
        user: User;
        translationId: number;
        votedAt: string;
        mark: Mark;
    }
    interface AddVoteRequest {
        mark: Mark;
        translationId: number;
    }
    interface User {
        id: number;
        username: string;
        fullName: string;
        avatarUrl: string;
    }
    enum Mark {
        UP = "up",
        DOWN = "down"
    }
}
