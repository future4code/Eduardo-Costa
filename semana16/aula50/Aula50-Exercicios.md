*(Aula 50 - 04/05/2020)*
# Exercícios para tarde:
## Exercício 1
Preparação:

    use sagan_eduardo_db;
    CREATE TABLE Actor (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR (255) NOT NULL,
        salary FLOAT NOT NULL,
        birth_date DATE NOT NULL,
    		gender VARCHAR(6) NOT NULL
    );
Resposta:

`0 row(s) affected`

**_a. Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query._**

 - o campo ID tem a restrição de ser PRIMARY KEY, porquê não queremos
   que se repita
  - o  campo NAME é um varchar, porquê queremos gravar
   strings nele, com até 255 caracteres. Não aceitaremos valores nulos
   nesse campo
  - o campo BIRTH_DATE é do tipo DATA, não nulo também.
  - o campo GENDER é do tipo string com até 6 caracteres. Não aceita nulos
   também.

**_b. O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados._**

    use sagan_eduardo_db;
    SHOW databases
    2 row(s) returned
    
    use sagan_eduardo_db;
    SHOW tables
    1 row(s) returned
**_c. O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando `SHOW Actor` e explique os resultados._**
O comando correto para ver a estrutura da tabela é `DESCRIBE Actor`, e retorna as 5 colunas criadas com suas propriedades.

    use sagan_eduardo_db;
    DESCRIBE Actor
    5 row(s) returned


## Exercício 2
No enunciado do exercício estava faltando a declaração da coluna gender, não permitindo que a query fosse executada com sucesso.

    INSERT INTO Actor (id, name, salary, birth_date) VALUES( "001", "Tony Ramos", 400000, "1948-08-25", "male" );
	    Error Code: 1136. Column count doesn't match value count at row 1

    
        INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES( "001", "Tony Ramos", 400000, "1948-08-25", "male" );
        1 row(s) affected

**_a. Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963_**

    use sagan_eduardo_db;
    INSERT INTO Actor VALUES ("002","Glória Pires", 1200000,"1963-08-23", "female");

Foi necessário incluir o campo gender, pois é NOT NULL.

    Error Code: 1136. Column count doesn't match value count at row 1
    
    1 row(s) affected

**_b. Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu._**

    Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
    
Entrada Duplicada para a chave primaria 002

**_c.**

    use sagan_eduardo_db;
    INSERT INTO Actor (id, name, salary)
    VALUES("003","Fernanda Montenegro",300000,"1929-10-19","female");
        Error Code: 1136. Column count doesn't match value count at row 1
O erro ocorreu pois foi informado a ordem das colunas que seriam informados os valores, porém foram informados mais valores do que colunas, o que não é correto. Ou deveria ser omitido a ordem das colunas, ou deveriam ser informadas todas as colunas (not null) e seus respectivos valores.

    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES("003","Fernanda Montenegro",300000,"1929-10-19","female");

**_d.**

    INSERT INTO Actor (id, salary, birth_date, gender) VALUES( "004", 400000, "1949-04-18", "male" );
	    Error Code: 1364. Field 'name' doesn't have a default value
Esta faltando o campo NAME que é obrigatorio.

    use sagan_eduardo_db;
    INSERT INTO Actor (id, salary, birth_date, gender, name)
    VALUES("004",400000,"1949-04-18","male","Antonio Fagundes");

**_e.**

    use sagan_eduardo_db;
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES("005","Juliana Paes",719333.33,1979-03-26,"female");
o campo BIRTH_DATE não esta escrito dentro do padrão correto (fechado por ")

    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES("005","Juliana Paes",719333.33,"1979-03-26","female");

**_f.**

    use sagan_eduardo_db;
    INSERT INTO Actor (id, name, salary, birth_date, gender)
        VALUES("006","Luís Inacio Lula da Silva",30000,"1945-10-27","male");
    INSERT INTO Actor (id, name, salary, birth_date, gender)
        VALUES("007","Dilma Rousseff",30000,"1947-12-14","female");

## Exercício 3
**_a. Escreva uma query que retorne todas as informações das atrizes_**

    SELECT * FROM Actor WHERE gender = "female"

**_b. Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`_**

    SELECT salary FROM Actor WHERE name = "Tony Ramos"

**_c. Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado._**

    SELECT * FROM Actor WHERE gender = "invalid"

Devido ao campo ser NOT NULL, não houve inserções com o valor "invalid" no banco, dessa forma a query não encontrou correspondências.

**_d. Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000_**

    SELECT id, name, salary FROM Actor WHERE salary <= 500000

**_e._ T_ente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta_**

    SELECT id, nome FROM Actor WHERE id = "002"
	    Error Code: 1054. Unknown column 'nome' in 'field list'

    SELECT id, name FROM Actor WHERE id = "002"
	    1 row(s) returned
o campo NOME não existe na tabela, o correto seria NAME (forma que foi criado)

## Exercício 4

    SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000

**_a. Explique com as suas palavras a query acima_**
Ele procura por nome comecando com  ou com J primeiro, depois pesquisa o salario maior que 300000

**_b. Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00_**

    SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000

**_c. Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome._**

    SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%"

**_d. Escreva uma query com os atores que tenham a lerta "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00_**

    SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND (salary BETWEEN 350000 AND 900000)

## Exercício 5
**a. Escreva a query que cria essa tabela. Para sinopse, utilize o tipo TEXT, pesquise sobre ele se precisar. Explique a query resumidamente.**

    CREATE TABLE Movie (
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR (255) NOT NULL,
        synopsis TEXT NOT NULL,
        release_date DATE NOT NULL,
    	rating int NOT NULL
    );

**b.**

    INSERT INTO Movie VALUES("001","Se Eu Fosse Você","Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos","2006-01-06",7);

**c.**

    INSERT INTO Movie VALUES("002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
    );

**d.**

    INSERT INTO Movie VALUES("003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
    );

**e.**

    INSERT INTO Movie VALUES("004",
    "Estômago",
    "Raimundo Nonato mudou-se para a cidade grande na esperança de ter uma vida melhor. Trabalhando como faxineiro em um bar, ele descobre que seu talento é mesmo na cozinha. Raimundo transforma o bar em um sucesso e acaba sendo contratado para trabalhar em um restaurante italiano da região como assistente de cozinheiro. A cozinha italiana é uma grande descoberta para Raimundo, que agora tem uma casa, roupas melhores, relacionamentos sociais e um amor, a prostituta Iria.",
    "2008-04-11",
    9
    );

## Exercício 6
**a. Retorne o id, título e avaliação a partir de um id específico;**

    SELECT id, title, rating FROM Movie WHERE id = "004"

**b. Retorne um filme a partir de um nome específico;**

    SELECT * FROM Movie WHERE title = "Estômago"

**c. Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`**

    SELECT id, title, synopsis FROM Movie WHERE rating >= 7

## Exercício 7
**a. Retorna um filme cujo título contenha a palavra `vida`**
	
    SELECT * FROM Movie WHERE title LIKE "%vida%"

**b. Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.**

    SELECT * FROM Movie WHERE title LIKE "%vida%" OR synopsis LIKE "%vida%"

**c. Procure por todos os filmes que já tenham lançado**

    SELECT * FROM Movie WHERE release_date <= "2020-05-04"

**d. Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`.**

    SELECT * FROM Movie WHERE (release_date <= "2020-05-04") AND (title LIKE "%vida%" OR synopsis LIKE "%vida%") AND (rating > 7)



