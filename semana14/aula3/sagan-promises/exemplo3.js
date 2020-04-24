var promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () { reject("Deu ruim na promise 1, desculpa :("); }, 1000);
});
var promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () { reject("Deu ruim na promise 2, desculpa :("); }, 4000);
});
var promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () { resolve(15); }, 5000);
});
Promise.all([promise1, promise2, promise3])
    .then(function (result) {
    console.log("Olha minhas promises bem aqui: ", result);
})["catch"](function (err) {
    console.error("Não consegui buscar todas as promises: ", err);
});
