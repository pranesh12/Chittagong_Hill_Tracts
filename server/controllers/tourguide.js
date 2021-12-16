const tourGuideModel = require("../models/tourguide");
const userModel = require("../models/user");

const allTourGuides = async (req, res) => {
  try {
    const guides = await tourGuideModel.find({});
    res.json(guides);
  } catch (error) {
    res.json(error);
  }
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
  try {
    const { district, place } = req.query;
    console.log(district, place);
    const guides = await tourGuideModel.find({ district, place });
    res.json(guides);
  } catch (error) {
    console.log(error);
  }
};

//TourGuides by district
const tourGuideByDistrict = async (req, res) => {
  try {
    const { district } = req.query;
    const guides = await tourGuideModel.find({ district });
    res.json(guides);
  } catch (error) {
    console.log(error);
  }
};

//tour create
const addTourGuide = async (req, res) => {
  try {
    const { district, place, name, phone_number, gmail, status } = req.body;
    const { email } = req.query;
    console.log(district);
    const isAdmin = await userModel.findOne({ email });
    if (isAdmin) {
      await tourGuideModel.create({
        district,
        place,
        info: {
          name,
          phone_number,
          gmail,
          status,
        },
      });
      res.status(200).send("guided added succssfully");
    } else {
      res.status(404).send({ message: "You don't have access" });
    }
  } catch (error) {
    res.json(error);
  }
};

//Tour update

const updateTourGuide = async (req, res) => {
  const { id, newData } = req.body;
  const { category, writer, header, article, img } = newData;
  try {
    const newData = {
      category,
      writer,
      data: {
        image: img,
        header,
        article,
      },
    };

    await tourGuideModel.findByIdAndUpdate(id, newData, { new: true });
    res.status(200).json({ message: "update successfull" });
  } catch (error) {
    res.json(error);
  }
};

//romve tour guide
const removeTourGuide = async (req, res) => {
  try {
    const { id } = req.query;
    await tourGuideModel.deleteOne({ _id: id });
    res.json("TourGuide  removed");
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  allTourGuides: allTourGuides,
  tourGuideDetails: tourGuideDetails,
  createTrourGuide: createTrourGuide,
  tourGuidesByPalce: tourGuidesByPalce,
  addTourGuide: addTourGuide,
  updateTourGuide: updateTourGuide,
  removeTourGuide: removeTourGuide,
  tourGuideByDistrict: tourGuideByDistrict,
};
