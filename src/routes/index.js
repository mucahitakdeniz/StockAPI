"use strict"

const router=require('express').Router()

//account
router.use('/account',require('./account'))

module.exports=router