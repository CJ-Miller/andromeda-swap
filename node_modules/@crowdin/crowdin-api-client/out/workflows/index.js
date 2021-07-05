"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workflows = void 0;
const core_1 = require("../core");
class Workflows extends core_1.CrowdinApi {
    /**
     * @param groupId group identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listWorkflowTemplates(groupId, limit, offset) {
        let url = `${this.url}/workflow-templates`;
        url = this.addQueryParam(url, 'groupId', groupId);
        return this.getList(url, limit, offset);
    }
    /**
     * @param templateId workflow template identifier
     */
    getWorkflowTemplateInfo(templateId) {
        const url = `${this.url}/workflow-templates/${templateId}`;
        return this.get(url, this.defaultConfig());
    }
}
exports.Workflows = Workflows;
