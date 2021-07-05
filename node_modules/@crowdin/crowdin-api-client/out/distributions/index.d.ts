import { CrowdinApi, PatchRequest, ResponseList, ResponseObject } from '../core';
export declare class Distributions extends CrowdinApi {
    /**
     * @param projectId project identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listDistributions(projectId: number, limit?: number, offset?: number): Promise<ResponseList<DistributionsModel.Distribution>>;
    /**
     * @param projectId project identifier
     * @param request request body
     */
    createDistribution(projectId: number, request: DistributionsModel.CreateDistributionRequest): Promise<ResponseObject<DistributionsModel.Distribution>>;
    /**
     * @param projectId project identifier
     * @param hash hash
     */
    getDistribution(projectId: number, hash: string): Promise<ResponseObject<DistributionsModel.Distribution>>;
    /**
     * @param projectId project identifier
     * @param hash hash
     */
    deleteDistribution(projectId: number, hash: string): Promise<void>;
    /**
     * @param projectId project identifier
     * @param hash hash
     * @param request request body
     */
    editDistribution(projectId: number, hash: string, request: PatchRequest[]): Promise<ResponseObject<DistributionsModel.Distribution>>;
    /**
     * @param projectId project identifier
     * @param hash hash
     */
    getDistributionRelease(projectId: number, hash: string): Promise<ResponseObject<DistributionsModel.DistributionRelease>>;
    /**
     * @param projectId project identifier
     * @param hash hash
     * @param request request body
     */
    createDistributionRelease(projectId: number, hash: string): Promise<ResponseObject<DistributionsModel.DistributionRelease>>;
}
export declare namespace DistributionsModel {
    interface Distribution {
        hash: string;
        name: string;
        fileIds: number[];
        createdAt: string;
        updatedAt: string;
    }
    interface CreateDistributionRequest {
        name: string;
        fileIds: number[];
    }
    interface DistributionRelease {
        status: string;
        progress: number;
        currentLanguageId: string;
        currentFileId: number;
        date: string;
    }
}
