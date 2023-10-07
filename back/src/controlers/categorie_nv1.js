import { client } from "../config/connexion_DB_categorie.js";

export const createCategorieNv1 = async (req, res) => {
    const { nom } = req.body;
    try {
        await client.query(`
            INSERT INTO categorie_nv1 (nom_nv1)
            VALUES ($1)
        `,[ nom ])
        res.status(201).json({ message: "La requete à fonctonné" });
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}

export const getCategorieNv1 = async (req, res) => {
    try {
        const get = await client.query(`
            SELECT *
            FROM categorie_nv1
            ORDER BY 
            CASE 
                WHEN nom_nv1 = 'autre' THEN 1
                ELSE 2
            END, 
            nom_nv1 ASC;
        `)
        console.log(get.rows)
        res.status(200).json(get);
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}

export const searchCategorieNv1 = async (req, res) => {
    const { search } = req.params;
    let get;
    try {
        if(isNaN(search)) {
            get = await client.query(`
                SELECT * FROM categorie_nv1
                WHERE nom_nv1 ILIKE $1
                ORDER BY 
                CASE 
                    WHEN nom_nv1 = 'autre' THEN 1
                    ELSE 2
                END, 
                nom_nv1 ASC;
            `, [`${search}%`])
        } else{
            get = await client.query(`
                SELECT * FROM categorie_nv1
                WHERE id_nv1 = $1
                ORDER BY 
                CASE 
                    WHEN nom_nv1 = 'autre' THEN 1
                    ELSE 2
                END, 
                nom_nv1 ASC;
        `, [search])
        }
        console.log(get.rows)
        res.status(200).json(get);
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}

export const putCategorieNv1 = async (req, res) => {
    const { nom } = req.body;
    const { id } = req.params;
    try {
        await client.query(`
            UPDATE categorie_nv1
            SET nom_nv1 = $1
            WHERE id_nv1 = $2
        `, [ nom, id ])
        res.status(200).json({ message: "La requete à fonctonné" });
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}

export const deleteCategorieNv1 = async (req, res) => {
    const { id } = req.params;
    try {
        await client.query(`
            DELETE FROM categorie_nv1
            WHERE id_nv1 = $1
        `, [ id ])
        res.status(200).json({ message: "La requete à fonctonné" });
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}