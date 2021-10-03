const mongoose = require("mongoose");
const { Schema } = mongoose;

const courseSchema = new Schema(
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

const courseModel = mongoose.model("courses", courseSchema);

module.exports = courseModel;
