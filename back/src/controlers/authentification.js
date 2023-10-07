import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { client } from "../config/connexion_DB_categorie.js";

dotenv.config();

const JWTS = process.env.JWT_SECRET;

export const login = async (req, res) => {
    const { nom, mdp } = req.body;
    try {
        const result = await client.query(`
            SELECT *
            FROM utilisateur
            WHERE nom = $1
        `, [ nom ])

        const utilisateur = result.rows[0];

        if (!utilisateur || utilisateur.nom !== nom) {
            res.status(401).json({ error: "nom d'utilisateur incorrect" });
            return;
        }
        console.log({ message: "Le nom d'utilisateur est correct" });
        console.log(mdp);
        console.log(utilisateur.mdp);
    
        const match = await bcrypt.compare(mdp, utilisateur.mdp);
    
        if (!match) {
            res.status(401).json({ error: "mot de passe incorrect" });
            return;
        }
        console.log({ message: "le mot de passe est correct" });
    
        const token = jwt.sign({ id: utilisateur.id }, JWTS, { expiresIn: '24h' });

        res.status(200).json({ message: "l'authentification a réussi", token: token  });
    } catch (error) {
        res.status(500).json({ error: "Erreur serveur" });
        console.error(error);
    }
}