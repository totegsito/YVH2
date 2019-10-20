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
var AssistAlliesProtocol = /** @class */ (function (_super) {
    __extends(AssistAlliesProtocol, _super);
    function AssistAlliesProtocol() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AssistAlliesProtocol.prototype.apply = function (scan) {
        return scan.slice(0).sort(function (a, b) {
            if ((a.getAllies() > 0) && (b.getAllies() === 0)) {
                return -1;
            }
            if ((a.getAllies() === 0) && (b.getAllies() > 0)) {
                return 1;
            }
            return 0;
        });
    };
    return AssistAlliesProtocol;
}(protocol_1["default"]));
exports["default"] = AssistAlliesProtocol;
