CREATE DATABASE integradorback;

CREATE TABLE producto (
    id SERIAL PRIMARY KEY,
    nombre TEXT,
    precio  FLOAT,
    descripcion TEXT,
    disponible BOOLEAN,
    stock INT
);

CREATE TABLE categoria(
    id SERIAL PRIMARY KEY,
    nombre TEXT
);

-- INSERT INTO producto (nombre, precio, descripcion, disponible, stock) VALUES
--                      ('Fede', 1000, 'perfume caro', true, 19);

INSERT INTO categoria (nombre) VALUES
                      ('Fede');


