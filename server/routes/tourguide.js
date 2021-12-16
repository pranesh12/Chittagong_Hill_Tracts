const express = require("express");

const {
  allTourGuides,
  tourGuideDetails,
  updateTourGuide,
  addTourGuide,
  tourGuidesByPalce,
  tourGuideByDistrict,
  removeTourGuide,
} = require("../controllers/tourguide");

const router = express.Router();

router.get("/tourguide", tourGuideDetails);
router.get("/tourguides", allTourGuides);
router.get("/getPlaces", tourGuideByDistrict);
router.get("/tourGuidesByPlace", tourGuidesByPalce);
router.post("/addtourguide", addTourGuide);
router.patch("/updatetourguide", updateTourGuide);
router.delete("/tourguide", removeTourGuide);
module.exports = router;
