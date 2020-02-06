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
        geraExtrato(despesas)
        somaArray(despesas)
    } else {
        alert('Verifique se todos os campos estão preenchidos')
    }
}

function geraExtrato(array) {
    extrato = document.getElementById("mostradespesas")
    extrato.innerHTML = ''
    for (let i = 0; i < array.length; i++) {
        let tipo2 = array[i].tipo
        let valor2 = array[i].valor
        let descricao2 = array[i].descricao
        extrato.innerHTML += '<div class="despesa"><p>' + tipo2 + " - " + valor2 + " - " + descricao2 + '</p></div>'
    }
}

function filtraDespesa(tipo, vMax, vMin, arrayDespesas) {
    const despesasFiltradas = arrayDespesas.filter(
        (item, index, array) => {
            return (item.tipo == tipo) && (item.valor <= vMax) && (item.valor >= vMin)
        }
    )
    geraExtrato(despesasFiltradas)
    somaArray(despesasFiltradas)
}

function somaArray(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        let novoValor = Number(array[i].valor)
        total += novoValor
    }
    soma = document.getElementById("mostrasoma")
    soma.innerHTML = '<h5 id="mostrasoma">Valor total: ' + total + '</h5>'
}