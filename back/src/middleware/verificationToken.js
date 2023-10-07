import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWTS = process.env.JWT_SECRET;

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(403).send({ message: "Aucun token fourni." });
    }

    jwt.verify(token, JWTS, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Échec de l'authentification du token." });
        }
        req.userId = decoded.id;

        next();
    });
};