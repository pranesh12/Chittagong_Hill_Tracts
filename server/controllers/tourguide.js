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
    const guides = await tourGuideModel.find({ district, place });
    res.json(guides);
  } catch (error) {
    res.json(error);
  }
};

//TourGuides by district
const tourGuideByDistrict = async (req, res) => {
  try {
    const { district } = req.query;
    const guides = await tourGuideModel.find({ district });
    res.json(guides);
  } catch (error) {
    res.json(error);
  }
};

//tour create
const addTourGuide = async (req, res) => {
  try {
    const { district, place, name, phone_number, gmail, status } = req.body;
    const { email } = req.query;
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
          img,
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

//TourbyId

const tourguideById = async (req, res) => {
  try {
    const { id } = req.query;
    const foundedGuide = await tourGuideModel.findOne({ _id: id });
    res.json(foundedGuide);
  } catch (error) {
    res.json(error);
  }
};
//Tour Edit by admin
const editTourguide = async (req, res) => {
  const { id, newtourGuide } = req.body;
  const { district, place, name, phone_number, gmail, status, img } = newtourGuide;
  try {
    const newData = {
      district,
      place,
      info: {
        name,
        phone_number,
        gmail,
        status,
        img,
      },
    };
    await tourGuideModel.findByIdAndUpdate(id, newData, { new: true });
    res.status(200).json({ message: "Tour guide updated successfull" });
  } catch (error) {
    res.json(error);
  }
};

//edit tour guide by individual guide
const editTourguidebytourguide = async (req, res) => {
  const { id, newtourGuide } = req.body;
  const { district, place, name, phone_number, gmail, status, img } = newtourGuide;
  try {
    const newData = {
      district,
      place,
      info: {
        name,
        phone_number,
        gmail,
        status,
        img,
      },
    };
    await tourGuideModel.findByIdAndUpdate(id, newData, { new: true });
    res.status(200).json({ message: "Tour guide updated successfull" });
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
  editTourguide: editTourguide,
  removeTourGuide: removeTourGuide,
  tourGuideByDistrict: tourGuideByDistrict,
  tourguideById: tourguideById,
  editTourguidebytourguide: editTourguidebytourguide,
};
