import { CrowdinApi, PatchRequest, ResponseList, ResponseObject } from '../core';
export declare class StringComments extends CrowdinApi {
    listStringComments(projectId: number, request?: StringCommentsModel.ListStringCommentsRequest): Promise<ResponseList<StringCommentsModel.StringComment>>;
    /**
     * @param projectId project identifier
     * @param stringId string identifier
     * @param type defines string comment type
     * @param targetLanguageId defines target language id. It can be one target language id or a list of comma-separated ones
     * @param issueType defines issue type. It can be one issue type or a list of comma-separated ones
     * @param issueStatus defines issue resolution status
     */
    listStringComments(projectId: number, stringId?: number, type?: StringCommentsModel.Type, targetLanguageId?: string, issueType?: StringCommentsModel.IssueType, issueStatus?: StringCommentsModel.IssueStatus): Promise<ResponseList<StringCommentsModel.StringComment>>;
    /**
     * @param projectId project identifier
     * @param request request body
     */
    addStringComment(projectId: number, request: StringCommentsModel.AddStringCommentRequest): Promise<ResponseObject<StringCommentsModel.StringComment>>;
    /**
     * @param projectId project identifier
     * @param stringCommentId string comment identifier
     */
    getStringComment(projectId: number, stringCommentId: number): Promise<ResponseObject<StringCommentsModel.StringComment>>;
    /**
     * @param projectId project identifier
     * @param stringCommentId string comment identifier
     */
    deleteStringComment(projectId: number, stringCommentId: number): Promise<void>;
    /**
     * @param projectId project identifier
     * @param stringCommentId string comment identifier
     * @param request request body
     */
    editStringComment(projectId: number, stringCommentId: number, request: PatchRequest[]): Promise<ResponseObject<StringCommentsModel.StringComment>>;
}
export declare namespace StringCommentsModel {
    interface ListStringCommentsRequest {
        stringId?: number;
        limit?: number;
        offset?: number;
        type?: Type;
        targetLanguageId?: string;
        issueType?: IssueType;
        issueStatus?: IssueStatus;
    }
    interface StringComment {
        id: number;
        text: string;
        userId: number;
        stringId: number;
        user: User;
        string: StringModel;
        languageId: string;
        type: Type;
        issueType: IssueType;
        issueStatus: IssueStatus;
        resolverId: number;
        resolver: User;
        resolvedAt: string;
        createdAt: string;
    }
    interface User {
        id: number;
        username: string;
        fullName: string;
        avatarUrl: string;
    }
    interface StringModel {
        id: number;
        text: string;
        type: string;
        hasPlurals: boolean;
        isIcu: boolean;
        context: string;
        fileId: number;
    }
    interface AddStringCommentRequest {
        stringId: number;
        text: string;
        targetLanguageId: string;
        type: Type;
        issueType?: IssueType;
    }
    enum Type {
        COMMENT = "comment",
        ISSUE = "issue"
    }
    enum IssueType {
        GENERAL_QUESTION = "general_question",
        TRANSLATION_MISTAKE = "translation_mistake",
        CONTEXT_REQUEST = "context_request",
        SOURCE_MISTAKE = "source_mistake"
    }
    enum IssueStatus {
        UNRESOLVED = "unresolved",
        RESOLVED = "resolved"
    }
}
