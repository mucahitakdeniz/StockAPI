"use strict";

const mongoose = require("mongoose");

const PurchasesSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
    },
    firm_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Firms",
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
    collection: "purchases",
    timestamps: true,
  }
);

module.exports = mongoose.model("Purchases", PurchasesSchema);
