const teachersModel = require("../models/teacherModel");

const getAllTeachers = async (req, res) => {
  try {
    const teachers = await teachersModel.find({});
    res.status(200).json(teachers);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  getAllTeachers: getAllTeachers,
};
