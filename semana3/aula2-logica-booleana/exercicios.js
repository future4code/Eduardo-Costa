// **Exercícios de interpretação de código**
console.log(">>> Exercícios de interpretação de código <<< ");
console.log("Acesse o conteúdo do arquivo exercicios.js para ver as respostas ");
console.log(" ");
// Exercicio 1:
// a.  false
// b.  false
// c.  true
// d.  false
// e.  boolean


// Exercicio 2:
// a. Array é uma coleção de valores, declarados por [] em JS
// b. o index inicial do array é 0.
// c. o comando array.length retorna o tamanho do array
// d.
// I.  undefined
// II.  null
// III.  11
// IV.  3  e  4  (não consegui compreender o motivo neste caso)
// V.  19  e  9
// VI.  3
// VII.  1


// **Exercícios de escrita de código**
console.log(">>> Exercícios de escrita de código <<< ");
console.log(" ");

let GRAUS_FAHRENHEIT = 0;
let GRAUS_CELSIUS = 0;
let KELVIN = 0;

// 1 a.
GRAUS_FAHRENHEIT = 77;
console.log("1) a) Calcule e mostre o valor de " + GRAUS_FAHRENHEIT + "°F em  K:");
KELVIN = 0;
(KELVIN) = (GRAUS_FAHRENHEIT - 32) * 5 / 9 + 273.15;
console.log(GRAUS_FAHRENHEIT + "°F" + "em KELVIN é " + KELVIN + "K");
console.log(" ");

// 1 b.
GRAUS_CELSIUS = 80;
console.log("1) b) Calcule e mostre o valor de " + GRAUS_CELSIUS + "°C em °F:");
GRAUS_FAHRENHEIT = 0;
GRAUS_FAHRENHEIT = GRAUS_CELSIUS * 9 / 5 + 32;
console.log(GRAUS_CELSIUS + "°C" + " em °F é " + GRAUS_FAHRENHEIT + "°F");
console.log(" ");

// 1 c.
GRAUS_CELSIUS = 30;
console.log("1) c) Calcule e mostre o valor de " + GRAUS_CELSIUS + "°C em °F e K:");
GRAUS_FAHRENHEIT = 0;
KELVIN = 0;
GRAUS_FAHRENHEIT = GRAUS_CELSIUS * 9 / 5 + 32;
(KELVIN) = (GRAUS_FAHRENHEIT - 32) * 5 / 9 + 273.15;
console.log(GRAUS_CELSIUS + "°C" + " em °F é " + GRAUS_FAHRENHEIT + "°F");
console.log(GRAUS_CELSIUS + "°C" + " em K é " + KELVIN + "K");
console.log(" ");
console.log(" ");


// 1 d.
let txt1 = "Insira o valor de °C para ser convertido em K e °F:";
GRAUS_CELSIUS = prompt(txt1);
let resposta1 = GRAUS_CELSIUS;
console.log("1) d) Calcule e mostre o valor de " + GRAUS_CELSIUS + "°C em °F e K:");
GRAUS_FAHRENHEIT = 0;
KELVIN = 0;
GRAUS_FAHRENHEIT = GRAUS_CELSIUS * 9 / 5 + 32;
(KELVIN) = (GRAUS_FAHRENHEIT - 32) * 5 / 9 + 273.15;
console.log(GRAUS_CELSIUS + "°C" + " em °F é " + GRAUS_FAHRENHEIT + "°F");
console.log(GRAUS_CELSIUS + "°C" + " em K é " + KELVIN + "K");
console.log(" ");
console.log(" ");


// 2
console.log("Exercicio 2:");
console.log(" ");
let msgAlerta = alert("Preciso que responda a + 4 perguntas para me ajudar a fazer o exercicio 2, ok? é rapido, prometo!");
let txt2 = "Qual seu nome?";
let txt3 = "Qual sua idade?";
let txt4 = "Onde você mora?";
let txt5 = "Qual sua cor preferida?";
let resposta2 = prompt(txt2);
let resposta3 = prompt(txt3);
let resposta4 = prompt(txt4);
let resposta5 = prompt(txt5);


console.log("Respostas do exercício 2:");
console.log("A pergunta 1 foi: " + txt1);
console.log("Você respondeu: " + resposta1);
console.log(" ");
console.log("A pergunta 2 foi: " + txt2);
console.log("Você respondeu: " + resposta2);
console.log(" ");
console.log("A pergunta 3 foi: " + txt3);
console.log("Você respondeu: " + resposta3);
console.log(" ");
console.log("A pergunta 4 foi: " + txt4);
console.log("Você respondeu: " + resposta4);
console.log(" ");
console.log("A pergunta 5 foi: " + txt5);
console.log("Você respondeu: " + resposta5);
console.log(" ");

// 3
console.log("Exercicio 3:");
console.log(" ");

let custoEnergia = 0.05;
let consumoMensal = 280;
console.log("Considerando o custo do KW/h da energia elétrica em R$" + custoEnergia);
console.log("e tambem o consumo mensal de " + consumoMensal + "kw observado em sua residência este mes");

let valorAPagar = custoEnergia * consumoMensal;
console.log("Estamos informando que o valor a pagar é de R$ " + valorAPagar);

let percentualDesconto = 0.15;
console.log("Lembre-se que pagando antecipadamente você tem " + 100 * percentualDesconto + "% de desconto");
let valorAPagarComDesconto = valorAPagar - (valorAPagar * percentualDesconto);
console.log("Aproveite o desconto e pague apenas R$ " + valorAPagarComDesconto);

console.log("3) a) " + valorAPagar);
console.log("3) b) " + valorAPagarComDesconto);
console.log(" ");
console.log(" ");


// // DESAFIOS EXTRAS
console.log(">>> DESAFIOS EXTRAS <<< ");
// a.
console.log("a. Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg");
let lb = 20;
let kg;
(kg) = lb / 2.2046;
console.log("Resposta:");
console.log(lb + "lb equivalem a " + kg + "kg");
console.log(" ");

// b.
console.log("b. Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg");
let oz = 10.5;
kg = 0;
(kg) = oz / 33.594;
console.log("Resposta:");
console.log(oz + "oz equivalem a " + kg + "kg");
console.log(" ");

// c.
console.log("c. Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m");
let mi = 100;
let mt = 0;
(mt) = mi * 1609.34;
console.log("Resposta:");
console.log(mi + "mi equivalem a " + mt + "m");
console.log(" ");


// g.
console.log("g. Escolha ao menos um dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter.");
mi = prompt("Quantas milhas deseja converter em metros?");
mt = 0;
(mt) = mi * 1609.34;
console.log("Resposta:");
console.log(mi + "mi equivalem a " + mt + "m");
console.log(" ");