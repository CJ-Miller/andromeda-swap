"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dictionaries = void 0;
const core_1 = require("../core");
class Dictionaries extends core_1.CrowdinApi {
    /**
     * @param projectId project identifier
     * @param languageIds filter progress by Language Identifiers
     */
    listDictionaries(projectId, languageIds) {
        let url = `${this.url}/projects/${projectId}/dictionaries`;
        url = this.addQueryParam(url, 'languageIds', languageIds);
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param languageId language identifier
     * @param request request body
     */
    editDictionary(projectId, languageId, request) {
        const url = `${this.url}/projects/${projectId}/dictionaries/${languageId}`;
        return this.patch(url, request, this.defaultConfig());
    }
}
exports.Dictionaries = Dictionaries;
