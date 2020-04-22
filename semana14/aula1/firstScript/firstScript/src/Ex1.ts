

function calcular(operacao: string, valor1: number, valor2: number): number {
    
    if(operacao === 'soma') {
        return valor1 + valor2
    } else if(operacao === 'subtracao') {
        return valor1 - valor2
    } else if(operacao === 'multiplicacao') {
        return valor1 * valor2
    } else if(operacao === 'divisao') {
        return valor1 / valor2
    } else {
        //erro
    }
    }
    


const resultado = calcular('soma', 1 , 1);
