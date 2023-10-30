'use strict'

const Account= require('../models/account')

module.exports={
    list:async (req,res)=> {
        const data=await Account.find()

    }
}