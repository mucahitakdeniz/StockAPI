"use strict";

const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
      unique: true,
    },

    image: {
      type: String,
      trim: true,
    },
  },
  {
    collection: "brand",
    timestamps: true,
  }
);
BrandSchema.pre("init", function (data) {
  data.id = data._id;
  data.createds = data.createdAt.toLocaleDateString("tr-tr");
});

module.exports = mongoose.model("Brand", BrandSchema);
