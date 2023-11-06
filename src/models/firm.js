"use strict";

const { Schema, model } = require("mongoose");

const FirmSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },

    image: {
      type: String,
      trim: true,
    },
  },
  {
    collection: "firm",
    timestamps: true,
  }
);

FirmSchema.pre('init', function(data) {
  data.id = data._id
  data.createds = data.createdAt.toLocaleDateString('tr-tr')
})

module.exports = model("Firm", FirmSchema);
