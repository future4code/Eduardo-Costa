import { Animal } from "./Animal";
import { Mammal } from "./Mammal";
import { Oviparous } from "./Oviparous";

export class Platypus extends Animal implements Mammal, Oviparous{

    pregnancyDuration: number;

    constructor(name: string, pregnancyDuration: number){
        super(name);
        this.weight = 15;
        this.pregnancyDuration = pregnancyDuration;
    }

    breastFeed(): void {
        console.log("Amamentando!")
    }

    layEggs(eggAmount: number): void {
        console.log("Foram colocados "+eggAmount+" ovos");
    }

    public makeSound(): void {
        console.log("Aquele barulhinho estranho de ornitorrinco");
    }
    public move(): void {
        console.log("Correu! Ou nadou?")
    }


}