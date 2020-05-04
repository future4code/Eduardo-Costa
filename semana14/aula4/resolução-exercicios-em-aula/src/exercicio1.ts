// 29/05/1453 (Queda da constantinopla)
// 14/07/1789 (Revolução Francesa)
// 15/11/1889 (Proclamação da República Brasileira)
// 15/08/1996 (Aniversário do Goli)

const constantinopla: Date = new Date("1453-05-29");
const revFrancesa: Date = new Date("1789-07-14");
const procRep: Date = new Date("1889-11-15");
// forma equivalente de criar um Date
// mas atenção para o mês, eles começam no 0
const goliLindo: Date = new Date(1996, 7, 15);

// Todos os TimeStamps
console.log("Queda da constantinopla", constantinopla.getTime());
console.log("Revolução Francesa", revFrancesa.getTime());
console.log("Proclamação da República Brasileira", procRep.getTime());
console.log("Aniversário do Goli", goliLindo.getTime());

const goliTimeStamp: number = goliLindo.getTime();

// Transforma o TimeStamp de volta em uma data
const goliNiver: Date = new Date(goliTimeStamp)

console.log(goliNiver);