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
var Animal_1 = require("./Animal");
var Owl = /** @class */ (function (_super) {
    __extends(Owl, _super);
    function Owl(name) {
        var _this = _super.call(this, name) || this;
        _this.weight = 10;
        return _this;
    }
    Owl.prototype.makeSound = function () {
        console.log("HU HU");
    };
    Owl.prototype.move = function () {
        console.log("A coruja voou");
    };
    return Owl;
}(Animal_1.Animal));
exports.Owl = Owl;
