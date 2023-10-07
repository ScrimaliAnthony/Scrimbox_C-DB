import ky from "ky";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function CategorieNvP({ usage, usageP, id_nvP, id_nvN, setId_nvN, id_nvS, setId_nvS }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();
    const [ list, setList ] = useState([]);
    const [ nom, setNom ] = useState("");
    const token = localStorage.getItem('token');


    const nvId = `id_nv${usage}`;
    const nvNumber = `nom_nv${usage}`;
    const chemin = `chemin_nv${usage}`;

    // Dirige vers la page de connexion
    const connexion = () => {
        navigate("/connexion")
    }

    // Récupère les informations de la base de donnée
    async function fetchData() {
        if(usageP) {
            try {
                const get = await ky.get(`${import.meta.env.VITE_API_URL}categorie/nv${usageP}/${id_nvP}/nv${usage}`).json();
                setList(get.rows)
            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
            }
        } else {
            try {
                const get = await ky.get(`${import.meta.env.VITE_API_URL}categorie/nv${usage}`).json();
                setList(get.rows)
            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
            }
        }
    }

    // Gère l'affichage
    useEffect(() => {
        setId_nvS(null)
        fetchData()
    }, [id_nvP, id_nvN])

    // Création
    const post = async (data) => {
        if (usageP) {
            try {
                await ky.post(`${import.meta.env.VITE_API_URL}categorie/nv${usageP}/${id_nvP}/nv${usage}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    json: { nom: data.nom }
                })
                fetchData();
                reset(); 
            } catch (error) {
                console.error("Erreur lors de l'ajout:", error);
            }
        } else {
            try {
                await ky.post(`${import.meta.env.VITE_API_URL}categorie/nv${usage}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    json: { nom: data.nom }
                })
                fetchData();
                reset(); 
            } catch (error) {
                console.error("Erreur lors de l'ajout:", error);
            }
        }
    }

    // Récupération id et nom
    function handleItemClick(item) {
        setId_nvN(item[nvId])
        setNom(item[nvNumber])
    }

    // Suppression
    const suppr = async (data) => {
        try {
            await ky.delete(`${import.meta.env.VITE_API_URL}categorie/nv${usage}/${id_nvN}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                json: { nom: data.nom }
            })
            setNom("");
            setId_nvN(null)
            fetchData();
        } catch (error) {
            console.error("Erreur lors de la suppression:", error);
        }
    }

    // Retour à l'ajout de catégorie
    const ajouter = () => {
        setNom("");
        setId_nvN(null)
        fetchData();
    }

    return (
        <>
            {!usageP && <button onClick={connexion}>Connexion</button>}

            <h1>Niveau {usage}</h1>
            <div>
                {list.map(item => (
                    <div key={item[nvId]} >
                        <p onClick={() => handleItemClick(item)}>{item[nvNumber]} {item[chemin]}</p>
                    </div>
                ))}

                <form onSubmit={handleSubmit(post)}>
                    {id_nvN === null && (
                        <>
                            <label htmlFor="addCategorie"></label>
                            <input 
                                id="addCategorie"
                                placeholder={`Entrer Catégorie Nv ${usage}`}
                                {...register("nom", { required: true })}
                            />
                            {errors.nom && <span>Le nom est requis</span>}
                            <button type="submit">Valider</button>
                        </>
                    )}
                    {id_nvN !== null && (
                        <>
                            <span>{nom}</span>
                            <button onClick={handleSubmit(suppr)}>Supprimer</button>
                            <button onClick={(ajouter)}>Ajouter</button>
                        </>
                    )}
                </form>
            </div>
        </>
    )
}