const express = require("express");

const {
  allTourGuides,
  tourGuideDetails,
  editTourguide,
  addTourGuide,
  tourGuidesByPalce,
  tourGuideByDistrict,
  removeTourGuide,
  tourguideById,
  editTourguidebytourguide,
  findtourguideByEmail,
} = require("../controllers/tourguide");

const router = express.Router();

router.get("/tourguide", tourGuideDetails);
router.get("/tourguides", allTourGuides);
router.get("/getPlaces", tourGuideByDistrict);
router.get("/tourGuidesByPlace", tourGuidesByPalce);
router.post("/addtourguide", addTourGuide);
router.put("/editTourGuide", editTourguide);
router.put("/editTourguidebytourguide", editTourguidebytourguide);
router.delete("/tourguide", removeTourGuide);
router.get("/gettourguide", tourguideById);
router.get("/tourguideByEmail", findtourguideByEmail);

module.exports = router;
