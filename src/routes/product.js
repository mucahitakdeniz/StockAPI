"use strict";

const router = require("express").Router();
const products = require("../controllers/products");

router.route("/").get(products.list).post(products.create);

router
  .route("/:id")
  .get(products.read)
  .put(products.update)
  .patch(products.update)
  .delete(products.delete)

module.exports=router