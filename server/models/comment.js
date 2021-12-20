const mongoose = require("mongoose");
const { Schema } = mongoose;

const comentSchema = new Schema(
  {
    comment: {
      type: String,
      require,
    },
    star: {
      type: String,
      require,
    },

    data: {},
  },
  { timestamps: true }
);

const commentModel = mongoose.model("comments", comentSchema);

module.exports = commentModel;
