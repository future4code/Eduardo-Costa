var minhaPromessa = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Minha operação durou 2 segundos");
        resolve("Acabou!");
    }, 2000);
    reject("Esse reject vai rodar antes");
});
minhaPromessa
    .then(function (result) {
    console.log(result);
})["catch"](function (error) {
    console.error("Deu erro", error);
});
