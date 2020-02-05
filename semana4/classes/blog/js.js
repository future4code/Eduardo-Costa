class NovoPost {
    constructor(idPost, titulo, autor, conteudo) {
        this.idPost = idPost
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
    }
}

let posts = []
let idUltimoPost = 0

function addPost(titulo, autor, conteudo) {
    idPost = idUltimoPost + 1
    let newp = new NovoPost(idPost, titulo, autor, conteudo)
    idUltimoPost++
    posts.push(newp)
    let titulo2 = document.getElementById('titulo')
    let autor2 = document.getElementById('autor')
    let conteudo2 = document.getElementById('conteudo')
    titulo2.value = ""
    autor2.value = ""
    conteudo2.value = ""
    console.log(posts)
}