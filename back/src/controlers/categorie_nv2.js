import { client } from "../config/connexion_DB_categorie.js";

export const createCategorieNv2 = async (req, res) => {
    const { nom } = req.body;
    const { id } = req.params;
    try {
        await client.query(`
            INSERT INTO categorie_nv2 (nom_nv2, id_nv1)
            VALUES ($1, $2)
        `,[ nom, id ])
        res.status(201).json({ message: "La requete à fonctonné" });
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}

export const getCategorieNv2 = async (req, res) => {
    try {
        const get = await client.query(`
            SELECT *
            FROM categorie_nv2
            ORDER BY 
            CASE 
                WHEN nom_nv2 = 'autre' THEN 1
                ELSE 2
            END, 
            nom_nv2 ASC;
        `)
        console.log(get.rows)
        res.status(200).json(get);
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}

export const getCategorieNv2ByNv1 = async (req, res) => {
    const { id } = req.params
    try {
        const get = await client.query(`
            SELECT categorie_nv2.*
            FROM categorie_nv2
            JOIN categorie_nv1
            ON categorie_nv2.id_nv1 = categorie_nv1.id_nv1
            WHERE categorie_nv1.id_nv1 = $1
            ORDER BY 
            CASE 
                WHEN nom_nv2 = 'autre' THEN 1
                ELSE 2
            END, 
            nom_nv2 ASC;
        `, [ id ])
        console.log(get.rows)
        res.status(200).json(get);
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}

export const searchCategorieNv2 = async (req, res) => {
    const { search } = req.params;
    let get;
    try {
        console.log(search);
        if(isNaN(search)) {
            get = await client.query(`
                SELECT * FROM categorie_nv2
                WHERE nom_nv2 ILIKE $1
                ORDER BY 
                CASE 
                    WHEN nom_nv2 = 'autre' THEN 1
                    ELSE 2
                END, 
                nom_nv2 ASC;
            `, [`${search}%`])
        } else{
            get = await client.query(`
                SELECT * FROM categorie_nv2
                WHERE id_nv2 = $1
                ORDER BY 
                CASE 
                    WHEN nom_nv2 = 'autre' THEN 1
                    ELSE 2
                END, 
                nom_nv2 ASC;
        `, [search])
        }
        console.log(get.rows)
        res.status(200).json(get);
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}

export const putCategorieNv2 = async (req, res) => {
    const { nom } = req.body;
    const { id } = req.params;
    try {
        await client.query(`
            UPDATE categorie_nv2
            SET nom_nv2 = $1
            WHERE id_nv2 = $2
        `, [ nom, id ])
        res.status(200).json({ message: "La requete à fonctonné" });
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}

export const deleteCategorieNv2 = async (req, res) => {
    const { id } = req.params;
    try {
        await client.query(`
            DELETE FROM categorie_nv2
            WHERE id_nv2 = $1
        `, [ id ])
        res.status(200).json({ message: "La requete à fonctonné" });
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}