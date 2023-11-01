"use strict";

const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema(
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
    collection: "brand",
    timestamps: true,
  }
);

module.exports = mongoose.model("Brand", BrandSchema);
