"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationStatusModel = exports.TranslationStatus = void 0;
const core_1 = require("../core");
class TranslationStatus extends core_1.CrowdinApi {
    /**
     * @param projectId project identifier
     * @param branchId branch identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    getBranchProgress(projectId, branchId, limit, offset) {
        const url = `${this.url}/projects/${projectId}/branches/${branchId}/languages/progress`;
        return this.getList(url, limit, offset);
    }
    /**
     * @param projectId project identifier
     * @param directoryId directory identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    getDirectoryProgress(projectId, directoryId, limit, offset) {
        const url = `${this.url}/projects/${projectId}/directories/${directoryId}/languages/progress`;
        return this.getList(url, limit, offset);
    }
    /**
     * @param projectId project identifier
     * @param languageId language identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    getLanguageProgress(projectId, languageId, limit, offset) {
        const url = `${this.url}/projects/${projectId}/languages/${languageId}/progress`;
        return this.getList(url, limit, offset);
    }
    /**
     * @param projectId project identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     * @param languageIds language identifier for filter
     */
    getProjectProgress(projectId, limit, offset, languageIds) {
        let url = `${this.url}/projects/${projectId}/languages/progress`;
        url = this.addQueryParam(url, 'languageIds', languageIds);
        return this.getList(url, limit, offset);
    }
    /**
     * @param projectId project identifier
     * @param fileId file identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    getFileProgress(projectId, fileId, limit, offset) {
        const url = `${this.url}/projects/${projectId}/files/${fileId}/languages/progress`;
        return this.getList(url, limit, offset);
    }
    /**
     * @param projectId project identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     * @param category defines the issue category
     * @param validation defines the QA check issue validation type
     * @param languageIds filter progress by languageId
     */
    listQaCheckIssues(projectId, limit, offset, category, validation, languageIds) {
        let url = `${this.url}/projects/${projectId}/qa-checks`;
        url = this.addQueryParam(url, 'category', category);
        url = this.addQueryParam(url, 'validation', validation);
        url = this.addQueryParam(url, 'languageIds', languageIds);
        return this.getList(url, limit, offset);
    }
}
exports.TranslationStatus = TranslationStatus;
var TranslationStatusModel;
(function (TranslationStatusModel) {
    let Category;
    (function (Category) {
        Category["EMPTY"] = "empty";
        Category["VARIABLES"] = "variables";
        Category["TAGS"] = "tags";
        Category["PUNCTUATION"] = "punctuation";
        Category["SYMBOL_REGISTER"] = "symbol_register";
        Category["SPACES"] = "spaces";
        Category["SIZE"] = "size";
        Category["SPECIAL_SYMBOLS"] = "special_symbols";
        Category["WRONG_TRANSLATION"] = "wrong_translation";
        Category["SPELLCHECK"] = "spellcheck";
        Category["ICU"] = "icu";
    })(Category = TranslationStatusModel.Category || (TranslationStatusModel.Category = {}));
    let Validation;
    (function (Validation) {
        Validation["EMPTY_STRING_CHECK"] = "empty_string_check";
        Validation["EMPTY_SUGGESTION_CHECK"] = "empty_suggestion_check";
        Validation["MAX_LENGTH_CHECK"] = "max_length_check";
        Validation["TAGS_CHECK"] = "tags_check";
        Validation["MISMATCH_IDS_CHECK"] = "mismatch_ids_check";
        Validation["CDATA_CHECK"] = "cdata_check";
        Validation["SPECIALS_SYMBOLS_CHECK"] = "specials_symbols_check";
        Validation["LEADING_NEWLINES_CHECK"] = "leading_newlines_check";
        Validation["TRAILING_NEWLINES_CHECK"] = "trailing_newlines_check";
        Validation["LEADING_SPACES_CHECK"] = "leading_spaces_check";
        Validation["TRAILING_SPACES_CHECK"] = "trailing_spaces_check";
        Validation["MULTIPLE_SPACES_CHECK"] = "multiple_spaces_check";
        Validation["CUSTOM_BLOCKED_VARIABLES_CHECK"] = "custom_blocked_variables_check";
        Validation["HIGHEST_PRIORITY_CUSTOM_VARIABLES_CHECK"] = "highest_priority_custom_variables_check";
        Validation["HIGHEST_PRIORITY_VARIABLES_CHECK"] = "highest_priority_variables_check";
        Validation["C_VARIABLES_CHECK"] = "c_variables_check";
        Validation["PYTHON_VARIABLES_CHECK"] = "python_variables_check";
        Validation["RAILS_VARIABLES_CHECK"] = "rails_variables_check";
        Validation["JAVA_VARIABLES_CHECK"] = "java_variables_check";
        Validation["DOT_NET_VARIABLES_CHECK"] = "dot_net_variables_check";
        Validation["TWIG_VARIABLES_CHECK"] = "twig_variables_check";
        Validation["PHP_VARIABLES_CHECK"] = "php_variables_check";
        Validation["FREEMARKER_VARIABLES_CHECK"] = "freemarker_variables_check";
        Validation["LOWEST_PRIORITY_VARIABLE_CHECK"] = "lowest_priority_variable_check";
        Validation["LOWEST_PRIORITY_CUSTOM_VARIABLES_CHECK"] = "lowest_priority_custom_variables_check";
        Validation["PUNCTUATION_CHECK"] = "punctuation_check";
        Validation["SPACES_BEFORE_PUNCTUATION_CHECK"] = "spaces_before_punctuation_check";
        Validation["SPACES_AFTER_PUNCTUATION_CHECK"] = "spaces_after_punctuation_check";
        Validation["NON_BREAKING_SPACES_CHECK"] = "non_breaking_spaces_check";
        Validation["CAPITALIZE_CHECK"] = "capitalize_check";
        Validation["MULTIPLE_UPPERCASE_CHECK"] = "multiple_uppercase_check";
        Validation["PARENTHESES_CHECK"] = "parentheses_check";
        Validation["ENTITIES_CHECK"] = "entities_check";
        Validation["ESCAPED_QUOTES_CHECK"] = "escaped_quotes_check";
        Validation["WRONG_TRANSLATION_ISSUE_CHECK"] = "wrong_translation_issue_check";
        Validation["SPELLCHECK"] = "spellcheck";
        Validation["ICU_CHECK"] = "icu_check";
    })(Validation = TranslationStatusModel.Validation || (TranslationStatusModel.Validation = {}));
})(TranslationStatusModel = exports.TranslationStatusModel || (exports.TranslationStatusModel = {}));
