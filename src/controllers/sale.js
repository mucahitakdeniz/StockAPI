"use strict";

const Sales = require("../models/sale");

module.exports = {
  list: async (req, res) => {
     /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "List Sales"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
    const data = await res.getModelList(Sales);
    res.status(200).send(data);
  },
  create: async (req, res) => {
    /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Create Sale"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "user_id": "1323",
                    "brand_id": "1323",
                    "product_id": "1323",
                    "quantity": 0,
                    "price": 0,
                    "price_total": 0,
                }
            }
        */
    const data = await Sales.create(req.body);
    res.status(201).send({
      error: false,
      data,
    });
  },
  read: async (req, res) => {
      /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Get Single Sale"
        */
    const data = await Sales.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Update Sale"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                   "user_id": "1323",
                    "brand_id": "1323",
                    "product_id": "1323",
                    "quantity": 0,
                    "price": 0,
                    "price_total": 0,
                }
            }
        */
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
