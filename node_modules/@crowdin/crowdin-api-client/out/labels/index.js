"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Labels = void 0;
const core_1 = require("../core");
class Labels extends core_1.CrowdinApi {
    /**
     * @param projectId project identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listLabels(projectId, limit, offset) {
        const url = `${this.url}/projects/${projectId}/labels`;
        return this.getList(url, limit, offset);
    }
    /**
     * @param projectId project identifier
     * @param request request body
     */
    addLabel(projectId, request) {
        const url = `${this.url}/projects/${projectId}/labels`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param labelId label identifier
     */
    getLabel(projectId, labelId) {
        const url = `${this.url}/projects/${projectId}/labels/${labelId}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param labelId label identifier
     */
    deleteLabel(projectId, labelId) {
        const url = `${this.url}/projects/${projectId}/labels/${labelId}`;
        return this.delete(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param labelId label identifier
     * @param request request body
     */
    editLabel(projectId, labelId, request) {
        const url = `${this.url}/projects/${projectId}/labels/${labelId}`;
        return this.patch(url, request, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param labelId label identifier
     * @param request request body
     */
    assignLabelToString(projectId, labelId, request) {
        const url = `${this.url}/projects/${projectId}/labels/${labelId}/strings`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param labelId label identifier
     * @param stringIds string identifiers
     */
    unassignLabelFromString(projectId, labelId, stringIds) {
        let url = `${this.url}/projects/${projectId}/labels/${labelId}/strings`;
        url = this.addQueryParam(url, 'stringIds', stringIds);
        return this.delete(url, this.defaultConfig());
    }
}
exports.Labels = Labels;
