"use strict";

const Products = require("../models/product");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Products"]
            #swagger.summary = "List Products"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
    const data = await res.getModelList(Products,{},['category_id','brand_id']);
    res.status(200).send(data);
  },
  create: async (req, res) => {
    /*
            #swagger.tags = ["Products"]
            #swagger.summary = "Create Product"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                  "category_id":"6549"
                  "brand_id":"1235",
                  "name": "New",
                  "stock":"0"                }
            }
        */
    const data = await Products.create(req.body);
    res.status(201).send({
      error: false,
      data,
    });
  },
  read: async (req, res) => {
     /*
            #swagger.tags = ["Products"]
            #swagger.summary = "Get Single Product"
        */
    const data = await Products.findOne({ _id: req.params.id }).populate(['category_id','brand_id']);
    res.status(200).send(data);
  },
  update: async (req, res) => {
    /*
            #swagger.tags = ["Products"]
            #swagger.summary = "Update Product"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {  
                  "category_id":"6549"
                  "brand_id":"1235",
                  "name": "New",
                  "stock":"0"  
                }
            }
        */
    const data = await Products.updateOne({ _id: req.params.id }, req.body);
    res.status(202).send({
      error: false,
      data,
    });
  },
  delete: async (req, res) => {
    const data = await Products.deleteOne({ _id: req.params.id }, req.body);
    res.status(data.deletedCount ? 204 : 404).send({
      error: false,
      data,
    });
  },
};
