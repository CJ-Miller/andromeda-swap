import { CrowdinApi, PatchRequest, ResponseList, ResponseObject } from '../core';
import { SourceStringsModel } from '../sourceStrings';
export declare class Labels extends CrowdinApi {
    /**
     * @param projectId project identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listLabels(projectId: number, limit?: number, offset?: number): Promise<ResponseList<LabelsModel.Label>>;
    /**
     * @param projectId project identifier
     * @param request request body
     */
    addLabel(projectId: number, request: LabelsModel.AddLabelRequest): Promise<ResponseObject<LabelsModel.Label>>;
    /**
     * @param projectId project identifier
     * @param labelId label identifier
     */
    getLabel(projectId: number, labelId: number): Promise<ResponseObject<LabelsModel.Label>>;
    /**
     * @param projectId project identifier
     * @param labelId label identifier
     */
    deleteLabel(projectId: number, labelId: number): Promise<void>;
    /**
     * @param projectId project identifier
     * @param labelId label identifier
     * @param request request body
     */
    editLabel(projectId: number, labelId: number, request: PatchRequest[]): Promise<ResponseObject<LabelsModel.Label>>;
    /**
     * @param projectId project identifier
     * @param labelId label identifier
     * @param request request body
     */
    assignLabelToString(projectId: number, labelId: number, request: LabelsModel.AssignLabelToStringRequet): Promise<ResponseList<SourceStringsModel.String>>;
    /**
     * @param projectId project identifier
     * @param labelId label identifier
     * @param stringIds string identifiers
     */
    unassignLabelFromString(projectId: number, labelId: number, stringIds: string): Promise<ResponseList<SourceStringsModel.String>>;
}
export declare namespace LabelsModel {
    interface Label {
        id: number;
        title: string;
    }
    interface AddLabelRequest {
        title: string;
    }
    interface AssignLabelToStringRequet {
        stringIds: number[];
    }
}
