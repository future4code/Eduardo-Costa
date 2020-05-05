import * as moment from 'moment';
moment.locale("pt-br")
const formatoData = "DD/MM/YYYY";

//a)

const data1A = moment("20/10/2019", formatoData);
const data2A = moment("10/10/2010", formatoData);
const diffA = data1A.diff(data2A, "days");
console.log("diferença: ", diffA);
console.log("dia da semana - primeira data: ", data1A.format("dddd"));
console.log("dia da semana - segunda data: ", data2A.format("dddd"));

//b)
console.log("-------------------")
const data1B = moment("31/12/2019", formatoData);
const data2B = moment("01/01/2019", formatoData);
const diffB = data1B.diff(data2B , "days");
console.log("diferença: ", diffB);
console.log("dia da semana - primeira data: ", data1B.format("dddd"));
console.log("dia da semana - segunda data: ", data2B.format("dddd"));
console.log("-------------------")

//c)
const data1C = moment("19/08/2010", formatoData);
const data2C = moment("10/12/1995", formatoData);
const diffC = data1C.diff(data2C , "days");
console.log("diferença: ", diffC);
console.log("dia da semana - primeira data: ", data1C.format("dddd"));
console.log("dia da semana - segunda data: ", data2C.format("dddd"));