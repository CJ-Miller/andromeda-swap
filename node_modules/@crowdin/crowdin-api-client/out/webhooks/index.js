"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksModel = exports.Webhooks = void 0;
const core_1 = require("../core");
class Webhooks extends core_1.CrowdinApi {
    /**
     * @param projectId project identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listWebhooks(projectId, limit, offset) {
        const url = `${this.url}/projects/${projectId}/webhooks`;
        return this.getList(url, limit, offset);
    }
    /**
     * @param projectId project identifier
     * @param request request body
     */
    addWebhook(projectId, request) {
        const url = `${this.url}/projects/${projectId}/webhooks`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param webhookId webhook identifier
     */
    getWebhook(projectId, webhookId) {
        const url = `${this.url}/projects/${projectId}/webhooks/${webhookId}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param webhookId webhook identifier
     */
    deleteWebhook(projectId, webhookId) {
        const url = `${this.url}/projects/${projectId}/webhooks/${webhookId}`;
        return this.delete(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param webhookId webhook identifier
     * @param request request body
     */
    editWebhook(projectId, webhookId, request) {
        const url = `${this.url}/projects/${projectId}/webhooks/${webhookId}`;
        return this.patch(url, request, this.defaultConfig());
    }
}
exports.Webhooks = Webhooks;
var WebhooksModel;
(function (WebhooksModel) {
    let ContentType;
    (function (ContentType) {
        ContentType["MULTIPART_FORM_DATA"] = "multipart/form-data";
        ContentType["APPLICATION_JSON"] = "application/json";
        ContentType["APPLICATION_X_WWW_FORM_URLENCODED"] = "application/x-www-form-urlencoded";
    })(ContentType = WebhooksModel.ContentType || (WebhooksModel.ContentType = {}));
    let Event;
    (function (Event) {
        Event["FILE_TRANSLATED"] = "file.translated";
        Event["FILE_APPROVED"] = "file.approved";
        Event["PROJECT_TRANSLATED"] = "project.translated";
        Event["PROJECT_APPROVED"] = "project.approved";
        Event["TRANSLATION_UPDATED"] = "translation.updated";
        Event["SUGGESTION_ADDED"] = "suggestion.added";
        Event["SUGGESTION_UPDATED"] = "suggestion.updated";
        Event["SUGGESTION_DELETED"] = "suggestion.deleted";
        Event["SUGGESTION_APPROVED"] = "suggestion.approved";
        Event["SUGGESTION_DISAPPROVED"] = "suggestion.disapproved";
    })(Event = WebhooksModel.Event || (WebhooksModel.Event = {}));
    let RequestType;
    (function (RequestType) {
        RequestType["POST"] = "POST";
        RequestType["GET"] = "GET";
    })(RequestType = WebhooksModel.RequestType || (WebhooksModel.RequestType = {}));
})(WebhooksModel = exports.WebhooksModel || (exports.WebhooksModel = {}));
