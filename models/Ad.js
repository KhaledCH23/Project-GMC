const mongoose = require("mongoose");
const schema = mongoose.Schema;

// create schema
const AdSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  owner: {
    type: Object,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Ad = mongoose.model("ads", AdSchema);
