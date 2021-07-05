"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringTranslationsModel = exports.StringTranslations = void 0;
const core_1 = require("../core");
class StringTranslations extends core_1.CrowdinApi {
    /**
     * @param projectId project identifier
     * @param stringId string identifier
     * @param languageId language identifier
     * @param translationId translation identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     * @param fileId file identifier
     */
    listTranslationApprovals(projectId, stringId, languageId, translationId, limit, offset, fileId) {
        let url = `${this.url}/projects/${projectId}/approvals`;
        url = this.addQueryParam(url, 'stringId', stringId);
        url = this.addQueryParam(url, 'languageId', languageId);
        url = this.addQueryParam(url, 'translationId', translationId);
        url = this.addQueryParam(url, 'fileId', fileId);
        return this.getList(url, limit, offset);
    }
    /**
     * @param projectId project identifier
     * @param request request body
     */
    addApproval(projectId, request) {
        const url = `${this.url}/projects/${projectId}/approvals`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param approvalId approval identifier
     */
    approvalInfo(projectId, approvalId) {
        const url = `${this.url}/projects/${projectId}/approvals/${approvalId}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param approvalId approval identifier
     */
    removeApproval(projectId, approvalId) {
        const url = `${this.url}/projects/${projectId}/approvals/${approvalId}`;
        return this.delete(url, this.defaultConfig());
    }
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
    listLanguageTranslations(projectId, languageId, stringIds, fileId, limit, offset, labelIds, denormalizePlaceholders, croql) {
        let url = `${this.url}/projects/${projectId}/languages/${languageId}/translations`;
        url = this.addQueryParam(url, 'stringIds', stringIds);
        url = this.addQueryParam(url, 'fileId', fileId);
        url = this.addQueryParam(url, 'labelIds', labelIds);
        url = this.addQueryParam(url, 'denormalizePlaceholders', denormalizePlaceholders);
        url = this.addQueryParam(url, 'croql', croql);
        return this.getList(url, limit, offset);
    }
    /**
     * @param projectId project identifier
     * @param stringId string identifier
     * @param languageId language identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     * @param denormalizePlaceholders enable denormalize placeholders
     */
    listStringTranslations(projectId, stringId, languageId, limit, offset, denormalizePlaceholders) {
        let url = `${this.url}/projects/${projectId}/translations`;
        url = this.addQueryParam(url, 'stringId', stringId);
        url = this.addQueryParam(url, 'languageId', languageId);
        url = this.addQueryParam(url, 'denormalizePlaceholders', denormalizePlaceholders);
        return this.getList(url, limit, offset);
    }
    /**
     * @param projectId project identifier
     * @param request request body
     */
    addTranslation(projectId, request) {
        const url = `${this.url}/projects/${projectId}/translations`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param stringId string identifier
     * @param languageId language identifier
     */
    deleteAllTranslations(projectId, stringId, languageId) {
        let url = `${this.url}/projects/${projectId}/translations`;
        url = this.addQueryParam(url, 'stringId', stringId);
        url = this.addQueryParam(url, 'languageId', languageId);
        return this.delete(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param translationId translation identifier
     */
    translationInfo(projectId, translationId) {
        const url = `${this.url}/projects/${projectId}/translations/${translationId}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param translation translation identifier
     */
    deleteTranslation(projectId, translationId) {
        const url = `${this.url}/projects/${projectId}/translations/${translationId}`;
        return this.delete(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param translation translation identifier
     */
    restoreTranslation(projectId, translationId) {
        const url = `${this.url}/projects/${projectId}/translations/${translationId}/restore`;
        return this.put(url, {}, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param stringId string identifier
     * @param languageId language identifier
     * @param translationId translation identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listTranslationVotes(projectId, stringId, languageId, translationId, limit, offset) {
        let url = `${this.url}/projects/${projectId}/votes`;
        url = this.addQueryParam(url, 'stringId', stringId);
        url = this.addQueryParam(url, 'languageId', languageId);
        url = this.addQueryParam(url, 'translationId', translationId);
        return this.getList(url, limit, offset);
    }
    /**
     * @param projectId project identifier
     * @param request request body
     */
    addVote(projectId, request) {
        const url = `${this.url}/projects/${projectId}/votes`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param voteId vote identifier
     */
    voteInfo(projectId, voteId) {
        const url = `${this.url}/projects/${projectId}/votes/${voteId}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param voteId vote identifier
     */
    cancelVote(projectId, voteId) {
        const url = `${this.url}/projects/${projectId}/votes/${voteId}`;
        return this.delete(url, this.defaultConfig());
    }
}
exports.StringTranslations = StringTranslations;
var StringTranslationsModel;
(function (StringTranslationsModel) {
    let Mark;
    (function (Mark) {
        Mark["UP"] = "up";
        Mark["DOWN"] = "down";
    })(Mark = StringTranslationsModel.Mark || (StringTranslationsModel.Mark = {}));
})(StringTranslationsModel = exports.StringTranslationsModel || (exports.StringTranslationsModel = {}));
