import {JSONFileManager} from "./JSONFileManager";
import {UserAccount} from "./UserAccount";

export class Bank{

    accounts: ?;
    fileManager: ?;

    constructor(?) {
        this.accounts = 
        this.fileManager = 
    }



    createAccount(name: string, cpf: number, age: number):void {
        const newAccount = new UserAccount(cpf, name, age)
    }
} 