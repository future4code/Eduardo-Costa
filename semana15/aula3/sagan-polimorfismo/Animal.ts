export abstract class Animal {
    protected name: string;
    protected weight: number;

    constructor(name: string){
        this.name = name;
    }

    public eat(quantity: number): void{
        this.weight+=quantity;
    }

    public abstract makeSound(): void
    public abstract move(): void
}


