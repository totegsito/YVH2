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
var ClosestEnemiesProtocol = /** @class */ (function (_super) {
    __extends(ClosestEnemiesProtocol, _super);
    function ClosestEnemiesProtocol() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClosestEnemiesProtocol.prototype.apply = function (scan) {
        return scan.slice(0).sort(function (a, b) {
            var distanceToA = a.getDistance();
            var distanceToB = b.getDistance();
            if (distanceToA === distanceToB) {
                return 0;
            }
            else {
                return distanceToA < distanceToB ? -1 : 1;
            }
        });
    };
    return ClosestEnemiesProtocol;
}(protocol_1["default"]));
exports["default"] = ClosestEnemiesProtocol;
