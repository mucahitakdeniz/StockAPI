"use strict";

const Sales = require("../models/sales");

module.exports = {
  list: async (req, res) => {
    const data = await res.getModelList(Sales);
    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Sales),
      data,
    });
  },
  create: async (req, res) => {
    const data = await Sales.create(req.body);
    res.status(201).send({
      error: false,
      data,
    });
  },
  read: async (req, res) => {
    const data = await Sales.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    const data = await Sales.updateOne({ _id: req.params.id }, req.body);
    res.status(202).send({
      error: false,
      data,
    });
  },
  delete: async (req, res) => {
    const data = await Sales.deleteOne({ _id: req.params.id }, req.body);
    res.status(data.deletedCount ? 204 : 404).send({
      error: false,
      data,
    });
  },
};
