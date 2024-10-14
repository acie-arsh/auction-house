import express from 'express';
import { proofOfCommission } from '../controllers/commissionController.js';
import { isAuthenticated, isAuthorized } from '../middlewares/auth.js';

const router = express.Router();

router.post("/proof", isAuthenticated, isAuthorized("Seller"), proofOfCommission);

export default router;