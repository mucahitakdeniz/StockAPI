"use strict";

const Account = require("../models/account");

module.exports = {
  list: async (req, res) => {
    const data = await res.getModelList(Account);
    res.status(200).send(data);
  },
  create: async (req, res) => {
    req.body.is_staff = false;
    req.body.is_superadmin = false;
    const data = await Account.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },
  read: async (req, res) => {
    const data = await Account.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    req.body.is_staff = false;
    req.body.is_superadmin = false;
    const data = await Account.updateOne({ _id: req.params.id }, req.body);
    res.status(202).send({
      error: false,
      data,
      new: await Account.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    const data = await Account.deleteOne({ _id: req.params.id }, req.body);
    res.status(data.deletedCount ? 204 : 404).send({
      error: false,
      data,
    });
  },
};
