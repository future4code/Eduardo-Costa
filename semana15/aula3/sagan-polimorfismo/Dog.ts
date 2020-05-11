import { Animal } from "./Animal";

export class Dog extends Animal{
   
    constructor(name: string){
        super(name);
        this.weight = 20;
    }

    public makeSound(): void {
        console.log("AU AU");
    }

    public move(): void {
        console.log("O cachorro correu");
    }

}

