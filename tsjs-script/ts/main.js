"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("./chapter/test");
var fnItem = function (object) {
    var data = (0, test_1.item)({
        age: 25,
        id: " string "
    });
    console.log(data);
    return object;
};
fnItem({ id: "itemFunc", histLogin: 202409240529 }).id;
