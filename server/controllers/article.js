const articleModel = require("../models/articleModel");

const getAllInfo = async (req, res) => {
  try {
    const info = await articleModel.find({});
    res.json(info);
  } catch (error) {
    console.log(error);
  }
};

const addArticles = async (req, res) => {
  try {
    const { type, subType, article, createdBy, header, vedio, img } = req.body;
    await articleModel.create({
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

const removeArticle = async (req, res) => {
  try {
    const { id } = req.query;
    await articleModel.deleteOne({ _id: id });
    res.json("Data removded");
  } catch (error) {
    res.json(error);
  }
};

const getArticle = async (req, res) => {
  try {
    const { id } = req.query;
    const foundCourse = await articleModel.findOne({ _id: id });
    res.json(foundCourse);
  } catch (error) {
    res.json(error);
  }
};

const updateArticle = async (req, res) => {
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

    await articleModel.findByIdAndUpdate(id, newData, { new: true });
    res.status(200).json({ message: "update successfull" });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  getAllInfo: getAllInfo,
  addArticles: addArticles,
  removeArticle: removeArticle,
  getArticle: getArticle,
  updateArticle: updateArticle,
};
