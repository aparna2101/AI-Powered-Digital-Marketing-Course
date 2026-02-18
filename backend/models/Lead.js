const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  workingStatus: String,
  preferredTime: String,
}, { timestamps: true });

module.exports = mongoose.model("Lead", leadSchema);
