"use strict";

const router = require("express").Router();
const firms = require("../controllers/firm");

router.route("/").get(firms.list).post(firms.create);

router
  .route("/:id")
  .get(firms.read)
  .put(firms.update)
  .patch(firms.update)
  .delete(firms.delete)

module.exports=router
