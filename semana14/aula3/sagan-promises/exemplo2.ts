const minhaPromessa: Promise<string> = new Promise((resolve: any, reject: any)=>
{
    setTimeout(() =>{
        resolve("Acabou!");
    }, 2000);

    reject("Esse reject vai rodar antes");
})

minhaPromessa
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.error("Deu erro", error);
})