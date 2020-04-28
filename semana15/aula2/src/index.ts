import User from './User'
import Customer from './Customer'
import Employee from './Employee'
import Seller from './Seller'

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

const cliente1 = new Customer("2","aa@b.com","Costa","bbb",'123456')

//Exercicio 3
console.log(cliente1.getCreditCard())
console.log(cliente1.getEmail())
console.log(cliente1.getId())
console.log(cliente1.getName())
console.log(cliente1.purchaseTotal)

// Seria possível imprimir a senha (password) atrelada a essa instância? Por quê
    //nao, pois não tem nenhum método disponivel para isso, e também não é possivel acessar o atributo diretamente pois é privado.

//Exercicio 4 e 5
console.log(usuario1.introduceYourself())
console.log(cliente1.introduceYourself())

//Exercicio 6
const empregado1 = new Employee('1', 'empregado@b.com', 'José', 'ccc', new Date("2000-01-01"), 1000)

// a. *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*
    //3x (uma para o empregado, uma para o cliente e uma para o usuario)

// b. *Imprima as informações dessa instância no terminal. Quais dados são possíveis de serem impressos?*
    console.log(empregado1.getAdmissionDate())
    console.log(empregado1.getBaseSalary())
    console.log(empregado1.getEmail())
    console.log(empregado1.getId())
    console.log(empregado1.getName())
    console.log(empregado1.introduceYourself())

//exercicio 7
console.log(empregado1.calculateTotalSalary())

//Exercicio 8
const vendedor1 = new Seller('1','vendedor@b.com','Edus','ddd',new Date('2005-01-02'),2000)
console.log(vendedor1.calculateTotalSalary())
console.log(vendedor1.getAdmissionDate())
console.log(vendedor1.getBaseSalary())
console.log(vendedor1.getEmail())
console.log(vendedor1.getId())
console.log(vendedor1.getName())
console.log(vendedor1.introduceYourself())

//exercicio 9

//a. Agora, teste o método setter, atualizando esse valor para o que você quiser. 
//É possível imprimir no terminal o valor salesQuantity da instância que você criou? Por quê?
vendedor1.setSalesQuantity(100)


//exercicio 10
// a. *Crie um novo vendedor. 
//Atribua a ele um valor para a `salesQuantity`. 
//Convoque a função `calculateTotalSalary` e  imprima no terminal o valor. 
//O que foi impresso no terminal? Por quê?*
    //foi impresso o valor da soma do salario base, + beneficios + vendas*5, pois foi isso que coloquei na formula para fazer.
console.log(vendedor1.calculateTotalSalary())
vendedor1.setSalesQuantity(50)
console.log(vendedor1.calculateTotalSalary())

