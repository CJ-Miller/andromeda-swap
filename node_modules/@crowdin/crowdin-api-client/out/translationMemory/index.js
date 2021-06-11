"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationMemoryModel = exports.TranslationMemory = void 0;
const core_1 = require("../core");
class TranslationMemory extends core_1.CrowdinApi {
    /**
     * @param groupId group identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listTm(groupId, limit, offset) {
        let url = `${this.url}/tms`;
        url = this.addQueryParam(url, 'groupId', groupId);
        return this.getList(url, limit, offset);
    }
    /**
     * @param request request body
     */
    addTm(request) {
        const url = `${this.url}/tms`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param tmId tm identifier
     */
    getTm(tmId) {
        const url = `${this.url}/tms/${tmId}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param tmId tm identifier
     */
    deleteTm(tmId) {
        const url = `${this.url}/tms/${tmId}`;
        return this.delete(url, this.defaultConfig());
    }
    /**
     * @param tmId tm identifier
     * @param request request body
     */
    editTm(tmId, request) {
        const url = `${this.url}/tms/${tmId}`;
        return this.patch(url, request, this.defaultConfig());
    }
    /**
     * @param tmId tm identifier
     */
    clearTm(tmId) {
        const url = `${this.url}/tms/${tmId}/segments`;
        return this.delete(url, this.defaultConfig());
    }
    /**
     * @param tmId tm identifier
     * @param exportId export identifier
     */
    downloadTm(tmId, exportId) {
        const url = `${this.url}/tms/${tmId}/exports/${exportId}/download`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param tmId tm identifier
     * @param request request body
     */
    exportTm(tmId, request) {
        const url = `${this.url}/tms/${tmId}/exports`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param tmId tm identifier
     * @param exportId export identifier
     */
    checkExportStatus(tmId, exportId) {
        const url = `${this.url}/tms/${tmId}/exports/${exportId}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param tmId tm identifier
     * @param request request body
     */
    importTm(tmId, request) {
        const url = `${this.url}/tms/${tmId}/imports`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param tmId tm identifier
     * @param importId import identifier
     */
    checkImportStatus(tmId, importId) {
        const url = `${this.url}/tms/${tmId}/imports/${importId}`;
        return this.get(url, this.defaultConfig());
    }
}
exports.TranslationMemory = TranslationMemory;
var TranslationMemoryModel;
(function (TranslationMemoryModel) {
    let Format;
    (function (Format) {
        Format["TMX"] = "tmx";
        Format["CSV"] = "csv";
        Format["XLSX"] = "xlsx";
    })(Format = TranslationMemoryModel.Format || (TranslationMemoryModel.Format = {}));
})(TranslationMemoryModel = exports.TranslationMemoryModel || (exports.TranslationMemoryModel = {}));
