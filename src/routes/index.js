"use strict"

const router=require('express').Router()

//account
router.use('/account',require('./account'))
//account
router.use('/firms',require('./firms'))
//sales
router.use('/sales',require('./sales'))
//purchases
router.use('/purchases',require('./purchase'))
//products
router.use('/products',require('./products'))
//brands
router.use('/brands',require('./brand'))
//categories
router.use('/categories',require('./categories'))


module.exports=router