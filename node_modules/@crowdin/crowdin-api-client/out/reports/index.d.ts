import { CrowdinApi, DownloadLink, ResponseObject, Status } from '../core';
export declare class Reports extends CrowdinApi {
    /**
     * @param groupId group identifier
     * @param request request body
     */
    generateGroupReport(groupId: number, request: ReportsModel.GenerateGroupReportRequest): Promise<ResponseObject<Status<ReportsModel.GroupReportStatusAttributes>>>;
    /**
     * @param groupId group identifier
     * @param reportId report identifier
     */
    checkGroupReportStatus(groupId: number, reportId: string): Promise<ResponseObject<Status<ReportsModel.GroupReportStatusAttributes>>>;
    /**
     * @param groupId group identifier
     * @param reportId report identifier
     */
    downloadGroupReport(groupId: number, reportId: string): Promise<ResponseObject<DownloadLink>>;
    /**
     * @param request request body
     */
    generateOrganizationReport(request: ReportsModel.GenerateGroupReportRequest): Promise<ResponseObject<Status<ReportsModel.GroupReportStatusAttributes>>>;
    /**
     * @param reportId report identifier
     */
    checkOrganizationReportStatus(reportId: string): Promise<ResponseObject<Status<ReportsModel.GroupReportStatusAttributes>>>;
    /**
     * @param reportId report identifier
     */
    downloadOrganizationReport(reportId: string): Promise<ResponseObject<DownloadLink>>;
    /**
     * @param projectId project identifier
     * @param request request body
     */
    generateReport(projectId: number, request: ReportsModel.GenerateReportRequest): Promise<ResponseObject<Status<ReportsModel.ReportStatusAttributes>>>;
    /**
     * @param projectId project identifier
     * @param reportId report identifier
     */
    checkReportStatus(projectId: number, reportId: string): Promise<ResponseObject<Status<ReportsModel.ReportStatusAttributes>>>;
    /**
     * @param projectId project identifier
     * @param reportId report identifier
     */
    downloadReport(projectId: number, reportId: string): Promise<ResponseObject<DownloadLink>>;
}
export declare namespace ReportsModel {
    interface GenerateGroupReportRequest {
        name: string;
        schema: GroupTranslationCostSchema | GroupTopMembersSchema;
    }
    interface GenerateReportRequest {
        name: string;
        schema: CostEstimateSchema | CostEstimateFuzzyModeSchema | TranslationCostSchema | TopMembersSchema | ContributionRawDataSchema;
    }
    interface GroupReportStatusAttributes extends ReportStatusAttributes {
        projectIds: number[];
    }
    interface ReportStatusAttributes {
        format: Format;
        reportName: string;
        schema: any;
    }
    interface GroupTranslationCostSchema {
        projectIds?: number[];
        unit?: Unit;
        currency?: Currency;
        format?: Format;
        groupBy?: GroupBy;
        dateFrom?: string;
        dateTo?: string;
    }
    interface GroupTopMembersSchema {
        projectIds?: number[];
        unit?: Unit;
        languageId?: string;
        format?: Format;
        groupBy?: GroupBy;
        dateFrom?: string;
        dateTo?: string;
    }
    interface CostEstimateSchema {
        unit?: Unit;
        currency?: Currency;
        mode?: string;
        languageId?: string;
        fileIds?: number[];
        format?: Format;
        regularRates?: RegularRate[];
        individualRates?: IndividualRate[];
        dateFrom?: string;
        dateTo?: string;
        stepTypes?: Array<TranslateStep | ProofreadStep>;
    }
    interface CostEstimateFuzzyModeSchema extends CostEstimateSchema {
        calculateInternalFuzzyMatches?: boolean;
    }
    interface TranslationCostSchema {
        unit?: Unit;
        currency?: Currency;
        mode?: string;
        format?: Format;
        groupBy?: GroupBy;
        regularRates?: RegularRate[];
        individualRates?: IndividualRate[];
        dateFrom?: string;
        dateTo?: string;
        stepTypes?: Array<TranslateStep | ProofreadStep>;
    }
    type TranslationCostFuzzyModeSchema = TranslationCostSchema;
    interface TopMembersSchema {
        unit?: Unit;
        languageId?: string;
        format?: Format;
        dateFrom?: string;
        dateTo?: string;
    }
    interface ContributionRawDataSchema {
        mode: ContributionMode;
        unit?: Unit;
        languageId?: string;
        userId?: string;
        dateFrom?: string;
        dateTo?: string;
    }
    enum Unit {
        STRINGS = "strings",
        WORDS = "words",
        CHARS = "chars",
        CHARS_WITH_SPACES = "chars_with_spaces"
    }
    enum Currency {
        USD = "USD",
        EUR = "EUR",
        JPY = "JPY",
        GBP = "GBP",
        AUD = "AUD",
        CAD = "CAD",
        CHF = "CHF",
        CNY = "CNY",
        SEK = "SEK",
        NZD = "NZD",
        MXN = "MXN",
        SGD = "SGD",
        HKD = "HKD",
        NOK = "NOK",
        KRW = "KRW",
        TRY = "TRY",
        RUB = "RUB",
        INR = "INR",
        BRL = "BRL",
        ZAR = "ZAR",
        GEL = "GEL",
        UAH = "UAH"
    }
    enum Format {
        XLSX = "xlsx",
        CSV = "csv",
        JSON = "json"
    }
    interface TranslateStep {
        type: string;
        mode: string;
        regularRates: RegularRate[];
        individualRates: IndividualRate[];
    }
    interface ProofreadStep {
        type: string;
        mode: string;
        regularRates: RegularRate[];
        individualRates: IndividualRate[];
    }
    interface RegularRate {
        mode: Mode;
        value: number;
    }
    interface IndividualRate {
        languageIds: string[];
        rates: RegularRate[];
    }
    enum Mode {
        NO_MATCH = "no_match",
        TM_MATCH = "tm_match",
        APPROVAL = "approval"
    }
    enum ContributionMode {
        TRANSLATIONS = "translations",
        APPROVALS = "approvals",
        VOTES = "votes"
    }
    enum GroupBy {
        USER = "user",
        LANGUAGE = "language"
    }
}
