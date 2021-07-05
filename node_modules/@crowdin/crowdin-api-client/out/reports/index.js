"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsModel = exports.Reports = void 0;
const core_1 = require("../core");
class Reports extends core_1.CrowdinApi {
    /**
     * @param groupId group identifier
     * @param request request body
     */
    generateGroupReport(groupId, request) {
        const url = `${this.url}/groups/${groupId}/reports`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param groupId group identifier
     * @param reportId report identifier
     */
    checkGroupReportStatus(groupId, reportId) {
        const url = `${this.url}/groups/${groupId}/reports/${reportId}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param groupId group identifier
     * @param reportId report identifier
     */
    downloadGroupReport(groupId, reportId) {
        const url = `${this.url}/groups/${groupId}/reports/${reportId}/download`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param request request body
     */
    generateOrganizationReport(request) {
        const url = `${this.url}/reports`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param reportId report identifier
     */
    checkOrganizationReportStatus(reportId) {
        const url = `${this.url}/reports/${reportId}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param reportId report identifier
     */
    downloadOrganizationReport(reportId) {
        const url = `${this.url}/reports/${reportId}/download`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param request request body
     */
    generateReport(projectId, request) {
        const url = `${this.url}/projects/${projectId}/reports`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param reportId report identifier
     */
    checkReportStatus(projectId, reportId) {
        const url = `${this.url}/projects/${projectId}/reports/${reportId}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param reportId report identifier
     */
    downloadReport(projectId, reportId) {
        const url = `${this.url}/projects/${projectId}/reports/${reportId}/download`;
        return this.get(url, this.defaultConfig());
    }
}
exports.Reports = Reports;
var ReportsModel;
(function (ReportsModel) {
    let Unit;
    (function (Unit) {
        Unit["STRINGS"] = "strings";
        Unit["WORDS"] = "words";
        Unit["CHARS"] = "chars";
        Unit["CHARS_WITH_SPACES"] = "chars_with_spaces";
    })(Unit = ReportsModel.Unit || (ReportsModel.Unit = {}));
    let Currency;
    (function (Currency) {
        Currency["USD"] = "USD";
        Currency["EUR"] = "EUR";
        Currency["JPY"] = "JPY";
        Currency["GBP"] = "GBP";
        Currency["AUD"] = "AUD";
        Currency["CAD"] = "CAD";
        Currency["CHF"] = "CHF";
        Currency["CNY"] = "CNY";
        Currency["SEK"] = "SEK";
        Currency["NZD"] = "NZD";
        Currency["MXN"] = "MXN";
        Currency["SGD"] = "SGD";
        Currency["HKD"] = "HKD";
        Currency["NOK"] = "NOK";
        Currency["KRW"] = "KRW";
        Currency["TRY"] = "TRY";
        Currency["RUB"] = "RUB";
        Currency["INR"] = "INR";
        Currency["BRL"] = "BRL";
        Currency["ZAR"] = "ZAR";
        Currency["GEL"] = "GEL";
        Currency["UAH"] = "UAH";
    })(Currency = ReportsModel.Currency || (ReportsModel.Currency = {}));
    let Format;
    (function (Format) {
        Format["XLSX"] = "xlsx";
        Format["CSV"] = "csv";
        Format["JSON"] = "json";
    })(Format = ReportsModel.Format || (ReportsModel.Format = {}));
    let Mode;
    (function (Mode) {
        Mode["NO_MATCH"] = "no_match";
        Mode["TM_MATCH"] = "tm_match";
        Mode["APPROVAL"] = "approval";
    })(Mode = ReportsModel.Mode || (ReportsModel.Mode = {}));
    let ContributionMode;
    (function (ContributionMode) {
        ContributionMode["TRANSLATIONS"] = "translations";
        ContributionMode["APPROVALS"] = "approvals";
        ContributionMode["VOTES"] = "votes";
    })(ContributionMode = ReportsModel.ContributionMode || (ReportsModel.ContributionMode = {}));
    let GroupBy;
    (function (GroupBy) {
        GroupBy["USER"] = "user";
        GroupBy["LANGUAGE"] = "language";
    })(GroupBy = ReportsModel.GroupBy || (ReportsModel.GroupBy = {}));
})(ReportsModel = exports.ReportsModel || (exports.ReportsModel = {}));
