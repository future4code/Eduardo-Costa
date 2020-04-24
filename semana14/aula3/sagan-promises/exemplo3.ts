const promise1: Promise<number> = new Promise((resolve, reject)=>{
    setTimeout(()=>{reject("Deu ruim na promise 1, desculpa :(")}, 1000);
})

const promise2: Promise<number> = new Promise((resolve, reject)=>{
    setTimeout(()=>{reject("Deu ruim na promise 2, desculpa :(")}, 4000);
})

const promise3: Promise<number> = new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve(15)}, 5000);
})

Promise.all([promise1, promise2, promise3])
.then(
    (result)=>{
        console.log("Olha minhas promises bem aqui: ", result);
    }
)
.catch((err)=>{
    console.error("Não consegui buscar todas as promises: ", err)
})