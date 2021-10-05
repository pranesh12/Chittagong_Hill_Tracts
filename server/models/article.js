const mongoose = require("mongoose");
const { Schema } = mongoose;

const articleSchema = new Schema(
  {
    type: {
      type: String,
      require,
    },
    subType: {
      type: String,
      require,
    },
    createdBy: {
      type: String,
      require,
    },
    data: {},
  },
  { timestamps: true }
);

const articleModel = mongoose.model("articles", articleSchema);
module.exports = articleModel;
