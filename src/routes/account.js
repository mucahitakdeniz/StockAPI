"use strict";

const router = require("express").Router();
const account = require("../controllers/account");

router.route("/").get(account.list).post(account.create);

router
  .route("/:id")
  .get(account.read)
  .put(account.update)
  .patch(account.update)
  .delete(account.delete)

module.exports=router
