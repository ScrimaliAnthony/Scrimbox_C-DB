-- Création base de donnée

DROP DATABASE categorie;
CREATE DATABASE categorie;

-- Table categorie_nv1

DROP TABLE IF EXISTS categorie_nv1;
CREATE TABLE IF NOT EXISTS categorie_nv1(
    id_nv1 SERIAL PRIMARY KEY,
    nom_nv1 VARCHAR(255) NOT NULL,
    chemin_nv1 VARCHAR(255),
    code INT
);

-- Table categorie_nv2

DROP TABLE IF EXISTS categorie_nv2;
CREATE TABLE IF NOT EXISTS categorie_nv2(
    id_nv2 SERIAL PRIMARY KEY,
    nom_nv2 VARCHAR(255) NOT NULL,
    chemin_nv2 VARCHAR(255),
    code INT UNIQUE,
    id_nv1 INT NOT NULL REFERENCES categorie_nv1(id_nv1) ON DELETE CASCADE
);

-- Table categorie_nv3

DROP TABLE IF EXISTS categorie_nv3;
CREATE TABLE IF NOT EXISTS categorie_nv3(
    id_nv3 SERIAL PRIMARY KEY,
    nom_nv3 VARCHAR(255) NOT NULL,
    chemin_nv3 VARCHAR(255),
    code INT UNIQUE,
    id_nv2 INT NOT NULL REFERENCES categorie_nv2(id_nv2) ON DELETE CASCADE
);

-- Table categorie_nv4

DROP TABLE IF EXISTS categorie_nv4;
CREATE TABLE IF NOT EXISTS categorie_nv4(
    id_nv4 SERIAL PRIMARY KEY,
    nom_nv4 VARCHAR(255) NOT NULL,
    chemin_nv4 VARCHAR(255),
    code INT UNIQUE,
    id_nv3 INT NOT NULL REFERENCES categorie_nv3(id_nv3) ON DELETE CASCADE
);

-- Table categorie_nv5

DROP TABLE IF EXISTS categorie_nv5;
CREATE TABLE IF NOT EXISTS categorie_nv5(
    id_nv5 SERIAL PRIMARY KEY,
    nom_nv5 VARCHAR(255) NOT NULL,
    chemin_nv5 VARCHAR(255),
    code INT UNIQUE,
    id_nv4 INT NOT NULL REFERENCES categorie_nv4(id_nv4) ON DELETE CASCADE
);

-- Table categorie_nv6

DROP TABLE IF EXISTS categorie_nv6;
CREATE TABLE IF NOT EXISTS categorie_nv6(
    id_nv6 SERIAL PRIMARY KEY,
    nom_nv6 VARCHAR(255) NOT NULL,
    chemin_nv6 VARCHAR(255),
    code INT UNIQUE,
    id_nv5 INT NOT NULL REFERENCES categorie_nv5(id_nv5) ON DELETE CASCADE
);

DROP TABLE IF EXISTS categorie_nv6;
DROP TABLE IF EXISTS categorie_nv5;
DROP TABLE IF EXISTS categorie_nv4;
DROP TABLE IF EXISTS categorie_nv3;
DROP TABLE IF EXISTS categorie_nv2;
DROP TABLE IF EXISTS categorie_nv1;