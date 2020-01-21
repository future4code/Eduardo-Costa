var bemvindo = "Bem vindo ";
var final = "!";

function capturar () {
  if (valor.value.includes("@")) {
      bemvindo = bemvindo + document.getElementById('valor').value + final;
      document.getElementById('valorDigitado').innerHTML = bemvindo;
  } else {
      alert("Email inválido");
  }
}