"use strict";
exports.__esModule = true;
var moment = require("moment");
moment.locale("pt-br");
var minhaData = moment("28/07/2019 15:30", "DD/MM/YYYY HH:mm");
console.log("Meu timestamp é ", minhaData.unix());
console.log("minha data no formato americano", minhaData.format("MM-DD-YYYY hh:mm A"));
console.log("Mostrando os dias: ", minhaData.format("DD/MM/YYYY [é] dddd"));
