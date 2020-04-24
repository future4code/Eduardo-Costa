"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var myPromise = new Promise(function (resolve, reject) {
    var handleFileRead = function (err, data) {
        try {
            var fileContent = data.toString();
            resolve(fileContent);
        }
        catch (e) {
            reject(err);
        }
    };
    fs_1.readFile("meuTextoBonitao.txt", handleFileRead);
});
myPromise
    .then(function (result) {
    //faz o que você quiser aqui porque deu certo
    console.log(result);
})["catch"](function (err) {
    console.log(err);
});
