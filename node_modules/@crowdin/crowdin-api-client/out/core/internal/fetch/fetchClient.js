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
exports.FetchClient = void 0;
class FetchClient {
    constructor() {
        this.maxConcurrentRequests = 15;
        this.requestIntervalMs = 10;
        this.pendingRequests = 0;
    }
    get(url, config) {
        return this.request(url, 'GET', config);
    }
    delete(url, config) {
        return this.request(url, 'DELETE', config);
    }
    head(url, config) {
        return this.request(url, 'HEAD', config);
    }
    post(url, data, config) {
        return this.request(url, 'POST', config, data);
    }
    put(url, data, config) {
        return this.request(url, 'PUT', config, data);
    }
    patch(url, data, config) {
        return this.request(url, 'PATCH', config, data);
    }
    request(url, method, config, data) {
        return __awaiter(this, void 0, void 0, function* () {
            let body = undefined;
            if (!!data) {
                if (typeof data === 'object' && !this.isBuffer(data)) {
                    body = JSON.stringify(data);
                    config = config || { headers: {} };
                    config.headers = config.headers || {};
                    config.headers['Content-Type'] = 'application/json';
                }
                else {
                    body = data;
                }
            }
            yield this.waitInQueue();
            return fetch(url, {
                method: method,
                headers: !!config ? config.headers : {},
                mode: (config && config.mode) || 'no-cors',
                body: body,
            })
                .then((resp) => __awaiter(this, void 0, void 0, function* () {
                if (resp.status === 204) {
                    return {};
                }
                const text = yield resp.text();
                const json = text ? JSON.parse(text) : {};
                if (resp.status >= 200 && resp.status < 300) {
                    return json;
                }
                else {
                    throw json;
                }
            }))
                .finally(() => (this.pendingRequests = Math.max(0, this.pendingRequests - 1)));
        });
    }
    isBuffer(data) {
        if (typeof ArrayBuffer === 'function') {
            return ArrayBuffer.isView(data);
        }
        else if (typeof Buffer === 'function') {
            return Buffer.isBuffer(data);
        }
        else {
            return false;
        }
    }
    waitInQueue() {
        return new Promise(resolve => {
            const interval = setInterval(() => {
                if (this.pendingRequests < this.maxConcurrentRequests) {
                    this.pendingRequests++;
                    clearInterval(interval);
                    resolve();
                }
            }, this.requestIntervalMs);
        });
    }
}
exports.FetchClient = FetchClient;
