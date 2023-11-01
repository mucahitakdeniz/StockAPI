"use strict";

const mongoose = require("mongoose");

const SalesSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
    },
    brand_idd: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Brands'
      },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Products'
      },

    quantity: {
      type: Number,
      trim: true,
      required: true,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },

    price_total: {
        type: Number,
        trim: true,
        required: true,
      },
  },
  {
    collection: "sales",
    timestamps: true,
  }
);

module.exports = mongoose.model("Sales", SalesSchema);
