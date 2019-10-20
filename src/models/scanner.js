"use strict";
exports.__esModule = true;
var config_1 = require("../config");
var point_1 = require("./point");
var protocols_1 = require("./protocols");
var Scanner = /** @class */ (function () {
    function Scanner(protocols, scan) {
        this.protocols = protocols;
        this.scan = scan.map(function (el) { return new point_1.Point(el.coordinates, el.enemies, el.allies); }).filter(function (el) { return el.getDistance() <= config_1["default"].maxDistance; });
    }
    Scanner.prototype.calculateNextTarget = function () {
        for (var i = 0; i < this.protocols.length; i += 1) {
            if (!protocols_1["default"][this.protocols[i]]) {
                throw new Error('protocol not found');
            }
            else {
                var protocol = new protocols_1["default"][this.protocols[i]];
                this.scan = protocol.apply(this.scan);
            }
        }
        return this.scan[0].getCoordinatesAsJSON();
    };
    return Scanner;
}());
exports["default"] = Scanner;
