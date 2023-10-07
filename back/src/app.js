import express from "express";
import cors from "cors";
import { categorieRouter, hierarchieRouter, utilisateurRouter, authentificationRoute } from "./routes/index.js";

export const app = express();

app.use(express.json());

app.use(cors());

app.use('/categorie', categorieRouter);
app.use('/hierarchie', hierarchieRouter);
app.use('/utilisateur', utilisateurRouter);
app.use('/authentification', authentificationRoute);