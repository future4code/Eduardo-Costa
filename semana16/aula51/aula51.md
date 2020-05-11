# [Aula 51 - Aprofundamento SQL](https://www.notion.so/Aula-51-Aprofundamento-SQL-833951970bbf457490a6173fde997fd0)
## Exercício 1
**A.**
```sql
ALTER TABLE Actors DROP COLUMN salary;
```
Altera a tabela *Actors*, removendo a coluna *salary*.

**B.**
```sql
ALTER TABLE Actors CHANGE gender sex VARCHAR(6);
```
Altera a tabela *Actors* alterando as propriedades da coluna *gender* para titulo *sex* e  maximo de 6 caracteres e string.

**C.**
```sql
ALTER TABLE Actors CHANGE gender gender VARCHAR(255);
```
Altera a tabela *Actors* alterando a coluna *gender* para string até 255 caracteres

**D.**
```sql
ALTER TABLE Actors CHANGE gender gender VARCHAR(100);
```
## Exercício 2
**A.**

    UPDATE Actor
    SET 
    name = "Fernanda Montes claros",
    birth_date = '1928-10-19'
    WHERE id = "003"

**B.**

    UPDATE Actor
    SET 
    name = "JULIANA PÃES"
    WHERE name = "Juliana paes"
   *Foi necessário desabilitar o modo de segurança para poder executar essa transação sem chave

       UPDATE Actor
    SET 
    name = "Juliana paes"
    WHERE name = "JULIANA PÃES"

**C.**

    UPDATE Actor
    SET 
    name = "Novo nome",
    salary = 1,
    birth_date = "1900-01-01",
    gender = "male"
    WHERE id = "005";


**D.**

    UPDATE Actor
    SET 
    name = "Novo nome",
    salary = 1,
    birth_date = "1900-01-01",
    gender = "male"
    WHERE id = "00500";
    
    0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Ele executou a instrução, porém como a condição não existe, nenhuma linha foi alterada, pois não foi encontrada correspondência.

## Exercício 3
**A.**

    DELETE FROM Actor WHERE name = "Fernanda Montenegro"

*Como no exercício anterior tivemos que alterar o nome, a correspondência não existe, portanto usei a query abaixo para realizar a exclusão depois da alteração.

    DELETE FROM Actor WHERE name = "Fernanda Montes Claros"

**B.**

    DELETE FROM Actor 
    WHERE (gender = "male") AND (salary > 1000000)

## Exercício 4
**A.**

    SELECT MAX(salary) from Actor

**B.**

    SELECT MIN(salary) from Actor WHERE gender = "female"

**C.**

    SELECT COUNT(*) FROM Actor WHERE gender = "female"

**D.**

    SELECT SUM(salary) FROM Actor

## Exercício 5
**A.**

    SELECT COUNT(*), gender FROM Actor GROUP BY gender
Realiza o agrupamento da contagem de todos os registros por gender

**B.**

    SELECT id, name FROM Actor ORDER BY name

**C.**

    SELECT * FROM Actor ORDER BY salary

**D.**

    SELECT * FROM Actor ORDER BY salary DESC LIMIT 3

**E.**

    SELECT AVG(salary), gender FROM Actor GROUP BY gender

## Exercício 6
**A.**

    ALTER TABLE Movie
    ADD playing_limit_date date

**B.**

    ALTER TABLE Movie
    MODIFY COLUMN rating float;

**C.**

    UPDATE Movie
    SET playing_limit_date = "2021-01-01"
    WHERE id = "001"
    
        UPDATE Movie
    SET playing_limit_date = "2000-01-01"
    WHERE id = "002"

**D.**

    DELETE from Movie
    WHERE id = "003"
   

    UPDATE Movie
        SET synopsis = "Nova sinopse"
        WHERE id = "003";
        
    0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Novamente, ele executou a instrução porém não encontrou nenhuma correspondência que atendesse ao Where, por isso não houve modificação no banco.

## Exercício 7
**A.**

    SELECT COUNT(*) FROM Movie WHERE rating > 7.5

**B.**

    SELECT AVG(rating) FROM Movie

**C.**

    SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE()

**D.**

    SELECT COUNT(*) FROM Movie WHERE release_date < CURDATE();

**E.**

    SELECT MAX(rating) FROM Movie;

**F.**

    SELECT MIN(rating) FROM Movie;

## Exercício 8
**A.**

    SELECT* FROM Movie order by title

**B.**

    SELECT* FROM Movie order by title DESC LIMIT 5

**C.**

    SELECT * FROM Movie WHERE release_date < CURDATE() ORDER BY release_date DESC LIMIT 3;

**D.**

    SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;