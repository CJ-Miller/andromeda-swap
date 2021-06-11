"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCommentsModel = exports.StringComments = void 0;
const core_1 = require("../core");
class StringComments extends core_1.CrowdinApi {
    listStringComments(projectId, stringIdOrRequest, type, targetLanguageId, issueType, issueStatus) {
        let url = `${this.url}/projects/${projectId}/comments`;
        let request;
        if (stringIdOrRequest && typeof stringIdOrRequest === 'object') {
            request = stringIdOrRequest;
        }
        else {
            request = { stringId: stringIdOrRequest, type, targetLanguageId, issueStatus, issueType };
        }
        url = this.addQueryParam(url, 'stringId', request.stringId);
        url = this.addQueryParam(url, 'type', request.type);
        url = this.addQueryParam(url, 'targetLanguageId', request.targetLanguageId);
        url = this.addQueryParam(url, 'issueType', request.issueType);
        url = this.addQueryParam(url, 'issueStatus', request.issueStatus);
        return this.getList(url, request.limit, request.offset);
    }
    /**
     * @param projectId project identifier
     * @param request request body
     */
    addStringComment(projectId, request) {
        const url = `${this.url}/projects/${projectId}/comments`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param stringCommentId string comment identifier
     */
    getStringComment(projectId, stringCommentId) {
        const url = `${this.url}/projects/${projectId}/comments/${stringCommentId}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param stringCommentId string comment identifier
     */
    deleteStringComment(projectId, stringCommentId) {
        const url = `${this.url}/projects/${projectId}/comments/${stringCommentId}`;
        return this.delete(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param stringCommentId string comment identifier
     * @param request request body
     */
    editStringComment(projectId, stringCommentId, request) {
        const url = `${this.url}/projects/${projectId}/comments/${stringCommentId}`;
        return this.patch(url, request, this.defaultConfig());
    }
}
exports.StringComments = StringComments;
var StringCommentsModel;
(function (StringCommentsModel) {
    let Type;
    (function (Type) {
        Type["COMMENT"] = "comment";
        Type["ISSUE"] = "issue";
    })(Type = StringCommentsModel.Type || (StringCommentsModel.Type = {}));
    let IssueType;
    (function (IssueType) {
        IssueType["GENERAL_QUESTION"] = "general_question";
        IssueType["TRANSLATION_MISTAKE"] = "translation_mistake";
        IssueType["CONTEXT_REQUEST"] = "context_request";
        IssueType["SOURCE_MISTAKE"] = "source_mistake";
    })(IssueType = StringCommentsModel.IssueType || (StringCommentsModel.IssueType = {}));
    let IssueStatus;
    (function (IssueStatus) {
        IssueStatus["UNRESOLVED"] = "unresolved";
        IssueStatus["RESOLVED"] = "resolved";
    })(IssueStatus = StringCommentsModel.IssueStatus || (StringCommentsModel.IssueStatus = {}));
})(StringCommentsModel = exports.StringCommentsModel || (exports.StringCommentsModel = {}));
