import { HttpClient } from '../..';
export declare class FetchClient implements HttpClient {
    private maxConcurrentRequests;
    private requestIntervalMs;
    private pendingRequests;
    get(url: string, config?: {
        headers: any;
    }): Promise<any>;
    delete(url: string, config?: {
        headers: any;
    }): Promise<any>;
    head(url: string, config?: {
        headers: any;
    }): Promise<any>;
    post(url: string, data?: any, config?: {
        headers: any;
    }): Promise<any>;
    put(url: string, data?: any, config?: {
        headers: any;
    }): Promise<any>;
    patch(url: string, data?: any, config?: {
        headers: any;
    }): Promise<any>;
    private request;
    private isBuffer;
    private waitInQueue;
}
