import { client } from "../config/connexion_DB_categorie.js";

export const createCategorieNv5 = async (req, res) => {
    const { nom } = req.body;
    const { id } = req.params;
    try {
        await client.query(`
            INSERT INTO categorie_nv5 (nom_nv5, id_nv4)
            VALUES ($1, $2)
        `,[ nom, id ])
        res.status(201).json({ message: "La requete à fonctonné" });
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}

export const getCategorieNv5 = async (req, res) => {
    try {
        const get = await client.query(`
            SELECT *
            FROM categorie_nv5
            ORDER BY 
            CASE 
                WHEN nom_nv5 = 'autre' THEN 1
                ELSE 2
            END, 
            nom_nv5 ASC;
        `)
        console.log(get.rows)
        res.status(200).json(get);
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}

export const getCategorieNv5ByNv4 = async (req, res) => {
    const { id } = req.params
    try {
        const get = await client.query(`
            SELECT categorie_nv5.*
            FROM categorie_nv5
            JOIN categorie_nv4
            ON categorie_nv5.id_nv4 = categorie_nv4.id_nv4
            WHERE categorie_nv4.id_nv4 = $1
            ORDER BY 
            CASE 
                WHEN nom_nv5 = 'autre' THEN 1
                ELSE 2
            END, 
            nom_nv5 ASC;
        `, [ id ])
        console.log(get.rows)
        res.status(200).json(get);
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}

export const searchCategorieNv5 = async (req, res) => {
    const { search } = req.params;
    let get;
    try {
        if(isNaN(search)) {
            get = await client.query(`
                SELECT * FROM categorie_nv5
                WHERE nom_nv5 ILIKE $1
                ORDER BY 
                CASE 
                    WHEN nom_nv5 = 'autre' THEN 1
                    ELSE 2
                END, 
                nom_nv5 ASC;
            `, [`${search}%`])
        } else{
            get = await client.query(`
                SELECT * FROM categorie_nv5
                WHERE id_nv5 = $1
                ORDER BY 
                CASE 
                    WHEN nom_nv5 = 'autre' THEN 1
                    ELSE 2
                END, 
                nom_nv5 ASC;
        `, [search])
        }
        console.log(get.rows)
        res.status(200).json(get);
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}

export const putCategorieNv5 = async (req, res) => {
    const { nom } = req.body;
    const { id } = req.params;
    try {
        await client.query(`
            UPDATE categorie_nv5
            SET nom_nv5 = $1
            WHERE id_nv5 = $2
        `, [ nom, id ])
        res.status(200).json({ message: "La requete à fonctonné" });
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}

export const deleteCategorieNv5 = async (req, res) => {
    const { id } = req.params;
    try {
        await client.query(`
            DELETE FROM categorie_nv5
            WHERE id_nv5 = $1
        `, [ id ])
        res.status(200).json({ message: "La requete à fonctonné" });
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}