"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Distributions = void 0;
const core_1 = require("../core");
class Distributions extends core_1.CrowdinApi {
    /**
     * @param projectId project identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listDistributions(projectId, limit, offset) {
        const url = `${this.url}/projects/${projectId}/distributions`;
        return this.getList(url, limit, offset);
    }
    /**
     * @param projectId project identifier
     * @param request request body
     */
    createDistribution(projectId, request) {
        const url = `${this.url}/projects/${projectId}/distributions`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param hash hash
     */
    getDistribution(projectId, hash) {
        const url = `${this.url}/projects/${projectId}/distributions/${hash}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param hash hash
     */
    deleteDistribution(projectId, hash) {
        const url = `${this.url}/projects/${projectId}/distributions/${hash}`;
        return this.delete(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param hash hash
     * @param request request body
     */
    editDistribution(projectId, hash, request) {
        const url = `${this.url}/projects/${projectId}/distributions/${hash}`;
        return this.patch(url, request, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param hash hash
     */
    getDistributionRelease(projectId, hash) {
        const url = `${this.url}/projects/${projectId}/distributions/${hash}/release`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param hash hash
     * @param request request body
     */
    createDistributionRelease(projectId, hash) {
        const url = `${this.url}/projects/${projectId}/distributions/${hash}/release`;
        return this.post(url, {}, this.defaultConfig());
    }
}
exports.Distributions = Distributions;
