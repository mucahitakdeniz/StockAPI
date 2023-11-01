"use strict";

const router = require("express").Router();
const purchases = require("../controllers/purchase");

router.route("/").get(purchases.list).post(purchases.create);

router
  .route("/:id")
  .get(purchases.read)
  .put(purchases.update)
  .patch(purchases.update)
  .delete(purchases.delete)

module.exports=router