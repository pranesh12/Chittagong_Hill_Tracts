const tourGuideModel = require("../models/tourguide");
const userModel = require("../models/user");

const allTourGuides = async (req, res) => {
  try {
  } catch (error) {}
};
const tourGuideDetails = async (req, res) => {
  try {
  } catch (error) {}
};
const createTrourGuide = async (req, res) => {
  try {
  } catch {}
};

const tourGuidesByPalce = async (req, res) => {
  const { district, place } = req.query;
  console.log(district, place);
  const guides = await tourGuideModel.find({ district, place });
  res.json(guides);
  console.log(guides);
  try {
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  allTourGuides: allTourGuides,
  tourGuideDetails: tourGuideDetails,
  createTrourGuide: createTrourGuide,
  tourGuidesByPalce: tourGuidesByPalce,
};
