"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CREAggregate_1 = require("./classes/CREAggregate");
var UsersPanel_1 = require("./UsersPanel");
var panel = new UsersPanel_1.default();
panel.addAggregate(new CREAggregate_1.default);
panel.show();
//# sourceMappingURL=main.js.map