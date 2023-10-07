import express from "express";
import { createUtilisateur } from "../controlers/utilisateur.js";

const router = express.Router();

router.post('/', createUtilisateur);

export default router;