"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var myPromise = axios_1["default"].get("https://jsonplaceholder.typicode.com/poststss/10");
myPromise
    .then(function (res) {
    console.log(res.data);
})["catch"](function (err) {
    console.error(err);
});
