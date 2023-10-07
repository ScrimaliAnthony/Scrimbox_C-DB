import express from "express";
import { hierarchie } from "../controlers/code_hierarchie.js";

const router = express.Router();

router.post('/', hierarchie);

export default router;