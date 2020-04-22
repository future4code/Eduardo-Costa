function calcular(operacao, valor1, valor2) {
    if (operacao === 'soma') {
        return valor1 + valor2;
    }
    else if (operacao === 'subtracao') {
        return valor1 - valor2;
    }
    else if (operacao === 'multiplicacao') {
        return valor1 * valor2;
    }
    else if (operacao === 'divisao') {
        return valor1 / valor2;
    }
    else {
        //erro
    }
}
var resultado = calcular('soma', 1, 1);
