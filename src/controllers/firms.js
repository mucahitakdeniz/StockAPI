"use strict";

const Firms = require("../models/firms");

module.exports = {
  list: async (req, res) => {
    const data = await res.getModelList(Firms);
    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Firms),
      data,
    });
  },
  create: async (req, res) => {
    const data = await Firms.create(req.body);
    res.status(201).send({
      error: false,
      data,
    });
  },
  read: async (req, res) => {
    const data = await Firms.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    const data = await Firms.updateOne({ _id: req.params.id }, req.body);
    res.status(202).send({
      error: false,
      data,
    });
  },
  delete: async (req, res) => {
    const data = await Firms.deleteOne({ _id: req.params.id }, req.body);
    res.status(data.deletedCount ? 204 : 404).send({
      error: false,
      data,
    });
  },
};
