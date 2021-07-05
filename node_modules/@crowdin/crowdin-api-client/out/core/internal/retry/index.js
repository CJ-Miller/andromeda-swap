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
exports.RetryService = void 0;
class RetryService {
    constructor(config) {
        this.config = config;
    }
    /**
     *
     * @param func function to execute
     */
    executeAsyncFunc(func) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i <= this.config.retries; i++) {
                try {
                    const result = yield func();
                    return result;
                }
                catch (error) {
                    const skip = this.config.conditions.map(condition => condition.test(error)).find(skip => skip === true);
                    if (skip || i === this.config.retries) {
                        throw error;
                    }
                    yield this.wait();
                }
            }
            throw new Error('Wrong retry configuration. Failed to retrieve value.');
        });
    }
    /**
     *
     * @param func function to execute
     */
    executeSyncFunc(func) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i <= this.config.retries; i++) {
                try {
                    const result = func();
                    return result;
                }
                catch (error) {
                    const skip = this.config.conditions.map(condition => condition.test(error)).find(skip => skip === true);
                    if (skip || i === this.config.retries) {
                        throw error;
                    }
                    yield this.wait();
                }
            }
            throw new Error('Wrong retry configuration. Failed to retrieve value.');
        });
    }
    wait() {
        return new Promise((res) => {
            setTimeout(() => res(), this.config.waitInterval);
        });
    }
}
exports.RetryService = RetryService;
