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
    inserePosts(idPost, newp.titulo, newp.autor, newp.conteudo)
}

function inserePosts(id, titulo, autor, conteudo) {
    let parteDePosts = document.getElementById('mostraposts')
    parteDePosts.innerHTML += "<div class='posts' id='" + id + "'><div class='titulos' id='t" + id + "'><h3>" + titulo + "</h3></div><div class='conteudos' id='c" + id + "'><p>" + conteudo + "</p></div><div class='autor' id='a" + id + "'><p>" + autor + "</p></div></div>"
}