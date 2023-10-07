import { client } from "../config/connexion_DB_categorie.js";

export const createCategorieNv6 = async (req, res) => {
    const { nom } = req.body;
    const { id } = req.params;
    try {
        await client.query(`
            INSERT INTO categorie_nv6 (nom_nv6, id_nv5)
            VALUES ($1, $2)
        `,[ nom, id ])
        res.status(201).json({ message: "La requete à fonctonné" });
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}

export const getCategorieNv6 = async (req, res) => {
    try {
        const get = await client.query(`
            SELECT *
            FROM categorie_nv6
            ORDER BY 
            CASE 
                WHEN nom_nv6 = 'autre' THEN 1
                ELSE 2
            END, 
            nom_nv6 ASC;
        `)
        console.log(get.rows)
        res.status(200).json(get);
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}

export const getCategorieNv6ByNv5 = async (req, res) => {
    const { id } = req.params
    try {
        const get = await client.query(`
            SELECT categorie_nv6.*
            FROM categorie_nv6
            JOIN categorie_nv5
            ON categorie_nv6.id_nv5 = categorie_nv5.id_nv5
            WHERE categorie_nv5.id_nv5 = $1
            ORDER BY 
            CASE 
                WHEN nom_nv6 = 'autre' THEN 1
                ELSE 2
            END, 
            nom_nv6 ASC;
        `, [ id ])
        console.log(get.rows)
        res.status(200).json(get);
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}

export const searchCategorieNv6 = async (req, res) => {
    const { search } = req.params;
    let get;
    try {
        if(isNaN(search)) {
            get = await client.query(`
                SELECT * FROM categorie_nv6
                WHERE nom_nv6 ILIKE $1
                ORDER BY 
                CASE 
                    WHEN nom_nv6 = 'autre' THEN 1
                    ELSE 2
                END, 
                nom_nv6 ASC;
            `, [`${search}%`])
        } else{
            get = await client.query(`
                SELECT * FROM categorie_nv6
                WHERE id_nv6 = $1
                ORDER BY 
                CASE 
                    WHEN nom_nv6 = 'autre' THEN 1
                    ELSE 2
                END, 
                nom_nv6 ASC;
        `, [search])
        }
        console.log(get.rows)
        res.status(200).json(get);
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}

export const putCategorieNv6 = async (req, res) => {
    const { nom } = req.body;
    const { id } = req.params;
    try {
        await client.query(`
            UPDATE categorie_nv6
            SET nom_nv6 = $1
            WHERE id_nv6 = $2
        `, [ nom, id ])
        res.status(200).json({ message: "La requete à fonctonné" });
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}

export const deleteCategorieNv6 = async (req, res) => {
    const { id } = req.params;
    try {
        await client.query(`
            DELETE FROM categorie_nv6
            WHERE id_nv6 = $1
        `, [ id ])
        res.status(200).json({ message: "La requete à fonctonné" });
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requete à fonctonné" });
    }
}