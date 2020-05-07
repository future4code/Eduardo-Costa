// Usando a biblioteca moment.js, instancie um objeto para a data 28/07/2019 às 15:30
// a) Determine o seu timestamp
// b) Passe para o formato americano de datas: 07-28-2019 03:30 pm
// c) Escreva a frase: “28/07/2019 é domingo.”

import * as moment from 'moment';

// Configurando que todas as datas criadas com o moment
// daqui em diante serão localizadas para português.
moment.locale("pt-br");

// Instanciando objeto de data pedido
const minhaData = moment("28/07/2019 15:30", "DD/MM/YYYY HH:mm");

// a)
// Imprime na tela o timestamp da data acima em segundos.
console.log("Meu TimeStamp é:", minhaData.unix())

// b)
const minhaDataFormatada = minhaData.format("MM-DD-YYYY hh:mm A");
console.log(minhaDataFormatada);

// c)
const minhaDataFormatadaPortugues = minhaData.format("DD/MM/YYYY [é] dddd")
console.log(minhaDataFormatadaPortugues);