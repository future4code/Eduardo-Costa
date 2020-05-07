// Abaixo, há operações envolvendo datas. 
// Realize a operação e também indique a qual dia da semana 
// cada uma das datas abaixo pertence.

// a) 20/10/2019 - 10/10/2010
// b) 31/12/2019 - 01/01/2019
// c) 19/08/2010 - 10/12/1995

import * as moment from 'moment';

// setando a localização para pt-br
moment.locale("pt-br");

const formatoPadrao :string = "DD/MM/YYYY";

// a)

const primeiraDataA = moment("20/10/2019", formatoPadrao);
const segundaDataA = moment("10/10/2010", formatoPadrao);

const diffA :number = primeiraDataA.diff(segundaDataA, "days");

console.log("primeira data:", primeiraDataA.format("dddd"));
console.log("segunda data:", segundaDataA.format("dddd"));
console.log("diferença em dias", diffA);

console.log()
console.log("----------------")

// b)

const primeiraDataB = moment("31/12/2019", formatoPadrao);
const segundaDataB = moment("01/01/2019", formatoPadrao);

const diffB :number = primeiraDataB.diff(segundaDataB, "days");

console.log("primeira data:", primeiraDataB.format("dddd"));
console.log("segunda data:", segundaDataB.format("dddd"));
console.log("diferença em dias", diffB);

console.log()
console.log("----------------")

// b)

const primeiraDataC = moment("19/08/2010", formatoPadrao);
const segundaDataC = moment("10/12/1995", formatoPadrao);

const diffC :number = primeiraDataC.diff(segundaDataC, "days");

console.log("primeira data:", primeiraDataC.format("dddd"));
console.log("segunda data:", segundaDataC.format("dddd"));
console.log("diferença em dias", diffC);