import express from "express";
import { login } from "../controlers/authentification.js";

const router = express.Router();

router.post('/', login);

export default router;