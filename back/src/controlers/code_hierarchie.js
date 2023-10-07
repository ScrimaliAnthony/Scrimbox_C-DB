import { client } from "../config/connexion_DB_categorie.js";

export const hierarchie = async (req, res) => {
    const { code } = req.body;
    
    try {
        let chemin = await client.query(`
            SELECT chemin_nv1 AS chemin, nom_nv1 AS nom
            FROM categorie_nv1
            WHERE code = $1
            UNION ALL
            SELECT chemin_nv2 AS chemin, nom_nv2 AS nom
            FROM categorie_nv2
            WHERE code = $1
            UNION ALL
            SELECT chemin_nv3 AS chemin, nom_nv3 AS nom
            FROM categorie_nv3
            WHERE code = $1
            UNION ALL
            SELECT chemin_nv4 AS chemin, nom_nv4 AS nom
            FROM categorie_nv4
            WHERE code = $1
            UNION ALL
            SELECT chemin_nv5 AS chemin, nom_nv5 AS nom
            FROM categorie_nv5
            WHERE code = $1
            UNION ALL
            SELECT chemin_nv6 AS chemin, nom_nv6 AS nom
            FROM categorie_nv6
            WHERE code = $1;
        `, [ code ])

        chemin = chemin.rows[0].chemin;

        for(chemin.length; chemin.length > 0; chemin = chemin.substring(0, chemin.lastIndexOf('/', chemin.lastIndexOf('/') - 1) + 1)) {
            console.log(chemin);
            const get = await client.query(`
                SELECT nom_nv1 AS nom
                FROM categorie_nv1
                WHERE chemin_nv1 = $1
                UNION ALL
                SELECT nom_nv2 AS nom
                FROM categorie_nv2
                WHERE chemin_nv2 = $1
                UNION ALL
                SELECT nom_nv3 AS nom
                FROM categorie_nv3
                WHERE chemin_nv3 = $1
                UNION ALL
                SELECT nom_nv4 AS nom
                FROM categorie_nv4
                WHERE chemin_nv4 = $1
                UNION ALL
                SELECT nom_nv5 AS nom
                FROM categorie_nv5
                WHERE chemin_nv5 = $1
                UNION ALL
                SELECT nom_nv6 AS nom
                FROM categorie_nv6
                WHERE chemin_nv6 = $1
            `, [ chemin ])
            console.log(get.rows);
        }


        res.status(200).json({ message: "Le code fonctionne" });
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "Le code écrit n'existe pas" });
    }
}