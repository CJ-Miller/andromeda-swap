"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationsModel = exports.Translations = void 0;
const core_1 = require("../core");
class Translations extends core_1.CrowdinApi {
    /**
     * @param projectId project identifier
     * @param request request body
     */
    applyPreTranslation(projectId, request) {
        const url = `${this.url}/projects/${projectId}/pre-translations`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param preTranslationId pre translation identifier
     */
    preTranslationStatus(projectId, preTranslationId) {
        const url = `${this.url}/projects/${projectId}/pre-translations/${preTranslationId}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param fileId file identifier
     * @param request request body
     * @param eTag eTag 'If-None-Match' header
     */
    buildProjectFileTranslation(projectId, fileId, request, eTag) {
        const url = `${this.url}/projects/${projectId}/translations/builds/files/${fileId}`;
        const config = this.defaultConfig();
        if (!!eTag) {
            config.headers['If-None-Match'] = eTag;
        }
        return this.post(url, request, config);
    }
    /**
     * @param projectId project identifier
     * @param branchId branch identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listProjectBuilds(projectId, branchId, limit, offset) {
        let url = `${this.url}/projects/${projectId}/translations/builds`;
        url = this.addQueryParam(url, 'branchId', branchId);
        return this.getList(url, limit, offset);
    }
    /**
     * @param projectId project identifier
     * @param request request body
     */
    buildProject(projectId, request = {}) {
        const url = `${this.url}/projects/${projectId}/translations/builds`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param buildId build identifier
     */
    downloadTranslations(projectId, buildId) {
        const url = `${this.url}/projects/${projectId}/translations/builds/${buildId}/download`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param buildId build identifier
     */
    checkBuildStatus(projectId, buildId) {
        const url = `${this.url}/projects/${projectId}/translations/builds/${buildId}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param buildId build identifier
     */
    cancelBuild(projectId, buildId) {
        const url = `${this.url}/projects/${projectId}/translations/builds/${buildId}`;
        return this.delete(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param languageId language identifier
     * @param request request body
     */
    uploadTranslation(projectId, languageId, request) {
        const url = `${this.url}/projects/${projectId}/translations/${languageId}`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param request request body
     */
    exportProjectTranslation(projectId, request) {
        const url = `${this.url}/projects/${projectId}/translations/exports`;
        return this.post(url, request, this.defaultConfig());
    }
}
exports.Translations = Translations;
var TranslationsModel;
(function (TranslationsModel) {
    let Method;
    (function (Method) {
        Method["TM"] = "tm";
        Method["MT"] = "mt";
    })(Method = TranslationsModel.Method || (TranslationsModel.Method = {}));
    let AutoApproveOption;
    (function (AutoApproveOption) {
        AutoApproveOption["ALL"] = "all";
        AutoApproveOption["EXCEPT_AUTO_SUBSTITUTED"] = "exceptAutoSubstituted";
        AutoApproveOption["PERFECT_MATCH_ONLY"] = "perfectMatchOnly";
        AutoApproveOption["NONE"] = "none";
    })(AutoApproveOption = TranslationsModel.AutoApproveOption || (TranslationsModel.AutoApproveOption = {}));
    let CharTransformation;
    (function (CharTransformation) {
        CharTransformation["ASIAN"] = "asian";
        CharTransformation["EUROPEAN"] = "european";
        CharTransformation["ARABIC"] = "arabic";
        CharTransformation["CYRILLIC"] = "cyrillic";
    })(CharTransformation = TranslationsModel.CharTransformation || (TranslationsModel.CharTransformation = {}));
})(TranslationsModel = exports.TranslationsModel || (exports.TranslationsModel = {}));
