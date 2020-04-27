import * as fs from 'fs';
import { readFileSync } from 'fs'
const accountsDB: string = 'accounts.json'

type userAccount = {
    name: string,
    dateOfBirth: Date,
    cpf: number,
    balance: number
}

export function createAccount(newAccount: userAccount) {
    const today = new Date().getUTCFullYear()
    const birthDate = new Date(newAccount.dateOfBirth).getUTCFullYear()
    const age = today - birthDate
    if (age >= 18) {
        try {
            fs.appendFileSync(accountsDB, JSON.stringify(newAccount), 'utf8')
            console.log('Conta criada com sucesso')
        } catch (e) {
            console.log(e)
        }
    } else {
        console.log('O usuario deve ser maior de 18 anos para poder criar uma conta.')
    }
}

export const showAccounts = (() => { console.log(readAccounts()) })

export function readAccounts() {
    try {
        const data = fs.readFileSync(accountsDB, 'utf8')
        return (data)
    } catch (err) {
        console.log('Erro ao ler informações do arquivo de contas')
        return (err)
    }
}



