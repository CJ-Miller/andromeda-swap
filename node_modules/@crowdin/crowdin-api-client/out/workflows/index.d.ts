import { CrowdinApi, ResponseList, ResponseObject } from '../core';
export declare class Workflows extends CrowdinApi {
    /**
     * @param groupId group identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listWorkflowTemplates(groupId?: number, limit?: number, offset?: number): Promise<ResponseList<WorkflowModel.Workflow>>;
    /**
     * @param templateId workflow template identifier
     */
    getWorkflowTemplateInfo(templateId: number): Promise<ResponseObject<WorkflowModel.Workflow>>;
}
export declare namespace WorkflowModel {
    interface Workflow {
        id: number;
        title: string;
        description: string;
        groupId: number;
        isDefault: boolean;
    }
}
