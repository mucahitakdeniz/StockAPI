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
CategoriesSchema.pre('init', function(data) {
  data.id = data._id
  data.createds = data.createdAt.toLocaleDateString('tr-tr')
})

module.exports = mongoose.model("Categories", CategoriesSchema);
