"use strict"

const router=require('express').Router()

//account
router.use('/account',require('./account'))
//account
router.use('/firms',require('./firms'))

module.exports=router