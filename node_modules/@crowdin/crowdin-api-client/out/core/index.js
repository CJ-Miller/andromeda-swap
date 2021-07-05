"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrowdinApi = exports.BooleanInt = exports.PatchOperation = exports.HttpClientType = void 0;
const axiosProvider_1 = require("./internal/axios/axiosProvider");
const fetchClient_1 = require("./internal/fetch/fetchClient");
const retry_1 = require("./internal/retry");
var HttpClientType;
(function (HttpClientType) {
    HttpClientType["AXIOS"] = "axios";
    HttpClientType["FETCH"] = "fetch";
})(HttpClientType = exports.HttpClientType || (exports.HttpClientType = {}));
var PatchOperation;
(function (PatchOperation) {
    PatchOperation["ADD"] = "add";
    PatchOperation["REMOVE"] = "remove";
    PatchOperation["REPLACE"] = "replace";
    PatchOperation["MOVE"] = "move";
    PatchOperation["copy"] = "copy";
    PatchOperation["TEST"] = "test";
})(PatchOperation = exports.PatchOperation || (exports.PatchOperation = {}));
var BooleanInt;
(function (BooleanInt) {
    BooleanInt[BooleanInt["TRUE"] = 1] = "TRUE";
    BooleanInt[BooleanInt["FALSE"] = 0] = "FALSE";
})(BooleanInt = exports.BooleanInt || (exports.BooleanInt = {}));
class CrowdinApi {
    /**
     * @param credentials credentials
     * @param config optional configuration of the client
     */
    constructor(credentials, config) {
        this.fetchAllFlag = false;
        this.token = credentials.token;
        this.organization = credentials.organization;
        if (!!credentials.baseUrl) {
            this.url = credentials.baseUrl;
        }
        else {
            if (!!this.organization) {
                this.url = `https://${this.organization}.${CrowdinApi.CROWDIN_URL_SUFFIX}`;
            }
            else {
                this.url = `https://${CrowdinApi.CROWDIN_URL_SUFFIX}`;
            }
        }
        let retryConfig;
        if (!!config && !!config.retryConfig) {
            retryConfig = config.retryConfig;
        }
        else {
            retryConfig = {
                waitInterval: 0,
                retries: 0,
                conditions: [],
            };
        }
        this.retryService = new retry_1.RetryService(retryConfig);
        this.config = config;
    }
    addQueryParam(url, name, value) {
        if (!!value) {
            url += new RegExp(/\?.+=.*/g).test(url) ? '&' : '?';
            url += `${name}=${value}`;
        }
        return url;
    }
    defaultConfig() {
        const config = {
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        };
        if (!!this.config) {
            if (!!this.config.userAgent) {
                config.headers['User-Agent'] = this.config.userAgent;
            }
            if (!!this.config.integrationUserAgent) {
                config.headers['X-Crowdin-Integrations-User-Agent'] = this.config.integrationUserAgent;
            }
        }
        return config;
    }
    get httpClient() {
        if (!!this.config) {
            if (!!this.config.httpClient) {
                return this.config.httpClient;
            }
            if (!!this.config.httpClientType) {
                switch (this.config.httpClientType) {
                    case HttpClientType.AXIOS:
                        return CrowdinApi.AXIOS_INSTANCE;
                    case HttpClientType.FETCH:
                        return CrowdinApi.FETCH_INSTANCE;
                    default:
                        return CrowdinApi.AXIOS_INSTANCE;
                }
            }
        }
        return CrowdinApi.AXIOS_INSTANCE;
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    withFetchAll(maxLimit) {
        this.fetchAllFlag = true;
        this.maxLimit = maxLimit;
        return this;
    }
    getList(url, limit, offset, config) {
        return __awaiter(this, void 0, void 0, function* () {
            const conf = config || this.defaultConfig();
            if (this.fetchAllFlag) {
                this.fetchAllFlag = false;
                const maxAmount = this.maxLimit;
                this.maxLimit = undefined;
                return yield this.fetchAll(url, conf, maxAmount);
            }
            else {
                url = this.addQueryParam(url, 'limit', limit);
                url = this.addQueryParam(url, 'offset', offset);
                return this.get(url, conf);
            }
        });
    }
    fetchAll(url, config, maxAmount) {
        return __awaiter(this, void 0, void 0, function* () {
            let limit = 500;
            if (!!maxAmount && maxAmount < limit) {
                limit = maxAmount;
            }
            let offset = 0;
            let resp;
            for (;;) {
                let urlWithPagination = this.addQueryParam(url, 'limit', limit);
                urlWithPagination = this.addQueryParam(urlWithPagination, 'offset', offset);
                const e = yield this.get(urlWithPagination, config);
                if (!resp) {
                    resp = e;
                }
                else {
                    resp.data = resp.data.concat(e.data);
                    resp.pagination.limit += e.data.length;
                }
                if (e.data.length < limit || (!!maxAmount && resp.data.length >= maxAmount)) {
                    break;
                }
                else {
                    offset += limit;
                }
                if (!!maxAmount) {
                    if (maxAmount < resp.data.length + limit) {
                        limit = maxAmount - resp.data.length;
                    }
                }
            }
            return resp;
        });
    }
    //Http overrides
    get(url, config) {
        return this.retryService.executeAsyncFunc(() => this.httpClient.get(url, config));
    }
    delete(url, config) {
        return this.retryService.executeAsyncFunc(() => this.httpClient.delete(url, config));
    }
    head(url, config) {
        return this.retryService.executeAsyncFunc(() => this.httpClient.head(url, config));
    }
    post(url, data, config) {
        return this.retryService.executeAsyncFunc(() => this.httpClient.post(url, data, config));
    }
    put(url, data, config) {
        return this.retryService.executeAsyncFunc(() => this.httpClient.put(url, data, config));
    }
    patch(url, data, config) {
        return this.retryService.executeAsyncFunc(() => this.httpClient.patch(url, data, config));
    }
}
exports.CrowdinApi = CrowdinApi;
CrowdinApi.CROWDIN_URL_SUFFIX = 'api.crowdin.com/api/v2';
CrowdinApi.AXIOS_INSTANCE = new axiosProvider_1.AxisProvider().axios;
CrowdinApi.FETCH_INSTANCE = new fetchClient_1.FetchClient();
