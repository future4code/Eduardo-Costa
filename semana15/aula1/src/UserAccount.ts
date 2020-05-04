export class UserAccount {

    balance: number;
    accountId: number;
    cpf: number;
    name: string;
    age: number;

    constructor(cpf: number, name: string, age: number) {
        this.balance = 0;
        this.accountId = Date.now();
        this.cpf = cpf;
        this.name = name;
        this.age = age
    }

    getBalance(): number {
        return this.balance
    }
    addBalance(amount: number): void {
        this.balance += amount
    }


}

