"use strict";

const mongoose = require("mongoose");

const BrandsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim:true,
      require:true,
      unique: true,
    },
    
    image: {
      type: String,
      trim: true,
      default:[]
    },
   
  },
  {
    collection: "brands",
    timestamps: true,
  }
);

module.exports = mongoose.model("Brands", BrandsSchema);
