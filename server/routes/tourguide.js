const express = require("express");

const {
  allTourGuides,
  editTourguideByAdmin,
  addTourGuideByAdmin,
  findTourguideByDistrictAndPlace,
  tourGuidesByDistrict,
  removeTourGuideByAdmin,
  tourguideById,
  editTourguidebytourguide,
  findtourguideByEmail,
} = require("../controllers/tourguide");

const router = express.Router();

router.get("/tourguide", tourguideById);
router.post("/tourguide", addTourGuideByAdmin);
router.put("/tourguide", editTourguideByAdmin);
router.delete("/tourguide", removeTourGuideByAdmin);

router.get("/tourguideByEmail", findtourguideByEmail);
router.get("/tourguideByDistrict", tourGuidesByDistrict);
router.get("/tourguideByPlaceAndDistrict", findTourguideByDistrictAndPlace);

router.get("/tourguides", allTourGuides);
router.put("/editTourguidebytourguide", editTourguidebytourguide);

module.exports = router;
