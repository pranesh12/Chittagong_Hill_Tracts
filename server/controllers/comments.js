const commentModel = require("../models/comment");

const getAllCommnets = async (req, res) => {
  try {
    console.log("getAll comments router hitted");
  } catch (error) {
    console.log(error);
  }
};

const removeComment = async (req, res) => {
  try {
    console.log("remove comment hitted");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllCommnets: getAllCommnets,
  removeComment: removeComment,
};
