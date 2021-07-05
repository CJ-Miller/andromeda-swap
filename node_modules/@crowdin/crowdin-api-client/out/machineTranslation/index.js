"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineTranslation = void 0;
const core_1 = require("../core");
class MachineTranslation extends core_1.CrowdinApi {
    /**
     * @param groupId group identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listMts(groupId, limit, offset) {
        let url = `${this.url}/mts`;
        url = this.addQueryParam(url, 'groupId', groupId);
        return this.getList(url, limit, offset);
    }
    /**
     * @param request request body
     */
    createMt(request) {
        const url = `${this.url}/mts`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param mtId mt identifier
     */
    getMt(mtId) {
        const url = `${this.url}/mts/${mtId}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param mtId mt identifier
     */
    deleteMt(mtId) {
        const url = `${this.url}/mts/${mtId}`;
        return this.delete(url, this.defaultConfig());
    }
    /**
     * @param mtId mt identifier
     * @param request request body
     */
    updateMt(mtId, request) {
        const url = `${this.url}/mts/${mtId}`;
        return this.patch(url, request, this.defaultConfig());
    }
}
exports.MachineTranslation = MachineTranslation;
