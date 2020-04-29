import {Client} from './Client'
import { Place } from './Place';
import { Residence } from './Residence';
import { Commerce } from './Commerce';
import { Industry } from './Industry';
import { ResidentialClient } from './ResidentialClient';
import { CommercialClient } from './CommercialClient';
import { ClientManager } from './ClientManager';
import { IndustrialClient } from './IndustrialClient';

//Exericio 1
console.log('Exercicio 1:')

const client1: Client = {
    name: "Eduardo",
    registrationNumber: 1,
    consumedEnergy: 100,

    calculateBill: () => {
        return 2;
    }
}

// a. Quais propriedades você conseguiu imprimir? 
console.log(client1.name)
console.log(client1.registrationNumber)
console.log(client1.consumedEnergy)
console.log(client1.calculateBill())

//Teve alguma que não foi possível?
    // Todas foram possíveis
//Por que isso aconteceu?
    //Pois não tinham proteção

//Exercicio 2
console.log('Exercicio 2:')

// a. *Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: `new Place(...)`). 
//Qual foi o erro que o Typescript gerou?*
    //const teste1: Place = new Place()
    //Cannot create an instance of an abstract class.ts(2511)

// b. *Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?*
    //tirar o abstract dela

//Exercicio 3
console.log('Exercicio 3:')

const casa1: Residence = new Residence(4,'123456')
const comercio1: Commerce = new Commerce(5,'456789')
const industria1: Industry = new Industry(50,'789123')

console.log(casa1.getCep())
console.log(comercio1.getCep())
console.log(industria1.getCep())

console.log(casa1.getResidentsquantity())
console.log(comercio1.getFloorsQuantity())
console.log(industria1.getMachinesQuantity())

// Exercicio 4
console.log('Exercicio 4:')

//a. *Que métodos e propriedades essa classe possui? Por quê?*
const clienteResidencial1: ResidentialClient = new ResidentialClient("Maria", (Date.now()), 200,'1111',5,'123321')
console.log(clienteResidencial1.calculateBill())
console.log(clienteResidencial1.consumedEnergy)
console.log(clienteResidencial1.getCep())
console.log(clienteResidencial1.name)
console.log(clienteResidencial1.registrationNumber)

console.log(clienteResidencial1.getCpf())
console.log(clienteResidencial1.getResidentsquantity())

// Exericio 5
console.log('Exercicio 5:')

const clienteComercial1: CommercialClient = new CommercialClient("José Mei", (Date.now()),500,'1111',5,'123321')

// a. *Quais as semelhanças dessa classe com a `ResidentialClient`?*
console.log(clienteComercial1.calculateBill())
console.log(clienteComercial1.consumedEnergy)
console.log(clienteComercial1.getCep())
console.log(clienteComercial1.name)
console.log(clienteComercial1.registrationNumber)

// b. *Quais as diferenças dessa classe com a `ResidentialClient`?*
console.log(clienteComercial1.getCnpj())
console.log(clienteComercial1.getFloorsQuantity())

//Exercicio 6
console.log('Exercicio 6:')

// a. *De* q*ual classe a `IndustrialClient` deve ser filha? Por quê?*
    // Da classe Industry, pois tem as particularidades de um cliente industrial como numero de maquinas

// b. *Que interface a `IndustrialClient` implementa? Por quê?*
    //Client, porque também é um cliente e precisa receber as informações para ser registrado corretamente

// c. *Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters?*
    //porque o cliente final não coloca informações, somente recebe

const industrialClient1: IndustrialClient = new IndustrialClient('Fox industrias',(Date.now()),555,'55',456,'5454') // passar parêmetros



console.log('Exercicio 7:')

const clientManager1: ClientManager = new ClientManager()
clientManager1.registerClient(industrialClient1)
clientManager1.registerClient(clienteComercial1)
clientManager1.registerClient(clienteResidencial1)

console.log('Exercicio 8a:')

console.log(clientManager1.calculateBillOfClient(2545))

console.log('Exercicio 8b:')

console.log(clientManager1.calculateTotalIncome())


console.log('Exercicio 8c:')

clientManager1.printClients()
