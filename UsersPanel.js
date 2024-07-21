"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UsersPanel = /** @class */ (function () {
    function UsersPanel() {
        this.aggregates = [];
    }
    UsersPanel.prototype.addAggregate = function (aggregate) {
        this.aggregates.push(aggregate);
    };
    UsersPanel.prototype.show = function () {
        var _this = this;
        this.aggregates.forEach(function (aggregate) {
            var iterator = aggregate.createIterator();
            _this.showItems(iterator);
        });
    };
    UsersPanel.prototype.showItems = function (iterator) {
        while (!iterator.isDone()) {
            var user = iterator.next();
            console.log(user);
        }
    };
    return UsersPanel;
}());
exports.default = UsersPanel;
//# sourceMappingURL=UsersPanel.js.map