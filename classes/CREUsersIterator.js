"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CREUsersIterator = /** @class */ (function () {
    function CREUsersIterator(info) {
        this.users = info;
        this.keys = Object.keys(info);
    }
    CREUsersIterator.prototype.next = function () {
        if (this.keys.length === 0) {
            return null;
        }
        var key = this.keys.shift();
        return this.users[key];
    };
    CREUsersIterator.prototype.isDone = function () {
        return this.keys.length === 0;
    };
    CREUsersIterator.prototype.currentItem = function () {
        return this.users[this.keys[0]];
    };
    return CREUsersIterator;
}());
exports.default = CREUsersIterator;
//# sourceMappingURL=CREUsersIterator.js.map