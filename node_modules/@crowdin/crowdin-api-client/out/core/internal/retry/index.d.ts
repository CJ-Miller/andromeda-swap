export interface RetryConfig {
    retries: number;
    waitInterval: number;
    conditions: SkipRetryCondition[];
}
export interface SkipRetryCondition {
    test(error: any): boolean;
}
export declare class RetryService {
    private config;
    constructor(config: RetryConfig);
    /**
     *
     * @param func function to execute
     */
    executeAsyncFunc<T>(func: () => Promise<T>): Promise<T>;
    /**
     *
     * @param func function to execute
     */
    executeSyncFunc<T>(func: () => T): Promise<T>;
    private wait;
}
