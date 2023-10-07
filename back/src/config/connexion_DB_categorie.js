import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Client } = pkg;

export const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

client.connect();