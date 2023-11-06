"use strict";

const Account = require("../models/account");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Account"]
            #swagger.summary = "List Account"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
    const filters = req.user?.is_superadmin ? {} : { _id: req.user._id };
    const data = await res.getModelList(Account, filters);
    res.status(200).send(data);
  },
  create: async (req, res) => {
    /*
            #swagger.tags = ["Account"]
            #swagger.summary = "Create Account"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "username": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "first_name": "test",
                    "last_name": "test",
                }
            }
        */

    req.body.is_staff = false;
    req.body.is_superadmin = false;
    const data = await Account.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },
  read: async (req, res) => {
    /*
            #swagger.tags = ["Account"]
            #swagger.summary = "Get Single Account"
        */
    const filters = req.user?.is_superadmin ? {_id:req.params.id} : { _id: req.user._id };

    const data = await Account.findOne(filters);
    res.status(200).send(data);
  },
  update: async (req, res) => {
    /*
            #swagger.tags = ["Account"]
            #swagger.summary = "Update User"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "username": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "first_name": "test",
                    "last_name": "test",
                }
            }
        */
    req.body.is_staff = false;
    req.body.is_superadmin = false;
    const filters = req.user?.is_superadmin ? {_id:req.params.id} : { _id: req.user._id };

    const data = await Account.updateOne(filters, req.body, {
      runValidators: true,
    });
    res.status(202).send({
      error: false,
      data,
      new: await Account.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    /*
            #swagger.tags = ["Account"]
            #swagger.summary = "Delete account"
        */
    const data = await Account.deleteOne({ _id: req.params.id }, req.body);
    res.status(data.deletedCount ? 204 : 404).send({
      error: false,
      data,
    });
  },
};
