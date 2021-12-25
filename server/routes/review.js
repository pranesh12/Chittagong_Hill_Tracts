const express = require("express");
const {
  getAllReview,
  addReview,
  removeReview,
  editReview,
} = require("../controllers/review");

const router = express.Router();
router.get("/reviews", getAllReview);
router.post("/review", addReview);
router.delete("/review", removeReview);
router.put("/review", editReview);
module.exports = router;
