const red = '\u001b[31m';
const blue = '\u001b[34m';


const operacao = process.argv[2]
const n1 = Number(process.argv[3])
const n2 = Number(process.argv[4])

if (operacao && n1 && n2) {
    if (operacao === 'add'){
        console.log(n1+n2)
    } else if (operacao === 'sub'){
        console.log(n1-n2)
    } else if (operacao === 'mult'){
        console.log(n1*n2)
    } else if (operacao === 'div'){
        console.log(n1/n2)
    } else {
        console.log(red + 'Operações conhecidas: add | sub | mult | div')
    }
} else {
    console.log(red + 'Preciso receber uma operacao e 2 parametros para executar corretamente')
}