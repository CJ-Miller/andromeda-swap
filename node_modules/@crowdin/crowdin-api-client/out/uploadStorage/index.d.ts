import { CrowdinApi, ResponseList, ResponseObject } from '../core';
export declare class UploadStorage extends CrowdinApi {
    /**
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listStorages(limit?: number, offset?: number): Promise<ResponseList<UploadStorageModel.Storage>>;
    /**
     * @param fileName file name
     * @param request binary file data
     * @param contentType content type header
     */
    addStorage(fileName: string, request: any, contentType?: string): Promise<ResponseObject<UploadStorageModel.Storage>>;
    /**
     * @param storageId storage identifier
     */
    getStorage(storageId: number): Promise<ResponseObject<UploadStorageModel.Storage>>;
    /**
     * @param storageId storage identifier
     */
    deleteStorage(storageId: number): Promise<void>;
}
export declare namespace UploadStorageModel {
    interface Storage {
        id: number;
        fileName: string;
    }
}
