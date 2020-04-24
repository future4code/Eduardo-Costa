import { readdir, readFile } from 'fs'
const path: string = './src/textos/'

readdir(path, (err: Error, files: string[]) => {
    if (err) {
        console.log('Erro ao acessar o arquivo ou diretorio',err)
        return
    } else {
        let textao: Promise<string>[] = []
        files.forEach(file => {
            const texto = new Promise<string>((resolve, reject) => {
                readFile(path+file, (err: Error, data: Buffer) => {
                    try {
                        const fileContent: string = data.toString()
                        resolve(fileContent)
                    } catch (e) {
                        reject(err)
                    }
                })
            })
            textao.push(texto)
        })

        Promise.all(textao)
            .then(result => {
                const resultado = result.join()
                console.log(resultado)
            })
            .catch(err => {
                console.log('Erro ao unir os arquivos', err)
            })        
    }
}) 