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
var Platypus = /** @class */ (function (_super) {
    __extends(Platypus, _super);
    function Platypus(name, pregnancyDuration) {
        var _this = _super.call(this, name) || this;
        _this.weight = 15;
        _this.pregnancyDuration = pregnancyDuration;
        return _this;
    }
    Platypus.prototype.breastFeed = function () {
        console.log("Amamentando!");
    };
    Platypus.prototype.layEggs = function (eggAmount) {
        console.log("Foram colocados " + eggAmount + " ovos");
    };
    Platypus.prototype.makeSound = function () {
        console.log("Aquele barulhinho estranho de ornitorrinco");
    };
    Platypus.prototype.move = function () {
        console.log("Correu! Ou nadou?");
    };
    return Platypus;
}(Animal_1.Animal));
exports.Platypus = Platypus;
