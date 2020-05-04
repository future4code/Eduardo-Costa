"use strict";
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function (quantity) {
        this.weight += quantity;
    };
    return Animal;
}());
exports.Animal = Animal;
