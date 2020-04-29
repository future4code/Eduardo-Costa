import { Fish } from "./Fish";
import { Owl } from "./Owl";
import { Dog } from "./Dog";
import { Platypus } from "./Platypus";
import { Animal } from "./Animal";
import { Zoo } from "./Zoo";

const myFish = new Fish("Nemo", "laranja");
myFish.move();

const myOwl = new Owl("Edwiges");
myOwl.move()

const myDog = new Dog("Bolinha");
myDog.move();

const myPlatypus = new Platypus("Perry", 4);
myPlatypus.layEggs(3);

// console.log(myPlatypus instanceof Platypus);
// console.log(myPlatypus instanceof Animal);
// console.log(myPlatypus instanceof Dog);

const myZoo = new Zoo();
myZoo.addAnimal(myOwl);
myZoo.addAnimal(myFish);
myZoo.addAnimal(myDog);
myZoo.addAnimal(myPlatypus);

console.log(myZoo);