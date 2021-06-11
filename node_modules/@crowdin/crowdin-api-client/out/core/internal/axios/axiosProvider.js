"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxisProvider = void 0;
const axios_1 = require("axios");
class AxisProvider {
    constructor() {
        this.pendingRequests = 0;
        this.axios = axios_1.default.create({});
        this.configureRequest();
        this.configureResponse();
    }
    configureRequest() {
        this.axios.interceptors.request.use(config => {
            // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
            return new Promise(resolve => {
                const interval = setInterval(() => {
                    if (this.pendingRequests < AxisProvider.CROWDIN_API_MAX_CONCURRENT_REQUESTS) {
                        this.pendingRequests++;
                        clearInterval(interval);
                        resolve(config);
                    }
                }, AxisProvider.CROWDIN_API_REQUESTS_INTERVAL_MS);
            });
        });
    }
    configureResponse() {
        this.axios.interceptors.response.use(response => {
            this.pendingRequests = Math.max(0, this.pendingRequests - 1);
            return Promise.resolve(response.data);
        }, error => {
            this.pendingRequests = Math.max(0, this.pendingRequests - 1);
            if (!!error.response && !!error.response.data) {
                if (error.response.status === 400) {
                    return Promise.reject(error.response.data);
                }
                else {
                    return Promise.reject(error.response.data);
                }
            }
            else {
                const errorCode = (error.response && error.response.status) || '500';
                const defaultError = {
                    error: {
                        code: errorCode,
                        message: `Request failed. ${error}`,
                    },
                };
                return Promise.reject(defaultError);
            }
        });
    }
}
exports.AxisProvider = AxisProvider;
AxisProvider.CROWDIN_API_MAX_CONCURRENT_REQUESTS = 15;
AxisProvider.CROWDIN_API_REQUESTS_INTERVAL_MS = 10;
