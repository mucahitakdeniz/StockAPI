"use strict";

const router = require("express").Router();
const categories = require("../controllers/category");

router.route("/").get(categories.list).post(categories.create);

router
  .route("/:id")
  .get(categories.read)
  .put(categories.update)
  .patch(categories.update)
  .delete(categories.delete)

module.exports=router
