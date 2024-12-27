const mongoose = require("mongoose");

const SupplySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  condition: {
    type: String,
    required: true,
    enum: ["New", "Used", "Used - Like New", "Refurbished"],
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxLength: 500,
  },
  sellerEmail: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
  },
});

const Supply = mongoose.model("Supply", SupplySchema);

module.exports = Supply;
