function limpaCadastro() {
    let campo = document.getElementById("valor")
    campo.value = ""
    campo = document.getElementById("descricao")
    campo.value = ""
    campo = document.getElementById("tipo")
    campo.value = ""
}

function limpaFiltro() {
    let campo = document.getElementById("valorMax")
    campo.value = ""
    campo = document.getElementById("valorMin")
    campo.value = ""
    campo = document.getElementById("tipoF")
    campo.value = ""
}
class Despesa {
    constructor(valor, descricao, tipo) {
        this.valor = valor
        this.descricao = descricao
        this.tipo = tipo
    }
}
let despesas = []

function cadastraDespesa(valor, descricao, tipo) {
    if ((valor != "") && (descricao != "") && (tipo != "")) {
        let nDesp = new Despesa(valor, descricao, tipo)
        despesas.push(nDesp)
        limpaCadastro()
    } else {
        alert('Verifique se todos os campos estão preenchidos')
    }
}

function geraExtrato(array) {
    extrato = document.getElementById("mostradespesas")
    extrato.innerHTML = ''
    for (let i = 0; i <= array.length; i++) {
        let tipo2 = array[i].tipo
        let valor2 = array[i].valor
        let descricao2 = array[i].descricao
        extrato.innerHTML += '<div class="despesa"><p>' + tipo2 + " - " + valor2 + " - " + descricao2 + '</p></div>'
    }
}