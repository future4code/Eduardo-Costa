import { Animal } from "./Animal";

export class Owl extends Animal{

    constructor(name: string){
        super(name);
        this.weight = 10;
    }

    public makeSound(): void {
        console.log("HU HU");
    }

    public move(): void{
        console.log("A coruja voou");
    }

}