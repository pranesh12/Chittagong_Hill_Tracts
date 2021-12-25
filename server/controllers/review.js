const reviewModel = require("../models/review");

const getAllReview = async (req, res) => {
  try {
    const review = await reviewModel.find({});
    res.status(200).json(review);
  } catch (error) {
    console.log(error);
  }
};
const addReview = async (req, res) => {
  const { comment, currentValue } = req.body;
  const { email, name } = req.query;
  console.log(name, email);

  try {
    await reviewModel.create({
      comment,
      star: currentValue,
      user: {
        email,
        name,
      },
    });
    console.log("Add comment hitted");
    res.json({ meassage: "review created successfully" });
  } catch (error) {
    console.log(error);
  }
};

const removeReview = async (req, res) => {
  try {
    console.log("remove comment hitted");
  } catch (error) {
    console.log(error);
  }
};

const editReview = (req, res) => {
  try {
    console.log("Edit comment hitted");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllReview: getAllReview,
  addReview: addReview,
  removeReview: removeReview,
  editReview: editReview,
};
