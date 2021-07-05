import { CrowdinApi, PatchRequest, ResponseList, ResponseObject } from '../core';
export declare class MachineTranslation extends CrowdinApi {
    /**
     * @param groupId group identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listMts(groupId?: number, limit?: number, offset?: number): Promise<ResponseList<MachineTranslationModel.MachineTranslation>>;
    /**
     * @param request request body
     */
    createMt(request: MachineTranslationModel.CreateMachineTranslationRequest): Promise<ResponseObject<MachineTranslationModel.MachineTranslation>>;
    /**
     * @param mtId mt identifier
     */
    getMt(mtId: number): Promise<ResponseObject<MachineTranslationModel.MachineTranslation>>;
    /**
     * @param mtId mt identifier
     */
    deleteMt(mtId: number): Promise<void>;
    /**
     * @param mtId mt identifier
     * @param request request body
     */
    updateMt(mtId: number, request: PatchRequest[]): Promise<ResponseObject<MachineTranslationModel.MachineTranslation>>;
}
export declare namespace MachineTranslationModel {
    interface MachineTranslation {
        id: number;
        groupId: number;
        name: string;
        type: number;
        credentials: Credentials;
        projectIds: number[];
    }
    interface Credentials {
        [key: string]: number;
    }
    interface CreateMachineTranslationRequest {
        name: string;
        groupId?: number;
        type: string;
        credentials: string[];
    }
}
