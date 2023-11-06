"use strict";

const Account = require("../models/account");
const Token = require("../models/token");
const passwordEncrypt = require("../helpers/passwordEncrypt");
const { token } = require("morgan");

module.exports = {
  login: async (req, res) => {
    /*
            #swagger.tags = ["Authentication"]
            #swagger.summary = "Login"
            #swagger.description = 'Login with username (or email) and password for get simpleToken and JWT'
            #swagger.parameters["body"] = {
                in: "body",
                required: true,
                schema: {
                    "username": "test",
                    "password": "1234",
                }
            }
        */
    const { username, email, password } = req.body;

    if ((username || email) && password) {
      const user = await Account.findOne({ $or: [{ username }, { email }] });
      if (user.password == passwordEncrypt(password)) {
        if (user.is_active) {
          let tokenData = await Token.findOne({ user_id: user._id });
          if (!tokenData) {
            tokenData = await Token.create({
              user_id: user._id,
              token: passwordEncrypt(user._id + Date.now()),
            });
            res.send({
              errroe: false,
              key: tokenData.token,
              user,
            });
          }
        } else {
          res.errorStatusCode = 401;
          throw new Error("This account is not active.");
        }
      } else {
        res.errorStatusCode = 401;
        throw new Error("Wrong username/email or password.");
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error("Please enter username/email and password.");
    }
  },
  logout: async (req, res) => {},
};
