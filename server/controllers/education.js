const courseModel = require("../models/education");

const getAllInfo = async (req, res) => {
  try {
    const info = await courseModel.find({});
    res.json(info);
  } catch (error) {
    console.log(error);
  }
};

const addCourses = async (req, res) => {
  try {
    const { type, subType, article, createdBy, header, vedio, img } = req.body;
    await courseModel.create({
      type,
      subType,
      createdBy,
      data: {
        image: img,
        header,
        article,
        vedio,
      },
    });
    res.json({ meassage: "course Created succesfuly" });
  } catch (error) {
    res.json(error);
  }
};

const removeCourse = async (req, res) => {
  try {
    const { id } = req.query;
    await courseModel.deleteOne({ _id: id });
    res.json("Data removded");
  } catch (error) {
    res.json(error);
  }
};

const getCourse = async (req, res) => {
  try {
    const { id } = req.query;
    const foundCourse = await courseModel.findOne({ _id: id });
    res.json(foundCourse);
  } catch (error) {
    res.json(error);
  }
};

const updateCourse = async (req, res) => {
  const { id, newData } = req.body;
  try {
    const { type, subType, article, createdBy, header, vedio, img } = newData;

    const newData = {
      type,
      subType,
      createdBy,
      data: {
        image: img,
        header,
        article,
        vedio,
      },
    };

    await courseModel.findByIdAndUpdate(id, newData, { new: true });
    res.status(200).json({ message: "update successfull" });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  getAllInfo: getAllInfo,
  addCourses: addCourses,
  removeCourse: removeCourse,
  getCourse: getCourse,
  updateCourse: updateCourse,
};
