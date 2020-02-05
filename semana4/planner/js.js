let ultimoIdUsado = 0

function geraTarefa() {
    const input = document.getElementById("novat")
    const novoItem = input.value
    const data = document.getElementById("diaDaSemana")
    const diaDaSemana = data.value
    let dia = ""

    if (novoItem === "") {
        alert("Nome da tarefa vazio")
    } else {
        if (diaDaSemana == 'segunda') {
            dia = document.getElementById("segunda")
        } else if (diaDaSemana == 'terca') {
            dia = document.getElementById("terca")
        } else if (diaDaSemana == 'quarta') {
            dia = document.getElementById("quarta")
        } else if (diaDaSemana == 'quinta') {
            dia = document.getElementById("quinta")
        } else if (diaDaSemana == 'sexta') {
            dia = document.getElementById("sexta")
        } else if (diaDaSemana == 'sabado') {
            dia = document.getElementById("sabado")
        } else if (diaDaSemana == 'domingo') {
            dia = document.getElementById("domingo")
        }
    }
    let usarId = ultimoIdUsado + 1
    dia.innerHTML += "<p id='t" + usarId + "' ondblclick='apagar()' onclick='riscar()'> " + "ID: " + usarId + " - " + novoItem + "</p>"
    input.value = ""
    ultimoIdUsado = usarId

}

function limpaTarefas() {
    dia = document.getElementById("domingo")
    dia.innerHTML = ""
    dia = document.getElementById("segunda")
    dia.innerHTML = ""
    dia = document.getElementById("terca")
    dia.innerHTML = ""
    dia = document.getElementById("quarta")
    dia.innerHTML = ""
    dia = document.getElementById("quinta")
    dia.innerHTML = ""
    dia = document.getElementById("sexta")
    dia.innerHTML = ""
    dia = document.getElementById("sabado")
    dia.innerHTML = ""

}

function riscar() {
    event.srcElement.classList.add("risca");
}

function apagar() {
    event.srcElement.classList.add("some");
}