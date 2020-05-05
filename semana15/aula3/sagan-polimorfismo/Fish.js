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
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name, color) {
        var _this = _super.call(this, name) || this;
        _this.color = color;
        _this.weight = 3;
        return _this;
    }
    Fish.prototype.swim = function () {
    };
    Fish.prototype.makeSound = function () {
        console.log("glub glub");
    };
    Fish.prototype.move = function () {
        console.log("O peixe nadou");
    };
    return Fish;
}(Animal_1.Animal));
exports.Fish = Fish;
