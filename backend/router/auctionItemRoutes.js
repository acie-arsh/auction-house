import express from "express";
import {
  addNewAuctionItem,
  getAllItems,
  getAuctionDetails,
  getMyAuctionItems,
  removeAuctionItem,
  republishAuctionItem,
} from "../controllers/auctionItemController.js";
import { isAuthenticated, isAuthorized } from "../middlewares/auth.js";
import { trackCommissionStatus } from "../middlewares/trackCommissionStatus.js";

const router = express.Router();

router.post(
  "/create",
  isAuthenticated,
  isAuthorized("Seller"),
  trackCommissionStatus,
  addNewAuctionItem
);

router.get("/allitems", getAllItems);
router.get("/auction/:id", isAuthenticated, getAuctionDetails);
router.get(
  "/myitems",
  isAuthenticated,
  isAuthorized("Seller"),
  getMyAuctionItems
);

router.delete(
  "/delete/:id",
  isAuthenticated,
  isAuthorized("Seller"),
  removeAuctionItem
);

router.put(
  "/item/republish/:id",
  isAuthenticated,
  isAuthorized("Seller"),
  republishAuctionItem
);

export default router;
