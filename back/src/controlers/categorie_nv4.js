import { client } from "../config/connexion_DB_categorie.js";

export const createCategorieNv4 = async (req, res) => {
    const { nom } = req.body;
    const { id } = req.params;
    try {
        await client.query(`
            INSERT INTO categorie_nv4 (nom_nv4, id_nv3)
            VALUES ($1, $2)
        `,[ nom, id ])
        res.status(201).json({ message: "La requete à fonctonné" });
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}

export const getCategorieNv4 = async (req, res) => {
    try {
        const get = await client.query(`
            SELECT *
            FROM categorie_nv4
            ORDER BY 
            CASE 
                WHEN nom_nv4 = 'autre' THEN 1
                ELSE 2
            END, 
            nom_nv4 ASC;
        `)
        console.log(get.rows)
        res.status(200).json(get);
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}

export const getCategorieNv4ByNv3 = async (req, res) => {
    const { id } = req.params
    try {
        const get = await client.query(`
            SELECT categorie_nv4.*
            FROM categorie_nv4
            JOIN categorie_nv3
            ON categorie_nv4.id_nv3 = categorie_nv3.id_nv3
            WHERE categorie_nv3.id_nv3 = $1
            ORDER BY 
            CASE 
                WHEN nom_nv4 = 'autre' THEN 1
                ELSE 2
            END, 
            nom_nv4 ASC;
        `, [ id ])
        console.log(get.rows)
        res.status(200).json(get);
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}

export const searchCategorieNv4 = async (req, res) => {
    const { search } = req.params;
    let get;
    try {
        if(isNaN(search)) {
            get = await client.query(`
                SELECT * FROM categorie_nv4
                WHERE nom_nv4 ILIKE $1
                ORDER BY 
                CASE 
                    WHEN nom_nv4 = 'autre' THEN 1
                    ELSE 2
                END, 
                nom_nv4 ASC;
            `, [`${search}%`])
        } else{
            get = await client.query(`
                SELECT * FROM categorie_nv4
                WHERE id_nv4 = $1
                ORDER BY 
                CASE 
                    WHEN nom_nv4 = 'autre' THEN 1
                    ELSE 2
                END, 
                nom_nv4 ASC;
        `, [search])
        }
        console.log(get.rows)
        res.status(200).json(get);
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}

export const putCategorieNv4 = async (req, res) => {
    const { nom } = req.body;
    const { id } = req.params;
    try {
        await client.query(`
            UPDATE categorie_nv4
            SET nom_nv4 = $1
            WHERE id_nv4 = $2
        `, [ nom, id ])
        res.status(200).json({ message: "La requete à fonctonné" });
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}

export const deleteCategorieNv4 = async (req, res) => {
    const { id } = req.params;
    try {
        await client.query(`
            DELETE FROM categorie_nv4
            WHERE id_nv4 = $1
        `, [ id ])
        res.status(200).json({ message: "La requete à fonctonné" });
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}