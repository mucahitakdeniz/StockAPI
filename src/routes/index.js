"use strict"

const router=require('express').Router()

//account
router.use('/account',require('./account'))
//account
router.use('/firms',require('./firms'))
//sales
router.use('/sales',require('./sales'))
//purchases
router.use('/sales',require('./sales'))


module.exports=router