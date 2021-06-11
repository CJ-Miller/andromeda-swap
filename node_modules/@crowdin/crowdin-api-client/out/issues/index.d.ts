import { CrowdinApi, PatchRequest, ResponseList, ResponseObject } from '../core';
/**
 * @deprecated
 */
export declare class Issues extends CrowdinApi {
    /**
     * @param projectId project identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     * @param type defines the issue type
     * @param status defines the issue resolution status
     */
    listReportedIssues(projectId: number, limit?: number, offset?: number, type?: IssuesModel.Type, status?: IssuesModel.Status): Promise<ResponseList<IssuesModel.Issue>>;
    /**
     * @param projectId project identifier
     * @param issueId issue identifier
     * @param request request body
     */
    editIssue(projectId: number, issueId: number, request: PatchRequest[]): Promise<ResponseObject<IssuesModel.Issue>>;
}
/**
 * @deprecated
 */
export declare namespace IssuesModel {
    enum Type {
        ALL = "all",
        GENERAL_QUESTION = "general_question",
        TRANSLATION_MISTAKE = "translation_mistake",
        CONTEXT_REQUEST = "context_request",
        SOURCE_MISTAKE = "source_mistake"
    }
    enum Status {
        ALL = "all",
        RESOLVED = "resolved",
        UNRESOLVED = "unresolved"
    }
    interface Issue {
        id: number;
        text: string;
        userId: number;
        stringId: number;
        user: User;
        string: string;
        languageId: string;
        type: Type;
        status: Status;
        createdAt: string;
    }
    interface User {
        id: number;
        username: string;
        fullName: string;
        avatarUrl: string;
    }
    interface String {
        id: number;
        text: string;
        type: string;
        hasPlurals: boolean;
        isIcu: boolean;
        context: string;
        fileId: number;
    }
}
