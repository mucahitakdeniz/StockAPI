"use strict";

const mongoose = require("mongoose");

const CategoriesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim:true,
      require:true,
      unique: true,
    }
    
   
  },
  {
    collection: "categories",
    timestamps: true,
  }
);

module.exports = mongoose.model("Categories", CategoriesSchema);
