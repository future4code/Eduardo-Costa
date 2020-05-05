import { Animal } from "./Animal";

export class Zoo{
    animals: Animal[];

    constructor(){
        this.animals = [];
    }

    addAnimal(animal: Animal): void{
        this.animals.push(animal);
    }
}