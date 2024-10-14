import express from "express";
import { isAuthenticated, isAuthorized } from "../middlewares/auth.js";
import {
  deleteAuctionItem,
  getAllPaymentProofs,
  deletePaymentProof,
  getPaymentProofDetail,
  updateProofStatus,
  fetchAllUsers,
  monthlyRevenue,
} from "../controllers/adminController.js";

const router = express.Router();

router.delete(
  "/auctionitem/delete/:id",
  isAuthenticated,
  isAuthorized("Admin"),
  deleteAuctionItem
);

router.get(
  "/paymentproofs/getall",
  isAuthenticated,
  isAuthorized("Admin"),
  getAllPaymentProofs
);
router.get(
  "/paymentproof/:id",
  isAuthenticated,
  isAuthorized("Admin"),
  getPaymentProofDetail
);

router.get(
  "/users/getall",
  isAuthenticated,
  isAuthorized("Admin"),
  fetchAllUsers
);

router.get(
    "/monthlyincome",
    isAuthenticated,
    isAuthorized("Admin"),
    monthlyRevenue
  );

router.put(
  "/paymentproof/status/update/:id",
  isAuthenticated,
  isAuthorized("Admin"),
  updateProofStatus
);

router.delete(
  "/paymentproof/delete/:id",
  isAuthenticated,
  isAuthorized("Admin"),
  deletePaymentProof
);

export default router;
