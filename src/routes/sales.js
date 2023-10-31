"use strict";

const router = require("express").Router();
const sales = require("../controllers/sales");

router.route("/").get(sales.list).post(sales.create);

router
  .route("/:id")
  .get(sales.read)
  .put(sales.update)
  .patch(sales.update)
  .delete(sales.delete)

module.exports=router