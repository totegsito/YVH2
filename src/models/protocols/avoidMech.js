"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var protocol_1 = require("../protocol");
var enemies_1 = require("../../constants/enemies");
var AvoidMechProtocol = /** @class */ (function (_super) {
    __extends(AvoidMechProtocol, _super);
    function AvoidMechProtocol() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AvoidMechProtocol.prototype.apply = function (scan) {
        return scan.filter(function (el) {
            return el.getEnemyType() !== enemies_1.Enemies.MECH;
        });
    };
    return AvoidMechProtocol;
}(protocol_1["default"]));
exports["default"] = AvoidMechProtocol;
