import { Animal } from "./Animal";
import { Swimmer } from "./Swimmer";

export class Fish extends Animal implements Swimmer{

    swim(){
        
    }

    private color: string;

    constructor(name: string, color: string){
        super(name);
        this.color = color;
        this.weight = 3;
    }

    public makeSound(): void{
        console.log("glub glub");
    }

    public move(): void{
        console.log("O peixe nadou");
    }

}

