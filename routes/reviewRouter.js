import express from "express";
import {
  addReview,
  deleteReviews,
  getReviews,
} from "../controllers/reviewController.js";

const reviewRouter = express.Router();

reviewRouter.post("/", addReview);
reviewRouter.get("/", getReviews);
reviewRouter.delete("/:email", deleteReviews);

reviewRouter.get("/approved", (req, res) => {
  console.log("This is approved route");
});
reviewRouter.get("/email", (req, res) => {
  console.log("This is email route");
});

export default reviewRouter;
