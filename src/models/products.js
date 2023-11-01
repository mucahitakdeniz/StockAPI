"use strict";

const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema(
  {
    brand_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Brand'
      },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Categories'
      },

    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    quantity: {
      type: Number,
      trim: true,
      required: true,
    },
  },
  {
    collection: "products",
    timestamps: true,
  }
);

module.exports = mongoose.model("Products", ProductsSchema);
