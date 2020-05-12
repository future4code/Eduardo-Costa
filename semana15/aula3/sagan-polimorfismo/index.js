"use strict";
exports.__esModule = true;
var Fish_1 = require("./Fish");
var Owl_1 = require("./Owl");
var Dog_1 = require("./Dog");
var Platypus_1 = require("./Platypus");
var Zoo_1 = require("./Zoo");
var myFish = new Fish_1.Fish("Nemo", "laranja");
myFish.move();
var myOwl = new Owl_1.Owl("Edwiges");
myOwl.move();
var myDog = new Dog_1.Dog("Bolinha");
myDog.move();
var myPlatypus = new Platypus_1.Platypus("Perry", 4);
myPlatypus.layEggs(3);
// console.log(myPlatypus instanceof Platypus);
// console.log(myPlatypus instanceof Animal);
// console.log(myPlatypus instanceof Dog);
var myZoo = new Zoo_1.Zoo();
myZoo.addAnimal(myOwl);
myZoo.addAnimal(myFish);
myZoo.addAnimal(myDog);
myZoo.addAnimal(myPlatypus);
console.log(myZoo);
