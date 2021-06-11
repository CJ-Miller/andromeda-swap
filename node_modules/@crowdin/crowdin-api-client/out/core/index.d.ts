import { RetryConfig, RetryService } from './internal/retry';
export interface RequestConfig {
    headers?: any;
    mode?: string;
}
export interface HttpClient {
    get<T>(url: string, config?: RequestConfig): Promise<T>;
    delete<T>(url: string, config?: RequestConfig): Promise<T>;
    head<T>(url: string, config?: RequestConfig): Promise<T>;
    post<T>(url: string, data?: any, config?: RequestConfig): Promise<T>;
    put<T>(url: string, data?: any, config?: RequestConfig): Promise<T>;
    patch<T>(url: string, data?: any, config?: RequestConfig): Promise<T>;
}
export declare enum HttpClientType {
    AXIOS = "axios",
    FETCH = "fetch"
}
export interface Credentials {
    token: string;
    organization?: string;
    baseUrl?: string;
}
export interface ClientConfig {
    httpClientType?: HttpClientType;
    httpClient?: HttpClient;
    userAgent?: string;
    integrationUserAgent?: string;
    retryConfig?: RetryConfig;
}
export interface ResponseList<T> {
    data: ResponseObject<T>[];
    pagination: Pagination;
}
export interface ResponseObject<T> {
    data: T;
}
export interface Pagination {
    offset: number;
    limit: number;
}
export interface ValidationErrorResponse {
    errors: ErrorHolder[];
}
export interface CommonErrorResponse {
    error: Error;
}
export interface ErrorHolder {
    error: ErrorKey;
}
export interface ErrorKey {
    key: string;
    errors: Error[];
}
export interface Error {
    code: string;
    message: string;
}
export interface PatchRequest {
    value?: any;
    op: PatchOperation;
    path: string;
}
export declare enum PatchOperation {
    ADD = "add",
    REMOVE = "remove",
    REPLACE = "replace",
    MOVE = "move",
    copy = "copy",
    TEST = "test"
}
export interface DownloadLink {
    url: string;
    expireIn: string;
}
export declare enum BooleanInt {
    TRUE = 1,
    FALSE = 0
}
export interface Status<T> {
    identifier: string;
    status: string;
    progress: number;
    attributes: T;
    createdAt: string;
    updatedAt: string;
    startedAt: string;
    finishedAt: string;
}
export interface Attribute {
    [key: string]: string;
}
export declare abstract class CrowdinApi {
    private static readonly CROWDIN_URL_SUFFIX;
    private static readonly AXIOS_INSTANCE;
    private static readonly FETCH_INSTANCE;
    readonly token: string;
    readonly organization?: string;
    readonly url: string;
    readonly config: ClientConfig | undefined;
    readonly retryService: RetryService;
    protected fetchAllFlag: boolean;
    protected maxLimit: number | undefined;
    /**
     * @param credentials credentials
     * @param config optional configuration of the client
     */
    constructor(credentials: Credentials, config?: ClientConfig);
    protected addQueryParam(url: string, name: string, value?: any): string;
    protected defaultConfig(): any;
    get httpClient(): HttpClient;
    withFetchAll(maxLimit?: number): this;
    protected getList<T = any>(url: string, limit?: number, offset?: number, config?: {
        headers: any;
    }): Promise<ResponseList<T>>;
    protected fetchAll<T = any>(url: string, config: {
        headers: any;
    }, maxAmount?: number): Promise<ResponseList<T>>;
    protected get<T>(url: string, config?: {
        headers: any;
    }): Promise<T>;
    protected delete<T>(url: string, config?: {
        headers: any;
    }): Promise<T>;
    protected head<T>(url: string, config?: {
        headers: any;
    }): Promise<T>;
    protected post<T>(url: string, data?: any, config?: {
        headers: any;
    }): Promise<T>;
    protected put<T>(url: string, data?: any, config?: {
        headers: any;
    }): Promise<T>;
    protected patch<T>(url: string, data?: any, config?: {
        headers: any;
    }): Promise<T>;
}
