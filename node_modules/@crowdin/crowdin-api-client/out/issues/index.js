"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuesModel = exports.Issues = void 0;
const core_1 = require("../core");
/**
 * @deprecated
 */
class Issues extends core_1.CrowdinApi {
    /**
     * @param projectId project identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     * @param type defines the issue type
     * @param status defines the issue resolution status
     */
    listReportedIssues(projectId, limit, offset, type, status) {
        let url = `${this.url}/projects/${projectId}/issues`;
        url = this.addQueryParam(url, 'type', type);
        url = this.addQueryParam(url, 'status', status);
        return this.getList(url, limit, offset);
    }
    /**
     * @param projectId project identifier
     * @param issueId issue identifier
     * @param request request body
     */
    editIssue(projectId, issueId, request) {
        const url = `${this.url}/projects/${projectId}/issues/${issueId}`;
        return this.patch(url, request, this.defaultConfig());
    }
}
exports.Issues = Issues;
/**
 * @deprecated
 */
var IssuesModel;
(function (IssuesModel) {
    let Type;
    (function (Type) {
        Type["ALL"] = "all";
        Type["GENERAL_QUESTION"] = "general_question";
        Type["TRANSLATION_MISTAKE"] = "translation_mistake";
        Type["CONTEXT_REQUEST"] = "context_request";
        Type["SOURCE_MISTAKE"] = "source_mistake";
    })(Type = IssuesModel.Type || (IssuesModel.Type = {}));
    let Status;
    (function (Status) {
        Status["ALL"] = "all";
        Status["RESOLVED"] = "resolved";
        Status["UNRESOLVED"] = "unresolved";
    })(Status = IssuesModel.Status || (IssuesModel.Status = {}));
})(IssuesModel = exports.IssuesModel || (exports.IssuesModel = {}));
