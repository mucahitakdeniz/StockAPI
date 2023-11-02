"use strict";

const mongoose = require("mongoose");

const SaleSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
    },
    brand_idd: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
    },
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
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
      default: function () {
        return this.price * this.quantity;
      },
      transform: function () {
        return this.price * this.quantity;
      },
    },
  },
  {
    collection: "sale",
    timestamps: true,
  }
);
SaleSchema.pre('init', function (data) {
  data.id = data._id
  data.createds = data.createdAt.toLocaleDateString('tr-tr')
})

module.exports = mongoose.model("Sale", SaleSchema);
