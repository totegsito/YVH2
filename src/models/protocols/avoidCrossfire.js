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
var AvoidCrossfireProtocol = /** @class */ (function (_super) {
    __extends(AvoidCrossfireProtocol, _super);
    function AvoidCrossfireProtocol() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AvoidCrossfireProtocol.prototype.apply = function (scan) {
        return scan.filter(function (el) {
            return el.getAllies() === 0;
        });
    };
    return AvoidCrossfireProtocol;
}(protocol_1["default"]));
exports["default"] = AvoidCrossfireProtocol;
