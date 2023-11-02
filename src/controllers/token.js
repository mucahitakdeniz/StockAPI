"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Token Controller:

const Token = require('../models/token')

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Tokens"]
            #swagger.summary = "List Tokens"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

        const data = await Token.find()

       
        res.status(200).send(data)
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Tokens"]
            #swagger.summary = "Create Token"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "user_id": "test",
                    "token": "12344564848*498498",
                    
                }
            }
        */

     
        const data = await Token.create(req.body)

        res.status(201).send({
            error: false,
            data
        })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Tokens"]
            #swagger.summary = "Get Single Token"
        */

        const data = await Token.findOne({ _id: req.params.id })

        res.status(200).send(data)
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Tokens"]
            #swagger.summary = "Update Token"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                     "user_id": "test",
                    "token": "12344564848*498498",
                }
            }
        */

        const data = await Token.updateOne({ _id: req.params.id }, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            data,
            new: await Token.findOne({ _id: req.params.id })
        })
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Tokens"]
            #swagger.summary = "Delete Token"
        */

        const data = await Token.deleteOne({ _id: req.params.id })

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })
    },
}