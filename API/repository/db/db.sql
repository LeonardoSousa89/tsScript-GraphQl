CREATE DATABASE frase;
DROP DATABASE frase;

CREATE TABLE IF NOT EXISTS frases(
    id SERIAL PRIMARY KEY,
    frase_do_usuario VARCHAR(250)
);

DROP TABLE frases;

INSERT INTO  frases VALUES(1, 'oi estou rodando em typeScript');

SELECT * FROM frases;