"use strict";

const Purchases = require("../models/purchases");

module.exports = {
  list: async (req, res) => {
    const data = await res.getModelList(Purchases);
    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Purchases),
      data,
    });
  },
  create: async (req, res) => {
    const data = await Purchases.create(req.body);
    res.status(201).send({
      error: false,
      data,
    });
  },
  read: async (req, res) => {
    const data = await Purchases.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    const data = await Purchases.updateOne({ _id: req.params.id }, req.body);
    res.status(202).send({
      error: false,
      data,
    });
  },
  delete: async (req, res) => {
    const data = await Purchases.deleteOne({ _id: req.params.id }, req.body);
    res.status(data.deletedCount ? 204 : 404).send({
      error: false,
      data,
    });
  },
};
