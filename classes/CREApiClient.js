"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CREUser_1 = require("./CREUser");
var UserData_entity_1 = require("./UserData.entity");
var CREApiClient = /** @class */ (function () {
    function CREApiClient() {
    }
    CREApiClient.prototype.getCREinfo = function () {
        var info = {};
        info[1] = new CREUser_1.default(1, new UserData_entity_1.default("Alexander", "123 Main Street", 100));
        info[2] = new CREUser_1.default(2, new UserData_entity_1.default("Chris", "456 Elm Street", 200));
        info[3] = new CREUser_1.default(3, new UserData_entity_1.default("Andrea", "789 Oak Street", 300));
        info[4] = new CREUser_1.default(4, new UserData_entity_1.default("Jorge", "987 Pine Street", 400));
        return info;
    };
    return CREApiClient;
}());
exports.default = CREApiClient;
//# sourceMappingURL=CREApiClient.js.map