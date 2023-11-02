"use strict";

const Firms = require("../models/firm");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Firms"]
            #swagger.summary = "List Firms"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
    const data = await res.getModelList(Firms);
    res.status(200).send(data);
  },
  create: async (req, res) => {
    /*
            #swagger.tags = ["Firms"]
            #swagger.summary = "Create Firm"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                     "name": "Marmara",
                     "phone":5554446622,
                     "address": "İstanbul",
                     "image": "...Url..."
                }
            }
        */
    const data = await Firms.create(req.body);
    res.status(201).send({
      error: false,
      data,
    });
  },
  read: async (req, res) => {
    /*
            #swagger.tags = ["Firms"]
            #swagger.summary = "Get Single Firm"
        */
    const data = await Firms.findOne({ _id: req.params.id });
    res.status(200).send(data);
  },
  update: async (req, res) => {
    /*
            #swagger.tags = ["Firms"]
            #swagger.summary = "Update Firm"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                     "name": "Marmara",
                     "phone":5554446622,
                     "address": "İstanbul",
                     "image": "...Url..."
                }
            }
        */
    const data = await Firms.updateOne({ _id: req.params.id }, req.body);
    res.status(202).send({
      error: false,
      data,
    });
  },
  delete: async (req, res) => {
     /*
            #swagger.tags = ["Firms"]
            #swagger.summary = "Delete Firm"
        */
    const data = await Firms.deleteOne({ _id: req.params.id }, req.body);
    res.status(data.deletedCount ? 204 : 404).send({
      error: false,
      data,
    });
  },
};
