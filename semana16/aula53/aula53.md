# [Aula 53 - Relações em SQL](https://www.notion.so/Aula-53-Rela-es-em-SQL-44906ee54a894c7ba593e7ecaf0e8d10)
## Exercício 1
**a.**
		é uma referencia de uma primary key da tabela de ligação
**b.**

 

       CREATE TABLE Rating (
    	id VARCHAR(255) PRIMARY KEY,
        comment TEXT NOT NULL,
        movie_id VARCHAR(255),
        rate FLOAT
        FOREIGN KEY (movie_id) REFERENCES Movie(id)
    );
    
        INSERT INTO Rating (id, comment, rate, movie_id) 
    VALUES ("003","DEMAIS DE BAO!",9,"002");

**c.**

    Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`sagan_eduardo_db`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
Ele não pode criar o comentario pois depende da chave estrangeira que não foi encontrada.

**d.**

    ALTER TABLE Movie
    DROP COLUMN `rating`;

**e.**

    DELETE FROM `sagan_eduardo_db`.`Movie` WHERE (`id` = '004');
  

      Operation failed: There was an error while applying the SQL script to the database.
    ERROR 1451: 1451: Cannot delete or update a parent row: a foreign key constraint fails (`sagan_eduardo_db`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
Não foi possível a exclusão, pois a chave primaria do Movie esta sendo usada como chave estrangeira em outra tabela.

## Exercício 2
**a.**
Foi criada uma tabela com 2 colunas, sendo cada uma delas uma ligação com uma outra tabela
**b.**

    INSERT INTO MovieCast VALUES('001','002');
    INSERT INTO MovieCast VALUES('002','002');
    INSERT INTO MovieCast VALUES('002','004');
    INSERT INTO MovieCast VALUES('004','005');
    INSERT INTO MovieCast VALUES('004','006');
    INSERT INTO MovieCast VALUES('004','007');

**c.**

    Error Code: 1452. Cannot add or update a child row: a foreign key constraint 					fails (`sagan_eduardo_db`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
Não foi encontrada a chave estrangeira na tabela de referencia
**d.**
Não é possível apagar um ator que esta sendo usado em outra tabela como chave estrangeira

## Exercício 3
**a.**

    SELECT * FROM Movie INNER JOIN Rating ON Movie.id = Rating.movie_id;
Retorne todos os dados da tabela Movie, desde que exista uma ligação entre eles pela coluna Movide.id e Rating.movie_id

**b.**

    SELECT m.id, m.title, r.rate FROM Movie m
    INNER JOIN Rating r ON m.id = r.movie_id;

## Exercício 4
**a.**

    SELECT m.id, m.title, r.rate, r.comment FROM Movie m
    LEFT JOIN Rating r ON m.id = r.movie_id;

**b.**

    SELECT m.id as movie_id, m.title, mc.actor_id FROM Movie m RIGHT  JOIN MovieCast mc ON mc.movie_id = m.id;

**c.**

    SELECT  AVG(r.rate), m.id, m.title FROM Movie m LEFT  JOIN Rating r ON m.id = r.movie_id GROUP  BY  (m.id);

## Exercício 5
**a.**
Pois é necessario buscar as informações em 3 tabelas diferentes, portanto é necessário fazer a junção de informações por etapas
**b.**

    SELECT m.id as Id_Filme, m.title as Titulo_Filme, a.id as Id_Ator, a.name as Nome_Ator FROM Movie m
    LEFT JOIN MovieCast mc ON m.id = mc.movie_id
    JOIN Actor a ON a.id = mc.actor_id;

**c.**

    Error Code: 1054. Unknown column 'm' in 'field list'

m,title, esta errado, o correto seria m.title.
**d.**

    SELECT m.id as movie_id, m.title, a.id as actor_id, a.name, r.rate, r.comment FROM Movie m
    LEFT JOIN MovieCast mc ON m.id = mc.movie_id
    JOIN Actor a ON a.id = mc.actor_id
    JOIN Rating r ON r.movie_id = m.id

## Exercício 6




**a.**
Relação de muitos para muitos (N:M)

**b.**

        CREATE TABLE Oscar_data (
        	id varchar(255) PRIMARY KEY NOT NULL,
            name varchar(255) NOT NULL,
        );
        
        CREATE TABLE Oscar_winners (
        oscardataid varchar(255) NOT NULL,
        winnerid varchar(255) NOT NULL,
        year VARCHAR(45) NOT NULL,
    	FOREIGN KEY (oscardataid) REFERENCES Oscar_data(id),
        FOREIGN KEY (winnerid) REFERENCES Movie(id)
    )

**c.**

    INSERT INTO Oscar_data VALUES("001","Melhor filme");
    INSERT INTO Oscar_data VALUES("002","Melhor elenco");
    INSERT INTO Oscar_data VALUES("003","Melhor fotografia");
    INSERT INTO Oscar_data VALUES("004","Melhor sonoplastia");


    INSERT INTO Oscar_winners VALUES("001","001","2019");
    INSERT INTO Oscar_winners VALUES("002","001","2019");
    INSERT INTO Oscar_winners VALUES("003","002","2019");
    INSERT INTO Oscar_winners VALUES("004","002","2019");
    INSERT INTO Oscar_winners VALUES("001","004","2019");
    INSERT INTO Oscar_winners VALUES("002","004","2019");
    INSERT INTO Oscar_winners VALUES("003","004","2019");


**d.**

    SELECT m.title, ow.year, od.name FROM Movie m
    LEFT JOIN Oscar_winners ow ON m.id = ow.winnerid
    JOIN Oscar_data od ON od.id = ow.oscardataid

