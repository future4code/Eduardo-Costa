import axios, { AxiosResponse } from "axios";

let ids: string[] = []
let varComment: string = ``

if(process.argv[2] === 'help'){
    console.log(`
    comandos aceitos:
    getPost: Retorna os detalhes do post (ex. npm run getPost 10)
    getPostComments: Retorna os detalhes dos comentarios do post (ex. npm run getPostComments 10)
    getPosts: Retorna os detalhes dos posts informados (podem ser quantos quiser) (ex. npm run getPost 10)
    Também é possível rodar o comando sem prefixo, informando somente o numero dos posts que deseja saber o titulo (ex. pm run 10 20 30 21 25)
    `)
}

if (process.argv[2] === 'getPost') {
    ids.push(process.argv[3])
} else if ((process.argv[2] === 'getPosts') || (process.argv[2] === 'getPostComments')) {
    let item: number = process.argv.length
    for (let i: number = 3; i < item; i++) {
        ids.push(process.argv[i])
    }
    if (process.argv[2] === 'getPostComments') {
        varComment = `/comments`
    }
} else {
    let item: number = process.argv.length
    for (let i: number = 2; i < item; i++) {
        ids.push(process.argv[i])
        console.log(i)
    }
}

ids.forEach(id => {
    const myPromise: Promise<AxiosResponse> = axios.get(`https://jsonplaceholder.typicode.com/posts/${id}${varComment}`)

    myPromise
        .then((res) => {
            if ((process.argv[2] === 'getPost') || (process.argv[2] === 'getPosts') || (process.argv[2] === 'getPostComments')) {
                console.log(`Post ID ${id}:`, res.data);
            } else {
                console.log(`Titulo do ID ${id}:`, res.data.title);
            }
        }).catch((err) => {
            console.error(`Erro no ID: ${id} - `, err.response.statusText);
        });
})

