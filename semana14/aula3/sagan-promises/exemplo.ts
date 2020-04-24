import { readFile } from "fs";

const myPromise = new Promise((resolve, reject) => {

    const handleFileRead = (err: Error, data: Buffer) => {
        try {
            const fileContent: string = data.toString();
            resolve(fileContent)
        } catch (e) {
            reject(err)
        }
    }
    readFile("meuTextoBonitao.txt", handleFileRead);
})

myPromise
.then((result: string)=>{
    //faz o que você quiser aqui porque deu certo
    console.log(result);
})
.catch((err)=>{
    console.log(err);
})