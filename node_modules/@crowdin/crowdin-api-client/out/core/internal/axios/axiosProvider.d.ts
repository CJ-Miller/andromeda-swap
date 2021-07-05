import { AxiosInstance } from 'axios';
export declare class AxisProvider {
    private static readonly CROWDIN_API_MAX_CONCURRENT_REQUESTS;
    private static readonly CROWDIN_API_REQUESTS_INTERVAL_MS;
    private pendingRequests;
    axios: AxiosInstance;
    constructor();
    private configureRequest;
    private configureResponse;
}
