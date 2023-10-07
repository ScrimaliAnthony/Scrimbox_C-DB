import { client } from "../config/connexion_DB_categorie.js";

export const createCategorieNv3 = async (req, res) => {
    const { nom } = req.body;
    const { id } = req.params;
    try {
        await client.query(`
            INSERT INTO categorie_nv3 (nom_nv3, id_nv2)
            VALUES ($1, $2)
        `,[ nom, id ])
        res.status(201).json({ message: "La requete à fonctonné" });
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}

export const getCategorieNv3 = async (req, res) => {
    try {
        const get = await client.query(`
            SELECT *
            FROM categorie_nv3
            ORDER BY 
            CASE 
                WHEN nom_nv3 = 'autre' THEN 1
                ELSE 2
            END, 
            nom_nv3 ASC;
        `)
        console.log(get.rows)
        res.status(200).json(get);
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}

export const getCategorieNv3ByNv2 = async (req, res) => {
    const { id } = req.params
    try {
        const get = await client.query(`
            SELECT categorie_nv3.*
            FROM categorie_nv3
            JOIN categorie_nv2
            ON categorie_nv3.id_nv2 = categorie_nv2.id_nv2
            WHERE categorie_nv2.id_nv2 = $1
            ORDER BY 
            CASE 
                WHEN nom_nv3 = 'autre' THEN 1
                ELSE 2
            END, 
            nom_nv3 ASC;
        `, [ id ])
        console.log(get.rows)
        res.status(200).json(get);
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}

export const searchCategorieNv3 = async (req, res) => {
    const { search } = req.params;
    let get;
    try {
        if(isNaN(search)) {
            get = await client.query(`
                SELECT * FROM categorie_nv3
                WHERE nom ILIKE $1
                ORDER BY 
                CASE 
                    WHEN nom_nv3 = 'autre' THEN 1
                    ELSE 2
                END, 
                nom_nv3 ASC;
            `, [`${search}%`])
        } else{
            get = await client.query(`
                SELECT * FROM categorie_nv3
                WHERE id_nv3 = $1
                ORDER BY 
                CASE 
                    WHEN nom_nv3 = 'autre' THEN 1
                    ELSE 2
                END, 
                nom_nv3 ASC;
        `, [search])
        }
        console.log(get.rows)
        res.status(200).json(get);
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}

export const putCategorieNv3 = async (req, res) => {
    const { nom } = req.body;
    const { id } = req.params;
    try {
        await client.query(`
            UPDATE categorie_nv3
            SET nom_nv3 = $1
            WHERE id_nv3 = $2
        `, [ nom, id ])
        res.status(200).json({ message: "La requete à fonctonné" });
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}

export const deleteCategorieNv3 = async (req, res) => {
    const { id } = req.params;
    try {
        await client.query(`
            DELETE FROM categorie_nv3
            WHERE id_nv3 = $1
        `, [ id ])
        res.status(200).json({ message: "La requete à fonctonné" });
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}