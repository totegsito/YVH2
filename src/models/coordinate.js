"use strict";
exports.__esModule = true;
var Coordinate = /** @class */ (function () {
    function Coordinate(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    /**
     * Calculates the distance from x: 0, y: 0 to the Coordinate
     */
    Coordinate.prototype.getDistance = function () {
        return Math.sqrt(((this.x * this.x) + (this.y * this.y)));
    };
    Coordinate.prototype.toJSON = function () {
        return {
            x: this.x,
            y: this.y
        };
    };
    return Coordinate;
}());
exports.Coordinate = Coordinate;
