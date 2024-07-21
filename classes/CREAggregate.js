"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CREApiClient_1 = require("./CREApiClient");
var CREUsersIterator_1 = require("./CREUsersIterator");
var CREAggregate = /** @class */ (function () {
    function CREAggregate() {
        this.creApiClient = new CREApiClient_1.default();
    }
    CREAggregate.prototype.CREAggregate = function () {
        this.creApiClient = new CREApiClient_1.default();
    };
    CREAggregate.prototype.createIterator = function () {
        return new CREUsersIterator_1.default(this.creApiClient.getCREinfo());
    };
    return CREAggregate;
}());
exports.default = CREAggregate;
//# sourceMappingURL=CREAggregate.js.map