"use strict";

const Purchase = require("../models/purchase");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "List Purchases"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
    req.body.user_id = req.user?._id;

    const data = await res.getModelList(Purchase, {}, [
      "firm_id",
      "brand_id",
      "product_id",
    ]);
    res.status(200).send(data);
  },
  create: async (req, res) => {
    /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Create Purchase"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "user_id": "123",
                    "firm_id": "456",
                    "brand_id": "789",
                    "product_id":"852",
                    "quantity": 0,
                    "price":0,
                    "price_total":0
                }
            }
        */
    req.body.user_id = req.user?._id;

    const data = await Purchase.create(req.body);
    res.status(201).send({
      error: false,
      data,
    });
  },
  read: async (req, res) => {
    /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Get Single Purchase"
        */
    const data = await Purchase.findOne({ _id: req.params.id }).populate([
      "firm_id",
      "brand_id",
      "product_id",
    ]);
    res.status(200).send(data);
  },
  update: async (req, res) => {
    /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Update Purchase"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                   "user_id": "123",
                    "firm_id": "456",
                    "brand_id": "789",
                    "product_id":"852",
                    "quantity": 0,
                    "price":0,
                    "price_total":0
                }
            }
        */

    const data = await Purchase.updateOne({ _id: req.params.id }, req.body);
    res.status(202).send({
      error: false,
      data,
    });
  },
  delete: async (req, res) => {
    /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Delete Purchase"
        */
    const data = await Purchase.deleteOne({ _id: req.params.id }, req.body);
    res.status(data.deletedCount ? 204 : 404).send({
      error: false,
      data,
    });
  },
};
