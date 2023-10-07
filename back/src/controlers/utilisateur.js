import bcrypt from "bcrypt";
import { client } from "../config/connexion_DB_categorie.js";

export const createUtilisateur = async (req, res) => {
    const { nom, mdp } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashMdp = await bcrypt.hash(mdp, salt);

    try {
        await client.query(`
            INSERT INTO utilisateur (nom, mdp)
            VALUES ($1, $2)
        `, [ nom, hashMdp ])

        res.status(201).json({ message: "Nouvel utilisateur créé" });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Une erreur est survenue lors de la création de l'utilisateur" });
    }
}