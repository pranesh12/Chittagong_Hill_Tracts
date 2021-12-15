const express = require("express");

const {
  allTourGuides,
  tourGuideDetails,
  updateTourGuide,
  addTourGuide,
  tourGuidesByPalce,
  tourGuideByDistrict,
} = require("../controllers/tourguide");

const router = express.Router();

router.get("/tourguide", tourGuideDetails);
router.get("/tourGuides", allTourGuides);
router.get("/getPlaces", tourGuideByDistrict);
router.get("/tourGuidesByPlace", tourGuidesByPalce);
router.post("/addtourguide", addTourGuide);
router.patch("/updatetourguide", updateTourGuide);
module.exports = router;
