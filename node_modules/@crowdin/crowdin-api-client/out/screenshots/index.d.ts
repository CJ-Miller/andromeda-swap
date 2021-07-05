import { CrowdinApi, PatchRequest, ResponseList, ResponseObject } from '../core';
export declare class Screenshots extends CrowdinApi {
    /**
     * @param projectId project identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listScreenshots(projectId: number, limit?: number, offset?: number): Promise<ResponseList<ScreenshotsModel.Screenshot>>;
    /**
     * @param projectId project identifier
     * @param request request body
     */
    addScreenshot(projectId: number, request: ScreenshotsModel.CreateScreenshotRequest): Promise<ResponseObject<ScreenshotsModel.Screenshot>>;
    /**
     * @param projectId project identifier
     * @param screenshotId screenshot identifier
     */
    getScreenshot(projectId: number, screenshotId: number): Promise<ResponseObject<ScreenshotsModel.Screenshot>>;
    /**
     * @param projectId project identifier
     * @param screenshotId screenshot identifier
     * @param request request body
     */
    updateScreenshot(projectId: number, screenshotId: number, request: ScreenshotsModel.CreateScreenshotRequest): Promise<ResponseObject<ScreenshotsModel.Screenshot>>;
    /**
     * @param projectId project identifier
     * @param screenshotId screenshot identifier
     */
    deleteScreenshot(projectId: number, screenshotId: number): Promise<void>;
    /**
     * @param projectId project identifier
     * @param screenshotId screenshot identifier
     * @param request request body
     */
    editScreenshot(projectId: number, screenshotId: number, request: PatchRequest[]): Promise<ResponseObject<ScreenshotsModel.Screenshot>>;
    /**
     * @param projectId project identifier
     * @param screenshotId screenshot identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listScreenshotTags(projectId: number, screenshotId: number, limit?: number, offset?: number): Promise<ResponseList<ScreenshotsModel.Tag>>;
    /**
     * @param projectId project identifier
     * @param screenshotId screenshot identifier
     * @param request request body
     */
    replaceTags(projectId: number, screenshotId: number, request: ScreenshotsModel.AddTagRequest[]): Promise<void>;
    /**
     * @param projectId project identifier
     * @param screenshotId screenshot identifier
     * @param request request body
     */
    addTag(projectId: number, screenshotId: number, request: ScreenshotsModel.AddTagRequest[]): Promise<ResponseObject<ScreenshotsModel.Tag>>;
    /**
     * @param projectId project identifier
     * @param screenshotId screenshot identifier
     */
    clearTags(projectId: number, screenshotId: number): Promise<void>;
    /**
     * @param projectId project identifier
     * @param screenshotId screenshot identifier
     * @param tagId tag identifier
     */
    getTag(projectId: number, screenshotId: number, tagId: number): Promise<ResponseObject<ScreenshotsModel.Tag>>;
    /**
     * @param projectId project identifier
     * @param screenshotId screenshot identifier
     * @param tagId tag identifier
     */
    deleteTag(projectId: number, screenshotId: number, tagId: number): Promise<void>;
    /**
     * @param projectId project identifier
     * @param screenshotId screenshot identifier
     * @param tagId tag identifier
     * @param request request body
     */
    updateTag(projectId: number, screenshotId: number, tagId: number, request: PatchRequest[]): Promise<ResponseObject<ScreenshotsModel.Screenshot>>;
}
export declare namespace ScreenshotsModel {
    interface Screenshot {
        id: number;
        userId: number;
        url: string;
        name: string;
        size: Size;
        tagsCount: number;
        tags: Tag[];
        createdAt: string;
        updatedAt: string;
    }
    interface CreateScreenshotRequest {
        storageId: number;
        name: string;
        autoTag?: boolean;
    }
    interface Tag {
        id: number;
        screenshotId: number;
        stringId: number;
        position: Position;
        createdAt: string;
    }
    interface AddTagRequest {
        stringId: number;
        position?: Position;
    }
    interface Size {
        width: number;
        height: number;
    }
    interface Position {
        x: number;
        y: number;
        width: number;
        height: number;
    }
}
