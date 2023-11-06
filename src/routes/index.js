"use strict"

const router=require('express').Router()

//account
router.use('/account',require('./account'))
//account
router.use('/firms',require('./firm'))
//sales
router.use('/sales',require('./sale'))
//purchases
router.use('/purchases',require('./purchase'))
//products
router.use('/product',require('./product'))
//brands
router.use('/brands',require('./brand'))
//categories
router.use('/category',require('./category'))
//token
router.use('/token',require('./token'))
//token
router.use('/token',require('./token'))
//auth
router.use('/account/auth',require('./auth'))


module.exports=router