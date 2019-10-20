"use strict";
exports.__esModule = true;
var coordinate_1 = require("./coordinate");
var enemy_1 = require("./enemy");
var Point = /** @class */ (function () {
    function Point(coordinates, enemy, allies) {
        if (allies === void 0) { allies = 0; }
        this.allies = 0;
        this.coordinates = new coordinate_1.Coordinate(coordinates.x, coordinates.y);
        this.enemies = new enemy_1.Enemy(enemy.type, enemy.number);
        this.allies = allies;
    }
    Point.prototype.getCoordinatesAsJSON = function () {
        return this.coordinates.toJSON();
    };
    Point.prototype.getDistance = function () {
        return this.coordinates.getDistance();
    };
    Point.prototype.getEnemyType = function () {
        return this.enemies.getType();
    };
    Point.prototype.getAllies = function () {
        return this.allies;
    };
    return Point;
}());
exports.Point = Point;
