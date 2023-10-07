import ky from "ky";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function Connexion() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();

    const connexion = async (data) => {
        try {
            const response = await ky.post(`${import.meta.env.VITE_API_URL}authentification`, { json: data }).json();

            localStorage.setItem('token', response.token);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form onSubmit={handleSubmit(connexion)}>
            <label htmlFor="nom"></label>
            <input
                id="nom"
                placeholder="nom d'utilisateur"
                {...register("nom", { required: true })}
            />

            <label htmlFor="mdp"></label>
            <input
                id="mdp"
                placeholder="mot de passe"
                {...register("mdp", { required: true })}
            />

            <button>Connexion</button>
        </form>
    )
}