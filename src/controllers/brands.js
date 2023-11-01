"use strict";

const Brands = require("../models/brands");

module.exports = {
  list: async (req, res) => {
    const data = await res.getModelList(Brands);
    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Brands),
      data,
    });
  },
  create: async (req, res) => {
    const data = await Brands.create(req.body);
    res.status(201).send({
      error: false,
      data,
    });
  },
  read: async (req, res) => {
    const data = await Brands.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    const data = await Brands.updateOne({ _id: req.params.id }, req.body);
    res.status(202).send({
      error: false,
      data,
    });
  },
  delete: async (req, res) => {
    const data = await Brands.deleteOne({ _id: req.params.id }, req.body);
    res.status(data.deletedCount ? 204 : 404).send({
      error: false,
      data,
    });
  },
};
