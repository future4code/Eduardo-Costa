import * as fs from 'fs';
import {createAccount, readAccounts, showAccounts} from './functions'

createAccount(
    {
        name: 'Eduardo',
        dateOfBirth: new Date('07/13/1985'),
        cpf: 1,
        balance: 0
    }
)

showAccounts()


