"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguagesModel = exports.Languages = void 0;
const core_1 = require("../core");
class Languages extends core_1.CrowdinApi {
    /**
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listSupportedLanguages(limit, offset) {
        const url = `${this.url}/languages`;
        return this.getList(url, limit, offset);
    }
    /**
     * @param request request body
     */
    addCustomLanguage(request) {
        const url = `${this.url}/languages`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param languageId language identifier
     */
    getLanguage(languageId) {
        const url = `${this.url}/languages/${languageId}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param languageId language identifier
     */
    deleteCustomLanguage(languageId) {
        const url = `${this.url}/languages/${languageId}`;
        return this.delete(url, this.defaultConfig());
    }
    /**
     * @param languageId language identifier
     * @param request request body
     */
    editCustomLanguage(languageId, request) {
        const url = `${this.url}/languages/${languageId}`;
        return this.patch(url, request, this.defaultConfig());
    }
}
exports.Languages = Languages;
var LanguagesModel;
(function (LanguagesModel) {
    let TextDirection;
    (function (TextDirection) {
        TextDirection["LTR"] = "ltr";
        TextDirection["RTL"] = "rtl";
    })(TextDirection = LanguagesModel.TextDirection || (LanguagesModel.TextDirection = {}));
})(LanguagesModel = exports.LanguagesModel || (exports.LanguagesModel = {}));
