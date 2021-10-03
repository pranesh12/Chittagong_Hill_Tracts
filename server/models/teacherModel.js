const mongoose = require("mongoose");
const { Schema } = mongoose;

const teachersSchema = new Schema(
  {
    name: { type: String, require },
    subject: { type: String, require },
    profilePic: { type: String, require },
  },
  { timestamps: true }
);

const teachersModel = mongoose.model("teachers", teachersSchema);
module.exports = teachersModel;
