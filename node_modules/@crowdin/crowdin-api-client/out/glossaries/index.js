"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlossariesModel = exports.Glossaries = void 0;
const core_1 = require("../core");
class Glossaries extends core_1.CrowdinApi {
    /**
     * @param groupId group identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listGlossaries(groupId, limit, offset) {
        let url = `${this.url}/glossaries`;
        url = this.addQueryParam(url, 'groupId', groupId);
        return this.getList(url, limit, offset);
    }
    /**
     * @param request request body
     */
    addGlossary(request) {
        const url = `${this.url}/glossaries`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param glossaryId glossary identifier
     */
    getGlossary(glossaryId) {
        const url = `${this.url}/glossaries/${glossaryId}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param glossaryId glossary identifier
     */
    deleteGlossary(glossaryId) {
        const url = `${this.url}/glossaries/${glossaryId}`;
        return this.delete(url, this.defaultConfig());
    }
    /**
     * @param glossaryId glossary identifier
     * @param request request body
     */
    editGlossary(glossaryId, request) {
        const url = `${this.url}/glossaries/${glossaryId}`;
        return this.patch(url, request, this.defaultConfig());
    }
    /**
     * @param glossaryId glossary identifier
     * @param request request body
     */
    exportGlossary(glossaryId, request) {
        const url = `${this.url}/glossaries/${glossaryId}/exports`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param glossaryId glossary identifier
     * @param exportId export identifier
     */
    downloadGlossary(glossaryId, exportId) {
        const url = `${this.url}/glossaries/${glossaryId}/exports/${exportId}/download`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param glossaryId glossary identifier
     * @param exportId export identifier
     */
    checkGlossaryExportStatus(glossaryId, exportId) {
        const url = `${this.url}/glossaries/${glossaryId}/exports/${exportId}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param glossaryId glossary identifier
     * @param request request body
     */
    importGlossaryFile(glossaryId, request) {
        const url = `${this.url}/glossaries/${glossaryId}/imports`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param glossaryId glossary identifier
     * @param importId import identifier
     */
    checkGlossaryImportStatus(glossaryId, importId) {
        const url = `${this.url}/glossaries/${glossaryId}/imports/${importId}`;
        return this.get(url, this.defaultConfig());
    }
    listTerms(glossaryId, userIdOrRequest, limit, offset, languageId, translationOfTermId) {
        let url = `${this.url}/glossaries/${glossaryId}/terms`;
        let request;
        if (userIdOrRequest && typeof userIdOrRequest === 'object') {
            request = userIdOrRequest;
        }
        else {
            request = { userId: userIdOrRequest, limit, offset, languageId, translationOfTermId };
        }
        url = this.addQueryParam(url, 'userId', request.userId);
        url = this.addQueryParam(url, 'languageId', request.languageId);
        url = this.addQueryParam(url, 'translationOfTermId', request.translationOfTermId);
        return this.getList(url, request.limit, request.offset);
    }
    /**
     * @param glossaryId glossary identifier
     * @param request request body
     */
    addTerm(glossaryId, request) {
        const url = `${this.url}/glossaries/${glossaryId}/terms`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param glossaryId glossary identifier
     * @param languageId languageId identifier
     * @param translationOfTermId term translation identifier
     */
    clearGlossary(glossaryId, languageId, translationOfTermId) {
        let url = `${this.url}/glossaries/${glossaryId}/terms`;
        url = this.addQueryParam(url, 'languageId', languageId);
        url = this.addQueryParam(url, 'translationOfTermId', translationOfTermId);
        return this.delete(url, this.defaultConfig());
    }
    /**
     * @param glossaryId glossary identifier
     * @param termId term identifier
     */
    getTerm(glossaryId, termId) {
        const url = `${this.url}/glossaries/${glossaryId}/terms/${termId}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param glossaryId glossary identifier
     * @param termId term identifier
     */
    deleteTerm(glossaryId, termId) {
        const url = `${this.url}/glossaries/${glossaryId}/terms/${termId}`;
        return this.delete(url, this.defaultConfig());
    }
    /**
     * @param glossaryId glossary identifier
     * @param termId term identifier
     * @param request request body
     */
    editTerm(glossaryId, termId, request) {
        const url = `${this.url}/glossaries/${glossaryId}/terms/${termId}`;
        return this.patch(url, request, this.defaultConfig());
    }
}
exports.Glossaries = Glossaries;
var GlossariesModel;
(function (GlossariesModel) {
    let GlossaryFormat;
    (function (GlossaryFormat) {
        GlossaryFormat["TBX"] = "tbx";
        GlossaryFormat["CSV"] = "csv";
        GlossaryFormat["XLSX"] = "xlsx";
    })(GlossaryFormat = GlossariesModel.GlossaryFormat || (GlossariesModel.GlossaryFormat = {}));
    let PartOfSpeech;
    (function (PartOfSpeech) {
        PartOfSpeech["ADJECTIVE"] = "adjective";
        PartOfSpeech["ADPOSITION"] = "adposition";
        PartOfSpeech["ADVERB"] = "adverb";
        PartOfSpeech["AUXILIARY"] = "auxiliary";
        PartOfSpeech["COORDINATING_CONJUNCTION"] = "coordinating conjunction";
        PartOfSpeech["DETERMINER"] = "determiner";
        PartOfSpeech["INTERJECTION"] = "interjection";
        PartOfSpeech["NOUN"] = "noun";
        PartOfSpeech["NUMERAL"] = "numeral";
        PartOfSpeech["PARTICLE"] = "particle";
        PartOfSpeech["PRONOUN"] = "pronoun";
        PartOfSpeech["PROPER_NOUN"] = "proper noun";
        PartOfSpeech["SUBORDINATING_CONJUNCTION"] = "subordinating conjunction";
        PartOfSpeech["VERB"] = "verb";
        PartOfSpeech["OTHER"] = "other";
    })(PartOfSpeech = GlossariesModel.PartOfSpeech || (GlossariesModel.PartOfSpeech = {}));
})(GlossariesModel = exports.GlossariesModel || (exports.GlossariesModel = {}));
