console.log("******Exercícios de interpretação de código******")
    // **Exercícios de interpretação de código**
console.log(" ")
console.log("EXERCÍCIO 1")
console.log("Ver na fonte JS")
    // EXERCÍCIO 1
    /*
    const respostaDoUsuario = prompt("Digite o número que você quer testar?") //Pede para o usuario escrever um número
    const numero = Number(respostaDoUsuario) //converte esse número digitado em tipo número (estava em string antes)

    if(numero % 2 === 0) { //testa se o valor do numero é igual a zero e também se os tipos de campos são iguais
      console.log("Passou no teste.") //mostra no console a mensagem
    } else { //se a condição primaria nao for verdadeira, aplica essa condicao
      console.log("Não passou no teste.")//mostra no console a mensagem
    }
    */

console.log(" ")
console.log("EXERCÍCIO 2")
console.log("Ver na fonte JS")
    // EXERCÍCIO 2
    // a. Serve para capturar o valor de fruta, e então alterar o valor de preco de acordo com a fruta escolhida
    // b. "O preço da fruta Maçã é R$ 2.25"
    // c. gastoTotal =  3.5 + 3.5 + 2.25 + 5 + 5 + 5 + 0.3 //(gastoTotal = 24.55)
    // d. O preço da fruta  Pêra  é  R$  5

console.log(" ")
console.log("EXERCÍCIO 3")
console.log("Ver na fonte JS")
    // EXERCÍCIO 3
    /*
    VM105:13 Uncaught ReferenceError: mensagem is not defined
        at <anonymous>:13:13
    */
    // a variavel mensagem foi criada e definida apenas dentro do escopo filho, e estamos tentando imprimir no escopo pai, que não tem acesso a ela, portanto causa o erro apresentado.

console.log(" ")
console.log(" ")
console.log("******Exercícios de escrita de código******")
console.log(" ")
console.log("EXERCÍCIO 4")
    // **Exercícios de escrita de código**
    // EXERCÍCIO 4
let n1 = Number(prompt("Digite o primeiro número"));
let n2 = Number(prompt("Digite o segundo número"));

console.log("a:")
if (n1 === n2) {
    console.log("Os números são iguais" + n1 + ", " + n2)
} else if (n1 > n2) {
    console.log(n1, n2)
} else {
    console.log(n2, n1)
}

console.log(" ")
console.log("b:")
let n3 = Number(prompt("Digite o terceiro número"));

if (n1 === n2 && n2 === n3) {
    console.log("Os 3 números são iguais" + n1, ", " + n2, ", " + n3)
    console.log("c:")
    console.log("Você digitou 3 números iguais! por favor, recarregue a pagina e insira pelo menos 1 número diferente")
} else if (n1 > n2 && n1 > n3 && n2 > n3) {
    console.log(n1, n2, n3)
} else if (n1 > n2 && n1 > n3 && n2 < n3) {
    console.log(n1, n3, n2)
} else if (n2 > n1 && n2 > n3 && n1 > n3) {
    console.log(n2, n1, n3)
} else if (n2 > n1 && n2 > n3 && n1 < n3) {
    console.log(n2, n3, n1)
} else if (n3 > n1 && n3 > n2 && n1 > n2) {
    console.log(n3, n1, n2)
} else if (n3 > n1 && n3 > n2 && n1 < n2) {
    console.log(n3, n2, n1)
}

console.log(" ")
console.log("EXERCÍCIO 5")
console.log("a.")
console.log("https://educosta85.github.io/f4-aula/uploads/diagrama.jpg")
console.log("https://drive.google.com/open?id=17H01TrJw0Kg0sHtG3fIijfQGCORkMVsu")

console.log(" ")
console.log("b.")
let osso = prompt("Possui ossos? [s/n]");
let pelo;
let racional;
let penas;
let terrestre;
let ambAqu;
let msgFinal;

if (osso === "s") {
    pelo = prompt("Possui pelos? [s/n]");
}
if (pelo === "s") {
    racional = prompt("É racional? [s/n]");
}
if (pelo === "n") {
    penas = prompt("Possui penas? [s/n]");
}
if (penas === "n") {
    terrestre = prompt("É um animal terrestre? [s/n]");
}
if (terrestre === "s") {
    ambAqu = prompt("Passa uma parte da vida em ambiente aquático? [s/n]");
}

if (osso === "s" && pelo === "s" && racional === "s") {
    msgFinal = "Ser humano"
} else if (osso === "s" && pelo === "s" && racional === "n") {
    msgFinal = "Mamífero não humano"
} else if (osso === "s" && pelo === "n" && penas === "s") {
    msgFinal = "Ave"
} else if (osso === "s" && pelo === "n" && penas === "n" && terrestre === "n") {
    msgFinal = "Peixe"
} else if (osso === "s" && pelo === "n" && penas === "n" && terrestre === "s" && ambAqu === "s") {
    msgFinal = "Anfíbio"
} else if (osso === "s" && pelo === "n" && penas === "n" && terrestre === "s" && ambAqu === "n") {
    msgFinal = "Réptil"
} else if (osso === "n") {
    msgFinal = "Invertebrado"
} else {
    msgFinal = "Ocorreu algum erro nas respostas"
}
console.log(msgFinal)