"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teams = void 0;
const core_1 = require("../core");
class Teams extends core_1.CrowdinApi {
    /**
     * @param projectId project identifier
     * @param request request body
     */
    addTeamToProject(projectId, request) {
        const url = `${this.url}/projects/${projectId}/teams`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listTeams(limit, offset) {
        const url = `${this.url}/teams`;
        return this.getList(url, limit, offset);
    }
    /**
     * @param request request body
     */
    addTeam(request) {
        const url = `${this.url}/teams`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param teamId team identifier
     */
    getTeam(teamId) {
        const url = `${this.url}/teams/${teamId}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param teamId team identifier
     */
    deleteTeam(teamId) {
        const url = `${this.url}/teams/${teamId}`;
        return this.delete(url, this.defaultConfig());
    }
    /**
     * @param teamId team identifier
     * @param request request body
     */
    editTeam(teamId, request) {
        const url = `${this.url}/teams/${teamId}`;
        return this.patch(url, request, this.defaultConfig());
    }
    /**
     * @param teamId team identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    teamMembersList(teamId, limit, offset) {
        const url = `${this.url}/teams/${teamId}/members`;
        return this.getList(url, limit, offset);
    }
    /**
     * @param teamId team identifier
     * @param request request body
     */
    addTeamMembers(teamId, request) {
        const url = `${this.url}/teams/${teamId}/members`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param teamId team identifier
     */
    deleteAllTeamMembers(teamId) {
        const url = `${this.url}/teams/${teamId}/members`;
        return this.delete(url, this.defaultConfig());
    }
    /**
     * @param teamId team identifier
     * @param memberId member identifier
     */
    deleteTeamMember(teamId, memberId) {
        const url = `${this.url}/teams/${teamId}/members/${memberId}`;
        return this.delete(url, this.defaultConfig());
    }
}
exports.Teams = Teams;
