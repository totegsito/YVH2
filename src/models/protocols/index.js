"use strict";
exports.__esModule = true;
var assistAllies_1 = require("./assistAllies");
var avoidCrossfire_1 = require("./avoidCrossfire");
var avoidMech_1 = require("./avoidMech");
var closestEnemies_1 = require("./closestEnemies");
var furthestEnemies_1 = require("./furthestEnemies");
var prioritizeMech_1 = require("./prioritizeMech");
exports["default"] = {
    'assist-allies': assistAllies_1["default"],
    'avoid-crossfire': avoidCrossfire_1["default"],
    'avoid-mech': avoidMech_1["default"],
    'closest-enemies': closestEnemies_1["default"],
    'furthest-enemies': furthestEnemies_1["default"],
    'prioritize-mech': prioritizeMech_1["default"]
};
