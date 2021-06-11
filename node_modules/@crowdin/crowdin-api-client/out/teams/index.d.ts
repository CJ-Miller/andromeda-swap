import { CrowdinApi, Pagination, PatchRequest, ResponseList, ResponseObject } from '../core';
export declare class Teams extends CrowdinApi {
    /**
     * @param projectId project identifier
     * @param request request body
     */
    addTeamToProject(projectId: number, request: TeamsModel.AddTeamToProjectRequest): Promise<TeamsModel.ProjectTeamResources>;
    /**
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listTeams(limit?: number, offset?: number): Promise<ResponseList<TeamsModel.Team>>;
    /**
     * @param request request body
     */
    addTeam(request: TeamsModel.AddTeamRequest): Promise<ResponseObject<TeamsModel.Team>>;
    /**
     * @param teamId team identifier
     */
    getTeam(teamId: number): Promise<ResponseObject<TeamsModel.Team>>;
    /**
     * @param teamId team identifier
     */
    deleteTeam(teamId: number): Promise<void>;
    /**
     * @param teamId team identifier
     * @param request request body
     */
    editTeam(teamId: number, request: PatchRequest[]): Promise<ResponseObject<TeamsModel.Team>>;
    /**
     * @param teamId team identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    teamMembersList(teamId: number, limit?: number, offset?: number): Promise<ResponseList<TeamsModel.TeamMember>>;
    /**
     * @param teamId team identifier
     * @param request request body
     */
    addTeamMembers(teamId: number, request: TeamsModel.AddTeamMembersRequest): Promise<TeamsModel.AddTeamMembersResponse>;
    /**
     * @param teamId team identifier
     */
    deleteAllTeamMembers(teamId: number): Promise<void>;
    /**
     * @param teamId team identifier
     * @param memberId member identifier
     */
    deleteTeamMember(teamId: number, memberId: number): Promise<void>;
}
export declare namespace TeamsModel {
    interface AddTeamToProjectRequest {
        teamId: number;
        accessToAllWorkflowSteps?: boolean;
        managerAccess?: boolean;
        permissions?: any;
    }
    interface ProjectTeamResources {
        skipped: ProjectTeamResource;
        added: ProjectTeamResource;
    }
    interface ProjectTeamResource {
        id: number;
        hasManagerAccess: boolean;
        hasAccessToAllWorkflowSteps: boolean;
        permissions: any;
    }
    interface Team {
        id: number;
        name: string;
        totalMembers: number;
        createdAt: string;
        updatedAt: string;
    }
    interface AddTeamRequest {
        name: string;
    }
    interface TeamMember {
        id: number;
        username: string;
        firstName: string;
        lastName: string;
        avatarUrl: string;
        addedAt: string;
    }
    interface AddTeamMembersRequest {
        userIds: number[];
    }
    interface AddTeamMembersResponse {
        skipped: ResponseObject<TeamMember>[];
        added: ResponseObject<TeamMember>[];
        pagination: Pagination;
    }
}
