"use strict";

const router = require("express").Router();
const brands = require("../controllers/brands");

router.route("/").get(brands.list).post(brands.create);

router
  .route("/:id")
  .get(brands.read)
  .put(brands.update)
  .patch(brands.update)
  .delete(brands.delete)

module.exports=router
