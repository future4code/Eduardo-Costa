const arrayz = [1, 2, 3, 4, 5, 6]

const pessoa = {
    nome: "José da Silva",
    idade: 30,
    email: "ze@zinho.com",
    endereco: "Rua sobe e desce e nunca aparece, 50"
}
const pessoas = [
    { nome: "Pedro", idade: 20 },
    { nome: "João", idade: 10 },
    { nome: "Paula", idade: 12 },
    { nome: "Artur", idade: 89 }
]
const pessoasParque = [
    { nome: "Paula", idade: 12, altura: 1.8 },
    { nome: "João", idade: 20, altura: 1.3 },
    { nome: "Pedro", idade: 15, altura: 1.9 },
    { nome: "Luciano", idade: 22, altura: 1.8 },
    { nome: "Artur", idade: 10, altura: 1.2 },
    { nome: "Soter", idade: 70, altura: 1.9 }
]
const consultas = [
    { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
    { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
    { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
    { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

function preencheResposta(pergunta, resposta, codigo, img) {
    let html = document.getElementById('conteudo')
    html.innerHTML = ""
    html.innerHTML += '<h4>' + pergunta + '</h4>'
    html.innerHTML += '<p>' + resposta + '</p>'
    html.innerHTML += '<div class="codigo"><code>' + codigo + '</code></div>'
    html.innerHTML += '<img id="img-conteudo" src="./imgs/' + img + '.png" alt="' + resposta + '">'
    console.log(pergunta)
    console.log(resposta)
}

function ic1() {
    let pergunta = "Interpretação de código - Ex1 - Analisar trechos de código e explicar"
    let resposta = "Primeiro é declarada a funcão conversorDeMoeda que precisa receber um parâmetro para executar. Essa função vai criar uma variável local e solicitar ao usuário o preenchimento do valor da cotação do dolar, Então essa função vai retornar um texto com o resultado da conta em reais. Depois é criada uma variavel meuDinheiro que vai chamar a função de conversão para 100 dolares.E então, é mostrado no console o resultado da conversão de 100 dolares. Na prática, calcula a conversão de 100 dolares."
    let img = "ic1"
    let codigo = ""
    preencheResposta(pergunta, resposta, codigo, img)
}

function ic2() {
    let pergunta = "Interpretação de código - Ex2 - Analisar trechos de código e explicar"
    let resposta = "Primeiro é declarada a função que vai receber o tipo de investimento e o valor, e então multiplicar de acordo com o tipo escolhido e retornar o valor após o investimento. Então essa função é chamada para investir 150 em ações, e também 200 em tesouro direto. Ao final, mostra no console 165 e TIPO DE INVESTIMENTO INFORMADO INCORRETO, pois tesouro direto não existe na lista de casos abrangidos pela função de conversão. Na prática, calcula o valor de retorno para 2 investimentos com valores e tipos diferentes. "
    let img = "ic2"
    let codigo = ""
    preencheResposta(pergunta, resposta, codigo, img)
}

function ic3() {
    let pergunta = "Interpretação de código - Ex3 - Analisar trechos de código e explicar"
    let resposta = "É declarado 3 arrays, sendo 2 vazios. Depois é criada um laço For qie varre cada item do array numeros, e se for par adiciona ao array, e se não for, adiciona ao array2. Ao final, Mostra 3 mensagens no console: Quantidade de valores no array numeros, quantidade de itens no array 1 e 2. Na prática, conta quantos números tem na principal, e quantos são pares e quantos não são."
    let img = "ic3"
    let codigo = ""
    preencheResposta(pergunta, resposta, codigo, img)
}

function ic4() {
    let pergunta = "Interpretação de código - Ex4 - Analisar trechos de código e explicar"
    let resposta = "É declarado um array e 2 variaveis. Depois um laço For of percorre cada item do array numeros e testa se o numero é menor que a variavel número1, se for assume o valor como novo valor da variavel numero1. Também testa se o numero é maior que o valor da variavel número2, assumindo o valor caso true. Ao final, mostra os valores das variaveis numero1 e numero2. Na prática, descobriu o maior e o menor valor contido no array."
    let img = "ic4"
    let codigo = ""
    preencheResposta(pergunta, resposta, codigo, img)
}

function lp1() {
    let pergunta = "Lógica de programação - Ex1 - Cite 3 maneiras de se percorrer/iterar uma lista. Faça um programa para exemplificar."
    let resposta = "Usando FOR, FOR OF e WHILE. o programa esta logando no console e na imagem abaixo."
    let img = "lp1"
    let codigo = ""
    preencheResposta(pergunta, resposta, codigo, img)

    let arrayexemplo = [10, 20, 30, 40, 50]
    lp1For()
    lp1ForOf()
    lp1While()

    function lp1For() {
        for (let i = 0; i < arrayexemplo.length; i++) {
            console.log('Exemplo usando FOR: ' + i + ' de ' + arrayexemplo.length + ' - Valor: ' + arrayexemplo[i])
        }
    }

    function lp1ForOf() {
        for (let i of arrayexemplo) {
            console.log('Exemplo usando FOR OF: ' + i)
        }
    }

    function lp1While() {
        let i = 0
        while (i < arrayexemplo.length) {
            console.log('Exemplo usando WHILE: ' + i + ' de ' + arrayexemplo.length + ' - Valor: ' + arrayexemplo[i])
            i++
        }
    }
}

function lp2a() {
    let pergunta = "Lógica de programação - Ex2a - Sem rodar nenhum código, diga quais são os valores das expressões lógicas abaixo:"
    let resposta = "Resposta: FALSE"
    let img = "lp2"
    let codigo = "booleano1 && booleano2 && !booleano4"
    preencheResposta(pergunta, resposta, codigo, img)
}

function lp2b() {
    let pergunta = "Lógica de programação - Ex2b - Sem rodar nenhum código, diga quais são os valores das expressões lógicas abaixo:"
    let resposta = "Resposta: FALSE"
    let img = "lp2"
    let codigo = "(booleano1 && booleano2) || !booleano3"
    preencheResposta(pergunta, resposta, codigo, img)
}

function lp2c() {
    let pergunta = "Lógica de programação - Ex2c - Sem rodar nenhum código, diga quais são os valores das expressões lógicas abaixo:"
    let resposta = "Resposta: FALSE"
    let img = "lp2"
    let codigo = "(booleano2 || booleano3) && (booleano4 || booleano1)"
    preencheResposta(pergunta, resposta, codigo, img)
}

function lp2d() {
    let pergunta = "Lógica de programação - Ex2d - Sem rodar nenhum código, diga quais são os valores das expressões lógicas abaixo:"
    let resposta = "Resposta: TRUE"
    let img = "lp2"
    let codigo = "!(booleano2 && booleano3) || !(booleano1 && booleano3)"
    preencheResposta(pergunta, resposta, codigo, img)
}

function lp2e() {
    let pergunta = "Lógica de programação - Ex2e - Sem rodar nenhum código, diga quais são os valores das expressões lógicas abaixo:"
    let resposta = "Resposta: TRUE"
    let img = "lp2"
    let codigo = "!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)"
    preencheResposta(pergunta, resposta, codigo, img)
}

function lp3() {
    let pergunta = "Lógica de programação - Ex3 - Escrever programa que gere N números pares"
    let resposta = "O código do colega não funciona, pois estão faltando elementos de incremento na percussão, adição dos itens encontrados no array, condição de comparação, etc."
    let img = "lp3"
    let codigo = ""
    preencheResposta(pergunta, resposta, codigo, img)
    let qtdNPares = Number(prompt("Digite a quantidade de números pares que precisa"))
    let html = document.getElementById('conteudo')
    let arrayDePares = []
    let valorX = 0
    while (arrayDePares.length < qtdNPares) {
        // debugger
        if (valorX % 2 === 0) {
            arrayDePares.push(valorX)
        }
        valorX++
    }
    console.log(arrayDePares)
    html.innerHTML += '<p>Números: ' + arrayDePares + '</p>'
}

function lp4() {
    let pergunta = "Lógica de programação - Ex4 - Classificação dos triângulos"
    let resposta = "De acordo com as medidas informadas:"
    let img = "lp4"
    let codigo = ""
    preencheResposta(pergunta, resposta, codigo, img)
    classificaTriangulo()

    function classificaTriangulo() {
        m1 = Number(prompt("Insira a medida do angulo 1"))
        m2 = Number(prompt("Insira a medida do angulo 2"))
        m3 = Number(prompt("Insira a medida do angulo 3"))
        let html = document.getElementById('conteudo')
        if ((m1 == m2) && (m1 == m3)) {
            console.log("M1: " + m1 + ", M2: " + m2 + " M3: " + m3 + " TRIÂNGULO EQUILÁTERO")
            html.innerHTML += '<p>M1: ' + m1 + '</p>'
            html.innerHTML += '<p>M2: ' + m2 + '</p>'
            html.innerHTML += '<p>M3: ' + m3 + '</p>'
            html.innerHTML += '<h4>TRIÂNGULO EQUILÁTERO</h4>'
        } else
        if ((m1 == m2) && (m1 != m3)) {
            console.log("M1: " + m1 + ", M2: " + m2 + " M3: " + m3 + " TRIÂNGULO ISÓSCELES")
            html.innerHTML += '<p>M1: ' + m1 + '</p>'
            html.innerHTML += '<p>M2: ' + m2 + '</p>'
            html.innerHTML += '<p>M3: ' + m3 + '</p>'
            html.innerHTML += '<h4>TRIÂNGULO ISÓSCELES</h4>'
        } else {
            console.log("M1: " + m1 + ", M2: " + m2 + " M3: " + m3 + " TRIÂNGULO ESCALENO")
            html.innerHTML += '<p>M1: ' + m1 + '</p>'
            html.innerHTML += '<p>M2: ' + m2 + '</p>'
            html.innerHTML += '<p>M3: ' + m3 + '</p>'
            html.innerHTML += '<h4>TRIÂNGULO ESCALENO</h4>'
        }

    }
}

function lp5() {
    let pergunta = "Lógica de programação - Ex5 - Numeros"
    let resposta = ""
    let img = "lp5"
    let codigo = ""
    preencheResposta(pergunta, resposta, codigo, img)
    n1 = Number(prompt("Insira o primeiro número"))
    n2 = Number(prompt("Insira o segundo número"))
    let html = document.getElementById('conteudo')
    console.log("ENTRADA: " + n1 + " e " + n2)
    html.innerHTML += '<p>ENTRADA: ' + n1 + ' e ' + n2 + '</p>'

    if (n1 > n2) {
        console.log("o número " + n1 + " é maior que o número " + n2)
        html.innerHTML += "<p>o número " + n1 + " é maior que o número " + n2 + "</p>"
    } else {
        console.log("o número " + n2 + " é maior que o número " + n1)
        html.innerHTML += "<p>o número " + n2 + " é maior que o número " + n1 + "</p>"
    }
    if (n1 % n2 === 0) {
        console.log("o número " + n1 + " é divisivel sem sobras pelo número " + n2)
        html.innerHTML += "<p>o número " + n1 + " é divisivel sem sobras pelo número " + n2 + "</p>"
    } else {
        console.log("o número " + n1 + " não é divisivel sem sobras pelo número " + n2)
        html.innerHTML += "<p>o número " + n1 + " NÃO é divisivel sem sobras pelo número " + n2 + "</p>"
    }
    if (n2 % n1 === 0) {
        console.log("o número " + n2 + " é divisivel sem sobras pelo número " + n1)
        html.innerHTML += "<p>o número " + n2 + " é divisivel sem sobras pelo número " + n1 + "</p>"
    } else {
        console.log("o número " + n2 + " não é divisivel sem sobras pelo número " + n1)
        html.innerHTML += "<p>o número " + n2 + " não é divisivel sem sobras pelo número " + n1 + "</p>"
    }
    diferenca = Math.abs(n1 - n2)
    console.log("A diferença entre eles é " + diferenca)
    html.innerHTML += "<p>A diferença entre eles é " + diferenca + "</p>"
}

function f1() {
    let pergunta = "Funções - Ex1 - Escreva uma função que receba um array de números e imprima na tela o segundo maior e o segundo menor número. Em seguida, invoque essa função"
    let resposta = ""
    let img = "f1"
    let codigo = ""
    preencheResposta(pergunta, resposta, codigo, img)
    let html = document.getElementById('conteudo')
    arrayexemplo = [22, 66, 57, 89, 1, 5, 7, 4, 64, 99, 3, 555, 666, 520, 345]

    function maiorEMenor(array) {
        let maior = array[0]
        let menor = array[0]
        for (item of array) {
            if (item > maior) {
                maior = item
            }
            if (item < menor) {
                menor = item
            }
        }
        console.log("Array: " + arrayexemplo)
        console.log("Maior: " + maior)
        console.log("Menor: " + menor)
        html.innerHTML += "<p>Array: " + arrayexemplo + "</p>"
        html.innerHTML += "<p>Maior: " + maior + "</p>"
        html.innerHTML += "<p>Menor: " + menor + "</p>"
    }
    maiorEMenor(arrayexemplo)
}

function f2() {
    let pergunta = "Funções - Ex2 - Escreva uma função que receba um array de números e imprima na tela o segundo maior e o segundo menor número. Em seguida, invoque essa função"
    let resposta = ""
    let img = "f2"
    let codigo = 'alerta = () => { alert("Hello Future4") }'
    preencheResposta(pergunta, resposta, codigo, img)

    let alerta = () => { alert("Hello Future4") }
    let x = alerta()
}

function ob1() {
    let pergunta = "Objetos - Ex1 - 1. Explique com as suas palavras o que são e quando podemos/devemos utilizar arrays e objetos."
    let resposta = "Objetos são estruturas multi funções, que podem receber diversos tipos de outras estruturas como outros objetos, funcoes, arrays, etc. Arrays são coleções de dados que servem para armazenamento de informações. "
    let img = "sem"
    let codigo = ""
    preencheResposta(pergunta, resposta, codigo, img)
}

function criaRetangulo(l1, l2) {
    const obj = {
        largura: l1,
        altura: l2,
        perimetro: (2 * (l1 + l2)),
        area: (l1 * l2)
    }
    return obj
}

function ob2() {
    let pergunta = "Objetos - Ex2 - Crie uma função chamada criaRetangulo que recebe como parâmetros dois lados (lado1 e lado2)..."
    let resposta = "Ja foi criado um objeto. Pode criar outro chamando a funcão criaRetangulo(x,y)"
    let img = "sem"
    let codigo = criaRetangulo(100, 200)
    preencheResposta(pergunta, resposta, codigo, img)
    console.log("Altura: " + codigo.altura)
    console.log("Largura: " + codigo.largura)
    console.log("Perímetro: " + codigo.perimetro)
    console.log("Área: " + codigo.area)
    let html = document.getElementById('conteudo')
    html.innerHTML += "<p>Altura: " + codigo.altura + "</p>"
    html.innerHTML += "<p>Largura: " + codigo.largura + "</p>"
    html.innerHTML += "<p>Perímetro: " + codigo.perimetro + "</p>"
    html.innerHTML += "<p>Área: " + codigo.area + "</p>"
}

function ob3() {
    const meuFilmeFav = {
        nome: "Velozes e Furiosos",
        diretor: "Rob Cohen",
        atores: ["Paul Walker", "Vin Diesel", "Michele Rodriguez", "Jordana Bewster"],
        ano: 2001
    }

    let pergunta = "Objetos - Ex3 - Crie um objeto para representar seu filme favorito. Ele deve ter as seguintes proprie..."
    let resposta = ("Venha assistir ao filme " + meuFilmeFav.nome + ", de " + meuFilmeFav.ano + ", dirigido por " + meuFilmeFav.diretor + " e estrelado por " + meuFilmeFav.atores)
    let img = "ob3"
    let codigo = ""
    preencheResposta(pergunta, resposta, codigo, img)
}

function anonimizarPessoa(x) {
    const pessoa2 = {
        ...x,
        nome: "ANÔNIMO"
    }
    return pessoa2
}

function ob4() {
    pessoa2 = anonimizarPessoa(pessoa)
    console.log(pessoa)
    console.log(pessoa2)

    let pergunta = "Objetos - Ex4 - 4. Crie um objeto que represente uma pessoa qualquer...."
    let resposta = "Pessoa original objeto pessoa (pessoa)" + pessoa + ", pessoa anonimizada (pessoa2): " + pessoa2
    let img = "sem"
    let codigo = ""
    preencheResposta(pergunta, resposta, codigo, img)
}

function fa1a() {
    const adultos = pessoas.filter(
        (i, index, array) => {
            return i.idade >= 20
        }
    )
    let pergunta = "Funções de array - Ex1a - Faça uma função que retorne um novo array só com os adultos (pessoas com idade igual ou superior a 20)"
    let resposta = "Adultos: " + adultos
    let img = "sem"
    let codigo = ""
    preencheResposta(pergunta, resposta, codigo, img)
    console.log("Objeto original:")
    console.log(pessoas)
    console.log("Objeto adultos:")
    console.log(adultos)
}

function fa1b() {
    const criancasAdol = pessoas.filter(
        (i, index, array) => {
            return i.idade < 20
        }
    )
    let pergunta = "Funções de array - Ex1b - Faça uma função que retorne um novo array só com os adultos (pessoas com idade igual ou superior a 20)"
    let resposta = "Crianças e adolescentes: " + criancasAdol
    let img = "sem"
    let codigo = ""
    preencheResposta(pergunta, resposta, codigo, img)
    console.log("Objeto original:")
    console.log(pessoas)
    console.log("Objeto crianças e adolescentes:")
    console.log(criancasAdol)
}

function fa2a() {
    let arrayX2 = []

    function multiplicaArray(arr) {
        for (i = 0; i < arr.length; i++) {
            valorNovo = i * 2
            arrayX2.push(valorNovo)
        }
    }
    multiplicaArray(arrayz)
    let pergunta = "Funções de array - Ex2a - Escreva uma função que retorne um array com as entradas multiplicadas por 2."
    let resposta = "Array original: " + arrayz + " - Array multiplicado 2: " + arrayX2
    let img = "sem"
    let codigo = ""
    preencheResposta(pergunta, resposta, codigo, img)
    console.log("Array original:")
    console.log(arrayz)
    console.log("Array multiplicado 2:")
    console.log(arrayX2)
}

function fa2b() {
    let arrayX3 = []

    function multiplicaArray(arr) {
        for (i = 0; i < arr.length; i++) {
            valorNovo = i * 3
            arrayX3.push(valorNovo.toString())
        }
    }
    multiplicaArray(arrayz)
    let pergunta = "Funções de array - Ex2b -  Escreva uma função que retorne um array com as entradas multiplicadas por 3."
    let resposta = "Array original: " + arrayz + " - Array multiplicado 3: " + arrayX3
    let img = "sem"
    let codigo = ""
    preencheResposta(pergunta, resposta, codigo, img)
    console.log("Array original:")
    console.log(arrayz)
    console.log("Array multiplicado 3:")
    console.log(arrayX3)
}

function fa2c() {
    let arrayStr = []

    function multiplicaArray(arr) {
        for (i = 0; i < arr.length; i++) {
            if (i % 2 === 0) {
                arrayStr.push(`${i} é par`)
            } else {
                arrayStr.push(`${i} é impar`)
            }
        }
    }
    multiplicaArray(arrayz)
    let pergunta = "Funções de array - Ex2c -  Escreva uma função que retorne um array de strings dizendo: ${número} é par/impar"
    let resposta = "Array com string: " + arrayStr
    let img = "sem"
    let codigo = ""
    preencheResposta(pergunta, resposta, codigo, img)
    console.log("Array original:")
    console.log(arrayz)
    console.log("Array com string:")
    console.log(arrayStr)
}

function fa3a() {
    let comPermissao = pessoasParque.filter(
        (i, index, array) => {
            return (i.altura >= 1.5) && ((i.idade < 60) && (i.idade > 14))
        })
    let pergunta = "Funções de array - Ex3a -  Pessoas com permissão"
    let resposta = "Pessoas com permissão: logado array comPermissão no console"
    let img = "sem"
    let codigo = ""
    preencheResposta(pergunta, resposta, codigo, img)
    console.log(comPermissao)
}

function fa3b() {
    let semPermissao = pessoasParque.filter(
        (i, index, array) => {
            return (i.altura < 1.5) || (i.idade > 60) || (i.idade < 14)
        })
    let pergunta = "Funções de array - Ex3a -  Pessoas sem permissão"
    let resposta = "Pessoas sem permissão: logado array semPermissão no console"
    let img = "sem"
    let codigo = ""
    preencheResposta(pergunta, resposta, codigo, img)
    console.log(semPermissao)
}

function geraEmail(nome, genero, cancelada, data) {
    let tratamento1
    let tratamento2
    if (genero == "masculino") {
        tratamento1 = "Sr. "
        tratamento2 = "lembrá-lo "
    }
    if (genero == "feminino") {
        tratamento1 = "Sra. "
        tratamento2 = "lembrá-la "
    }
    if (cancelada == false) {
        console.log(`Olá, ${tratamento1} ${nome}. Estamos enviando esta mensagem para
    ${tratamento2} da sua consulta no dia ${data}. Por favor, acuse
    o recebimento deste e-mail.`)
    }
    if (cancelada == true) {
        console.log(`Olá, ${tratamento1} ${nome}. Infelizmente, sua consulta marcada
        para o dia ${data} foi cancelada. Se quiser, pode entrar em 
        contato conosco para remarcá-la`)
    }
}

function fa4() {
    for (i = 0; i < consultas.length; i++) {
        geraEmail(consultas.nome, consultas.genero, consultas.cancelada, consultas.data)
    }
}