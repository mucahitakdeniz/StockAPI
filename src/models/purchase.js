"use strict";

const mongoose = require("mongoose");

const PurchaseSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
    },
    firm_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Firm",
    },
    brand_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
    },
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
    },

    quantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },

    price_total: {
      type: Number,
      default: function(){return this.price * this.quantity},
      transform: function(){return this.price * this.quantity},
    },
  },
  {
    collection: "purchase",
    timestamps: true,
  }
);

module.exports = mongoose.model("Purchase", PurchaseSchema);
