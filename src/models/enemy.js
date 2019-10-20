"use strict";
exports.__esModule = true;
var Enemy = /** @class */ (function () {
    function Enemy(type, number) {
        this.type = type;
        this.number = number;
    }
    Enemy.prototype.getType = function () {
        return this.type;
    };
    return Enemy;
}());
exports.Enemy = Enemy;
