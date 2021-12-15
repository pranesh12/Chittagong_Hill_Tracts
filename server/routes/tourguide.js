const express = require("express");

const {
  allTourGuides,
  tourGuideDetails,
  updateTourGuide,
  addTourGuide,
  tourGuidesByPalce,
} = require("../controllers/tourguide");

const router = express.Router();

router.get("/tourguide", tourGuideDetails);
router.get("/tourGuides", allTourGuides);
router.get("/tourGuidesByPlace", tourGuidesByPalce);
router.post("/addtourguide", addTourGuide);
router.patch("/updatetourguide", updateTourGuide);
module.exports = router;
