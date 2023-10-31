"use strict";

const { Schema, model } = require("mongoose");

const FirmsSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      trim: true,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      trim: true,
      required: true,
    },

    image: {
      type: String,
      trim: true,
    },
  },
  {
    collection: "firms",
    timestamps: true,
  }
);

module.exports = model("Firms", FirmsSchema);
