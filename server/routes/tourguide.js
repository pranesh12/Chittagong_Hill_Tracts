const express = require("express");

const {
  allTourGuides,
  tourGuideDetails,
  tourGuidesByPalce,
} = require("../controllers/tourguide");

const router = express.Router();

router.get("/tourguide", tourGuideDetails);
router.get("/tourGuides", allTourGuides);
router.get("/tourGuidesByPlace", tourGuidesByPalce);
module.exports = router;
