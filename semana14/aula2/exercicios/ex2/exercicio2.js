const red = '\u001b[31m';
const blue = '\u001b[34m';

const fs = require('fs');
const newtask = process.argv[3]+"\n"
const fileToSave = process.argv[2]

if(newtask && fileToSave) {
    try {
        fs.appendFileSync(fileToSave, newtask, 'utf8')
        console.log(blue + 'tarefa criada com sucesso: ' + red + newtask)
    } catch (e) {
        console.log(red + e)
    }
} else {
    console.log(red + 'Preciso receber a informação do nome do arquivo para salvar, e também o nome da tarefa para conseguir executar corretamete.')
}