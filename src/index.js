"use strict";
exports.__esModule = true;
var restify = require("restify");
var config_1 = require("./config");
var scanner_1 = require("./models/scanner");
var respond = function (req, res, next) {
    var _a = req.body, scan = _a.scan, protocols = _a.protocols;
    if (!scan) {
        next(new Error('Missing scan property'));
    }
    else {
        var scanner = new scanner_1["default"](protocols, scan);
        var result = scanner.calculateNextTarget();
        res.send(result);
    }
};
exports.server = restify.createServer({
    name: 'Seedtag test',
    version: '0.1.0'
});
exports.server.use(restify.plugins.bodyParser());
exports.server.post('/radar', respond);
exports.server.listen(config_1["default"].port, config_1["default"].host, function () {
    console.log('%s listening at %s', exports.server.name, exports.server.url);
});
