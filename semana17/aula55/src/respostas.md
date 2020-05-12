# Aula 55
## Exercício 1
**a.** 
*Round* é o número de vezes que sera executado a encriptação da senha fornecida.
Usarei *12* pois é o padrão. (Se é o default, quem sou eu pra discordar)

*Salt* é uma string aleatoria gerada pelo próprio algoritmo de encriptação, que será usada para adicionar maior proteção contra quebras.
## Exercício 2
**a.**
Cadastro, para que seja salvo no banco a senha ja criptografada, para que possa ser comparada posteriormente no login
**d.** 
Não temos que modificar este endpoint, pois não utiliza nem geração, nem comparação da senha.