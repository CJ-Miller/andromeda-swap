"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Screenshots = void 0;
const core_1 = require("../core");
class Screenshots extends core_1.CrowdinApi {
    /**
     * @param projectId project identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listScreenshots(projectId, limit, offset) {
        const url = `${this.url}/projects/${projectId}/screenshots`;
        return this.getList(url, limit, offset);
    }
    /**
     * @param projectId project identifier
     * @param request request body
     */
    addScreenshot(projectId, request) {
        const url = `${this.url}/projects/${projectId}/screenshots`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param screenshotId screenshot identifier
     */
    getScreenshot(projectId, screenshotId) {
        const url = `${this.url}/projects/${projectId}/screenshots/${screenshotId}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param screenshotId screenshot identifier
     * @param request request body
     */
    updateScreenshot(projectId, screenshotId, request) {
        const url = `${this.url}/projects/${projectId}/screenshots/${screenshotId}`;
        return this.put(url, request, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param screenshotId screenshot identifier
     */
    deleteScreenshot(projectId, screenshotId) {
        const url = `${this.url}/projects/${projectId}/screenshots/${screenshotId}`;
        return this.delete(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param screenshotId screenshot identifier
     * @param request request body
     */
    editScreenshot(projectId, screenshotId, request) {
        const url = `${this.url}/projects/${projectId}/screenshots/${screenshotId}`;
        return this.patch(url, request, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param screenshotId screenshot identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listScreenshotTags(projectId, screenshotId, limit, offset) {
        const url = `${this.url}/projects/${projectId}/screenshots/${screenshotId}/tags`;
        return this.getList(url, limit, offset);
    }
    /**
     * @param projectId project identifier
     * @param screenshotId screenshot identifier
     * @param request request body
     */
    replaceTags(projectId, screenshotId, request) {
        const url = `${this.url}/projects/${projectId}/screenshots/${screenshotId}/tags`;
        return this.put(url, request, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param screenshotId screenshot identifier
     * @param request request body
     */
    addTag(projectId, screenshotId, request) {
        const url = `${this.url}/projects/${projectId}/screenshots/${screenshotId}/tags`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param screenshotId screenshot identifier
     */
    clearTags(projectId, screenshotId) {
        const url = `${this.url}/projects/${projectId}/screenshots/${screenshotId}/tags`;
        return this.delete(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param screenshotId screenshot identifier
     * @param tagId tag identifier
     */
    getTag(projectId, screenshotId, tagId) {
        const url = `${this.url}/projects/${projectId}/screenshots/${screenshotId}/tags/${tagId}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param screenshotId screenshot identifier
     * @param tagId tag identifier
     */
    deleteTag(projectId, screenshotId, tagId) {
        const url = `${this.url}/projects/${projectId}/screenshots/${screenshotId}/tags/${tagId}`;
        return this.delete(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param screenshotId screenshot identifier
     * @param tagId tag identifier
     * @param request request body
     */
    updateTag(projectId, screenshotId, tagId, request) {
        const url = `${this.url}/projects/${projectId}/screenshots/${screenshotId}/tags/${tagId}`;
        return this.patch(url, request, this.defaultConfig());
    }
}
exports.Screenshots = Screenshots;
