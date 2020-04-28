import User from './User'
import Customer from './Customer'

// Exercicio 1
// a. *Seria possível imprimir a senha (`password`) atrelada a essa instância?*
    //sim, desde que chamado da propria instancia, pois o password é private.
    //exatamente da forma que esta o código, não é possivel imprimir o password.

// b. *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*
    //uma vez

// Exercicio 2
// a. *Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa no terminal?*
    //1x

// b. *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?*
    //1x


const usuario1 = new User('1','a@b.com',"Eduardo",'aaa')

const cliente1 = new Customer("1","a@b.com","Costa","bbb",'123456')
