import express from "express";
import { createCategorieNv1, getCategorieNv1, searchCategorieNv1, putCategorieNv1, deleteCategorieNv1 } from "../controlers/categorie_nv1.js";
import { createCategorieNv2, getCategorieNv2, getCategorieNv2ByNv1, searchCategorieNv2, putCategorieNv2, deleteCategorieNv2 } from "../controlers/categorie_nv2.js";
import { createCategorieNv3, getCategorieNv3, getCategorieNv3ByNv2, searchCategorieNv3, putCategorieNv3, deleteCategorieNv3 } from "../controlers/categorie_nv3.js";
import { createCategorieNv4, getCategorieNv4, getCategorieNv4ByNv3, searchCategorieNv4, putCategorieNv4, deleteCategorieNv4 } from "../controlers/categorie_nv4.js";
import { createCategorieNv5, getCategorieNv5, getCategorieNv5ByNv4, searchCategorieNv5, putCategorieNv5, deleteCategorieNv5 } from "../controlers/categorie_nv5.js";
import { createCategorieNv6, getCategorieNv6, getCategorieNv6ByNv5, searchCategorieNv6, putCategorieNv6, deleteCategorieNv6 } from "../controlers/categorie_nv6.js";
import { verifyToken } from "../middleware/verificationToken.js";

const router = express.Router();

router.post('/nv1', verifyToken, createCategorieNv1);
router.get('/nv1', getCategorieNv1);
router.get('/nv1/:search', searchCategorieNv1);
router.put('/nv1/:id', verifyToken, putCategorieNv1);
router.delete('/nv1/:id', verifyToken, deleteCategorieNv1);

router.post('/nv1/:id/nv2', verifyToken, createCategorieNv2);
router.get('/nv2', getCategorieNv2);
router.get('/nv1/:id/nv2', getCategorieNv2ByNv1);
router.get('/nv2/:search', searchCategorieNv2);
router.put('/nv2/:id', verifyToken, putCategorieNv2);
router.delete('/nv2/:id', verifyToken, deleteCategorieNv2);

router.post('/nv2/:id/nv3', verifyToken, createCategorieNv3);
router.get('/nv3', getCategorieNv3);
router.get('/nv2/:id/nv3', getCategorieNv3ByNv2);
router.get('/nv3/:search', searchCategorieNv3);
router.put('/nv3/:id', verifyToken, putCategorieNv3);
router.delete('/nv3/:id', verifyToken, deleteCategorieNv3);

router.post('/nv3/:id/nv4', verifyToken, createCategorieNv4);
router.get('/nv4', getCategorieNv4);
router.get('/nv3/:id/nv4', getCategorieNv4ByNv3);
router.get('/nv4/:search', searchCategorieNv4);
router.put('/nv4/:id', verifyToken, putCategorieNv4);
router.delete('/nv4/:id', verifyToken, deleteCategorieNv4);

router.post('/nv4/:id/nv5', verifyToken, createCategorieNv5);
router.get('/nv5', getCategorieNv5);
router.get('/nv4/:id/nv5', getCategorieNv5ByNv4);
router.get('/nv5/:search', searchCategorieNv5);
router.put('/nv5/:id', verifyToken, putCategorieNv5);
router.delete('/nv5/:id', verifyToken, deleteCategorieNv5);

router.post('/nv5/:id/nv6', verifyToken, createCategorieNv6);
router.get('/nv6', getCategorieNv6);
router.get('/nv5/:id/nv6', getCategorieNv6ByNv5);
router.get('/nv6/:search', searchCategorieNv6);
router.put('/nv6/:id', verifyToken, putCategorieNv6);
router.delete('/nv6/:id', verifyToken, deleteCategorieNv6);

export default router;