"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vendors = void 0;
const core_1 = require("../core");
class Vendors extends core_1.CrowdinApi {
    /**
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listVendors(limit, offset) {
        const url = `${this.url}/vendors`;
        return this.getList(url, limit, offset);
    }
}
exports.Vendors = Vendors;
